import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const showcaseItems = [
    { src: 'dashboard.png', title: 'Visão Geral (Dashboard)' },
    { src: 'vendas.png', title: 'Frente de Caixa Rápido' },
    { src: 'estoque.png', title: 'Controle de Estoque' },
    { src: 'relatorios.png', title: 'Relatórios Inteligentes' },
    { src: 'calculadora-de-precificacao.png', title: 'Calculadora de Precificação' },
    { src: 'ajustes-e-personalizacao-da-marcar.png', title: 'Ajustes da Marca' },
    { src: 'preferencias-e-acessibilidade.png', title: 'Preferências' }
  ]

  return (
    <div className={`app ${isLoaded ? 'animate-fade-in' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="MyBusinessEasy Logo" width="32" height="32" />
            MyBusinessEasy
          </div>
          <div>
            <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Acessar Sistema
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <h1 className="animate-fade-in delay-100">
            Gerencie seu negócio com <br />
            <span className="text-gradient">facilidade e inteligência</span>
          </h1>
          <p className="animate-fade-in delay-200">
            A solução completa para controle de vendas, estoque e finanças.
            Desenvolvido para empreendedores que valorizam seu tempo.
          </p>
          <div className="hero-buttons animate-fade-in delay-300">
            <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Começar Agora
            </a>
            <a href="#demo" className="btn btn-secondary">Ver Demonstração</a>
          </div>
        </div>

        {/* Video Section */}
        <div id="demo" className="video-section animate-fade-in delay-300" style={{ opacity: isLoaded ? 1 : 0, paddingTop: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Veja na prática: <span className="text-gradient">Elas Store</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Como uma loja de roupas femininas transformou sua gestão com o MyBusinessEasy</p>
          </div>
          <div className="video-container">
            <video
              width="100%"
              height="100%"
              controls
              poster={`${import.meta.env.BASE_URL}dashboard.png`}
              style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
            >
              <source src={`${import.meta.env.BASE_URL}video-demostracao.mp4`} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
            Tudo o que você precisa em <span className="text-gradient">um só lugar</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Ferramentas poderosas para simplificar sua rotina e aumentar seus lucros.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Gestão de PDV</h3>
              <p>Frente de caixa rápido e intuitivo. Registre vendas em segundos e melhore o atendimento aos seus clientes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 17L13 12L9 16L3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Relatórios Inteligentes</h3>
              <p>Acompanhe métricas vitais do seu negócio com dashboards interativos, incluindo cálculo automático de margem de lucro.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Controle Financeiro</h3>
              <p>Acompanhe suas receitas, despesas e fluxo de caixa de forma integrada. Emissão de cobranças simplificada.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 12H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 8H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 8H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Calculadora de Precificação</h3>
              <p>Simule seus custos, taxas de maquininhas e comissões. Descubra a margem de lucro real e nunca mais venda seus produtos no prejuízo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="container">
          <div className="showcase-header">
            <img src={`${import.meta.env.BASE_URL}logo-elas-store.jpeg`} alt="Elas Store Logo" className="showcase-logo" />
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                Caso de Uso Real: <span className="text-gradient">Elas Store</span>
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Veja nosso sistema em ação no dia a dia de uma loja de roupas femininas. Clique nas imagens para ampliar.
              </p>
            </div>
          </div>

          <div className="carousel-wrapper">
            <button className="carousel-control left" onClick={scrollLeft} aria-label="Rolar para esquerda">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="album-carousel" ref={carouselRef}>
              {showcaseItems.map((item, index) => (
                <div
                  key={index}
                  className={`album-item rotate-${(index % 3) + 1}`}
                  onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}${item.src}`)}
                >
                  <div className="album-photo">
                    <img src={`${import.meta.env.BASE_URL}${item.src}`} alt={item.title} />
                  </div>
                  <div className="album-caption">{item.title}</div>
                </div>
              ))}
            </div>
            <button className="carousel-control right" onClick={scrollRight} aria-label="Rolar para direita">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing / Subscriptions Section */}
      <section className="pricing">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Escolha seu plano
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', textTransform: 'uppercase' }}>
            Cresça conforme o seu negócio evolui.
          </p>

          <div className="pricing-grid">
            <div className="pricing-card trial">
              <div className="plan-badge">Plano Atual</div>
              <div className="plan-header">
                <div className="plan-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', margin: 0, textTransform: 'uppercase', color: '#a855f7' }}>Trial</h3>
                  <div className="price" style={{ margin: 0 }}>R$ 0</div>
                </div>
              </div>
              <ul className="features-list">
                <li>5 usuários</li>
                <li>Estoque básico</li>
                <li>Suporte por chat</li>
              </ul>
              <div className="alert-badge">
                ⚠️ Migra para Pro em 15 dias
              </div>
              <button className="btn btn-trial" disabled style={{ width: '100%', marginTop: 'auto' }}>Plano Atual</button>
            </div>

            <div className="pricing-card pro-mensal">
              <div className="plan-header">
                <div className="plan-icon blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', margin: 0, textTransform: 'uppercase', color: '#3b82f6' }}>Pro Mensal</h3>
                  <div className="price" style={{ margin: 0 }}>R$ 24,90<span>/mês</span></div>
                </div>
              </div>
              <ul className="features-list blue-check">
                <li>30 usuários</li>
                <li>Ilimitado</li>
                <li>Suporte 24/7</li>
              </ul>
              <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center', background: '#3b82f6', border: 'none' }}>Selecionar</a>
            </div>

            <div className="pricing-card pro-anual popular">
              <div className="popular-badge org-badge">🔥 -100 R$/Ano</div>
              <div className="plan-header">
                <div className="plan-icon orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', margin: 0, textTransform: 'uppercase', color: '#f97316' }}>Pro Anual</h3>
                  <div className="price" style={{ margin: 0 }}>R$ 16,58<span>/mês</span></div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>R$ 199,00 cobrado anualmente</div>
                </div>
              </div>
              <ul className="features-list orange-check">
                <li>Tudo do Pro</li>
                <li>Economize R$ 100/ano</li>
                <li>Prioridade total</li>
              </ul>
              <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center', background: '#f97316', border: 'none' }}>Economizar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MyBusinessEasy. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Lightbox Modal rendered via Portal to ensure center screen positioning */}
      {selectedImage && createPortal(
        <div className="lightbox animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <img src={selectedImage} alt="Ampliado" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </div>
  )
}

export default App
