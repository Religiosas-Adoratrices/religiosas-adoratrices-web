/**
 * Interfaz que define la estructura de un servicio.
 */
export interface Service {
    /** Identificador único del servicio. */
    id: number;
    /** Atributos del servicio. */
    attributes: ServiceAttributes;
}

/**
 * Interfaz que define los atributos de un servicio.
 */
interface ServiceAttributes {
    /** Título del servicio. */
    title: string;
    /** Contenido del servicio. */
    content: string;
    /** URL de la imagen del servicio. */
    image: string;
    /** Descripción opcional del servicio. */
    descripton?: string;
}
