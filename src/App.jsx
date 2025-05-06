// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ConsultoriaHospitalar from "./pages/ConsultoriaHospitalar";
// adicione os outros componentes de página conforme você criar

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/consultoria-hospitalar" element={<ConsultoriaHospitalar />} />
        {/* Exemplo: <Route path="/desenvolvimento-software" element={<DesenvolvimentoSoftware />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
