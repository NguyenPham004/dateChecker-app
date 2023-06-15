// import { render, screen} from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(
//     <App />
//   );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen, fireEvent } from '@testing-library/react';
import App, { isValidDate, isLeapYear } from './App';

describe('Date Time Checker App', () => {
  // Unit tests for helper functions

  describe('isLeapYear', () => {
    it('should return true for a leap year', () => {
      expect(isLeapYear(2020)).toBe(true);
    });

    it('should return false for a non-leap year', () => {
      expect(isLeapYear(2021)).toBe(false);
    });
  });

  describe('isValidDate', () => {
    it('should return true for a valid date', () => {
      expect(isValidDate(12, 6, 2023)).toBe(true);
    });

    it('should return false for an invalid date', () => {
      expect(isValidDate(31, 2, 2023)).toBe(false);
    });
  });

  // Unit tests for App component

  it('UTCID01', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '29' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '2' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2000' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete day.')).toBeInTheDocument();
  });

  it('UTCID02', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '29' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '2' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2009' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete month.')).toBeInTheDocument();
  });

  it('UTCID03', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '31' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2020' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete year.')).toBeInTheDocument();
  });

  it('UTCID04', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '31' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '4' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2022' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('The date is valid.')).toBeInTheDocument();
  });

  it('UTCID05', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '30' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2000' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('The date is invalid.')).toBeInTheDocument();
  });

  it('UTCID06', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '31' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2009' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete day.')).toBeInTheDocument();
  });

  it('UTCID07', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '30' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2000' } });
    fireEvent.click(screen.getByText('Clear'));
    expect(screen.queryByText('The date is valid.')).toBeNull();
    expect(screen.queryByText('The date is invalid.')).toBeNull();
    expect(screen.getByPlaceholderText('Day').value).toBe('');
    expect(screen.getByPlaceholderText('Month').value).toBe('');
    expect(screen.getByPlaceholderText('Year').value).toBe('');
  });
});
