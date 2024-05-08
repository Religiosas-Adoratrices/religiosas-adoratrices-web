import type { NavItem } from "../types";
export const navItems: NavItem[] = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Quiénes somos",
    link: "/about",
  },
  {
    title: "Qué hacemos",
    subItems: [
      {
        title: "Talleres de Formacion",
        link: "/talleres",
      },
      {
        title: "Trabajo Intercongregacional",
        link: "/trabajo-intercongregacional",
      },
      {
        title: "Trabajo en Red",
        link: "/trabajo-red",
      },
    ],
  },
  {
    title: "Productos y Servicios",
    link: "/services/",
  },
  {
    title: "Noticias y Actividades",
    link: "/posts",
  },
  {
    title: "Contacto",
    link: "/contact",
  },
];
