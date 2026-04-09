import { useState } from "react";

export default function App() {
  const projectList = [
    {
      title: "鳳山好好",
      image: "Fongshan.jpg",
      desc: "位於鳳山核心生活圈，結合交通便利、日常機能與舒適尺度，打造貼近城市節奏卻保有生活溫度的住宅作品。以細膩規劃與清新立面語彙，呈現屬於鳳山的理想居住提案。",
    },
    {
      title: "岡山好好",
      image: "/gangshan.jpg",
      desc: "座落岡山發展軸線，以日系生活感為靈感，回應在地居住需求與未來城市發展。從建築比例、採光通風到公共空間氛圍，讓生活回到舒服、溫暖、剛剛好的樣子。",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectList.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projectList.length - 1 ? 0 : prev + 1
    );
  };

  const currentProject = projectList[currentIndex];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#efefef", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "18px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "2px" }}>
              東北開發
            </div>
            <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
              DONG BEI DEVELOPMENT CO., LTD.
            </div>
          </div>

          <nav style={{ display: "flex", gap: "24px", fontSize: "15px" }}>
            <a href="#about" style={navStyle}>關於我們</a>
            <a href="#projects" style={navStyle}>新案鑑賞</a>
            <a href="#contact" style={navStyle}>聯絡我們</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
    position: "relative",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundImage: "url(/hero.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "60px 20px",
    width: "100%",
  }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.18)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            padding: "0 24px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", letterSpacing: "4px", margin: 0 }}>
            東北開發有限公司
          </h1>

          <p style={{ marginTop: "20px", fontSize: "18px", opacity: 0.9 }}>
            開發的不只是建築，而是未來生活的樣子
          </p>
        </div>
      </section>

      {/* 新案鑑賞 */}
      <section
        id="projects"
        style={{
          padding: "100px 40px",
          background: "#efefef",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "44px",
              fontWeight: "500",
              marginBottom: "48px",
              color: "#222",
              letterSpacing: "2px",
            }}
          >
            新案鑑賞
          </h2>

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 左箭頭 */}
            <button onClick={prevProject} style={arrowBtnLeft}>
              ‹
            </button>

            {/* 主卡片 */}
            <div
              style={{
                width: "100%",
                maxWidth: "1140px",
                background: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                display: "grid",
                gridTemplateColumns: "2.1fr 1fr",
                minHeight: "520px",
                overflow: "hidden",
              }}
            >
              {/* 左圖 */}
              <div
                style={{
                  backgroundImage: `url(${currentProject.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "520px",
                }}
              />

              {/* 右文字 */}
              <div
                style={{
                  padding: "56px 42px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h3
                  style={{
                    fontSize: "34px",
                    margin: 0,
                    marginBottom: "28px",
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  {currentProject.title}
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "2",
                    color: "#666",
                    margin: 0,
                    borderBottom: "1px solid #cfcfcf",
                    paddingBottom: "26px",
                  }}
                >
                  {currentProject.desc}
                </p>

                <a
  href={`/booking.html?project=${encodeURIComponent(currentProject.title)}`}
  target="_blank"
  rel="noreferrer"
  style={{
    display: "inline-block",
    marginTop: "24px",
    fontSize: "14px",
    color: "#777",
    textDecoration: "none",
    borderBottom: "1px solid #bbb",
    paddingBottom: "6px"
  }}
>
  預約賞屋
</a>
                <a
                  href="#contact"
                  style={{
                    marginTop: "18px",
                    display: "inline-block",
                    textDecoration: "none",
                    color: "#888",
                    fontSize: "16px",
                    borderBottom: "1px solid #bdbdbd",
                    paddingBottom: "8px",
                    width: "100%",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>

            {/* 右箭頭 */}
            <button onClick={nextProject} style={arrowBtnRight}>
              ›
            </button>
          </div>
        </div>
      </section>
      <div style={{ padding: "100px 40px", background: "#f5f5f3" }}>

  <h2 style={{
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "50px",
    letterSpacing: "3px"
  }}>
    築藝典藏
  </h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
    maxWidth: "1200px",
    margin: "0 auto"
  }}>

    <div style={{ background: "#fff", padding: "20px" }}>
      <img src="/Dadong.jpg" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
      <h3>遇大東</h3>
      <p>日系生活感住宅，強調舒適與自然的居住氛圍。</p>
    </div>

    <div style={{ background: "#fff", padding: "20px" }}>
      <img src="/RoyalVilla.jpg" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
      <h3>御墅1期</h3>
      <p>結合城市機能與生活質感，打造輕奢居住體驗。</p>
    </div>

    <div style={{ background: "#fff", padding: "20px" }}>
      <img src="/gangshan.jpg" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
      <h3>未來建案</h3>
      <p>持續深耕高雄，拓展更多理想生活場域。</p>
    </div>

  </div>
</div>
      {/* Contact */}
      <section id="contact" style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "24px" }}>聯絡我們</h2>
          <p style={{ fontSize: "clamp(14px, 3vw, 18px)", lineHeight: "1.9", color: "#555" }}>
            歡迎洽詢東北開發建案資訊、品牌合作與相關服務。
          </p>
        </div>
      </section>
    </div>
  );
}

const navStyle = {
  textDecoration: "none",
  color: "#333",
};

const arrowBase = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  background: "transparent",
  fontSize: "64px",
  color: "#666",
  cursor: "pointer",
  zIndex: 5,
  lineHeight: 1,
};

const arrowBtnLeft = {
  ...arrowBase,
  left: "-40px",
};

const arrowBtnRight = {
  ...arrowBase,
  right: "-40px",
};