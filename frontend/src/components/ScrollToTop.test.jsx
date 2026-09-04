import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop', () => {
  let originalScrollTo;

  beforeAll(() => {
    // Mock window.scrollTo
    originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    // Enable fake timers
    jest.useFakeTimers();
  });

  afterAll(() => {
    // Restore original window.scrollTo
    window.scrollTo = originalScrollTo;

    // Disable fake timers
    jest.useRealTimers();
  });

  beforeEach(() => {
    // Clear mock calls and reset document scrolls before each test
    window.scrollTo.mockClear();
    document.documentElement.scrollTop = 100;
    document.body.scrollTop = 100;
  });

  it('should reset scroll positions on render', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/some-route']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Should return null (no visual output)
    expect(container.firstChild).toBeNull();

    // Fast-forward timers to trigger setTimeout
    jest.runAllTimers();

    // Verify scrolls were reset to 0
    expect(document.documentElement.scrollTop).toBe(0);
    expect(document.body.scrollTop).toBe(0);

    // Verify window.scrollTo was called with (0, 0)
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
