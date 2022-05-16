import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Login />} />       
      </Routes>
    </BrowserRouter>
  );
}