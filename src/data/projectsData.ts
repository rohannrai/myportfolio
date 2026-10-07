import { ProjectProps } from '../components/ProjectCard';
import hotelImage from '../assets/hotel.jpg';
import geminiImage from '../assets/gemini.jpg';
import dietImage from '../assets/Nutririon.jpg';

export const projectsData: ProjectProps[] = [
  // ===== CLIENT / PROFESSIONAL PROJECTS =====

  {
    id: 1,
    title: 'Cesari London',
    description:
      'A premium Shopify e-commerce website for Cesari London, featuring a luxury-focused design, responsive layouts, product merchandising, and custom Shopify theme development.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
    demoLink: 'https://cesarilondon.com/',
    codeLink: '#'
  },

  {
    id: 2,
    title: 'DuraCrafts Furniture',
    description:
      'A custom Shopify e-commerce website for a furniture brand, focused on product presentation, responsive design, collection organization, and a smooth shopping experience.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
    demoLink: 'https://duracraftsfurniture.com/',
    codeLink: '#'
  },

  {
    id: 3,
    title: 'Radian Books',
    description:
      'A Shopify-based e-commerce website for a book brand, including custom theme sections, product layouts, collections, responsive UI, and Shopify storefront customization.',
    image:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
    demoLink: 'https://radianbooks.in/',
    codeLink: '#'
  },

  {
    id: 4,
    title: 'The Silvern',
    description:
      'A premium Shopify jewellery e-commerce website with custom storefront design, product customization, metafields, dynamic sections, and responsive layouts.',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'Liquid', 'Metafields', 'JavaScript', 'CSS'],
    demoLink: 'https://thesilvern.com/',
    codeLink: '#'
  },

  {
    id: 5,
    title: 'Solene',
    description:
      'A modern Shopify e-commerce storefront with a clean premium interface, custom theme sections, product presentation, responsive design, and optimized shopping experience.',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
    demoLink: 'https://www.solene.in/',
    codeLink: '#'
  },

  {
    id: 6,
    title: 'Decon Lighting',
    description:
      'A Shopify e-commerce website for a lighting brand, featuring custom storefront sections, product collections, responsive layouts, and an optimized product browsing experience.',
    image:
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'E-commerce'],
    demoLink: 'https://deconlighting.in/',
    codeLink: '#'
  },

  {
    id: 7,
    title: 'Big Brand Bucket',
    description:
      'A professional WordPress website developed for a digital agency, featuring a responsive interface, structured content, modern UI, and optimized website experience.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://bigbrandbucket.com/',
    codeLink: '#'
  },

  // ===== PERSONAL / DEVELOPMENT PROJECTS =====

  {
    id: 8,
    title: 'Wanderlust : Hotel Listing Website',
    description:
      'A full-featured hotel listing platform built with Node.js and MongoDB. Features include user authentication, property listings, browsing, and booking functionality.',
    image: hotelImage,
    tags: ['Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://wonderlust-ekp0.onrender.com/listings',
    codeLink: 'https://github.com/rohannrai/Wonderlust'
  },

  {
    id: 9,
    title: 'Gemini AI Chatbot',
    description:
      'A real-time AI chatbot built using React and the Google Gemini API with a responsive conversational interface.',
    image: geminiImage,
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Gemini API'],
    demoLink: 'https://gemini-clone-ten-pi.vercel.app/',
    codeLink: 'https://github.com/rohannrai/GEMINI_clone'
  },

  {
    id: 10,
    title: 'Diet and Nutrition Website',
    description:
      'A responsive diet and nutrition website built with React and TypeScript, featuring a modern interface and responsive layouts.',
    image: dietImage,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    demoLink: 'https://diet-app-wvnf.vercel.app/',
    codeLink: 'https://github.com/rohannrai/Diet_app'
  },

  {
    id: 11,
    title: 'Weather Dashboard',
    description:
      'A real-time weather dashboard that provides weather information and forecasts for locations worldwide.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=60',
    tags: ['React', 'APIs', 'Chart.js', 'CSS'],
    demoLink: 'https://github.com/rohannrai/Weather',
    codeLink: 'https://github.com/rohannrai/Weather'
  },

  {
    id: 12,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills with an animated interface, contact form, and responsive design.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=60',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    demoLink: '#',
    codeLink: '#'
  }
];