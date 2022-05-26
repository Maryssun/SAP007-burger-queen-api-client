import React, { useState } from "react";
import { Input } from "../Input";
import style from "./inputPassword.style.module.css";

export const InputPassword = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);

  function handleClickEye() {
    setEyeOpen((oldEyeOpen) => !oldEyeOpen);
  }

  return (
    <span className={style.container}>
      <span onClick={handleClickEye} className={style.spanEye}>
        {eyeOpen ? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye-slash-fill"></i>}
      </span>
      <Input {...props} type={eyeOpen ? "text" : "password"} />
    </span>
  );
};
