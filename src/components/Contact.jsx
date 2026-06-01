import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.22.69.83.57A12 12 0 0 0 12 .3" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="section page-section">
      <div className="page-bg">
        <div className="page-blob page-blob--3" />
        <div className="page-blob page-blob--5" />
        <div className="page-grid-pattern" />
      </div>

      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">{t.contact.title}</h1>
          <p className="page-header-desc">{t.contact.subtitle}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="contact-list">
          <a href="mailto:mail@aparispro.fr" className="contact-item">
            <Mail size={20} />
            <div>
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">mail@aparispro.fr</span>
            </div>
          </a>
          <div className="contact-item">
            <MapPin size={20} />
            <div>
              <span className="contact-item-label">{lang === 'fr' ? 'Localisation' : 'Location'}</span>
              <span className="contact-item-value">France</span>
            </div>
          </div>
          <a href="https://github.com/lighscent" target="_blank" rel="noreferrer" className="contact-item">
            <GithubIcon />
            <div>
              <span className="contact-item-label">GitHub</span>
              <span className="contact-item-value">github.com/lighscent</span>
            </div>
          </a>
          <a href="https://wa.me/+33768034107" target="_blank" rel="noreferrer" className="contact-item">
            <WhatsAppIcon />
            <div>
              <span className="contact-item-label">WhatsApp</span>
              <span className="contact-item-value">+33 7 68 03 41 07</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
