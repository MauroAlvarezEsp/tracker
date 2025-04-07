import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "../app/login/page";
import '@testing-library/jest-dom';

jest.mock('../app/login/actions', () => ({
  login: jest.fn()
}));

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(() => ({ pending: true })),
}));

describe('LoginForm Component', () => {
  it('renders email and password inputs', () => {
    const { getByText } = render(<LoginForm />);
    
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });

  it('disables submit button and shows "Submitting..." when form is pending', () => {
    render(<LoginForm />);
    
    const submitButton = screen.getByRole('button', { name: 'Submitting...' });

    // Ensure the button is disabled and shows correct text
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent('Submitting...');
  });
});