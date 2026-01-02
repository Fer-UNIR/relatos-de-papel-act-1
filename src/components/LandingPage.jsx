import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

function LandingPage() {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const startTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      navigate("/home");
    }, 5000);
  };

  useEffect(() => {
    startTimer();

    const reset = () => startTimer();

    window.addEventListener("click", reset);
    window.addEventListener("mousemove", reset);
    window.addEventListener("keydown", reset);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("click", reset);
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("keydown", reset);
    };
  }, [navigate]);

  return (
    <main className="landing">
      <h1 className="landing__title">Relatos de Papel</h1>
      <p className="landing__hint">
        Serás redirigido automáticamente
      </p>
    </main>
  );
}

export default LandingPage;