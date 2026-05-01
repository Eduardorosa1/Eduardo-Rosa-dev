import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const slides = [
    { tag: 'Selenium', img: 'https://cdn.simpleicons.org/selenium' },
    { tag: 'Cypress', img: 'https://cdn.simpleicons.org/cypress' },
    { tag: 'GraphQL', img: 'https://cdn.simpleicons.org/graphql' },
    { tag: 'Java', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { tag: 'Python', img: 'https://cdn.simpleicons.org/python' },
    { tag: 'Docker', img: 'https://cdn.simpleicons.org/docker' },
    { tag: 'Js', img: 'https://cdn.simpleicons.org/javascript' },
    { tag: 'MySQL', img: 'https://cdn.simpleicons.org/mysql' },
    { tag: 'TSnode', img: 'https://cdn.simpleicons.org/tsnode' },
    { tag: 'JsonWTK', img: 'https://cdn.simpleicons.org/jsonwebtokens' },
    { tag: 'Json', img: 'https://cdn.simpleicons.org/json' },
    { tag: 'Prisma', img: 'https://cdn.simpleicons.org/prisma' },
    { tag: 'Git', img: 'https://cdn.simpleicons.org/git' },
    { tag: 'GitHub', img: 'https://cdn.simpleicons.org/github' },
    { tag: 'Linux', img: 'https://cdn.simpleicons.org/linux' },
    { tag: 'Vite', img: 'https://cdn.simpleicons.org/vite' },
    { tag: 'Insomnia', img: 'https://cdn.simpleicons.org/insomnia' },
    { tag: 'MongoDB', img: 'https://cdn.simpleicons.org/mongodb' },
    { tag: 'React', img: 'https://cdn.simpleicons.org/react' },
    { tag: 'jetbrains', img: 'https://cdn.simpleicons.org/jetbrains' },
    { tag: 'postgresql', img: 'https://cdn.simpleicons.org/postgresql' },
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Muda a cada 3 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="App">
<header>
        <nav>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
          </div>
          <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a></li>
            <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre" className="hero" translate="no">
        <div className="hero-content">
          <h1 translate="no">Olá, sou Eduardo</h1>
          <p translate="no">Trabalho com testes de software e backend, focado em evitar erro em produção e garantir que as coisas funcionem como deveriam. Já lidei com API quebrando, problema de autenticação e integração com banco — e meu foco é encontrar e corrigir isso antes virar dor de cabeça.</p>
        </div>
        <div className="carousel-background" aria-hidden="true" translate="no">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, idx) => (
                <div key={slide.tag} className={`carousel-item ${idx === activeIndex ? 'active' : ''}`}>
                  <div className="d-block w-100 text-center carousel-image-wrapper">
                    <img src={slide.img} alt={slide.tag} className="carousel-icon" translate="no" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-detalhes">
        <h2>Sobre Mim</h2>
        <p>Tenho experiência com testes e backend, principalmente mexendo com API, banco de dados e automação. Gosto mais de pegar sistema com problema e entender onde tá falhando do que só construir do zero.</p>
      </section>

      <section id="experiencia">
        <h2>Experiência</h2>
         <div className="experience-item">
          <h3>Técnico de Campo – Terminais de Pagamento (Freelance)</h3>
          <p><strong>Período:</strong> Atual</p>
          <p><strong>Atuação:</strong> Suporte técnico em field para terminais POS (Vero - Banrisul)</p>
          <p>
            Atuo direto em campo resolvendo problema em terminal de pagamento (POS). Já peguei desde erro simples até falha de comunicação com rede e sistema financeiro.

Na prática, é diagnóstico rápido, resolver sem parar operação e garantir que o cliente continue vendendo.

Isso me deu visão real de sistema crítico funcionando (ou quebrando) no mundo real.
          </p>
          <ul>
            <p>Diagnóstico e resolução de falhas em terminais POS</p>
            <p>Substituição e configuração de equipamentos em campo</p>
            <p>Atendimento técnico com foco em redução de indisponibilidade</p>
            <p>Análise de falhas relacionadas à conectividade (rede, chip, Wi-Fi)</p>
            <p>Suporte a sistemas críticos de transações financeiras</p>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Estágio - COMPASS.UOL TECNOLOGIA LTDA</h3>
          <p><strong>Período:</strong> 07/2025 – 01/2026</p>
          <p><strong>Cargo:</strong> AWS & AI for Software Quality Engineering</p>
          <p>Trabalhei com QA focado em automação e qualidade de software, usando ferramentas e práticas voltadas pra reduzir erro e melhorar confiabilidade.

Tive contato com testes automatizados, validação de API e uso de AWS dentro do processo.</p>
        </div>
      </section>

      <section id="habilidades" translate="no">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <div className="skill">
            <div className="skill-title">Testes Automatizados</div>
            <div className="skill-subitem">Escrevo testes automatizados com Cypress para validar fluxo de aplicação web, evitando regressão e garantindo que funcionalidades críticas continuem funcionando após mudanças.</div>
          </div>
          <div className="skill">
            <div className="skill-title">APIs e Integrações</div>
            <div className="skill-subitem">REST</div>
            <div className="skill-subitem">GraphQL</div>
            <div className="skill-subitem">JSON / JWT</div>
          </div>
          <div className="skill">
            <div className="skill-title">Linguagens</div>
            <div className="skill-subitem">Java</div>
            <div className="skill-subitem">Python</div>
            <div className="skill-subitem">JavaScript</div>
            <div className="skill-subitem">TypeScript</div>
          </div>
          <div className="skill">
            <div className="skill-title">Bancos de Dados</div>
            <div className="skill-subitem">MySQL</div>
            <div className="skill-subitem">MongoDB</div>
            <div className="skill-subitem">PostgreSQL</div>
          </div>
          <div className="skill">
            <div className="skill-title">Infraestrutura</div>
            <div className="skill-subitem">Docker</div>
            <div className="skill-subitem">Git / GitHub</div>
            <div className="skill-subitem">Linux</div>
            <div className="skill-subitem">Vite</div>
          </div>
          <div className="skill">
            <div className="skill-title">Frameworks e Ferramentas</div>
            <div className="skill-subitem">React</div>
            <div className="skill-subitem">Node.js</div>
            <div className="skill-subitem">Prisma</div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project">
            <h3>API de E-commerce</h3>
            <p>API REST com autenticação JWT, validação de dados e integração com banco.
              Trabalhei controle de usuários, tratamento de erro e estruturação das rotas.</p>
          </div>
          <div className="project">
            <h3>Suite de Testes QA</h3>
            <p>Implementei testes E2E com Cypress validando fluxos como login, cadastro e requisições de API.
Trabalhei com interceptação de requisições, validação de respostas e simulação de cenários reais de uso.</p>
          </div>
          <div className="project">
            <h3>Dashboard de Monitoramento</h3>
            <p>Back-end para um dashboard que monitora métricas de performance em tempo real.</p>
          </div>
        </div>
      </section>

      <section id="contato">
        <div className="social">
          <a href="https://www.linkedin.com/in/eduardo-rosa-42b31b242/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
            LinkedIn
          </a>
          <a href="https://github.com/Eduardorosa1" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" className="social-icon" />
            GitHub
          </a>
          <a href="https://www.instagram.com/eduardo_rosa.da.rosa/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Instagram" className="social-icon" />
            Instagram
          </a>
          <a href="https://wa.me/53997130640" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/whatsapp.svg" alt="WhatsApp" className="social-icon" />
            WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Eduardo Rosa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
