# Konversi CSS ke SCSS — 7-1 Pattern

## Menjalankan
```bash
npm install
npm run dev      # Vite dev server
npm run build    # compile + bundle ke dist/
npm run sass     # compile langsung dengan Dart Sass -> dist/style.css
```

## Struktur
```
src/scss/
├── abstracts/   _variables, _functions, _mixins, _index
├── vendors/     _index
├── base/        _reset, _scrollbar, _animations
├── layout/      _header, _main, _footer
├── components/  _buttons, _cards, _badges, _forms, _particles, _figure, _reveal
├── pages/       _home, _about, _skills, _projects, _contact
├── themes/      _dark, _light
└── main.scss    (hanya @use)
```
