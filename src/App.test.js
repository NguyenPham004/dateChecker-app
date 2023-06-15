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

  it('should render the form and title', () => {
    render(<App />);
    expect(screen.getByText('Date Time Checker')).toBeInTheDocument();
  });

  it('UTCID01', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '6' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete day.')).toBeInTheDocument();
  });

  it('should display an error message if the month field is empty', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '12' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete month.')).toBeInTheDocument();
  });

  it('should display an error message if the year field is empty', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '12' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '6' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete year.')).toBeInTheDocument();
  });

  it('should display a success message for a valid date', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '12' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '6' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('The date is valid.')).toBeInTheDocument();
  });

  it('should display an error message for an invalid date', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '31' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '2' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('The date is invalid.')).toBeInTheDocument();
  });

  it('should display a custom error message if provided', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '6' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByText('Please enter a complete day.')).toBeInTheDocument();
  });

  it('should clear the form and result when Clear button is clicked', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Day'), { target: { value: '12' } });
    fireEvent.change(screen.getByPlaceholderText('Month'), { target: { value: '6' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.click(screen.getByText('Clear'));
    expect(screen.queryByText('The date is valid.')).toBeNull();
    expect(screen.queryByText('The date is invalid.')).toBeNull();
    expect(screen.getByPlaceholderText('Day').value).toBe('');
    expect(screen.getByPlaceholderText('Month').value).toBe('');
    expect(screen.getByPlaceholderText('Year').value).toBe('');
  });
});
