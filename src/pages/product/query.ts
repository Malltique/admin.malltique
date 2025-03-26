import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreateProduct() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (newProduct) => {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
          'auth': token || '',
        },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

    },
    onSuccess: () => {
      navigate("/product");
    },
  });
}


export const useProduct = () => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'auth': token || '',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      return response.json();
    },
  });
}

export const useDeleteProduct = () => {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (ids) => {
      const response = await fetch('http://localhost:3000/products', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'auth': token || '',
        },
        body: JSON.stringify({ ids }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete products');
      }
    },
  });
}
