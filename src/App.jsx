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
      </div>
    </div>
  );
}

export default App;
