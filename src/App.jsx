import "./App.css";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-title">東北開發</div>
            <div className="brand-sub">DONG BEI DEVELOPMENT CO., LTD.</div>
          </div>

          <nav className="nav">
            <a href="#about">關於我們</a>
            <a href="#projects">開發作品</a>
            <a href="#philosophy">品牌理念</a>
            <a href="#contact">聯絡我們</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">OFFICIAL WEBSITE</div>
          <h1 className="hero-title">東北開發有限公司</h1>
          <p className="hero-text">開發的不只是建築，而是未來生活的樣子</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              查看建案
            </a>
            <a href="#contact" className="btn btn-secondary">
              聯絡我們
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-inner">
          <div className="section-tag">ABOUT</div>
          <h2 className="section-title">關於東北開發</h2>
          <p className="section-desc">
            東北開發有限公司專注於住宅開發、建築規劃與品牌形象塑造，
            以穩健務實的眼光與細膩的規劃思維，打造兼具美感、實用性與市場價值的建築作品。
            我們相信，真正好的建築，不只是空間，更是一種未來生活方式的提案。
          </p>

          <div className="card-grid grid-4">
            <div className="card">
              <h3>品牌定位</h3>
              <p>建立清楚的建案形象與市場辨識度，打造屬於品牌的風格語言。</p>
            </div>
            <div className="card">
              <h3>開發規劃</h3>
              <p>從土地條件、生活需求到市場策略，完整思考每一個作品的價值。</p>
            </div>
            <div className="card">
              <h3>空間美學</h3>
              <p>重視比例、材質、光線與舒適度，讓建築具備長久耐看的質感。</p>
            </div>
            <div className="card">
              <h3>在地深耕</h3>
              <p>持續關注高雄與周邊區域發展，回應地方居住與城市成長需求。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-white">
        <div className="section-inner">
          <div className="section-tag">PROJECTS</div>
          <h2 className="section-title">開發作品</h2>

          <div className="card-grid grid-3">
            <article className="project-card">
              <div className="project-image">岡山好好</div>
              <div className="project-body">
                <h3>岡山好好</h3>
                <p>以日系生活感為發想，打造溫暖、輕盈且貼近日常的居住提案。</p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">鳳山好好</div>
              <div className="project-body">
                <h3>鳳山好好</h3>
                <p>結合都會便利與細節美感，呈現輕奢而自在的城市住宅想像。</p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">未來計畫</div>
              <div className="project-body">
                <h3>品牌持續佈局</h3>
                <p>以品牌觀點持續推進未來作品，建立屬於東北開發的城市風景。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="philosophy" className="section section-dark">
        <div className="section-inner">
          <div className="section-tag section-tag-light">PHILOSOPHY</div>
          <h2 className="section-title section-title-light">品牌理念</h2>
          <p className="section-desc section-desc-light">
            我們相信，建築不應只是被看見，更應該被長久感受。
            東北開發以穩健、細膩、長遠為核心，透過每一個案子的規劃與呈現，
            建立值得信任、能被城市記住的品牌價值。
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-inner">
          <div className="section-tag">CONTACT</div>
          <h2 className="section-title">聯絡我們</h2>

          <div className="contact-grid">
            <div className="card">
              <h3>東北開發有限公司</h3>
              <p>電話：(07) 371-8570</p>
              <p>信箱：service@dongbei.com.tw</p>
              <p>地址：高雄市鳥松區北平路11-1號</p>
            </div>

            <div className="card">
              <h3>品牌洽詢</h3>
              <p>
                歡迎洽詢建案資訊、品牌合作、廣告企劃與媒體聯繫，
                我們將盡快與您聯絡。
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 東北開發有限公司 All Rights Reserved.
      </footer>
    </div>
  );
}