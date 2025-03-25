import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Ошибка");
  }

  return response.json();
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token); // Сохраняем токен
      navigate("/dashboard"); // Делаем редирект после успешной авторизации
    },
  });
};
