import './globals.css';

export const metadata = {
  title: 'Familjen — hemsida',
  description: 'Vår familjs egen lilla plats på nätet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
