import car1 from '../assets/images/cars/car1.png';
import car2 from '../assets/images/cars/car2.png';
import car3 from '../assets/images/cars/car3.png';
import heroImage from '../assets/images/hero/carhero.png';

// Datos estáticos de la aplicación Álamo Rent

export const CARS = [
  {
    id: 1,
    name: 'Toyota Yaris',
    model: 'Toyota Yaris',
    category: 'económico',
    specs: ['5 pasajeros', 'A/C', 'Manual'],
    price: 'S/120',
    priceUnit: '/día',
    image: car1,
    color: '#F4C430'
  },
  {
    id: 2,
    name: 'Toyota RAV4',
    model: 'Toyota RAV4',
    category: 'SUV',
    specs: ['5 pasajeros', '4x4', 'Auto'],
    price: 'S/250',
    priceUnit: '/día',
    image: car2,
    color: '#4A90A4'
  },
  {
    id: 3,
    name: 'BMW Serie 3',
    model: 'BMW Serie 3',
    category: 'premium',
    specs: ['5 pasajeros', 'Cuero', 'Auto'],
    price: 'S/420',
    priceUnit: '/día',
    image: car3,
    color: '#1a1a1a'
  }
];

export const HERO_IMAGE = heroImage;

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'Excelente servicio, autos impecables y atención al cliente de primera categoría.',
    author: 'María González',
    origin: 'México',
    rating: 5
  },
  {
    id: 2,
    text: 'Rentaron un auto perfecto para nuestro viaje. Precios justos y proceso muy sencillo.',
    author: 'Juan Martínez',
    origin: 'España',
    rating: 5
  },
  {
    id: 3,
    text: 'Volveré a alquilar con Álamo. La mejor experiencia de renta de autos que he tenido.',
    author: 'Carlos López',
    origin: 'Argentina',
    rating: 5
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: '🏆',
    title: 'Flota Moderna',
    text: 'Autos nuevos y bien mantenidos para tu comodidad y seguridad.'
  },
  {
    id: 2,
    icon: '💰',
    title: 'Precios Competitivos',
    text: 'Las mejores tarifas del mercado con promociones especiales.'
  },
  {
    id: 3,
    icon: '🛡️',
    title: 'Seguros Incluidos',
    text: 'Cobertura completa sin sorpresas ni costos ocultos.'
  },
  {
    id: 4,
    icon: '📱',
    title: 'Soporte 24/7',
    text: 'Atención al cliente disponible cuando la necesites.'
  }
];

export const STATS = [
  {
    id: 1,
    number: '+50',
    label: 'Vehículos disponibles'
  },
  {
    id: 2,
    number: '12',
    label: 'Años de experiencia'
  },
  {
    id: 3,
    number: '8k+',
    label: 'Clientes satisfechos'
  },
  {
    id: 4,
    number: '24/7',
    label: 'Soporte al turista'
  }
];

export const NAV_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Vehículos', href: '#' },
  { label: 'Servicios', href: '#' },
  { label: 'Contacto', href: '#' }
];

export const FOOTER_LINKS = [
  { label: 'Privacidad', href: '#' },
  { label: 'Términos', href: '#' },
  { label: 'Soporte', href: '#' }
];
