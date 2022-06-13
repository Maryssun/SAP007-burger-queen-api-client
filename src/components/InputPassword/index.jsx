import React, { useState } from "react";
import { Input } from "../Input";
import style from"./inputPassword.style.module.css";

export const InputPassword = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);

  function handleClickEye() {
    setEyeOpen((oldEyeOpen) => !oldEyeOpen);
  }

  return (
  <>
    <Input {...props} type={eyeOpen ? "text" : "password"} />
    <div className={style.eye} onClick={handleClickEye}>
      {eyeOpen ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
    </div>
    </>
    );
  };