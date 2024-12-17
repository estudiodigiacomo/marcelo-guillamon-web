import React, { useState } from "react";
import { resetPassword } from "../../service/authService.js";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await resetPassword(email); // Llama al servicio de recuperación
      setMessage("Correo de recuperación enviado. Por favor, revisa tu bandeja.");
      setTimeout(() => navigate("/login"), 5000); // Redirige a /login tras 5 segundos
    } catch (err) {
      setError("No se pudo enviar el correo. Verifica que el email sea correcto.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Recuperar Contraseña</h2>
        {message && <div className="alert alert-success text-center">{message}</div>}
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handlePasswordReset}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar Correo de Recuperación</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
