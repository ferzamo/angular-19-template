import Aura from '@primeng/themes/aura';
import { es } from 'primelocale/es.json';

export const primengConfig = {
  translation: es,
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primeng',
        order: 'tailwind-base, primeng, tailwind-utilities',
      },
    },
  },
};
