/**
 * Interfaz que define la estructura de un post.
 */
export interface Post {
    /** Identificador único del post. */
    id: number;
    /** Atributos del post. */
    attributes: PostAttributes;
}

/**
 * Interfaz que define los atributos de un post.
 */
interface PostAttributes {
    /** Título del post. */
    title: string;
    /** Contenido del post. */
    content: string;
    /** URL de la imagen del post. */
    image: string;
    /** Descripción del post. */
    descripcion: string;
}
