const work = {
  label: "Proyectos",
  title: "Proyectos",
  description: "Listado de proyectos desarrollados por Nicolás Rodriguez Parrado.",
  path: "/work"
};

const social = [
  {
    name: "GitHub",
    link: "https://github.com/Nickr010119",
    icon: "github"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nicolasrodriguezp/",
    icon: "linkedin"
  }
];

import { About, Home } from "@/types";

const person = {
  name: "Nicolás Rodriguez Parrado",
  avatar: "/avatar.jpg",
  location: "America/Bogota",
  languages: ["Español", "Inglés"],
  role: "Desarrollador de software",
  email: "nicolasrodriguezp@gmail.com"
};

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Nicolás Rodriguez Parrado Portfolio",
  description: "Portfolio website showcasing my work como desarrollador de software.",
  headline: "Desarrollando soluciones digitales simples y funcionales",
  featured: {
    display: false,
    title: "",
    href: "",
  },
  subline: "Soy Nicolás Rodriguez Parrado, desarrollador de software colombiano. Me apasiona crear soluciones digitales simples y funcionales que ayuden a las personas y organizaciones a alcanzar sus objetivos.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: "Sobre mí – Nicolás Rodriguez Parrado",
  description: "Conoce a Nicolás Rodriguez Parrado, desarrollador de software de Colombia.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: "Soy Nicolás Rodriguez Parrado, desarrollador de software colombiano. Me apasiona crear soluciones digitales simples y funcionales que ayuden a las personas y organizaciones a alcanzar sus objetivos.",
  },
  work: {
    display: true,
    title: "Experiencia laboral",
    experiences: [
      {
        company: "Freelance",
        role: "Desarrollador web",
        timeframe: "06.2025 – Act.",
        achievements: [
          "Diseño e implementación de aplicativos web para empresas usando Next.Js.",
          "Levantamiento de requerimientos funcionales y no funcionales según la necesidad del cliente o servicio.",
          "Uso de GitHub para seguimiento de versiones.",
          "Diseño de aplicativos usando Tailwind CSS.",
          "Gestión y optimización de SEO para los aplicativos web desarrollados.",
          "Uso de la herramienta Vercel para lanzamientos y previsualizaciones.",
          "Uso de técnicas con IA como Vibecoding (Con Github Copilot) para aumentar la eficiencia y el ritmo de entregables.",
          "Escritura de documentación técnica y seguimiento de errores o bugs.",
          "Desarrollo de páginas como: https://heals.vercel.app/; https://arcipres.vercel.app/"
        ]
      },
      {
        company: "Arcipres",
        role: "Ingeniero de ventas",
        timeframe: "01.2022 - 05.2025",
        achievements: [
          "Diseño e implementación de soluciones técnicas para proyectos de construcción civil.",
          "Gestión de estrategias de adquisición y retención de clientes, superando los objetivos anuales en más de 100 millones de COP.",
          "Uso de herramientas CRM (Hubspot) y software de diseño para propuestas personalizadas.",
          "Desarrollo de soluciones técnicas a medida para mejorar el rendimiento del producto.",
          "Gestión de relaciones con clientes clave, fomentando confianza y lealtad.",
          "Establecimiento de relaciones a largo plazo para negocios recurrentes y referencias.",
          "Generación de nuevos prospectos mediante llamadas en frío, redes sociales y eventos.",
          "Obtención de aceptación del cliente demostrando reducciones de costos y mejoras operativas."
        ]
      },
      {
        company: "Boutique Pro Audio",
        role: "Practicante de ingeniero de sonido",
        timeframe: "08.2020 - 11.2020",
        achievements: [
          "Desarrollo de propuestas de proyectos culturales para iniciativas del gobierno local.",
          "Escritura de artículos técnicos para revista y apoyo en desarrollo web usando PHP.",
          "Mantenimiento de inventario de equipos de audio, implementando sistema de seguimiento.",
          "Participación en reuniones de equipo para cronogramas y entregables.",
          "Obtención de experiencia valiosa trabajando en la industria específica.",
          "Obtención de experiencia práctica en varios programas de software.",
          "Contribución a ambiente de equipo positivo colaborando en proyectos grupales.",
          "Mejora en eficiencia de codificación con scripts de prueba automatizados."
        ]
      }
    ]
  },
  studies: {
    display: true,
    title: "Educación",
    institutions: [
      {
        name: "Corporación Universitaria Minuto De Dios",
        description: "Especialización: Desarrollo de Software. Bogotá, Colombia. Diseño de modelos de gestión y procesos de evaluación para software utilizando estándares y métricas de calidad. Desarrollo de soluciones de software seguras y de alta calidad alineadas con las necesidades del negocio. GPA: 4.7"
      },
      {
        name: "Universidad San Buenaventura",
        description: "Pregrado: Ingeniería de sonido. Bogotá, Colombia. Soluciones de ingeniería en acústica, electroacústica y captura de audio. Desarrollo de algoritmos de IA enfocados en audio. GPA: 4.4. Tesis: Comparación de la percepción de manejo para conductores en un vehículo eléctrico con y sin sonido generado por motor de combustión interna, usando ESP32 y C#."
      },
      {
        name: "Instituto Técnico Central",
        description: "Técnico: Educación media Técnica en sistemas. Bogotá, Colombia. Programación orientada a objetos en Java y Python. Desarrollo web Full-stack. Diseño y gestión de redes. GPA: 4.2"
      }
    ]
  },
  technical: { display: false, title: "", skills: [] }
};

export { home, about, person, social, work };