import Link from 'next/link';

export default function Kalender() {
  return (
    <main className="board placeholder-page">
      <Link href="/" className="back-link">← Tillbaka till tavlan</Link>
      <p className="eyebrow">Kommer snart</p>
      <h1 className="title">Kalender</h1>
      <p className="lede">Här listar vi framöver familjens viktiga datum och händelser.</p>
      <div className="empty-frame">tom kalender — väntar på sitt första datum</div>
    </main>
  );
}
