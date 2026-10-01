# Mantenimiento de Quintas — entrega autónoma

## Alcance

Sitio institucional de una sola página para un emprendimiento familiar dedicado al mantenimiento de quintas. La entrega principal funciona desde un único archivo `client/index.html`, sin depender de componentes React para renderizar la portada.

## Dirección de diseño

La identidad utiliza una estética editorial rural contemporánea: verde bosque para transmitir estabilidad y cuidado, arena para aportar calidez y blanco roto para mantener la legibilidad. La composición es sobria, asimétrica y con mucho espacio visual. Los titulares usan una serif clásica y el contenido utiliza una sans-serif del sistema para mantener la autonomía del archivo.

## Contenido

La portada presenta quiénes son, qué tipo de mantenimiento ofrecen, cómo trabajan, los valores de confianza y un contacto directo por WhatsApp al número `5493425274087`. No presenta las quintas como propiedades en venta o alquiler y no incorpora Instagram porque el usuario indicó que no existe.

## Archivo principal

- `client/index.html`: documento autónomo con HTML semántico, metadata SEO, Open Graph, contenido completo, CSS responsive integrado y script mínimo para actualizar el año del pie de página.
- `client/public/manus-routes.json`: manifiesto de la ruta pública `/`.
- `app.config.ts`: logo del proyecto.

## Verificación

La versión autónoma fue compilada con `pnpm build:static`, revisada en escritorio y comprobada contra el servidor local. El enlace principal de WhatsApp utiliza `https://wa.me/5493425274087`.
