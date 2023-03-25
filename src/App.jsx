import { useState } from "react"

import AvatarDark from "./assets/avatar.png"
import AvatarLight from "./assets/avatar-light.png"

import "./App.css"

function App() {
  const [avatar, setAvatar] = useState(AvatarDark)
  
  function handleSwitchThemeMode() {
    document.documentElement.classList.toggle("light")
    setAvatar((actualAvatar) => {
      return actualAvatar === AvatarDark ? AvatarLight : AvatarDark
    })
  }

  return (
    <div className="App">
      <div id="profile">
        <img
          src={avatar}
          alt="Foto do Pablo Gabriel olhando pra câmera de camisa branca sorrindo sem mostrar os dentes, com um fundo azul por trás"
        />
        <p>@poveii</p>
      </div>

      <div id="switch" onClick={handleSwitchThemeMode}>
        <button></button>
        <span></span>
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

      <div id="social-links">
        <a href="https://github.com/poveii">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.instagram.com/poveiii">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/poveii">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>

      <footer>
        Feito com ♥ pelo <a href="https://github.com/poveii">Poveii</a>
      </footer>
    </div>
  )
}

export default App
