import React from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './main.css'



function App() {

 
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16947985?v=4" alt="Mateus Braga" />
              <div className="user-info">
                <strong>Mateus Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>  
            <p>Bacharelado em Ciência da Computação - UniCEUB</p>
            <a href="https://github.com/bragamateus">Acessar perfil no Github</a>   
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16947985?v=4" alt="Mateus Braga" />
              <div className="user-info">
                <strong>Mateus Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>  
            <p>Bacharelado em Ciência da Computação - UniCEUB</p>
            <a href="https://github.com/bragamateus" target="blank">Acessar perfil no Github</a>   
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16947985?v=4" alt="Mateus Braga" />
              <div className="user-info">
                <strong>Mateus Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bacharelado em Ciência da Computação - UniCEUB</p>
            <a href="https://github.com/bragamateus">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16947985?v=4" alt="Mateus Braga" />
              <div className="user-info">
                <strong>Mateus Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bacharelado em Ciência da Computação - UniCEUB</p>
            <a href="https://github.com/bragamateus">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  )
}

export default App;
