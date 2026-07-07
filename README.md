# Familjesidan — embryo v0.1

Ett litet Next.js-embryo till familjens hemsida: en startsida ("anslagstavlan")
plus två platshållarsidor (Bilder, Kalender).

## Så här får du upp den gratis (samma väg som vm-tips-tau.vercel.app)

1. **Skapa ett GitHub-konto** om du inte redan har ett (gratis): https://github.com
2. **Skapa ett nytt repo**, t.ex. "familjesidan", och ladda upp den här mappens
   innehåll till repot (via github.com i webbläsaren går bra — dra och släpp filerna,
   eller använd GitHub Desktop om du vill ha ett grafiskt verktyg).
3. **Skapa ett Vercel-konto** (gratis): https://vercel.com — logga in med samma
   GitHub-konto.
4. I Vercel: **"Add New Project"** → välj ditt "familjesidan"-repo → Vercel känner
   automatiskt igen att det är ett Next.js-projekt → klicka **Deploy**.
5. Efter någon minut får du en egen adress, typ `familjesidan.vercel.app`.

## Ändra innehåll senare

- Byt ut "Familjen [Efternamn]" i `app/page.tsx` mot ert riktiga namn.
- Lägg till bilder i `public/`-mappen och referera dem från sidorna.
- Be Claude bygga vidare på `/bilder` och `/kalender` när ni är redo för
  riktigt innehåll — säg bara vad ni vill ha på varje sida.

## Köra lokalt (valfritt, kräver Node.js installerat)

```
npm install
npm run dev
```

Öppna sedan http://localhost:3000
