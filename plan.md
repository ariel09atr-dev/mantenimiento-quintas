# Mantenimiento de Quintas — plan de implementación

## Alcance

Sitio institucional de una sola página para un emprendimiento familiar dedicado al mantenimiento de quintas. El objetivo es generar confianza y consultas directas por WhatsApp, sin presentar las quintas como propiedades en venta o alquiler y sin inventar una presencia en Instagram.

## Dirección de diseño

- **Movimiento:** editorial rural contemporáneo, inspirado en revistas de arquitectura y hospitalidad sobria.
- **Principios:** claridad, calma, confianza y precisión.
- **Filosofía de color:** verde bosque para transmitir estabilidad y cuidado; arena y papel para calidez; blanco roto para legibilidad y sensación de calidad.
- **Paradigma de layout:** composición asimétrica con bloques editoriales amplios, divisores finos y una narrativa vertical que alterna información institucional, servicio, proceso y contacto.
- **Elementos distintivos:** marca circular con hoja, numeración editorial de secciones y tratamiento de cursivas en palabras clave.
- **Interacción:** enlaces discretos con subrayados, flechas y desplazamiento suave; el contacto principal siempre lleva a WhatsApp.
- **Animación:** microinteracciones de desplazamiento y elevación en botones y filas; sin efectos llamativos ni movimiento decorativo excesivo.
- **Tipografía:** Playfair Display para titulares expresivos y DM Sans para navegación, textos y llamadas a la acción.
- **Esencia de marca:** mantenimiento confiable para propietarios que quieren encontrar su quinta cuidada y lista para disfrutar. Personal, responsable, prolija.
- **Voz:** formal, directa y cercana, sin exageraciones. Ejemplos: “Su quinta, siempre en buenas manos.” / “Confianza construida con trabajo bien hecho.”
- **Marca:** logotipo tipográfico “Mantenimiento de quintas” acompañado por un círculo con hoja lineal.
- **Color de marca:** verde bosque profundo `#244B40`.

## Estructura del proyecto

- `client/src/pages/Home.tsx`: portada institucional y contenido de la página.
- `client/src/index.css`: sistema visual, responsive y componentes de la página.
- `client/index.html`: idioma, metadata SEO y preview social.
- `client/public/manus-routes.json`: manifiesto de rutas públicas.
- `client/public/brand-mark.svg`: marca auxiliar para metadata de proyecto.

## Decisiones técnicas

- Aplicación React/Vite del starter `web-db-user`, servida como sitio estático sin servidor ni base de datos.
- Contacto directo por WhatsApp al número proporcionado: `5493425274087`.
- No se incorpora Instagram porque el usuario indicó que no existe.
- La imagen hero se genera como recurso original y se referencia desde Manus Storage.
- No se define canonical absoluto mientras no exista un dominio público confirmado.
