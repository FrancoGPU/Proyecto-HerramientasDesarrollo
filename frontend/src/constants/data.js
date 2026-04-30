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
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Quienes Somos', to: '#quienes-somos' },
  { label: 'Testimonios', to: '#testimonios' },
  { label: 'Contacto', to: '/contacto' }
];

export const SERVICES_MAIN = [
  {
    title: 'Alquiler por día / semana / mes',
    description: 'Planes flexibles para escapadas, trabajo o estadías prolongadas.'
  },
  {
    title: 'Recojo/entrega en aeropuerto',
    description: 'Coordinamos tu vehículo para que empieces el viaje sin demoras.'
  },
  {
    title: 'Servicio corporativo (empresas)',
    description: 'Soluciones de movilidad para equipos, visitas y operaciones.'
  },
  {
    title: 'Renta para turismo (paquetes)',
    description: 'Opciones pensadas para rutas, tours y experiencias a medida.'
  }
];

export const SERVICES_COVERAGES = [
  'Seguro básico incluido',
  'Cobertura completa (opcional)',
  'Depósito/garantía y qué cubre/no cubre'
];

export const SERVICES_EXTRAS = [
  'GPS / Internet portátil',
  'Silla para niños',
  'Conductor adicional',
  'Entrega a domicilio / hotel'
];

export const SERVICES_BOOKING_STEPS = [
  'Elegir vehículo',
  'Fechas y lugar',
  'Confirmación',
  'Retiro/entrega'
];

export const SERVICES_REQUIREMENTS = [
  'DNI/Pasaporte',
  'Licencia vigente',
  'Edad mínima',
  'Método de pago aceptado'
];

export const SERVICES_FAQ = [
  {
    id: 1,
    question: 'Política de combustible',
    answer: 'Te indicamos la política aplicable al momento de la entrega del vehículo.'
  },
  {
    id: 2,
    question: 'Cancelaciones y cambios',
    answer: 'Las condiciones dependen del plan contratado; coordinamos tu solicitud con anticipación.'
  },
  {
    id: 3,
    question: 'Kilometraje y peajes',
    answer: 'Definimos el kilometraje incluido y el manejo de peajes antes de confirmar la reserva.'
  },
  {
    id: 4,
    question: 'Qué hacer en caso de accidente',
    answer: 'Contáctanos de inmediato para activar el soporte y seguir el protocolo del seguro.'
  }
];

export const FOOTER_LINKS = [
  { label: 'Contacto', href: '/contacto' },
  { label: 'WhatsApp', href: 'https://wa.me/51987654321', external: true },
  { label: 'Correo', href: 'mailto:hola@alamorent.pe', external: true }
];

export const CONTACT_DETAILS = {
  companyName: 'Álamo Rent',
  email: 'hola@alamorent.pe',
  phone: '+51 987 654 321',
  whatsappNumber: '51987654321',
  whatsappLabel: '+51 987 654 321',
  address: 'Av. Javier Prado Este 1234, San Isidro, Lima',
  schedule: 'Lunes a domingo, 8:00 a 20:00',
  responseTime: 'Respuesta habitual en menos de 15 minutos'
};

export const CONTACT_CHANNELS = [
  {
    id: 1,
    label: 'WhatsApp',
    value: CONTACT_DETAILS.whatsappLabel,
    href: `https://wa.me/${CONTACT_DETAILS.whatsappNumber}`,
    description: 'Atención rápida para reservas y consultas.'
  },
  {
    id: 2,
    label: 'Correo',
    value: CONTACT_DETAILS.email,
    href: `mailto:${CONTACT_DETAILS.email}`,
    description: 'Envíanos los detalles de tu viaje o proyecto.'
  },
  {
    id: 3,
    label: 'Teléfono',
    value: CONTACT_DETAILS.phone,
    href: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`,
    description: 'Comunicación directa con el equipo comercial.'
  }
];

export const CONTACT_FAQ = [
  {
    id: 1,
    question: '¿Cuánto tardan en responder?',
    answer: 'Normalmente respondemos en menos de 15 minutos dentro del horario de atención.'
  },
  {
    id: 2,
    question: '¿Puedo solicitar una cotización?',
    answer: 'Sí. Cuéntanos fecha, destino y tipo de vehículo y te devolvemos una propuesta.'
  },
  {
    id: 3,
    question: '¿Atienden fines de semana?',
    answer: 'Sí, el equipo de contacto opera todos los días para consultas y reservas.'
  }
];

// ABOUT PAGE DATA - VERSIÓN MAIN (CAMBIOS ALTERNOS)
export const ABOUT_HERO = {
  title: 'Quiénes Somos',
  subtitle: 'Soluciones de Transporte Confiables',
  description: 'Somos líderes en la industria de alquiler de vehículos con más de una década sirviendo a clientes en todo el país.'
};

export const ABOUT_STORY = [
  {
    id: 1,
    year: '2011',
    title: 'Inicios',
    description: 'Comenzamos con una pequeña flota en Lima'
  },
  {
    id: 2,
    year: '2016',
    title: 'Crecimiento',
    description: 'Expandimos a otras ciudades del Perú'
  }
];

export const ABOUT_TEAM = {
  title: 'Equipo Profesional',
  members: 'Contamos con más de 50 profesionales dedicados'
};

export const ABOUT_ACHIEVEMENTS = [
  'Más de 10 años de experiencia',
  'Flota de 50+ vehículos',
  '8000+ clientes satisfechos',
  'Certificaciones internacionales'
];
