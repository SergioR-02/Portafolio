# Portafolio Personal - React + TypeScript con Arquitectura Atómica

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.8.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-E10098?style=for-the-badge&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Lucide React](https://img.shields.io/badge/Lucide_React-0.344.0-FF6B6B?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

## Descripción del Proyecto

**Portafolio personal moderno** construido con **React 18 + TypeScript** y **Arquitectura Atómica**. Una aplicación web completamente responsiva que presenta mis proyectos, habilidades y experiencia profesional con un diseño elegante y animaciones fluidas.

### **Características Principales:**

#### 🏗️ **Arquitectura & Features**
![Atomic Design](https://img.shields.io/badge/Atomic_Design-Architecture-FF6B6B?style=flat-square&logo=react&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-4ECDC4?style=flat-square&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/Type-Safe-96CEB4?style=flat-square&logo=typescript&logoColor=white)
![Dark Mode](https://img.shields.io/badge/Dark_Mode-Toggle-2D3748?style=flat-square&logo=moon&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A67D8?style=flat-square&logo=pwa&logoColor=white)

- ✨ **Diseño Moderno y Responsivo** con animaciones CSS avanzadas
- 🌙 **Modo Oscuro/Claro** con persistencia en localStorage
- 🎨 **Arquitectura Atómica** (Atoms → Molecules → Organisms → Templates)
- 🚀 **Navegación SPA** con React Router DOM
- 📱 **Mobile-First Design** completamente responsivo
- 🎭 **Animaciones Fluidas** con CSS transitions y transforms
- 🔍 **SEO Optimizado** con meta tags dinámicos
- ⚡ **Performance Optimizado** con Vite y lazy loading

---

## 🏛️ **ARQUITECTURA ATÓMICA**

### 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/           # Componentes más básicos
│   ├── molecules/       # Combinación de átomos
│   ├── organisms/       # Secciones complejas
│   └── template/        # Páginas completas
├── contexts/
│   ├── ThemeContext.tsx
│   └── useScrollAnimation.tsx
├── hooks/
│   └── useHeaderLogic.ts
└── App.tsx
```

### 🔧 **Principios de Arquitectura Atómica Implementados:**

#### **Atoms (Átomos)**
Componentes más básicos e indivisibles del sistema:
- `Button`: Botón reutilizable con variantes
- `TechTag`: Etiquetas de tecnologías con iconos
- `Title`: Títulos con diferentes niveles jerárquicos
- `ThemeToggle`: Switch para modo oscuro/claro

#### **Molecules (Moléculas)**
Grupos de átomos funcionando juntos:
- `ProjectCard`: Card de proyecto con imagen, descripción y tecnologías
- `SkillCategoryCard`: Agrupación de habilidades por categoría
- `ContactInfoList`: Lista de información de contacto

#### **Organisms (Organismos)**
Componentes complejos y reutilizables:
- `ProjectsGrid`: Grid completo de proyectos
- `HeroSection`: Sección hero con animaciones
- `SkillsGrid`: Grid de habilidades organizadas

#### **Templates (Plantillas)**
Páginas completas que combinan organismos:
- `Projects`: Página de proyectos con modal
- `Skills`: Página de habilidades técnicas
- `Contact`: Página de contacto e información

---

## 🛠️ **STACK TECNOLÓGICO**

### **Frontend Core**
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.5.3** - Tipado estático para JavaScript
- **Vite 5.4.2** - Build tool y dev server ultrarrápido

### **Routing & State**
- **React Router DOM 7.8.2** - Enrutamiento SPA
- **Context API** - Gestión de estado global (tema)

### **Styling & UI**
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **PostCSS** - Procesador CSS para plugins
- **CSS Custom Properties** - Variables CSS nativas

### **Icons & Assets**
- **React Icons 5.5.0** - Librería de iconos (FA, SI, etc.)
- **Lucide React 0.344.0** - Iconos modernos y customizables

### **Development Tools**
- **ESLint 9.9.1** - Linter para código consistente
- **TypeScript ESLint** - Reglas específicas para TS
- **Autoprefixer** - Prefijos CSS automáticos

---

## 🌟 **CARACTERÍSTICAS AVANZADAS**

### **🎨 Sistema de Temas**
```typescript
// Context para gestión del tema
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
```

### **📱 Navegación Inteligente**
- Navegación smooth scroll para secciones
- Detección automática de sección activa
- Menu móvil con animaciones

### **🎭 Animaciones CSS Avanzadas**
- Gradientes animados en el hero
- Hover effects en cards de proyectos
- Transiciones fluidas entre temas
- Loading states y micro-interactions

---

## 🗂️ **ESTRUCTURA DE FEATURES**

### **🏠 Página Principal**
- Hero section con animaciones
- Información académica
- Llamadas a la acción

### **💼 Proyectos**
- Grid responsivo de proyectos
- Modal detallado para cada proyecto
- Enlaces a demo y código fuente
- Sistema de filtros por tecnología

### **🛠️ Habilidades**
- Categorización por tipo de tecnología
- Iconos representativos
- Niveles de experiencia
- Skills frontend, backend y herramientas

### **📞 Contacto**
- Información de contacto profesional
- Enlaces a redes sociales
- Formulario de contacto (próximamente)

---



## 📊 **MÉTRICAS DE RENDIMIENTO**

![Performance](https://img.shields.io/badge/Performance-Optimized-success?style=flat-square&logo=lighthouse&logoColor=white)
![Bundle Size](https://img.shields.io/badge/Bundle_Size-<200KB-blue?style=flat-square&logo=webpack&logoColor=white)

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimizado con tree-shaking

---

## 🌐 **DESPLIEGUE EN PRODUCCIÓN**

![Production](https://img.shields.io/badge/Status-Production_Ready-success?style=flat-square&logo=vercel&logoColor=white)
![Vercel](https://img.shields.io/badge/Platform-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

### 🚀 **Ver Demo en Vivo**
[![Demo](https://img.shields.io/badge/Demo-Live_Preview-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://portafolio-lovat-eight.vercel.app)

**🔗 URL de Producción**: [`https://portafolio-lovat-eight.vercel.app`](https://portafolio-lovat-eight.vercel.app)

### 🏗️ **Configuración de Despliegue**

**Build Command**: `npm run build`
**Output Directory**: `dist`
**Node.js Version**: 18.x

---

## 🤝 **CONTRIBUCIÓN**

![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=flat-square&logo=github&logoColor=white)

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 **CONTACTO**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sergio_Rodriguez-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sergio-rodriguez)
[![GitHub](https://img.shields.io/badge/GitHub-SergioR--02-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SergioR-02)
[![Email](https://img.shields.io/badge/Email-sergio@example.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sergio@example.com)

---

## 🙏 **AGRADECIMIENTOS**

- **React Team** por la increíble biblioteca
- **Tailwind CSS** por el framework de estilos
- **Vite** por la experiencia de desarrollo
- **Vercel** por el hosting gratuito
- **React Icons** por la extensa librería de iconos

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! ⭐**

![Made with Love](https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge)
![Powered by Coffee](https://img.shields.io/badge/Powered_by-☕-brown?style=for-the-badge)

</div>
