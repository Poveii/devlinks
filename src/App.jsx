import Avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="profile">
        <img
          src={Avatar}
          alt="Foto do Pablo Gabriel olhando pra câmera de camisa branca sorrindo sem mostrar os dentes, com um fundo azul por trás"
        />
        <p>@poveii</p>
      </div>

      <ul>
        <li>
          <a href="#">Meu currículo</a>
        </li>
        <li>
          <a href="#">Meus artigos</a>
        </li>
        <li>
          <a href="#">Meu portfólio</a>
        </li>
        <li>
          <a href="#">Minhas redes sociais</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
