import { useQuery } from "@tanstack/react-query";

const registerUser = async (userData: {
  email: string;
  name: string;
  password: string;
  roles: number[];
}) => {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Ошибка регистрации");
  }

  return response.json();
};

export const useRegister = (userData: { email: string; name: string; password: string; roles: number[] } | null) => {
  return useQuery({
    queryKey: ["register", userData],
    queryFn: () => (userData ? registerUser(userData) : Promise.resolve(null)),
    enabled: false, // Запрос запускается вручную
    retry: false, // Без автоматического повтора
  });
};
