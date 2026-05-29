# Rafael Tauan — Landing Page

Landing page premium para personal trainer (React + Vite + Tailwind).

## Scripts

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção → dist/
npm run preview  # preview da build
```

## Estrutura

```
src/
├── app/
│   └── App.tsx              # composição das seções
├── assets/images/           # fotos
├── components/
│   ├── carousel/            # galeria Embla
│   ├── sections/            # Hero, Galeria, Sobre…
│   └── ui/                  # FadeIn, títulos, detalhes visuais
├── config/
│   ├── images.ts            # imports das imagens
│   └── site.ts              # links, textos da marca
├── data/
│   ├── about.ts
│   └── certifications.ts
├── lib/
│   ├── icons.tsx            # mapa de ícones Lucide
│   └── motion.ts            # variantes de animação
└── styles/
```

## Deploy

Build: `npm run build` · Output: `dist/`  
Compatível com Vercel, Netlify e GitHub Pages.

## Créditos

Desenvolvido por Lucas Oliveira.
