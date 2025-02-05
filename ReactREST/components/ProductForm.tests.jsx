import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // This is important for matchers like toBeInTheDocument
import { describe, it, expect, vi } from 'vitest';
import ProductForm from './ProductForm';

describe('ProductForm Component', () => {
  it('renders all input fields and buttons', () => {
    render(<ProductForm onAddProduct={() => {}} onCancel={() => {}} />);

    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Stock:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Product/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
  });

  it('updates input fields correctly when typing', async () => {
    render(<ProductForm onAddProduct={() => {}} onCancel={() => {}} />);

    const nameInput = screen.getByLabelText(/Name:/i);
    const descInput = screen.getByLabelText(/Description:/i);
    const priceInput = screen.getByLabelText(/Price:/i);
    const stockInput = screen.getByLabelText(/Stock:/i);

    await userEvent.type(nameInput, 'New Product');
    await userEvent.type(descInput, 'Awesome new product');
    await userEvent.type(priceInput, '199');
    await userEvent.type(stockInput, '50');

    expect(nameInput).toHaveValue('New Product');
    expect(descInput).toHaveValue('Awesome new product');
    expect(priceInput).toHaveValue('199');
    expect(stockInput).toHaveValue(50);
  });

  it('calls onCancel when the Cancel button is clicked', async () => {
    const mockCancel = vi.fn();
    render(<ProductForm onAddProduct={() => {}} onCancel={mockCancel} />);

    await userEvent.click(screen.getByRole('button', { name: /Cancel/i }));

    expect(mockCancel).toHaveBeenCalledTimes(1);
  });

  it('sends correct data when submitting the form', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 1, name: 'New Product', description: 'Awesome new product', price: '199', stock: '50' }),
      })
    );
    global.fetch = mockFetch;
    const mockAddProduct = vi.fn();

    render(<ProductForm onAddProduct={mockAddProduct} onCancel={() => {}} />);

    // Fill in form fields
    await userEvent.type(screen.getByLabelText(/Name:/i), 'New Product');
    await userEvent.type(screen.getByLabelText(/Description:/i), 'Awesome new product');
    await userEvent.type(screen.getByLabelText(/Price:/i), '199');
    await userEvent.type(screen.getByLabelText(/Stock:/i), '50');

    // Submit form
    await userEvent.click(screen.getByRole('button', { name: /Add Product/i }));

    // Check if fetch was called with correct data
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        'http://localhost:5000/products',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'New Product', description: 'Awesome new product', price: '199', stock: '50' }),
        })
      );
    });

    // Ensure onAddProduct is called with API response
    await waitFor(() => {
      expect(mockAddProduct).toHaveBeenCalledTimes(1);
      expect(mockAddProduct).toHaveBeenCalledWith({
        id: 1,
        name: 'New Product',
        description: 'Awesome new product',
        price: '199',
        stock: '50',
      });
    });

    // Cleanup
    global.fetch = undefined;
  });
});
