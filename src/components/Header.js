import { goToHome, goToProfile, goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => goToHome(navigate)}>Ir para página inicial</button>

      <button onClick={() => goToProfile(navigate, "bananinha")}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLogin(navigate)}>Faça Login aqui</button>
    </header>
  );
}

export default Header;
