import {Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";

const DefaultLayout = () => {
  return (
    <main className="main-container">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<h1>This Page Not Found</h1>} />
      </Routes>
    </main>
  );
};

export default DefaultLayout;
