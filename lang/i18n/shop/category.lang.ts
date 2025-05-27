import { TMContent } from '../../../src/schemas/config/tm-content.schema'
import GlobalLang from '../global.lang'

const CategoryLang: TMContent = {
    'name': GlobalLang.name,
    'description': GlobalLang.description,
    'slug': GlobalLang.slug,
    'parent': {
        'en': 'Parent',
        'es': 'Padre'
    },
    'image': GlobalLang.image,
    'icon': {
        'en': 'Icon',
        'es': 'Icono'
    }
}

export default CategoryLang
