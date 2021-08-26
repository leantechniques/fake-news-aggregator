import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { loginUser } from './login-service';
jest.mock('./login-service');
const mockLogin = loginUser as jest.MockedFunction<typeof loginUser>;

it('Should render a username field', async () => {
    const usernameField = 'Username:';
    render(<Login />);
    const usernameInput = await screen.findByLabelText(usernameField);
    expect(usernameInput).toBeInTheDocument();
});

it('Should render a password field', async () => {
    const passwordField = 'Password:';
    render(<Login />);
    const passwordInput = await screen.findByLabelText(passwordField);
    expect(passwordInput).toBeInTheDocument();
});

it('Should render a login button', async () => {
    const buttonText = 'Login';
    render(<Login />);
    const button = await screen.findByText(buttonText);
    expect(button).toBeInTheDocument();
});

it('Should call the login service on button click', async () => {
    const buttonText = 'Login';
    render(<Login />);
    const button = await screen.findByText(buttonText);
    const usernameField = 'Username:';
    const usernameInput = await screen.findByLabelText(usernameField);
    const passwordField = 'Password:';
    const passwordInput = await screen.findByLabelText(passwordField);
    const usernameValue = 'John';
    userEvent.type(usernameInput, usernameValue);
    const passwordValue = 'smith';
    userEvent.type(passwordInput, passwordValue);
    fireEvent.click(button);
    expect(mockLogin).toBeCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith({ username: usernameValue, password: passwordValue });
});
