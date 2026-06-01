import { useLanguage } from '../context/LanguageContext';
import { User, Pen, Server, Copyright, Shield } from 'lucide-react';

const legalSections = [
  {
    key: 'publisher',
    icon: User,
    title: { fr: 'Éditeur du site', en: 'Site Publisher' },
    rows: [
      { label: { fr: 'Nom', en: 'Name' }, value: 'Augustin PARIS' },
      { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Entrepreneur Individuel (EI)', en: 'Sole Proprietorship (EI)' } },
      { label: { fr: 'Email', en: 'Email' }, value: 'mail@aparispro.fr', href: 'mailto:mail@aparispro.fr' },
      { label: { fr: 'Adresse', en: 'Address' }, value: '4 Rue du Tregorois, 50100 Cherbourg, France' },
      { label: { fr: 'SIRET', en: 'SIRET' }, value: '94830139500067' },
    ],
  },
  {
    key: 'director',
    icon: Pen,
    title: { fr: 'Directeur de la publication', en: 'Publication Director' },
    text: 'Augustin PARIS',
  },
  {
    key: 'host',
    icon: Server,
    title: { fr: 'Hébergeur du site', en: 'Host' },
    rows: [
      { label: { fr: 'Nom', en: 'Name' }, value: 'Vercel Inc.' },
      { label: { fr: 'Adresse', en: 'Address' }, value: '340 S Lemon Ave #4133, Walnut, CA 91789, USA' },
    ],
  },
  {
    key: 'copyright',
    icon: Copyright,
    title: { fr: 'Propriété intellectuelle', en: 'Intellectual Property' },
    text: {
      fr: 'Le site et l’ensemble de son contenu (textes, images, designs, projets présentés) sont protégés par le droit d’auteur. Toute reproduction ou utilisation sans autorisation préalable est interdite.',
      en: 'The site and all its content (texts, images, designs, presented projects) are protected by copyright. Any reproduction or use without prior authorization is prohibited.',
    },
  },
  {
    key: 'privacy',
    icon: Shield,
    title: { fr: 'Données personnelles et Cookies', en: 'Personal Data & Cookies' },
    text: {
      fr: 'Aucune donnée personnelle n’est collectée et aucun cookie de traçage n’est utilisé.',
      en: 'No personal data is collected and no tracking cookies are used.',
    },
  },
];

function localized(value, lang) {
  return typeof value === 'object' ? value[lang] : value;
}

export default function MentionsLegales() {
  const { lang } = useLanguage();

  return (
    <section className="section page-section">
      <div className="page-bg">
        <div className="page-blob page-blob--1" />
        <div className="page-blob page-blob--5" />
        <div className="page-grid-pattern" />
      </div>

      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            {lang === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
          </h1>
          <p className="page-header-desc">
            {lang === 'fr'
              ? 'Informations légales relatives au site aparispro.fr'
              : 'Legal information regarding the site aparispro.fr'}
          </p>
        </div>
      </div>

      <div className="container page-content">
        <div className="legal-list">
          {legalSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <article key={section.key} className="legal-card" style={{ '--i': index }}>
                <div className="legal-card-header">
                  <Icon size={20} />
                  <h2>{section.title[lang]}</h2>
                </div>

                {section.rows ? (
                  <div className="legal-details">
                    {section.rows.map(row => {
                      const value = localized(row.value, lang);

                      return (
                        <div key={`${section.key}-${row.label.en}`} className="legal-detail">
                          <span className="legal-detail-label">
                            {row.label[lang]}
                          </span>
                          <span className="legal-detail-value">
                            {row.href ? <a href={row.href}>{value}</a> : value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="legal-text">{localized(section.text, lang)}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
