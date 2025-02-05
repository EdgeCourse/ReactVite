import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This is important for matchers like toBeInTheDocument
import Product from './Product';

const mockProduct = {
  id: 1,
  name: 'Sample Product',
  price: 29.99,
  description: 'This is a test product',
};

describe('Product Component', () => {
  it('renders the product details correctly', () => {
    render(<Product product={mockProduct} onBack={() => {}} />);

    // Check if the product name is displayed
    expect(screen.getByLabelText(/Name:/i)).toHaveValue(mockProduct.name);

    // Additional tests for other product details...
  });
});
