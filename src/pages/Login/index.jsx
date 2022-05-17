import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import  {Inputs}  from "../../components/Inputs"
//import Button from './components/Buttons';

function PageLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
       <Inputs
        type="email"
        className="input"
        label="E-mail"
        // value={email}
        name="input"
        placeholder="user@user.com"
        // onChange={(e) => setEmail(e.target.value)}
      />
      {/* <Button className='button' text='Logar' onClick={} /> */}
    </>
  );
}

export default PageLogin;