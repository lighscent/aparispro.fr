import { useLanguage } from '../context/LanguageContext';
import { Database, Shield, Globe, Settings2, Terminal, Code2 } from 'lucide-react';

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons';

const VSCodeIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.353zm-5.146 14.594L10.826 12l7.178-5.181v10.362z" />
  </svg>
);

const categories = [
  {
    key: 'languages',
    label: { fr: 'Langages', en: 'Languages' },
    color: '#059669',
    items: [
      { name: 'Java', slug: 'openjdk', color: '#ED8B00' },
      { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
      { name: 'Python', slug: 'python', color: '#3776AB' },
      { name: 'Go', slug: 'go', color: '#00ADD8' },
      { name: 'Rust', slug: 'rust', color: '#000000' },
      { name: 'Lua', slug: 'lua', color: '#000080' },
      { name: 'C++', slug: 'cplusplus', color: '#00599C' },
    ],
  },
  {
    key: 'frameworks',
    label: { fr: 'Frameworks', en: 'Frameworks' },
    color: '#7c3aed',
    items: [
      { name: 'EJS', slug: 'ejs', color: '#B4CA65' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06B6D4' },
      { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
      { name: 'React', slug: 'react', color: '#61DAFB' },
      { name: 'Vue.js', slug: 'vuedotjs', color: '#4FC08D' },
    ],
  },
  {
    key: 'databases',
    label: { fr: 'Bases de donn\u00e9es', en: 'Databases' },
    color: '#2563eb',
    items: [
      { name: 'MariaDB', slug: 'mariadb', color: '#003545' },
      { name: 'MySQL', slug: 'mysql', color: '#4479A1' },
      { name: 'SQLite', slug: 'sqlite', color: '#003B57' },
      { name: 'H2', icon: Database, color: '#1e3a5f' },
      { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
      { name: 'SQL', icon: Database, color: '#2563eb' },
    ],
  },
  {
    key: 'infra',
    label: { fr: 'Infrastructure & Outils', en: 'Infrastructure & Tools' },
    color: '#3b82f6',
    items: [
      { name: 'Linux', slug: 'linux', color: '#FCC624' },
      { name: 'Git', slug: 'git', color: '#F05032' },
      { name: 'Docker', slug: 'docker', color: '#2496ED' },
      { name: 'NGINX', slug: 'nginx', color: '#009639' },
      { name: 'Cloudflare', slug: 'cloudflare', color: '#F38020' },
      { name: 'n8n', slug: 'n8n', color: '#EA4B71' },
      { name: 'SSL', icon: Shield, color: '#22c55e' },
    ],
  },
  {
    key: 'network',
    label: { fr: 'R\u00e9seau', en: 'Network' },
    color: '#0891b2',
    items: [
      { name: 'SSH', icon: Terminal, color: '#000000' },
      { name: 'SFTP', icon: Terminal, color: '#000000' },
      { name: 'Reverse Proxy', icon: Shield, color: '#0891b2' },
      { name: 'Proxy Management', icon: Settings2, color: '#0891b2' },
      { name: 'DNS', icon: Globe, color: '#0891b2' },
      { name: 'API', icon: Globe, color: '#0891b2' },
      { name: 'REST API', icon: Globe, color: '#0891b2' },
      { name: 'Socket.io', slug: 'socketdotio', color: '#010101' },
    ],
  },
  {
    key: 'software',
    label: { fr: 'Logiciel', en: 'Software' },
    color: '#d946ef',
    items: [
      { name: 'VS Code', icon: VSCodeIcon, color: '#007ACC' },
      { name: 'OpenCode', icon: Code2, color: '#d946ef' },
      { name: 'MobaXterm', icon: Terminal, color: '#d946ef' },
    ],
  },
];

function TechIcon({ item, size = 38 }) {
  if (item.icon) {
    const Icon = item.icon;
    return <Icon size={size * 0.5} width={size * 0.5} height={size * 0.5} />;
  }
  return (
    <div
      className="stack-cdn-icon"
      style={{
        backgroundColor: item.color,
        width: size * 0.5,
        height: size * 0.5,
        maskImage: `url(${CDN}/${item.slug}.svg)`,
        WebkitMaskImage: `url(${CDN}/${item.slug}.svg)`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  );
}

export default function Stack() {
  const { lang } = useLanguage();

  return (
    <section className="section page-section">
      <div className="page-bg">
        <div className="page-blob page-blob--3" />
        <div className="page-blob page-blob--4" />
        <div className="page-grid-pattern" />
      </div>

      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            {lang === 'fr' ? 'Stack Technique' : 'Tech Stack'}
          </h1>
          <p className="page-header-desc">
            {lang === 'fr'
              ? 'Langages, bases de donn\u00e9es, frameworks et infrastructure.'
              : 'Languages, databases, frameworks, and infrastructure.'}
          </p>
        </div>
      </div>

      <div className="container page-content">
        <div className="stack-grid">
          {categories.map(cat => (
            <div key={cat.key} className="stack-block">
              <h3 className="stack-block-title">
                <span className="stack-block-dot" style={{ background: cat.color }} />
                {cat.label[lang]}
              </h3>
              <div className="stack-chips">
                {cat.items.map((item, i) => (
                  <div key={item.name} className="stack-chip" style={{ '--i': i }}>
                    <span className="stack-chip-icon" style={{ background: `${item.color}1a`, color: item.color }}>
                      <TechIcon item={item} />
                    </span>
                    <span className="stack-chip-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
