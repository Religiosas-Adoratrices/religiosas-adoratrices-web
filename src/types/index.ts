/**
 * Interfaz que define la estructura de un post.
 */
import type { Post } from './Post';

/**
 * Interfaz que define las propiedades del encabezado.
 */
import type { HeaderProps, NavItem } from './HeaderProps';

/**
 * Interfaz que define la estructura de un servicio.
 */
import type { Service } from './Service';

/**
 * Interfaz que define la estructura de un taller.
 */
import type { Taller } from './Taller';

/**
 * Interfaz que define la estructura de una entidad.
 */
interface Entity {
    /** Identificador único de la entidad. */
    id: number;
    /** Atributos de la entidad. */
    attributes: EntityAttributes;
}

/**
 * Interfaz que define los atributos de una entidad.
 */
interface EntityAttributes {
    /** Nombre de la entidad. */
    name: string;
    /** URL de la imagen de la entidad. */
    image: string;
    /**
     * Tipo de la entidad.
     * Puede ser "Benefactor", "Alianza" o nulo.
     */
    type: "Benefactor" | "Alianza" | null;
}

/**
 * Interfaz que define la información de contacto.
 */
interface ContactInfo {
    /** Atributos de la información de contacto. */
    attributes: {
        /** Número de teléfono. */
        telefono?: string;
        /** Número de celular. */
        celular?: string;
        /** Dirección. */
        direccion?: string;
        /** Correo electrónico. */
        correo?: string;
    }
}

export type { Post, HeaderProps, NavItem, Service, Taller, Entity, ContactInfo };
