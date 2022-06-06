export const LOG_IN = "LOG_IN";

import axios from "axios";

export function logInAction(login, password, setError, navigate) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:3001/login`,
        headers: { "Content-Type": "application/json" },
        data: { login: login, password: password },
      });

      const data = await response.data;
      if (data.isLogged) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("status", data.status);
        localStorage.setItem("iduser", data.IDuser);

        const payload = { login: login, isLogged: true };
        dispatch({ type: LOG_IN, payload });
        navigate("/");
        return data.isLogged;
      } else {
        dispatch({ type: LOG_IN, isLogged: false });
        window.location.reload();
        return data.isLogged;
      }
    } catch (error) {
      let loginError = await error.response.data;
      setError(loginError.error);
      throw new Error(loginError.error);
    }
  };
}
