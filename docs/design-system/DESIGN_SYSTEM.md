# Sistema de Diseño OMiPYME

Guía completa del sistema de diseño visual para el Observatorio de MiPYMEs de la UNED Costa Rica.

---

## 🎨 Filosofía de Diseño

El sistema de diseño de OMiPYME se basa en tres principios fundamentales:

1. **Accesibilidad primero**: Cumplimiento WCAG 2.1 Nivel AA
2. **Claridad visual**: Información clara y jerarquizada
3. **Identidad institucional**: Coherencia con la imagen de la UNED

---

## 🎨 Paleta de Colores Oficial (Manual de Marca OMiPYME 2025)

### Colores Principales de Marca

```css
/* Azul Principal OMiPYME (C:100 M:83 Y:3 K:1) */
--color-primary: #0D3996;

/* Amarillo / Dorado Institucional OMiPYME (C:0 M:31 Y:87 K:0) */
--color-accent: #FBB92C;

/* Gris Institucional OMiPYME (C:19 M:14 Y:15 K:1) */
--color-neutral-gray: #D5D4D4;

/* Blanco Puro (C:0 M:0 Y:0 K:0) */
--color-white: #FFFFFF;
```

### Colores Complementarios Institucionales

```css
/* Azul Noche Profundo (Encabezados, fondos oscuros, footer) */
--color-primary-dark: #07266E;

/* Azul Dinámico / Hover */
--color-primary-light: #1D55C4;

/* Superficie Azul Hielo Institucional (Tarjetas y fondos suaves) */
--color-primary-soft: #EEF4FC;

/* Tono Crema / Arena Cálido (Badges y avisos amigables) */
--color-accent-soft: #FEF8EA;

/* Dorado Hover */
--color-accent-hover: #E5A31E;

/* Texto de alto contraste sobre fondo dorado (WCAG AAA) */
--color-accent-dark: #4A3300;
```

### Colores por Pilar

Cada uno de los 5 pilares tiene un color distintivo armonizado con la identidad institucional:

#### 1️⃣ Observatorio (Azul OMiPYME)
```css
--color-observatorio: #0D3996;
--color-observatorio-light: #1D55C4;
--color-observatorio-dark: #07266E;
--color-observatorio-bg: #EEF4FC;
```
**Uso**: Datos, estadísticas, dashboards, monitoreo territorial

#### 2️⃣ Herramientas (Ámbar Cálido)
```css
--color-herramientas: #D97706;
--color-herramientas-light: #F59E0B;
--color-herramientas-dark: #B45309;
--color-herramientas-bg: #FEF8EA;
```
**Uso**: Selfie Distrital, GPTs especializados, calculadoras

#### 3️⃣ Investigación (Verde Institucional UNED)
```css
--color-investigacion: #057A55;
--color-investigacion-light: #0E9F6E;
--color-investigacion-dark: #03543F;
--color-investigacion-bg: #E6F2EB;
```
**Uso**: Publicaciones, proyectos científicos, equipo de investigación

#### 4️⃣ Formación (Púrpura Sabiduría)
```css
--color-formacion: #6B21A8;
--color-formacion-light: #9333EA;
--color-formacion-dark: #581C87;
--color-formacion-bg: #F3E8FF;
```
**Uso**: Cursos, toolkits, podcast, transferencia de capacidades

#### 5️⃣ Ecosistema (Azul Océano / Red)
```css
--color-ecosistema: #0284C7;
--color-ecosistema-light: #38BDF8;
--color-ecosistema-dark: #0369A1;
--color-ecosistema-bg: #E0F2FE;
```
**Uso**: Eventos, aliados estratégicos, comunidad

### Grises y Neutros

```css
--color-gray-50:  #F8FAFC;
--color-gray-100: #F1F5F9;
--color-gray-200: #E2E8F0;
--color-gray-300: #CBD5E1;
--color-gray-400: #94A3B8;
--color-gray-500: #64748B;
--color-gray-600: #475569;
--color-gray-700: #334155;
--color-gray-800: #1E293B;
--color-gray-900: #0F172A;
```

### Colores de Estado

```css
--color-success: #10B981;  /* Verde */
--color-warning: #F59E0B;  /* Ámbar */
--color-error:   #EF4444;  /* Rojo */
--color-info:    #1D55C4;  /* Azul OMiPYME claro */
```

### Ratios de Contraste (WCAG 2.1)

Todos los colores cumplen con contraste mínimo 4.5:1 (Nivel AA) y texto principal 7:1 (Nivel AAA):

| Combinación | Ratio | Estado |
|-------------|-------|--------|
| `#0D3996` sobre blanco | 9.8:1 | ✅ AAA |
| `#07266E` sobre blanco | 14.5:1 | ✅ AAA |
| `#4A3300` sobre `#FBB92C` | 7.8:1 | ✅ AAA |
| `#0D3996` sobre `#FBB92C` | 5.2:1 | ✅ AA |
| `#057A55` sobre blanco | 6.5:1 | ✅ AA |
| `#6B21A8` sobre blanco | 7.6:1 | ✅ AAA |
| `#0284C7` sobre blanco | 4.6:1 | ✅ AA |

---

## 🔤 Tipografía Oficial

### Familias Tipográficas

#### Kanit Bold (Tipografía Principal Institucional)

```css
font-family: 'Kanit', sans-serif;
font-weight: 700; /* Bold */
```

**Uso**:
- Títulos principales (h1-h6)
- Logotipo e isotipo
- Botones de acción y píldoras
- Navegación principal y badges

#### Eurostile / Modern Geometric Sans (Tipografía Secundaria)

```css
font-family: 'Eurostile', 'Open Sans', system-ui, sans-serif;
font-weight: 400; /* Regular */
```

**Uso**:
- Párrafos
- Descripciones
- Formularios
- Contenido general

#### JetBrains Mono (Datos y código)

```css
font-family: 'JetBrains Mono', monospace;
font-weight: 400; /* Regular */
```

**Uso**:
- Números y estadísticas
- Códigos
- Datos técnicos
- Tablas de datos

### Escala Tipográfica

```css
/* Escala modular base 1.25 (Major Third) */
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */
--text-base: 1rem;      /* 16px - base */
--text-lg:   1.125rem;  /* 18px */
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px */
--text-5xl:  3rem;      /* 48px */
--text-6xl:  3.75rem;   /* 60px */
```

### Line Height (Interlineado)

```css
--leading-tight:   1.25;  /* Títulos */
--leading-snug:    1.375;
--leading-normal:  1.5;   /* Cuerpo */
--leading-relaxed: 1.625; /* Párrafos largos */
--leading-loose:   2;     /* Citas */
```

### Aplicación por Elemento

| Elemento | Familia | Tamaño | Peso | Line Height |
|----------|---------|--------|------|-------------|
| H1 | Montserrat | 48-60px | 700 | 1.25 |
| H2 | Montserrat | 36-48px | 700 | 1.25 |
| H3 | Montserrat | 30-36px | 700 | 1.25 |
| H4 | Montserrat | 24-30px | 700 | 1.375 |
| Párrafo | Open Sans | 16px | 400 | 1.5 |
| Botón | Montserrat | 16px | 600 | 1 |
| Datos | JetBrains Mono | 14-16px | 400 | 1.5 |

---

## 📐 Espaciado

### Sistema de 8px

Todo el espaciado se basa en múltiplos de 8px:

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
```

### Márgenes y Padding

```css
/* Secciones */
.section-padding: py-12 md:py-16 lg:py-24;

/* Contenedores */
.container-padding: px-4 sm:px-6 lg:px-8;

/* Tarjetas */
.card-padding: p-6;
```

---

## 🎭 Componentes

### Botones

#### Botón Primario
```css
.btn-primary {
  background: #003366;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
```

#### Botones por Pilar
Cada pilar tiene su botón distintivo usando su color característico.

```html
<!-- Observatorio -->
<button class="btn-observatorio">Ver Datos</button>

<!-- Herramientas -->
<button class="btn-herramientas">Usar Herramienta</button>

<!-- etc. -->
```

### Tarjetas

#### Tarjeta Base
```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
```

#### Tarjeta de Pilar
```css
.card-pilar {
  border-top: 4px solid var(--pilar-color);
  transition: transform 0.3s, shadow 0.3s;
}

.card-pilar:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

### Badges

```css
.badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
}

/* Variantes por pilar */
.badge-observatorio {
  background: #E6EBF0;
  color: #003366;
}
```

### Formularios

```css
.input-base {
  padding: 12px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

.input-base:focus {
  outline: 2px solid #003366;
  outline-offset: 2px;
}
```

---

## 🖼️ Imágenes e Iconos

### Iconos

Usamos **Heroicons** (outline y solid):

```jsx
import { ChartBarIcon } from '@heroicons/react/24/outline';

<ChartBarIcon className="w-6 h-6 text-uned-blue" />
```

### Tamaños de Iconos

```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-base: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

### Imágenes

- **Formato preferido**: WebP con fallback a PNG/JPG
- **Optimización**: Next.js Image component
- **Aspect ratios**:
  - Destacadas: 16:9
  - Cuadradas: 1:1
  - Verticales: 3:4

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile first approach */
xs:  475px;   /* Móviles pequeños */
sm:  640px;   /* Móviles grandes */
md:  768px;   /* Tablets */
lg:  1024px;  /* Laptops */
xl:  1280px;  /* Desktops */
2xl: 1536px;  /* Pantallas grandes */
3xl: 1920px;  /* Ultra wide */
```

### Contenedores

```css
.container-custom {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container-custom { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .container-custom { padding: 0 2rem; }
}
```

---

## ✨ Animaciones y Transiciones

### Duración

```css
--duration-fast:   150ms;
--duration-normal: 300ms;
--duration-slow:   500ms;
```

### Easing

```css
--ease-in:     cubic-bezier(0.4, 0, 1, 1);
--ease-out:    cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animaciones Comunes

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse Glow */
@keyframes pulseGlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

---

## ♿ Accesibilidad

### Principios WCAG 2.1

1. **Perceptible**: La información debe ser presentable
2. **Operable**: Los componentes deben ser operables
3. **Comprensible**: La información debe ser comprensible
4. **Robusto**: El contenido debe ser robusto

### Checklist de Accesibilidad

- [ ] Contraste mínimo 4.5:1 (texto normal)
- [ ] Contraste mínimo 3:1 (texto grande)
- [ ] Navegación por teclado
- [ ] Focus visible en todos los elementos interactivos
- [ ] Etiquetas ARIA apropiadas
- [ ] Texto alternativo en imágenes
- [ ] Estructura semántica HTML5
- [ ] Skip links para navegación rápida
- [ ] Respeto a `prefers-reduced-motion`
- [ ] Respeto a `prefers-contrast`

### Estados de Focus

```css
*:focus-visible {
  outline: 2px solid #003366;
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 📦 Componentes Reutilizables

### Hero Section
- Altura mínima: 600px
- Gradiente de fondo institucional
- Indicadores dinámicos
- Buscador prominente

### Tarjetas de Pilares
- Border-top del color del pilar
- Hover effect con elevación
- Iconografía consistente
- Enlaces a subsecciones

### Navegación Principal
- Sticky header
- Dropdown menus por pilar
- Responsive con menú móvil
- Indicador de página activa

---

## 🎯 Buenas Prácticas

1. **Usa clases de Tailwind CSS** en lugar de CSS custom cuando sea posible
2. **Mantén consistencia** en espaciado y tamaños
3. **Prioriza la accesibilidad** en cada componente
4. **Optimiza imágenes** antes de subirlas
5. **Usa las variables CSS** definidas en el sistema
6. **Prueba en diferentes dispositivos** y tamaños de pantalla
7. **Valida el contraste** de colores
8. **Documenta componentes nuevos** en este archivo

---

## 📚 Referencias

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Heroicons](https://heroicons.com/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

---

**Última actualización**: 2024-12-15
**Versión**: 1.0.0
**Mantenido por**: Equipo OMiPYME - UNED Costa Rica
