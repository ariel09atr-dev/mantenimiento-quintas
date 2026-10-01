import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const whatsappNumber = "5493425274087";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const serviceCards = [
  {
    number: "01",
    title: "Mantenimiento general",
    description:
      "Coordinamos las tareas necesarias para conservar la quinta cuidada, ordenada y lista para ser disfrutada.",
  },
  {
    number: "02",
    title: "Seguimiento periódico",
    description:
      "Organizamos visitas con una frecuencia acordada para sostener el buen estado de la propiedad durante todo el año.",
  },
  {
    number: "03",
    title: "Puesta a punto",
    description:
      "Preparamos los espacios para una fecha especial, una temporada de uso o el momento en que usted necesite encontrarlos en condiciones.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Conversamos",
    description: "Nos cuenta qué necesita y qué tipo de mantenimiento busca para su quinta.",
  },
  {
    number: "02",
    title: "Evaluamos",
    description: "Revisamos las tareas necesarias y definimos una modalidad de trabajo clara.",
  },
  {
    number: "03",
    title: "Nos ocupamos",
    description: "Realizamos el trabajo con responsabilidad y atención a cada detalle.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Mantenimiento de Quintas, inicio">
            <span className="brand-mark" aria-hidden="true">
              <Leaf size={17} strokeWidth={1.7} />
            </span>
            <span className="brand-text">
              <span className="brand-name">Mantenimiento</span>
              <span className="brand-subtitle">de quintas</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Quiénes somos</a>
            <a href="#proceso">Cómo trabajamos</a>
          </nav>

          <a className="header-contact" href={whatsappLink} target="_blank" rel="noreferrer">
            <span>Solicitar presupuesto</span>
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content page-width">
          <p className="eyebrow eyebrow-light">Cuidado responsable para su propiedad</p>
          <h1 id="hero-title">
            Su quinta, <em>siempre</em>
            <br />
            en buenas manos.
          </h1>
          <p className="hero-copy">
            Mantenimiento y cuidado periódico para que cada espacio se conserve limpio,
            ordenado y listo para disfrutar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Hablar por WhatsApp
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
            <a className="text-link text-link-light" href="#servicios">
              Conocer el servicio
              <ArrowDown size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-line" />
          <span>Servicio personalizado</span>
        </div>
      </section>

      <section className="intro-section page-width" id="nosotros" aria-labelledby="intro-title">
        <div className="section-label">
          <span className="label-line" />
          <span>01 / Quiénes somos</span>
        </div>
        <div className="intro-grid">
          <h2 id="intro-title">
            Nos ocupamos de lo importante para que usted pueda <em>disfrutar</em> de su quinta.
          </h2>
          <div className="intro-copy">
            <p>
              Somos un emprendimiento familiar dedicado al mantenimiento de quintas y
              propiedades de descanso. Trabajamos con responsabilidad, compromiso y atención a
              cada detalle para conservar los espacios en excelentes condiciones.
            </p>
            <p>
              Entendemos que una propiedad requiere cuidado constante y alguien de confianza.
              Por eso ofrecemos un trato directo y una forma de trabajo clara, adaptada a las
              necesidades de cada lugar.
            </p>
            <a className="text-link text-link-dark" href={whatsappLink} target="_blank" rel="noreferrer">
              Conversar sobre su propiedad
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>

      <section className="service-section" id="servicios" aria-labelledby="services-title">
        <div className="page-width">
          <div className="section-heading-row">
            <div>
              <div className="section-label section-label-muted">
                <span className="label-line" />
                <span>02 / Qué hacemos</span>
              </div>
              <h2 id="services-title">
                Un servicio pensado para cuidar <em>cada detalle.</em>
              </h2>
            </div>
            <p className="section-heading-copy">
              Definimos el trabajo en función de las necesidades reales de su propiedad, con una
              propuesta simple y sin tareas innecesarias.
            </p>
          </div>

          <div className="service-list">
            {serviceCards.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight className="service-arrow" size={19} strokeWidth={1.7} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section page-width" aria-labelledby="trust-title">
        <div className="trust-visual" aria-hidden="true">
          <div className="trust-visual-inner">
            <span className="trust-visual-kicker">Cuidado constante</span>
            <span className="trust-visual-number">03</span>
            <span className="trust-visual-caption">La diferencia está en la continuidad.</span>
          </div>
        </div>
        <div className="trust-content">
          <div className="section-label">
            <span className="label-line" />
            <span>03 / Nuestra forma de trabajar</span>
          </div>
          <h2 id="trust-title">
            Confianza construida con trabajo <em>bien hecho.</em>
          </h2>
          <p>
            Cada quinta tiene sus propios tiempos, materiales y necesidades. Escuchamos,
            observamos y organizamos el trabajo para que el resultado sea consistente visita tras
            visita.
          </p>
          <ul className="trust-list">
            <li>
              <ShieldCheck size={19} strokeWidth={1.7} />
              <span>Trato directo y responsable</span>
            </li>
            <li>
              <Clock3 size={19} strokeWidth={1.7} />
              <span>Coordinación clara de cada visita</span>
            </li>
            <li>
              <Check size={19} strokeWidth={1.7} />
              <span>Trabajo prolijo y atención al detalle</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="process-section" id="proceso" aria-labelledby="process-title">
        <div className="page-width">
          <div className="section-label section-label-muted">
            <span className="label-line" />
            <span>04 / Cómo trabajamos</span>
          </div>
          <div className="process-heading">
            <h2 id="process-title">Simple, claro y a la medida de su propiedad.</h2>
            <p>
              Nos adaptamos al ritmo de cada cliente y buscamos que todo el proceso sea fácil desde
              el primer contacto.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section page-width" aria-labelledby="contact-title">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="section-label section-label-light">
              <span className="label-line" />
              <span>05 / Contacto</span>
            </div>
            <h2 id="contact-title">
              Hablemos sobre el cuidado de su <em>quinta.</em>
            </h2>
            <p>
              Cuéntenos qué necesita y coordinamos una conversación para conocer la propiedad y
              preparar una propuesta adecuada.
            </p>
          </div>
          <div className="contact-action">
            <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={18} strokeWidth={1.8} />
              Escribir por WhatsApp
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
            <a className="contact-phone" href={`tel:+${whatsappNumber}`}>
              <Phone size={16} strokeWidth={1.8} />
              +54 9 342 527-4087
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner page-width">
          <a className="brand brand-footer" href="#inicio" aria-label="Volver al inicio">
            <span className="brand-mark" aria-hidden="true">
              <Leaf size={17} strokeWidth={1.7} />
            </span>
            <span className="brand-text">
              <span className="brand-name">Mantenimiento</span>
              <span className="brand-subtitle">de quintas</span>
            </span>
          </a>
          <p>Servicio responsable para propiedades que merecen estar bien cuidadas.</p>
          <span className="footer-copyright">© {new Date().getFullYear()} · Todos los derechos reservados</span>
        </div>
      </footer>
    </main>
  );
}
