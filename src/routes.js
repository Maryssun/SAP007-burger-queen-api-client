import { BrowserRouter, Routes, Route } from "react-router-dom";

// páginas
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Hall } from "./pages/Hall";
import { Kitchen } from "./pages/Kitchen"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/hall"} element={<Hall />} />
        <Route path={"/kitchen"} element={<Kitchen />} />
      </Routes>
    </BrowserRouter>
  );
}
