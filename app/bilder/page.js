import Link from 'next/link';

export default function Bilder() {
  return (
    <main className="board placeholder-page">
      <Link href="/" className="back-link">← Tillbaka till tavlan</Link>
      <p className="eyebrow">Kommer snart</p>
      <h1 className="title">Bilder</h1>
      <p className="lede">Här samlar vi framöver våra bästa familjeminnen.</p>
      <div className="empty-frame">tomt bildram — väntar på sitt första foto</div>
    </main>
  );
}
