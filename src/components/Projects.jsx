import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.22.69.83.57A12 12 0 0 0 12 .3" />
  </svg>
);

const projects = [
  {
    title: 'Desktop Engineer',
    descriptionFr: 'Le toolkit ultime offline-first pour ingénieurs système, développeurs et administrateurs.',
    descriptionEn: 'The ultimate offline-first toolkit for system engineers, developers, and sysadmins.',
    tags: { fr: ['Hors-ligne', 'Boîte à outils système', 'Outils développeur'], en: ['Offline-first', 'System Toolkit', 'Developer Tools'] },
    url: 'https://desktop.engineer/',
    code: 'https://github.com/lighscent/desktop.engineer',
    images: ['/content/desktop-engineer-screen.png'],
  },
  {
    title: 'MegaNetwork',
    descriptionFr: 'Serveur Minecraft avec boutique intégrée via Stripe.',
    descriptionEn: 'Minecraft server with an integrated Stripe shop.',
    tags: { fr: ['Minecraft', 'Stripe', 'Serveur'], en: ['Minecraft', 'Stripe', 'Server'] },
    url: 'https://meganetwork.space/',
    code: '#',
    images: ['/content/meganetwork-screen-new-1.png', '/content/meganetwork-screen-new-2.png'],
  },
  {
    title: 'Echo',
    descriptionFr: 'Plateforme de feedback de suggestions et de bugs pour le projet MegaNetwork.',
    descriptionEn: 'Suggestion and bug feedback platform for the MegaNetwork project.',
    tags: { fr: ['Plateforme de feedback', 'Suggestions', 'Bugs'], en: ['Feedback platform', 'Suggestions', 'Bugs'] },
    url: 'https://echo.meganetwork.space/',
    code: '#',
    images: ['/content/echo-screen-1.png', '/content/echo-screen-2.png'],
  }
];

export default function Projects() {
  const { lang, t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox(l => ({ ...l, index: Math.max(0, l.index - 1), zoomed: false }));
      if (e.key === 'ArrowRight') setLightbox(l => ({ ...l, index: Math.min(l.images.length - 1, l.index + 1), zoomed: false }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  const toggleZoom = (e) => {
    e.stopPropagation();
    setLightbox(l => ({ ...l, zoomed: !l.zoomed }));
  };

  return (
    <section id="projects" className="section page-section">
      <div className="page-bg">
        <div className="page-blob page-blob--3" />
        <div className="page-blob page-blob--4" />
        <div className="page-grid-pattern" />
      </div>

      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">{t.projects.title}</h1>
          <p className="page-header-desc">{t.projects.subtitle}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="project-card project-card--hero" style={{ '--i': i }}>
              <div className="project-card-accent" />
              {p.images && (
                <div className="project-card-images">
                  <div className="project-card-image-main" onClick={() => setLightbox({ images: p.images, index: 0 })}>
                    <img src={p.images[0]} alt={`${p.title} screenshot`} />
                  </div>
                  {p.images.length > 1 && (
                    <div className="project-card-image-overlay" onClick={() => setLightbox({ images: p.images, index: 1 })}>
                      <img src={p.images[1]} alt={`${p.title} screenshot 2`} />
                      <span className="project-card-image-count">+{p.images.length - 1}</span>
                    </div>
                  )}
                </div>
              )}
              <div className="project-card-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">
                  {lang === 'fr' ? p.descriptionFr : p.descriptionEn}
                </p>
                <div className="project-tags">
                  {p.tags[lang].map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-card-footer">
                <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  {t.projects.view} <ExternalLink size={14} />
                </a>
                {p.code && p.code !== '#' && (
                  <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                    <GithubIcon /> {t.projects.code}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className={`lightbox${lightbox.zoomed ? ' lightbox--zoomed' : ''}`} onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <button className="lightbox-zoom-toggle" onClick={toggleZoom}>
            {lightbox.zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>
          {lightbox.images.length > 1 && lightbox.index > 0 && (
            <button className="lightbox-arrow lightbox-arrow--left" onClick={(e) => { e.stopPropagation(); setLightbox(l => ({ ...l, index: l.index - 1, zoomed: false })); }}>
              <ChevronLeft size={32} />
            </button>
          )}
          <div className="lightbox-img-wrap" onClick={toggleZoom}>
            <img src={lightbox.images[lightbox.index]} alt="" className="lightbox-img" />
          </div>
          {lightbox.images.length > 1 && lightbox.index < lightbox.images.length - 1 && (
            <button className="lightbox-arrow lightbox-arrow--right" onClick={(e) => { e.stopPropagation(); setLightbox(l => ({ ...l, index: l.index + 1, zoomed: false })); }}>
              <ChevronRight size={32} />
            </button>
          )}
          <span className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</span>
        </div>
      )}
    </section>
  );
}
