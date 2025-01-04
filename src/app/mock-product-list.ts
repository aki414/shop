import CatalogProduct, { Status } from './model/CatalogProduct';

export const products: CatalogProduct[] = [
  {
    id: '1',
    code: 'PRD123',
    name: 'Starry Night',
    title: 'Van Gogh\'s masterpiece',
    description:
      'This painting is a masterpiece by Vincent Van Gogh, known for its swirling stars and vibrant colors.',

    price: 1000000,
    category: 'Impressionism',

    image: 'starry_night.jpg',
    status: Status.INSTOCK,
    discount: 10,
    createdAt: new Date('1889-06-18'),
    updatedAt: new Date('1889-06-18'),
  },
  {
    id: '2',
    code: 'PRD456',
    name: 'Sunflowers',
    title: 'Van Gogh\'s sunflower painting',
    description:
      'This painting is a beautiful representation of sunflowers by Vincent Van Gogh.',

    price: 800000,
    category: 'Impressionism',

    image: 'sunflowers.jpg',
    status: Status.INSTOCK,
    discount: 15,
    createdAt: new Date('1888-07-15'),
    updatedAt: new Date('1888-07-15'),
  },
  {
    id: '3',
    code: 'PRD789',
    name: 'Mona Lisa',
    title: 'Leonardo da Vinci\'s famous portrait',
    description:
      'This painting is one of the most famous works of art in the world, created by Leonardo da Vinci.',

    price: 1200000,
    category: 'Renaissance',

    image: 'mona_lisa.jpg',
    status: Status.INSTOCK,
    discount: 5,
    createdAt: new Date('1503-02-15'),
    updatedAt: new Date('1503-02-15'),
  },
  {
    id: '4',
    code: 'PRD012',
    name: 'The Scream',
    title: 'Edvard Munch\'s iconic expressionist painting',
    description:
      'This painting is a representation of modern anxiety and existential dread, created by Edvard Munch.',

    price: 900000,
    category: 'Expressionism',

    image: 'the_scream.jpg',
    status: Status.INSTOCK,
    discount: 20,
    createdAt: new Date('1893-01-01'),
    updatedAt: new Date('1893-01-01'),
  },
  {
    id: '5',
    code: 'PRD345',
    name: 'The Last Supper',
    title: 'Leonardo da Vinci\'s famous mural painting',
    description:
      'This painting is a masterpiece of Renaissance art, created by Leonardo da Vinci.',

    price: 1500000,
    category: 'Renaissance',

    image: 'the_last_supper.jpg',
    status: Status.INSTOCK,
    discount: 10,
    createdAt: new Date('1495-04-01'),
    updatedAt: new Date('1495-04-01'),
  },
  {
    id: '6',
    code: 'PRD678',
    name: 'Girl with a Pearl Earring',
    title: 'Johannes Vermeer\'s famous portrait',
    description:
      'This painting is a beautiful representation of a young girl with a pearl earring, created by Johannes Vermeer.',

    price: 1000000,
    category: 'Baroque',

    image: 'girl_with_a_pearl_earring.jpg',
    status: Status.INSTOCK,
    discount: 15,
    createdAt: new Date('1665-01-01'),
    updatedAt: new Date('1665-01-01'),
  },
  {
    id: '7',
    code: 'PRD901',
    name: 'The Night Watch',
    title: 'Rembrandt van Rijn\'s famous painting',
    description:
      'This painting is a masterpiece of Dutch Golden Age art, created by Rembrandt van Rijn.',

    price: 1200000,
    category: 'Baroque',

    image: 'the_night_watch.jpg',
    status: Status.INSTOCK,
    discount: 20,
    createdAt: new Date('1642-01-01'),
    updatedAt: new Date('1642-01-01'),
  },
  {
    id: '8',
    code: 'PRD234',
    name: 'Guernica',
    title: 'Pablo Picasso\'s powerful anti-war painting',
    description:
      'This painting is a powerful representation of the horrors of war, created by Pablo Picasso.',

    price: 1500000,
    category: 'Cubism',

    image: 'guernica.jpg',
    status: Status.INSTOCK,
    discount: 10,
    createdAt: new Date('1937-05-01'),
    updatedAt: new Date('1937-05-01'),
  },
  {
    id: '9',
    code: 'PRD567',
    name: 'The Persistence of Memory',
    title: 'Salvador Dali\'s famous surrealist painting',
    description:
      'This painting is a masterpiece of surrealism, created by Salvador Dali.',

    price: 1800000,
    category: 'Surrealism',

    image: 'the_persistence_of_memory.jpg',
    status: Status.INSTOCK,
    discount: 15,
    createdAt: new Date('1931-01-01'),
    updatedAt: new Date('1931-01-01'),
  },
  {
    id: '10',
    code: 'PRD5678',
    name: 'The Last Judgment',
    title: 'Michelangelo\'s famous fresco',
    description:
      'This fresco is a masterpiece of Renaissance art, created by Michelangelo.',

    price: 2000000,
    category: 'Renaissance',

    image: 'the_last_judgment.jpg',
    status: Status.INSTOCK,
    discount: 15,
    createdAt: new Date('1536-01-01'),
    updatedAt: new Date('1536-01-01'),
  },
];
