import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../Components/Form/TextInput";
import { PassInput } from "../Components/Form/PassInput";
import { SubmitButton } from "../Components/Form/SubmitButton";
import { NavLink } from "react-router-dom";
import { Form } from "../Components/Form/Form";
import { logInAction } from "../redux/actions/loginActions";
import { Header } from "../Components/Header/Header";

export function LogInPage() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(logInAction(login, pass, setError, navigate)).catch((e) => {
      console.log(e.message);
    });
  }

  function changeLogin(event) {
    setLogin(event.target.value);
  }

  function changePass(event) {
    setPass(event.target.value);
  }

  return (
    <>
      <Header />
      <Form
        onSubmitForm={handleSubmit}
        title="Войти в систему"
        render={
          <>
            <label className="form-label">
              {error !== undefined && (
                <div className="errorMessage">{error}</div>
              )}
              Логин
              <TextInput
                onChangeInput={changeLogin}
                name="login"
                value={login}
              />
            </label>
            <label className="form-label">
              Пароль
              <PassInput onChangeInput={changePass} name="pass" value={pass} />
            </label>
            <SubmitButton value="Войти" />
            <div className="form-link-wrapper">
              <NavLink className="form-link" to="/signup">
                Нет аккаунта?
              </NavLink>
            </div>
          </>
        }
      ></Form>
    </>
  );
}
