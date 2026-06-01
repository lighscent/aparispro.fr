import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Augustin PARIS. {t.footer.rights}</p>
        <Link to="/mentions-legales" className="footer-legal">
          {lang === 'fr' ? 'Mentions l\u00e9gales' : 'Legal Notice'}
        </Link>
      </div>
    </footer>
  );
}
