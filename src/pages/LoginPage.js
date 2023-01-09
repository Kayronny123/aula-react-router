import { goToHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <input placeholder="Digite seu nome" />
      <input placeholder="Digite sua senha" />
      <button> Acessar </button>
      <button onClick={() => goToHome(navigate)}>Ir para página inicial</button>
    </div>
  );
}
