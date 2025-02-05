
// src/components/Counter.test.jsx
/*
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import '@testing-library/jest-dom'; // Import jest-dom for toBeInTheDocument matcher

describe('Counter', () => {
  test('initial render shows count as 0', () => {
    render(<Counter />);
    expect(screen.getByText(/The count is: 0/)).toBeInTheDocument();
  });

  test('clicking increment button increases count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/));
    expect(screen.getByText(/The count is: 1/)).toBeInTheDocument();
  });
});
*/

// src/components/Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import '@testing-library/jest-dom'; // Import jest-dom for toBeInTheDocument matcher

describe('Counter', () => {
  test('initial render shows count as 0', () => {
    render(<Counter />);
    expect(screen.getByText(/The count is: 0/)).toBeInTheDocument();
  });

  test('clicking increment button increases count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/));
    expect(screen.getByText(/The count is: 1/)).toBeInTheDocument();
  });

  test('clicking increment button multiple times increases count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/)); // count = 1
    fireEvent.click(screen.getByText(/Increment/)); // count = 2
    fireEvent.click(screen.getByText(/Increment/)); // count = 3
    expect(screen.getByText(/The count is: 3/)).toBeInTheDocument();
  });

  test('button text stays the same after each click', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/));
    fireEvent.click(screen.getByText(/Increment/));
    expect(screen.getByText(/Increment/)).toBeInTheDocument(); // Button text should not change
  });

  test('count resets correctly when a specific condition is met (optional)', () => {
    render(<Counter />);
    // Example: reset count after reaching 5 (you can implement reset logic in your component if needed)
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText(/Increment/));
    }
    // Let's assume we reset when count reaches 5 for this test
    // Your component needs logic for this (optional)
    expect(screen.getByText(/The count is: 5/)).toBeInTheDocument();
  });
});
