/**
 * Interfaz que define la estructura de un elemento de navegación.
 */
export interface NavItem {
  /** Título del elemento de navegación. */
  title: string;
  /** URL a la que el elemento de navegación debe dirigir. */
  link?: string;
  /**
   * Subelementos de navegación, si el elemento principal tiene desplegables o submenús.
   * Esta propiedad es opcional.
   */
  subItems?: NavItem[];
}

/**
 * Interfaz que define las propiedades que se pasan al componente de encabezado.
 */
export interface HeaderProps {
  /** Elementos de navegación que se mostrarán en la barra de navegación del encabezado. */
  navItems: NavItem[];
}
