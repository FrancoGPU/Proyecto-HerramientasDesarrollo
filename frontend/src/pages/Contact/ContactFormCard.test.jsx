import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactFormCard from './ContactFormCard';

describe('ContactFormCard', () => {
  const defaultProps = {
    formData: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    errors: {},
    status: 'idle',
    feedbackMessage: '',
    onChange: jest.fn(),
    onSubmit: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields correctly', () => {
    render(<ContactFormCard {...defaultProps} />);

    expect(screen.getByPlaceholderText(/tu nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/tu@correo.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/\+51 987 654 321/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/reserva, cotizacion o consulta/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/cuentanos fechas, destino/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  test('calls onChange when user types in inputs', async () => {
    render(<ContactFormCard {...defaultProps} />);

    const nameInput = screen.getByPlaceholderText(/tu nombre/i);
    await userEvent.type(nameInput, 'Juan');
    expect(defaultProps.onChange).toHaveBeenCalledTimes(4); // 'J', 'u', 'a', 'n'
  });

  test('calls onSubmit when form is submitted', () => {
    render(<ContactFormCard {...defaultProps} />);

    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.submit(submitButton);

    expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
  });

  test('displays error messages when passed in props', () => {
    const propsWithErrors = {
      ...defaultProps,
      errors: {
        name: 'El nombre es obligatorio',
        email: 'El correo es invalido'
      }
    };
    render(<ContactFormCard {...propsWithErrors} />);

    expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument();
    expect(screen.getByText('El correo es invalido')).toBeInTheDocument();
  });

  test('disables submit button and changes text when status is submitting', () => {
    const submittingProps = {
      ...defaultProps,
      status: 'submitting'
    };
    render(<ContactFormCard {...submittingProps} />);

    const submitButton = screen.getByRole('button', { name: /enviando\.\.\./i });
    expect(submitButton).toBeDisabled();
  });

  test('displays custom feedback message', () => {
    const feedbackProps = {
      ...defaultProps,
      feedbackMessage: 'Mensaje de prueba'
    };
    render(<ContactFormCard {...feedbackProps} />);

    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
  });
});
