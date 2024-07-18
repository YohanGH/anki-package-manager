import { useNavigate} from "react-router-dom";
import { useState } from "react";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
        const URL = import.meta.env.VITE_API_URL;
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(`${URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.status !== 200) {
            const errorText = await response.text();
            console.error("Login error text: ", errorText);
            throw new Error("Login failed");
          }
          navigate("/");
          
        } catch (err) {
          console.error("Login error: ", error);
          setError(error.message || "An error occurred");
        } 
    }

    return { login, loading, error };
};

export default useLogin;