import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Download, Search, Instagram, MessageCircle, Sparkles, Heart, PackageCheck, Menu, X } from 'lucide-react';
import './styles.css';

const products = [
  { id: 1, name: 'Petal Halo Urli', price: 89, image: '/images/petal-halo-urli.jpg' },
  { id: 2, name: 'Coral Flare Daisy', price: 49, image: '/images/coral-flare-daisy.jpg' },
  { id: 3, name: 'Ruby Rosette', price: 49, image: '/images/ruby-rosette.jpg' },
  { id: 4, name: 'Ember Daisy', price: 49, image: '/images/ember-daisy.jpg' },
  { id: 5, name: 'Saffron Sunflower', price: 49, image: '/images/saffron-sunflower.jpg' },
  { id: 6, name: 'Pearl Petal Daisy', price: 49, image: '/images/pearl-petal-daisy.jpg' },
  { id: 7, name: 'Magenta Spark Daisy', price: 49, image: '/images/magenta-spark-daisy.jpg' },
  { id: 8, name: 'Pink Confetti Jar', price: 99, image: '/images/pink-confetti-jar.jpg' },
  { id: 9, name: 'Pink Filigree Spire', price: 79, image: '/images/pink-filigree-spire.jpg' },
  { id: 10, name: 'Rosette Glow Jar', price: 59, image: '/images/rosette-glow-jar.jpg' },
  { id: 11, name: 'Amethyst Tulip', price: 59, image: '/images/amethyst-tulip.jpg' },
  { id: 12, name: 'Blush & Sage Petals', price: 49, unit: 'Piece', image: '/images/blush-sage-petals.jpg' },
  { id: 13, name: 'Ivory Sunflower', price: 49, image: '/images/ivory-sunflower.jpg' },
  { id: 14, name: 'Daisy Parade', price: 49, unit: 'Piece', image: '/images/daisy-parade.jpg' },
  { id: 15, name: 'Mini Meadow Lights', price: 59, image: '/images/mini-meadow-lights.jpg' },
  { id: 16, name: 'Amber Sunflower Jar', price: 119, image: '/images/amber-sunflower-jar.jpg' },
  { id: 17, name: 'Crimson Petal Cup', price: 119, image: '/images/crimson-petal-cup.jpg' },
  { id: 18, name: 'Ruby Ribbon Mug', price: 89, image: '/images/ruby-ribbon-mug.jpg' },
  { id: 19, name: 'Crimson Crown Cup', price: 119, image: '/images/crimson-crown-cup.jpg' },
  { id: 20, name: 'Pearl Pop Cube', price: 99, image: '/images/pearl-pop-cube.jpg' },
  { id: 21, name: 'Sunshine Bouquet', price: 69, image: '/images/sunshine-bouquet.jpg' },
  { id: 22, name: 'Amber Fizz Goblet', price: 119, image: '/images/amber-fizz-goblet.jpg' },
];

const WHATSAPP_NUMBER = '916388184100';
const INSTAGRAM_URL = 'https://www.instagram.com/maancandles.13/';

function money(product) {
  return `₹${product.price}${product.unit ? `/${product.unit}` : ''}`;
}

function orderUrl(product) {
  const message = product
    ? `Hi Maan Candles! I'd like to order ${product.name} (${money(product)}). Please share availability and delivery details.`
    : 'Hi Maan Candles! I would like to place an order. Please share availability and delivery details.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <a className="product-image-wrap" href={orderUrl(product)} target="_blank" rel="noreferrer" aria-label={`Ask about ${product.name} on WhatsApp`}>
        <img src={product.image} alt={product.name} loading={product.id < 5 ? 'eager' : 'lazy'} />
        <span className="image-number">{String(product.id).padStart(2, '0')}</span>
      </a>
      <div className="product-info">
        <div className="product-title-line">
          <h3>{product.name}</h3>
          <p className="product-price">{money(product)}</p>
        </div>
        <a className="card-order-link" href={orderUrl(product)} target="_blank" rel="noreferrer">
          Order on WhatsApp <ArrowRight size={15} strokeWidth={1.8} />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return products;
    return products.filter((p) => p.name.toLowerCase().includes(query) || money(p).toLowerCase().includes(query));
  }, [search]);

  return (
    <div className="site-shell">
      <div className="shipping-strip"><Sparkles size={13} /> Handcrafted with love <span className="strip-dot">·</span> Shipping charges vary by order quantity <Sparkles size={13} /></div>
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="Maan Candles home">
          <span className="brand-mark"><span>m</span></span>
          <span className="brand-name-wrap"><span className="brand-name">maan candles</span><span className="brand-tagline">LITTLE LIGHTS. BEAUTIFUL MOMENTS.</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#collection" onClick={() => setMenuOpen(false)}>The Collection</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Instagram <ArrowRight size={13} /></a>
        </nav>
        <a className="header-cta" href={orderUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Let's Order</a>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-rule" /> MADE BY HAND, MADE WITH HEART</div>
            <h1>Little lights.<br /><em>Beautiful</em> moments.</h1>
            <p className="hero-description">Thoughtful little candles made to bring warmth, wonder, and a softer glow to your everyday.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#collection">Explore the collection <ArrowDown size={16} /></a>
              <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> Follow our journey</a>
              <a className="text-link pdf-link" href="/Maan_Candles_Catalogue.pdf" download="Maan-Candles-Catalogue.pdf"><Download size={16} /> Download PDF</a>
            </div>
            <div className="hero-footnote"><Heart size={14} fill="currentColor" /> Small-batch candles, crafted with care</div>
          </div>
          <div className="hero-art">
            <div className="hero-photo-frame"><img src="/images/sunshine-bouquet.jpg" alt="Sunshine Bouquet candle from Maan Candles" /></div>
            <div className="hero-stamp"><span>made</span><strong>with</strong><span>love</span><Heart size={15} fill="currentColor" /></div>
            <div className="hero-caption"><span>THE CANDLE COLLECTION</span><span>01 — 22</span></div>
          </div>
          <div className="hero-decor decor-one">✳</div><div className="hero-decor decor-two">✦</div>
        </section>

        <section className="collection-section" id="collection">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-rule" /> FIND YOUR LITTLE GLOW</div>
              <h2>Made to make <em>moments.</em></h2>
              <p className="section-intro">From floral favourites to playful little shapes, find the candle that feels like you.</p>
            </div>
            <div className="collection-meta"><span className="collection-count">{products.length.toString().padStart(2, '0')}</span><span>little works<br />of candle art</span></div>
          </div>

          <div className="collection-tools">
            <p>THE COLLECTION <span>—</span> {visibleProducts.length} {visibleProducts.length === 1 ? 'DESIGN' : 'DESIGNS'}</p>
            <label className="search-box"><Search size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find your candle…" aria-label="Search candles" />{search && <button type="button" onClick={() => setSearch('')} aria-label="Clear search"><X size={14} /></button>}</label>
          </div>

          {visibleProducts.length ? (
            <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          ) : (
            <div className="empty-state"><span>✳</span><h3>No candle found just yet.</h3><p>Try a different name or clear your search.</p><button className="button button-dark" type="button" onClick={() => setSearch('')}>Show all candles</button></div>
          )}
        </section>

        <section className="note-section" id="our-note">
          <div className="note-ornament" aria-hidden="true"><span>✳</span><i /><span>✦</span></div>
          <div className="note-content">
            <div className="eyebrow eyebrow-centered">A LITTLE NOTE FROM MAAN CANDLES</div>
            <h2>Made with love.<br /><em>Sent with warmth.</em></h2>
            <p className="note-lead">Handcrafted with love, made to brighten your moments. 🤍</p>
            <div className="note-details">
              <div className="note-detail"><span className="note-icon"><MessageCircle size={18} /></span><div><h3>To place your order</h3><p>DM us on Instagram <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@maancandles.13</a> or message us on WhatsApp at <a href={orderUrl()} target="_blank" rel="noreferrer">+91 6388184100</a>.</p></div></div>
              <div className="note-detail"><span className="note-icon"><PackageCheck size={18} /></span><div><h3>Shipping & delivery</h3><p>Shipping charges apply and vary depending on the quantity of your order.</p></div></div>
            </div>
            <p className="thank-you">Thank you for supporting our little candle business. Every order means the world to us! 🕯️💛</p>
            <a className="button button-dark note-cta" href={orderUrl()} target="_blank" rel="noreferrer">Let’s make something glow <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">MAAN CANDLES</a>
        <p className="footer-tagline">Little lights. Beautiful moments.</p>
        <div className="footer-links"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={15} /> @maancandles.13</a><span className="footer-separator">·</span><a href={orderUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp +91 6388184100</a></div>
        <p className="footer-copyright">© {new Date().getFullYear()} Maan Candles · Handcrafted with love</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
