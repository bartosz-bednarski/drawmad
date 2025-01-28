import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HamburgerMenu from './HamburgerMenu';
import userEvent from '@testing-library/user-event';
import { CanvasStore } from 'store/CanvasStore';

describe('HamburgerMenu Component', () => {
  test('renders the hamburger button', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('dropdown menu is hidden by default', () => {
    render(<HamburgerMenu />);
    const dropdown = screen.getByTestId('dropdownMenu');
    expect(dropdown).toHaveStyle('display:none');
  });

  test('toggles dropdown menu on button click', async () => {
    const user = userEvent.setup();
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');

    await user.click(button);
    const dropdown = screen.getByTestId('dropdownMenu');
    expect(dropdown).toHaveStyle('display:flex');

    await user.click(button);
    expect(dropdown).toHaveStyle('display:none');
  });

});
