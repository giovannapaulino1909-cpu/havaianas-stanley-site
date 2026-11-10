
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowDown, ArrowLeft, ArrowRight, Check, Gift,
  Heart, Menu, RotateCcw, Sun, X
} from 'lucide-react';
import './styles.css';

const KIT_PRICE = 'R$ 199,90';

const products = {
  chinelo: [
    { id: 'amarelo', name: 'Sol de Verão', color: 'Amarelo vibrante', image: '/images/chinelo-amarelo.png' },
    { id: 'rosa', name: 'Rosa Poente', color: 'Rosa coral', image: '/images/chinelo-rosa.png' },
    { id: 'laranja', name: 'Pôr do Sol de Verão', color: 'Laranja vivo', image: '/images/chinelo-laranja.webp' }
  ],
  copo: [
    { id: 'amarelo', name: 'Amarelo Sol', color: 'Amarelo', image: '/images/copo-amarelo.png' },
    { id: 'rosa', name: 'Rosa Sunset', color: 'Rosa coral', image: '/images/copo-rosa.png' },
    { id: 'laranja', name: 'Laranja Lazer', color: 'Laranja', image: '/images/copo-laranja.png' }
  ],
  adesivo: [
    {
      id: 'urbano',
      name: 'Cartela Amarelo Sol',
      description: 'Cartela de adesivos Amarelo Sol',
      image: '/images/Cartela de Adesivos Amarelo Sol .png'
    },
    {
      id: 'praia',
      name: 'Cartela Pôr do Sol',
      description: 'Cartela de adesivos Laranja Pôr do Sol',
      image: '/images/Cartela de Adesivos Laranja Pôr do Sol .PNG'
    },
    {
      id: 'mar',
      name: 'Cartela Festa na Praia',
      description: 'Cartela de adesivos Rosa Festa na Praia',
      image: '/images/Cartela de Adesivos Rosa Festa na Praia .PNG'
    }
  ]
};

const presets = [
  { title: 'Sol de Verão', subtitle: 'Energia lá em cima', color: '#ffbd31' },
  { title: 'Rosa Poente', subtitle: 'O céu é o limite', color: '#f45d79' },
  { title: 'Pôr do Sol de Verão', subtitle: 'Dias que não acabam', color: '#ff713f' }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span>Havaianas</span>
        <b>×</b>
        <span className="stanley-word">STANLEY</span>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav nav-open' : 'nav'}>
        <Link to="/#colecao" onClick={() => setOpen(false)}>A coleção</Link>
        <Link to="/#sobre" onClick={() => setOpen(false)}>A collab</Link>
        <Link className="nav-cta" to="/montar-kit" onClick={() => setOpen(false)}>
          Monte seu kit <ArrowRight size={16} />
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="brand footer-brand">
        <span>Havaianas</span><b>×</b><span className="stanley-word">STANLEY</span>
      </div>
      <p>Feito para viver o verão do seu jeito.</p>
      <small>Projeto conceitual de collab • 2026</small>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Sun size={15} /> EDIÇÃO ESPECIAL DE VERÃO</div>
            <h1>Seu verão.<br /><em>Suas regras.</em></h1>
            <p>Do primeiro raio de sol ao último mergulho: uma collab feita para acompanhar cada momento.</p>

            <div className="hero-actions">
              <Link className="button button-dark" to="/montar-kit">
                Monte seu kit <ArrowRight size={18} />
              </Link>
              <a className="text-link" href="#colecao">
                Descubra a coleção <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-stamp">
              <span>☀</span>
              <small>DIAS DE SOL<br />E BOAS HISTÓRIAS</small>
            </div>
          </div>

          <div className="hero-art">
            <div className="sun-disc" />
            <div className="wave wave-one" />
            <div className="wave wave-two" />

            <div className="palm" aria-hidden="true">
              <svg viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M91 91 C67 59 35 48 8 57 C39 60 67 76 93 98 C72 57 65 27 43 8 C56 39 72 69 94 99 C87 58 94 28 113 7 C104 39 101 69 97 101 C116 65 143 47 171 50 C143 62 117 82 98 105 C137 82 163 87 178 108 C148 98 120 101 99 111 C135 113 155 136 157 163 C140 137 120 119 97 113 C116 147 115 174 99 196 C104 164 101 137 94 114 C87 151 72 173 50 185 C67 155 78 132 90 110 C59 137 33 145 9 136 C39 127 65 111 91 103 C56 113 29 106 13 88 C43 96 68 97 91 91 Z" />
                  <path d="M88 96 C99 119 109 146 111 172 C113 192 108 207 100 220 L127 220 C136 198 133 176 127 151 C120 125 106 105 96 91 Z" />
                </g>
              </svg>
            </div>

            <div className="hero-label">SUMMER<br />IS A STATE<br />OF MIND.</div>
            <div className="collab-pill">Havaianas <b>×</b> STANLEY</div>
          </div>
        </section>

        <div className="ticker">
          <span>FEITO PARA O SOL</span><i>✳︎</i>
          <span>FEITO PARA VOCÊ</span><i>✳︎</i>
          <span>SEU VERÃO, SEU KIT</span><i>✳︎</i>
          <span>FEITO PARA O SOL</span>
        </div>

        <section className="intro section" id="sobre">
          <div className="section-kicker">DUAS MARCAS. UM SÓ CLIMA.</div>
          <h2>O match perfeito<br />para <em>dias incríveis.</em></h2>
          <p>O conforto que já é a cara do Brasil encontra a companhia perfeita para manter suas bebidas por perto. Escolha suas cores, misture do seu jeito e leve o verão com você.</p>
        </section>

        <section className="collection section" id="colecao">
          <div className="section-heading">
            <div>
              <div className="section-kicker">CONHEÇA AS COMBINAÇÕES</div>
              <h2>Três vibes.<br /><em>Mil possibilidades.</em></h2>
            </div>
            <Link to="/montar-kit" className="text-link">
              Personalizar meu kit <ArrowRight size={17} />
            </Link>
          </div>

          <div className="preset-grid">
            {presets.map((p, i) => (
              <article className="preset-card" key={p.title} style={{ '--accent': p.color }}>
                <div className="preset-top">
                  <span>0{i + 1} / 03</span><span className="color-dot" />
                </div>
                <div className="preset-illustration">
                  <img src={products.chinelo[i].image} alt={products.chinelo[i].name} />
                  <img src={products.copo[i].image} alt={products.copo[i].name} />
                </div>
                <div className="preset-info">
                  <span>{p.subtitle}</span>
                  <h3>{p.title}</h3>
                  <p>Chinelo + copo + adesivo</p>
                  <strong className="preset-price">{KIT_PRICE}</strong>
                  <Link to="/montar-kit">Quero essa vibe <ArrowRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="builder-banner">
          <div className="banner-sun" aria-hidden="true">✳︎</div>
          <div className="section-kicker">A SUA COMBINAÇÃO, AS SUAS CORES</div>
          <h2>Não encontrou<br />a sua cara? <em>Crie!</em></h2>
          <p>Combine chinelos, copos e adesivos para montar um kit que é só seu. Todos por {KIT_PRICE}.</p>
          <Link to="/montar-kit" className="button button-dark">
            Começar a criar <ArrowRight size={18} />
          </Link>
        </section>

        <section className="gift-section section">
          <div className="gift-copy">
            <div className="section-kicker">UM PRESENTE PARA VOCÊ</div>
            <h2>O verão fica<br />melhor com <em>brinde.</em></h2>
            <p>Todo kit montado acompanha uma ecobag exclusiva da collab. Um carinho extra para levar seus essenciais por aí.</p>
            <div className="gift-tag"><Gift size={18} /> Ecobag de brinde em todos os kits</div>
          </div>
          <div className="gift-image">
            <img src="/images/ecobag.png" alt="Ecobag exclusiva Havaianas e Stanley" />
          </div>
        </section>

        <section className="qr-section">
          <div>
            <div className="section-kicker">LEVE A EXPERIÊNCIA COM VOCÊ</div>
            <h2>Escaneie.<br /><em>Entre no verão.</em></h2>
            <p>Escaneie o código com a câmera do celular e acesse a experiência da collab.</p>
          </div>
          <div className="qr-card">
            <QRCodeSVG value={window.location.origin + '/'} size={164} level="H" includeMargin />
            <b>Havaianas × STANLEY</b>
            <small>APONTE A CÂMERA E DESCUBRA</small>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProductChoice({ type, selected, onSelect }) {
  return (
    <div className={`choice-grid ${type === 'adesivo' ? 'sticker-grid' : ''}`}>
      {products[type].map(p => (
        <button
          key={p.id}
          className={`choice ${selected.id === p.id ? 'choice-selected' : ''}`}
          onClick={() => onSelect(p)}
        >
          <span className="choice-check">
            {selected.id === p.id ? <Check size={14} /> : null}
          </span>

          {type === 'adesivo' ? (
            <div className="sticker-art">
              <img className="sticker-sheet-image" src={p.image} alt={p.name} />
            </div>
          ) : (
            <img src={p.image} alt={p.name} />
          )}

          <b>{p.name}</b>
          <small>{type === 'adesivo' ? p.description : p.color}</small>
        </button>
      ))}
    </div>
  );
}

function Confirmation({ chosen, orderNumber }) {
  return (
    <>
      <Header />
      <main className="confirmation-page">
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <Check size={42} strokeWidth={3} />
          </div>

          <div className="section-kicker">HAVA IANAS × STANLEY</div>
          <h1>Compra efetuada<br /><em>com sucesso!</em></h1>
          <p className="confirmation-message">
            Seu kit de verão foi confirmado. Obrigado por fazer parte dessa experiência!
          </p>

          <div className="order-number">
            <span>NÚMERO DO PEDIDO</span>
            <strong>{orderNumber}</strong>
          </div>

          <div className="confirmation-products">
            <h2>Seu pedido</h2>

            <div className="confirmation-item">
              <img src={chosen.chinelo.image} alt="Chinelo" />
              <div><small>CHINELO HAVAIANAS</small><strong>{chosen.chinelo.name}</strong></div>
            </div>

            <div className="confirmation-item">
              <img src={chosen.copo.image} alt="Copo Stanley" />
              <div><small>COPO STANLEY</small><strong>{chosen.copo.name}</strong></div>
            </div>

            <div className="confirmation-item">
              <img src={chosen.adesivo.image} alt="Cartela de adesivos" />
              <div><small>CARTELA DE ADESIVOS</small><strong>{chosen.adesivo.name}</strong></div>
            </div>

            <div className="confirmation-item">
              <img src="/images/ecobag.png" alt="Ecobag" />
              <div><small>BRINDE ESPECIAL</small><strong>Ecobag exclusiva</strong></div>
              <span className="free-tag">GRÁTIS</span>
            </div>
          </div>

          <div className="confirmation-total">
            <span>VALOR TOTAL</span>
            <strong>{KIT_PRICE}</strong>
          </div>

          <div className="confirmation-demo">
            <Gift size={17} />
            Compra demonstrativa — projeto acadêmico. Nenhum pagamento foi realizado.
          </div>

          <Link to="/" className="button button-dark confirmation-home">
            Voltar à página inicial <ArrowRight size={17} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Builder() {
  const [chosen, setChosen] = useState({
    chinelo: products.chinelo[0],
    copo: products.copo[0],
    adesivo: products.adesivo[0]
  });

  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [orderNumber] = useState(() => `HS-${Date.now().toString().slice(-6)}`);

  const labels = ['Escolha seu chinelo', 'Escolha seu copo', 'Escolha seu adesivo'];
  const types = ['chinelo', 'copo', 'adesivo'];

  const chosenPreset = useMemo(() => {
    const index = presets.findIndex((p, i) =>
      products.chinelo[i].id === chosen.chinelo.id &&
      products.copo[i].id === chosen.copo.id
    );
    return index >= 0 ? presets[index].title : 'Kit personalizado';
  }, [chosen]);

  const update = (type, product) => {
    setChosen(current => ({ ...current, [type]: product }));
  };

  const reset = () => {
    setChosen({
      chinelo: products.chinelo[0],
      copo: products.copo[0],
      adesivo: products.adesivo[0]
    });
    setStep(0);
    setDone(false);
  };

  if (done) {
    return <Confirmation chosen={chosen} orderNumber={orderNumber} />;
  }

  return (
    <>
      <Header />
      <main className="builder-page">
        <div className="builder-head">
          <Link to="/" className="back-link"><ArrowLeft size={16} /> Voltar para a campanha</Link>
          <div className="section-kicker">SUA EXPERIÊNCIA DE VERÃO</div>
          <h1>Monte seu <em>kit.</em></h1>
          <p>Escolha suas peças favoritas. A combinação perfeita é aquela que tem a sua cara.</p>
        </div>

        <div className="builder-layout">
          <section className="builder-controls">
            <div className="steps">
              {labels.map((label, i) => (
                <button
                  key={label}
                  className={step === i ? 'step active' : step > i ? 'step complete' : 'step'}
                  onClick={() => setStep(i)}
                >
                  <span>{step > i ? <Check size={14} /> : i + 1}</span>
                  {label}
                </button>
              ))}
            </div>

            <div className="picker-panel">
              <div className="picker-title">
                <span>ETAPA 0{step + 1} / 03</span>
                <h2>{labels[step]}</h2>
                <p>
                  {step === 0
                    ? 'Escolha a cor que vai acompanhar seus passos.'
                    : step === 1
                    ? 'Seu companheiro para manter a bebida por perto.'
                    : 'O toque final para deixar seu kit com personalidade.'}
                </p>
              </div>

              <ProductChoice
                type={types[step]}
                selected={chosen[types[step]]}
                onSelect={product => update(types[step], product)}
              />

              <div className="picker-actions">
                <button className="reset-btn" onClick={reset}>
                  <RotateCcw size={15} /> Recomeçar
                </button>
                <button
                  className="button button-dark"
                  onClick={() => step < 2 ? setStep(step + 1) : setDone(true)}
                >
                  {step < 2 ? 'Próximo' : 'Concluir compra'}
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <div className="size-note">
              <span>ⓘ</span> A numeração dos chinelos será confirmada na próxima etapa de compra.
            </div>
          </section>

          <aside className="summary-panel">
            <div className="summary-top">
              <span>SEU KIT EM TEMPO REAL</span>
              <span className="live-dot">● AO VIVO</span>
            </div>

            <div className="summary-items">
              <div className="summary-item">
                <img src={chosen.chinelo.image} alt="Chinelo escolhido" />
                <div><small>CHINELO</small><b>{chosen.chinelo.name}</b></div>
              </div>

              <div className="summary-item">
                <img src={chosen.copo.image} alt="Copo escolhido" />
                <div><small>COPO STANLEY</small><b>{chosen.copo.name}</b></div>
              </div>

              <div className="summary-item">
                <div className="summary-sticker">
                  <img src={chosen.adesivo.image} alt="Adesivo escolhido" />
                </div>
                <div><small>ADESIVO</small><b>{chosen.adesivo.name}</b></div>
              </div>
            </div>

            <div className="summary-divider" />

            <div className="gift-summary">
              <img src="/images/ecobag.png" alt="Ecobag de brinde" />
              <div>
                <small><Gift size={13} /> BRINDE ESPECIAL</small>
                <b>Ecobag exclusiva</b>
                <span>Incluída automaticamente</span>
              </div>
              <span className="free-tag">GRÁTIS</span>
            </div>

            <div className="summary-footer">
              <div className="summary-price">
                <span>Preço único do kit</span>
                <strong>{KIT_PRICE}</strong>
              </div>
              <div className="summary-combination">
                <span>Sua combinação</span>
                <b>{chosenPreset}</b>
              </div>
              <button className="button button-coral" onClick={() => setDone(true)}>
                Concluir compra <ArrowRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/montar-kit" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
