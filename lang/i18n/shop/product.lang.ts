import { TMContent } from '../../../src/schemas/config/tm-content.schema'
import GlobalLang from '../global.lang'
import CategoryLang from './category.lang'

const ProductLang: TMContent = {
    'name': GlobalLang.name,
    'description': GlobalLang.description,
    'slug': GlobalLang.slug,
    'price': {
        usd: {
            en: 'USD',
            es: 'USD',
            dollar: {
                en: 'Dollar',
                es: 'Dólar'
            }
        },
        eur: {
            en: 'EUR',
            es: 'EUR'
        },
        en: 'Price',
        es: 'Precio'
    },
    'category': CategoryLang.name,
    'stock': {
        en: 'Stock',
        es: 'Inventario'
    },
    'sku': {
        en: 'Sku',
        es: 'Código de producto'
    },
    'brand': {
        en: 'Brand',
        es: 'Marca'
    },
    'rating': {
        en: 'rating',
        es: 'calificación'
    },
    'reviews': {
        en: 'Reviews',
        es: 'Reseñas'
    },
    'availability': {
        en: 'Availability',
        es: 'Disponibilidad'
    }
}

export default ProductLang
