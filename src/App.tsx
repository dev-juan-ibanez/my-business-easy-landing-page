import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import './App.css'

type Language = 'pt' | 'en' | 'es'

const translations = {
  pt: {
    nav_access: 'Acessar Sistema',
    hero_title: 'Gerencie seu negócio com facilidade e inteligência',
    hero_subtitle: 'A solução completa para controle de vendas, estoque e finanças. Desenvolvido para empreendedores que valorizam seu tempo.',
    hero_cta: 'Começar Agora',
    hero_demo: 'Ver Demonstração',
    video_title: 'Veja na prática: Elas Store',
    video_subtitle: 'Como uma loja de roupas femininas transformou sua gestão com o MyBusinessEasy',
    video_fallback: 'Seu navegador não suporta a tag de vídeo.',
    features_title: 'Tudo o que você precisa em um só lugar',
    features_subtitle: 'Ferramentas poderosas para simplificar sua rotina e aumentar seus lucros.',
    feat_pdv: 'Gestão de PDV',
    feat_pdv_desc: 'Frente de caixa rápido e intuitivo. Registre vendas em segundos e melhore o atendimento aos seus clientes.',
    feat_reports: 'Relatórios Inteligentes',
    feat_reports_desc: 'Acompanhe métricas vitais do seu negócio com dashboards interativos, incluindo cálculo automático de margem de lucro.',
    feat_finance: 'Controle Financeiro',
    feat_finance_desc: 'Acompanhe suas receitas, despesas e fluxo de caixa de forma integrada. Emissão de cobranças simplificada.',
    feat_pricing: 'Calculadora de Precificação',
    feat_pricing_desc: 'Simule seus custos, taxas de maquininhas e comissões. Descubra a margem de lucro real e nunca mais venda seus produtos no prejuízo.',
    feat_branding: 'Personalização de Marca',
    feat_branding_desc: 'Deixe o sistema com a sua cara. Adicione sua logo e as cores da sua marca para uma experiência única.',
    feat_sellers: 'Gestão de Vendedores',
    feat_sellers_desc: 'Cadastre vendedores com acessos exclusivos. Monitore o desempenho e analise as atividades de cada um da sua equipe.',
    showcase_title: 'Caso de Uso Real: Elas Store',
    showcase_desc: 'Veja nosso sistema em ação no dia a dia de uma loja de roupas femininas. Clique nas imagens para ampliar.',
    carousel_left: 'Rolar para esquerda',
    carousel_right: 'Rolar para direita',
    showcase_dashboard: 'Visão Geral (Dashboard)',
    showcase_vendas: 'Frente de Caixa Rápido',
    showcase_estoque: 'Controle de Estoque',
    showcase_relatorios: 'Relatórios Inteligentes',
    showcase_precificacao: 'Calculadora de Precificação',
    showcase_marca: 'Ajustes da Marca',
    showcase_preferencias: 'Preferências',
    pricing_title: 'Escolha seu plano',
    pricing_subtitle: 'Cresça conforme o seu negócio evolui.',
    plan_current: 'Plano Atual',
    plan_trial: 'Trial',
    plan_pro_mensal: 'Pro Mensal',
    plan_pro_anual: 'Pro Anual',
    per_month: '/mês',
    billed_annually: 'R$ 199,00 cobrado anualmente',
    feat_users_5: '5 usuários',
    feat_users_30: '30 usuários',
    feat_stock_basic: 'Estoque básico',
    feat_stock_unlimited: 'Ilimitado',
    feat_support_chat: 'Suporte por chat',
    feat_support_247: 'Suporte 24/7',
    feat_pro_includes: 'Tudo do Pro',
    feat_save_100: 'Economize R$ 100/ano',
    feat_priority: 'Prioridade total',
    trial_alert: '⚠️ Migra para Pro em 15 dias',
    btn_select: 'Selecionar',
    btn_save: 'Economizar',
    btn_download_beta: 'Baixar APK Beta',
    coming_soon_title: 'Experimente o App em Beta',
    coming_soon_desc: 'O MyBusinessEasy para Android já está disponível em versão Beta! Baixe agora e comece a gerenciar seu negócio de qualquer lugar. Em breve na App Store.',
    coming_soon_badges: 'Versão Beta disponível',
    footer_rights: 'Todos os direitos reservados.',
  },
  en: {
    nav_access: 'Access System',
    hero_title: 'Manage your business with ease and intelligence',
    hero_subtitle: 'The complete solution for sales, inventory, and finance control. Developed for entrepreneurs who value their time.',
    hero_cta: 'Get Started Now',
    hero_demo: 'Watch Demo',
    video_title: 'See it in action: Elas Store',
    video_subtitle: 'How a women\'s clothing store transformed its management with MyBusinessEasy',
    video_fallback: 'Your browser does not support the video tag.',
    features_title: 'Everything you need in one place',
    features_subtitle: 'Powerful tools to simplify your routine and increase your profits.',
    feat_pdv: 'POS Management',
    feat_pdv_desc: 'Fast and intuitive frontend. Register sales in seconds and improve customer service.',
    feat_reports: 'Smart Reports',
    feat_reports_desc: 'Track vital business metrics with interactive dashboards, including automatic profit margin calculation.',
    feat_finance: 'Financial Control',
    feat_finance_desc: 'Track your income, expenses, and cash flow in an integrated way. Simplified billing issuance.',
    feat_pricing: 'Pricing Calculator',
    feat_pricing_desc: 'Simulate your costs, machine fees, and commissions. Discover the real profit margin and never sell at a loss again.',
    feat_branding: 'Brand Customization',
    feat_branding_desc: 'Make the system yours. Add your logo and brand colors for a unique experience.',
    feat_sellers: 'Seller Management',
    feat_sellers_desc: 'Register sellers with exclusive access. Monitor performance and analyze the activities of each team member.',
    showcase_title: 'Real Use Case: Elas Store',
    showcase_desc: 'See our system in action in the daily life of a women\'s clothing store. Click on images to enlarge.',
    carousel_left: 'Scroll left',
    carousel_right: 'Scroll right',
    showcase_dashboard: 'Dashboard Overview',
    showcase_vendas: 'Fast Checkout',
    showcase_estoque: 'Inventory Control',
    showcase_relatorios: 'Smart Reports',
    showcase_precificacao: 'Pricing Calculator',
    showcase_marca: 'Brand Adjustments',
    showcase_preferencias: 'Preferences',
    pricing_title: 'Choose your plan',
    pricing_subtitle: 'Grow as your business evolves.',
    plan_current: 'Current Plan',
    plan_trial: 'Trial',
    plan_pro_mensal: 'Pro Monthly',
    plan_pro_anual: 'Pro Annual',
    per_month: '/month',
    billed_annually: 'R$ 199.00 billed annually',
    feat_users_5: '5 users',
    feat_users_30: '30 users',
    feat_stock_basic: 'Basic inventory',
    feat_stock_unlimited: 'Unlimited',
    feat_support_chat: 'Chat support',
    feat_support_247: '24/7 support',
    feat_pro_includes: 'Everything in Pro',
    feat_save_100: 'Save R$ 100/year',
    feat_priority: 'Total priority',
    trial_alert: '⚠️ Migrates to Pro in 15 days',
    btn_select: 'Select',
    btn_save: 'Save',
    btn_download_beta: 'Download Beta APK',
    coming_soon_title: 'Try the App in Beta',
    coming_soon_desc: 'MyBusinessEasy for Android is now available in Beta! Download now and start managing your business from anywhere. Coming soon to the App Store.',
    coming_soon_badges: 'Beta version available',
    footer_rights: 'All rights reserved.',
  },
  es: {
    nav_access: 'Acceder al Sistema',
    hero_title: 'Gestione su negocio con facilidad e inteligencia',
    hero_subtitle: 'La solución completa para el control de ventas, inventario y finanzas. Desarrollado para emprendedores que valoran su tiempo.',
    hero_cta: 'Empezar Ahora',
    hero_demo: 'Ver Demostración',
    video_title: 'Véalo en la práctica: Elas Store',
    video_subtitle: 'Cómo una tienda de ropa femenina transformó su gestión con MyBusinessEasy',
    video_fallback: 'Su navegador no soporta la etiqueta de video.',
    features_title: 'Todo lo que necesita en un solo lugar',
    features_subtitle: 'Potentes herramientas para simplificar su rutina y aumentar sus ganancias.',
    feat_pdv: 'Gestión de POS',
    feat_pdv_desc: 'Punto de venta rápido e intuitivo. Registre ventas en segundos e mejore la atención al cliente.',
    feat_reports: 'Informes Inteligentes',
    feat_reports_desc: 'Siga métricas vitales de su negocio con tableros interactivos, incluyendo el cálculo automático del margen de beneficio.',
    feat_finance: 'Control Financiero',
    feat_finance_desc: 'Siga sus ingresos, gastos y fluxo de caja de forma integrada. Emisión de cobros simplificada.',
    feat_pricing: 'Calculadora de Precios',
    feat_pricing_desc: 'Simule sus costos, tasas de máquinas y comisiones. Descubra el margen de beneficio real y no vuelva a vender con pérdidas.',
    feat_branding: 'Personalización de Marca',
    feat_branding_desc: 'Haga el sistema suyo. Añada su logo y los colores de su marca para una experiencia única.',
    feat_sellers: 'Gestión de Vendedores',
    feat_sellers_desc: 'Registre vendedores con accesos exclusivos. Monitoree el desempeño y analice las actividades de cada miembro de su equipo.',
    showcase_title: 'Caso de Uso Real: Elas Store',
    showcase_desc: 'Vea nuestro sistema en acción no día a día de una tienda de ropa femenina. Haga clic nas imágenes para ampliar.',
    carousel_left: 'Desplazar a la izquierda',
    carousel_right: 'Desplazar a la derecha',
    showcase_dashboard: 'Vista General (Dashboard)',
    showcase_vendas: 'Caja Rápida',
    showcase_estoque: 'Control de Inventario',
    showcase_relatorios: 'Informes Inteligentes',
    showcase_precificacao: 'Calculadora de Precios',
    showcase_marca: 'Ajustes de Marca',
    showcase_preferencias: 'Preferencias',
    pricing_title: 'Elija su plan',
    pricing_subtitle: 'Crezca a medida que seu negocio evoluciona.',
    plan_current: 'Plan Actual',
    plan_trial: 'Trial',
    plan_pro_mensal: 'Pro Mensual',
    plan_pro_anual: 'Pro Anual',
    per_month: '/mes',
    billed_annually: 'R$ 199.00 facturado anualmente',
    feat_users_5: '5 usuarios',
    feat_users_30: '30 usuarios',
    feat_stock_basic: 'Inventario básico',
    feat_stock_unlimited: 'Ilimitado',
    feat_support_chat: 'Soporte por chat',
    feat_support_247: 'Soporte 24/7',
    feat_pro_includes: 'Todo en Pro',
    feat_save_100: 'Ahorre R$ 100/año',
    feat_priority: 'Prioridad total',
    trial_alert: '⚠️ Migra a Pro en 15 dias',
    btn_select: 'Seleccionar',
    btn_save: 'Ahorrar',
    btn_download_beta: 'Descargar APK Beta',
    coming_soon_title: 'Prueba la App en Beta',
    coming_soon_desc: '¡MyBusinessEasy para Android ya está disponible en versión Beta! Descárgalo ahora y comienza a gestionar tu negocio desde cualquier lugar. Próximamente en la App Store.',
    coming_soon_badges: 'Versión Beta disponible',
    footer_rights: 'Todos los derechos reservados.',
  }
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [language, setLanguage] = useState<Language>('pt')

  const carouselRef = useRef<HTMLDivElement>(null)

  const t = (key: keyof typeof translations['pt']) => {
    return translations[language][key] || translations['pt'][key]
  }

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
    { src: 'dashboard.png', title: t('showcase_dashboard') },
    { src: 'vendas.png', title: t('showcase_vendas') },
    { src: 'estoque.png', title: t('showcase_estoque') },
    { src: 'relatorios.png', title: t('showcase_relatorios') },
    { src: 'calculadora-de-precificacao.png', title: t('showcase_precificacao') },
    { src: 'ajustes-e-personalizacao-da-marcar.png', title: t('showcase_marca') },
    { src: 'preferencias-e-acessibilidade.png', title: t('showcase_preferencias') }
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="lang-switcher">
              <button className={`lang-btn ${language === 'pt' ? 'active' : ''}`} onClick={() => setLanguage('pt')}>PT</button>
              <button className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</button>
              <button className={`lang-btn ${language === 'es' ? 'active' : ''}`} onClick={() => setLanguage('es')}>ES</button>
            </div>
            <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {t('nav_access')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <h1 className="animate-fade-in delay-100">
            {t('hero_title').split('com')[0]} com <br />
            <span className="text-gradient">{t('hero_title').split('com')[1]}</span>
          </h1>
          <p className="animate-fade-in delay-200">
            {t('hero_subtitle')}
          </p>
          <div className="hero-buttons animate-fade-in delay-300">
            <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t('hero_cta')}
            </a>
            <a href="#demo" className="btn btn-secondary">{t('hero_demo')}</a>
          </div>
        </div>

        {/* Video Section */}
        <div id="demo" className="video-section animate-fade-in delay-300" style={{ opacity: isLoaded ? 1 : 0, paddingTop: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{t('video_title').split(':')[0]}: <span className="text-gradient">{t('video_title').split(':')[1]}</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>{t('video_subtitle')}</p>
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
              {t('video_fallback')}
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
            {t('features_title').split('em')[0]} em <span className="text-gradient">{t('features_title').split('em')[1]}</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            {t('features_subtitle')}
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
              <h3>{t('feat_pdv')}</h3>
              <p>{t('feat_pdv_desc')}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 17L13 12L9 16L3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>{t('feat_reports')}</h3>
              <p>{t('feat_reports_desc')}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>{t('feat_finance')}</h3>
              <p>{t('feat_finance_desc')}</p>
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
              <h3>{t('feat_pricing')}</h3>
              <p>{t('feat_pricing_desc')}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V21M7 21H17M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15M3 15L12 3L21 15H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>{t('feat_branding')}</h3>
              <p>{t('feat_branding_desc')}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2524 22.1614 16.5523C21.6184 15.8522 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>{t('feat_sellers')}</h3>
              <p>{t('feat_sellers_desc')}</p>
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
                {t('showcase_title').split(':')[0]}: <span className="text-gradient">{t('showcase_title').split(':')[1]}</span>
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                {t('showcase_desc')}
              </p>
            </div>
          </div>

          <div className="carousel-wrapper">
            <button className="carousel-control left" onClick={scrollLeft} aria-label={t('carousel_left')}>
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
            <button className="carousel-control right" onClick={scrollRight} aria-label={t('carousel_right')}>
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
            {t('pricing_title')}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', textTransform: 'uppercase' }}>
            {t('pricing_subtitle')}
          </p>

          <div className="pricing-grid">
            <div className="pricing-card trial">
              <div className="plan-badge">{t('plan_current')}</div>
              <div className="plan-header">
                <div className="plan-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', margin: 0, textTransform: 'uppercase', color: '#a855f7' }}>{t('plan_trial')}</h3>
                  <div className="price" style={{ margin: 0 }}>R$ 0</div>
                </div>
              </div>
              <ul className="features-list">
                <li>{t('feat_users_5')}</li>
                <li>{t('feat_stock_basic')}</li>
                <li>{t('feat_support_chat')}</li>
              </ul>
              <div className="alert-badge">
                {t('trial_alert')}
              </div>
              <button className="btn btn-trial" disabled style={{ width: '100%', marginTop: 'auto' }}>{t('plan_current')}</button>
            </div>

            <div className="pricing-card pro-mensal">
              <div className="plan-header">
                <div className="plan-icon blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', margin: 0, textTransform: 'uppercase', color: '#3b82f6' }}>{t('plan_pro_mensal')}</h3>
                  <div className="price" style={{ margin: 0 }}>R$ 24,90<span>{t('per_month')}</span></div>
                </div>
              </div>
              <ul className="features-list blue-check">
                <li>{t('feat_users_30')}</li>
                <li>{t('feat_stock_unlimited')}</li>
                <li>{t('feat_support_247')}</li>
              </ul>
              <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center', background: '#3b82f6', border: 'none' }}>{t('btn_select')}</a>
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
                  <h3 style={{ fontSize: '1rem', margin: 0, textTransform: 'uppercase', color: '#f97316' }}>{t('plan_pro_anual')}</h3>
                  <div className="price" style={{ margin: 0 }}>R$ 16,58<span>{t('per_month')}</span></div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>{t('billed_annually')}</div>
                </div>
              </div>
              <ul className="features-list orange-check">
                <li>{t('feat_pro_includes')}</li>
                <li>{t('feat_save_100')}</li>
                <li>{t('feat_priority')}</li>
              </ul>
              <a href="https://my-business-easy-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center', background: '#f97316', border: 'none' }}>{t('btn_save')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon">
        <div className="container">
          <div className="coming-soon-content animate-fade-in">
            <h2>{t('coming_soon_title')}</h2>
            <p>{t('coming_soon_desc')}</p>
            <div className="app-badges">
              <div className="badge-placeholder disabled">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.27.82-1.34.05-2.34-1.28-3.14-2.43-1.66-2.37-2.92-6.68-1.21-9.62 1.05-1.8 2.89-2.94 4.88-2.97 1.3-.02 2.53.88 3.33.88.79 0 2.31-1.1 3.86-1.02.65.02 2.48.26 3.65 1.95-.12.07-2.18 1.25-2.15 3.83.03 3.1 2.72 4.19 2.76 4.21-.04.1-1.44 5.07-2.32 6.46zM15.5 1.5c.78.94 1.2 2.22 1 3.5-1.12.05-2.48-.67-3.27-1.6-.8-.94-1.22-2.22-1-3.48 1.15-.09 2.51.65 3.27 1.58z" />
                </svg>
                iOS (Coming soon)
              </div>
              <a href={`${import.meta.env.BASE_URL}app-my-business-beta.apk`} download className="badge-placeholder active">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414L18.3242 16.7291C18.423 16.9002 18.3644 17.1189 18.1934 17.2177L15.7163 18.6481C15.5453 18.7469 15.3266 18.6883 15.2278 18.5173L14.4143 17.1084C13.6611 17.47 12.8394 17.6834 12 17.7342V19.4996C12 19.7205 11.8209 19.8996 11.6 19.8996H10.4C10.1791 19.8996 10 19.7205 10 19.4996V17.7342C9.16057 17.6834 8.33894 17.47 7.58574 17.1084L6.77218 18.5174C6.67341 18.6884 6.45474 18.7469 6.28373 18.6481L3.80665 17.2178C3.63564 17.119 3.57703 16.9003 3.6758 16.7293L4.47702 15.3414C3.54133 14.156 3 12.6418 3 11H19C19 12.6418 18.4587 14.156 17.523 15.3414ZM7 8.5C7 8.22386 6.77614 8 6.5 8C6.22386 8 6 8.22386 6 8.5C6 8.77614 6.22386 9 6.5 9C6.77614 9 7 8.77614 7 8.5ZM16.5 9C16.7761 9 17 8.77614 17 8.5C17 8.22386 16.7761 8 16.5 8C16.2239 8 16 8.22386 16 8.5C16 8.77614 16.2239 9 16.5 9Z" />
                </svg>
                {t('btn_download_beta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MyBusinessEasy. {t('footer_rights')}</p>
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
