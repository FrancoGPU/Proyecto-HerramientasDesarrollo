import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { useScrollAnimation } from './useScrollAnimation';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} data-testid="target">
      {isVisible ? 'Visible' : 'Hidden'}
    </div>
  );
};

describe('useScrollAnimation', () => {
  let observeMock;
  let unobserveMock;
  let disconnectMock;
  let intersectionCallback;

  beforeEach(() => {
    observeMock = jest.fn();
    unobserveMock = jest.fn();
    disconnectMock = jest.fn();

    window.IntersectionObserver = jest.fn((callback, options) => {
      intersectionCallback = callback;
      return {
        observe: observeMock,
        unobserve: unobserveMock,
        disconnect: disconnectMock,
      };
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete window.IntersectionObserver;
  });

  it('should initially be hidden and observe the element', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('target')).toHaveTextContent('Hidden');
    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(observeMock).toHaveBeenCalledTimes(1);

    // observe should be called with the div element
    expect(observeMock.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
  });

  it('should become visible and unobserve when intersecting', () => {
    render(<TestComponent />);

    const targetElement = screen.getByTestId('target');

    act(() => {
      intersectionCallback([{
        isIntersecting: true,
        target: targetElement
      }]);
    });

    expect(screen.getByTestId('target')).toHaveTextContent('Visible');
    expect(unobserveMock).toHaveBeenCalledTimes(1);
    expect(unobserveMock).toHaveBeenCalledWith(targetElement);
  });

  it('should remain hidden if not intersecting', () => {
    render(<TestComponent />);

    const targetElement = screen.getByTestId('target');

    act(() => {
      intersectionCallback([{
        isIntersecting: false,
        target: targetElement
      }]);
    });

    expect(screen.getByTestId('target')).toHaveTextContent('Hidden');
    expect(unobserveMock).not.toHaveBeenCalled();
  });

  it('should unobserve on unmount', () => {
    const { unmount } = render(<TestComponent />);

    const targetElement = screen.getByTestId('target');

    unmount();

    expect(unobserveMock).toHaveBeenCalledTimes(1);
    expect(unobserveMock).toHaveBeenCalledWith(targetElement);
  });
});
