import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token); // Сохраняем токен
      navigate("/dashboard"); // Делаем редирект после успешной авторизации
    },
  });
};
