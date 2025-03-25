import { useMutation } from '@tanstack/react-query';

export function useCreateProduct() {
  const token = localStorage.getItem("token");
  return useMutation({
    mutationFn: async (newProduct) => {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth': token || '',
        },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      return response.json();
    },
  });
}
