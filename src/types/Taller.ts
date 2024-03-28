/**
 * Interfaz que define la estructura de un taller.
 */
export interface Taller {
    /** Identificador único del taller. */
    id: number;
    /** Atributos del taller. */
    attributes: TallerAttributes;
}

/**
 * Interfaz que define los atributos de un taller.
 */
interface TallerAttributes {
    /** Título del taller. */
    title: string;
    /** Contenido del taller. */
    content: string;
    /** URL de la imagen del taller. */
    image: string;
    /** Descripción opcional del taller. */
    description?: string;
}
