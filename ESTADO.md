# ESTADO — Portafolio (Franco944796.github.io)

## Objetivo
Portafolio personal estático (HTML/CSS/JS) publicado en GitHub Pages.

## Decisiones tomadas
- Estética: negro + blanco + rojo carmesí (`--accent-red`), Fira Code para títulos/código, Inter para texto.
- Favicon: monograma «F.» (F blanca, punto rojo) en `favicon.svg`, dibujado con formas (sin fuente).
- Portada: video propio de fondo en la **mitad derecha** (en celular, fondo completo oscurecido).
  Mientras no haya video, la portada queda negra; la estructura ya está.
- No inventar ni sugerir datos sobre Franco (roles, títulos) en textos o maquetas.

## Hecho (2026-10-30)
- Favicon «F.» enlazado en `index.html`.
- Capa `.hero-media` lista para el video (comentada en `index.html`), con degradé y velo.
- Menú hamburguesa en celular (`.nav-toggle`, lógica en `script.js`).
- Estilo para el badge `status-completado` («Finalizado»): blanco neutro.
- Borrado CSS muerto de toggles turquesa.

## Pendiente
- Grabar el video y activarlo: poner `video/hero.webm`, `video/hero.mp4` y `video/hero-poster.jpg`
  y descomentar el `<video>` en `index.html`. Recomendado: sin audio, loop, < 5 MB.

## Probar
- Captura headless: `firefox --headless --window-size=1280,800 --screenshot out.png file://$PWD/index.html`
- No hay Node en el equipo: la sintaxis JS se verifica cargando la página en Firefox.
