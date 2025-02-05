import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // This is important for matchers like toBeInTheDocument
import { describe, it, expect, vi } from 'vitest';
import ProductList from './ProductList';

describe('ProductList Component', () => {
  it('renders product list and fetches data correctly', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: 'Product A' },
            { id: 2, name: 'Product B' },
          ]),
      })
    );
    global.fetch = mockFetch;

    render(<ProductList onSelectProduct={() => {}} />);

    // Ensure fetch is called
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('http://localhost:5000/products');
    });

    // Check if products appear
    expect(await screen.findByText('Product A')).toBeInTheDocument();
    expect(await screen.findByText('Product B')).toBeInTheDocument();

    // Cleanup
    global.fetch = undefined;
  });

  it('calls onSelectProduct when clicking a product name', async () => {
    const mockOnSelect = vi.fn();

    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([{ id: 1, name: 'Product A' }]),
      })
    );
    global.fetch = mockFetch;

    render(<ProductList onSelectProduct={mockOnSelect} />);

    const productElement = await screen.findByText('Product A');

    await userEvent.click(productElement);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith({ id: 1, name: 'Product A' });

    global.fetch = undefined;
  });

  it('sends delete request when clicking delete button', async () => {
    const mockFetch = vi.fn((url, options) => {
      if (options && options.method === 'DELETE') {
        return Promise.resolve({});
      }
      return Promise.resolve({
        json: () =>
          Promise.resolve([{ id: 1, name: 'Product A' }]),
      });
    });
    global.fetch = mockFetch;

    render(<ProductList onSelectProduct={() => {}} />);

    const deleteButton = await screen.findByRole('button', { name: /delete/i });

    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('http://localhost:5000/products/1', expect.objectContaining({ method: 'DELETE' }));
    });

    global.fetch = undefined;
  });
});
