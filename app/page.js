import Link from 'next/link';

export default function Home() {
  return (
    <main className="board">
      <p className="eyebrow">Anslagstavlan</p>
      <h1 className="title">
        Familjen [Efternamn]
        <svg className="title-thread" viewBox="0 0 300 12" preserveAspectRatio="none">
          <path
            d="M2 8 C 60 2, 100 12, 150 6 S 240 2, 298 8"
            fill="none"
            stroke="#D9A79B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </h1>
      <p className="lede">
        Det här är embryot till vår familjesida — en liten anslagstavla som
        växer efter hand med bilder, datum och sånt vi vill komma ihåg
        tillsammans.
      </p>

      <nav>
        <Link href="/" className="pin-card" style={{ ['--tilt']: '-1.5deg' }}>
          🏠 Hem
        </Link>
        <Link href="/bilder" className="pin-card" style={{ ['--tilt']: '1deg' }}>
          📷 Bilder
        </Link>
        <Link href="/kalender" className="pin-card" style={{ ['--tilt']: '-0.5deg' }}>
          📅 Kalender
        </Link>
      </nav>

      <div className="board-grid">
        <div className="board-note">
          <h3>Nästa steg</h3>
          <p>Fyll den här tavlan med riktigt innehåll — bilder, texter, viktiga datum.</p>
        </div>
        <div className="board-note">
          <h3>Byggd med</h3>
          <p>Next.js, redo att kopplas till GitHub och hostas gratis på Vercel.</p>
        </div>
        <div className="board-note">
          <h3>Växer med tiden</h3>
          <p>Nya sidor och funktioner läggs till löpande, precis som en riktig anslagstavla.</p>
        </div>
      </div>

      <footer>Embryo v0.1 — {new Date().getFullYear()}</footer>
    </main>
  );
}
