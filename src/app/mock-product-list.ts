import CatalogProduct, { Status } from './model/CatalogProduct';

export const products: CatalogProduct[] = [
  {
    id: '1',
    code: 'PRD456',
    name: 'Air Max Elite',
    title: 'Chaussures de course haute performance',
    description:
      'Découvrez le confort et les performances ultimes avec les chaussures Air Max Elite.',

    price: 150,
    category: 'Chaussures de course',



    image: 'shoes1.png',
    status: Status.INSTOCK,
    discount: 10,
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2023-09-15'),
  },
  {
    id: '2',
    code: 'PRD457',
    name: 'Air Zoom Pegasus',
    title: 'Chaussures de sport pour la course',
    description:
      'Un modèle classique pour les athlètes à la recherche de confort et de durabilité.',

    price: 120,
    category: 'Chaussures de course',

    image: 'shoes2.png',
    status: Status.LOWSTOCK,
    discount: 15,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-09-20'),
  },
  {
    id: '3',
    code: 'PRD458',
    name: 'Nike Free Run',
    title: 'Chaussures légères de course',
    description:
      'Les chaussures Nike Free Run sont conçues pour offrir un confort maximal avec un design minimaliste.',

    price: 110,
    category: 'Chaussures de course',

    image: 'shoes3.png',
    status: Status.INSTOCK,
    discount: 15,
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-10-01'),
  },
  {
    id: '4',
    code: 'PRD459',
    name: 'Nike React Element',
    title: 'Chaussures de course React Element',
    description:
      'Des chaussures de course innovantes avec une excellente réactivité et une construction légère.',

    price: 160,
    category: 'Chaussures de course',

    image: 'shoes4.png',
    status: Status.INSTOCK,
    discount: 20,
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-09-10'),
  },
  {
    id: '5',
    code: 'PRD460',
    name: 'Adidas Ultraboost',
    title: 'Chaussures de course Ultraboost',
    description:
      'Les Ultraboost d’Adidas sont les chaussures de sport les plus confortables grâce à leur technologie Boost.',

    price: 180,
    category: 'Chaussures de course',

    image: 'shoes5.png',
    status: Status.INSTOCK,
    discount: 25,
    createdAt: new Date('2023-04-15'),
    updatedAt: new Date('2023-09-25'),
  },
  {
    id: '6',
    code: 'PRD461',
    name: 'Puma Speed Nitro',
    title: 'Chaussures de running Nitro',
    description:
      'Les Puma Speed Nitro offrent des performances exceptionnelles pour les coureurs à la recherche de vitesse et de confort.',

    price: 135,
    category: 'Chaussures de course',

    image: 'shoes1.png',
    status: Status.INSTOCK,
    discount: 5,
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2023-09-30'),
  },
  {
    id: '7',
    code: 'PRD462',
    name: 'Reebok Nano X1',
    title: 'Chaussures de fitness Nano X1',
    description:
      'Reebok Nano X1, les chaussures idéales pour vos séances de fitness intenses.',

    price: 130,
    category: 'Chaussures de fitness',

    image: 'shoes2.png',
    status: Status.INSTOCK,
    discount: 10,
    createdAt: new Date('2023-07-20'),
    updatedAt: new Date('2023-09-12'),
  },
  {
    id: '8',
    code: 'PRD463',
    name: 'Saucony Endorphin Pro',
    title: 'Chaussures de course Endorphin Pro',
    description:
      'Saucony Endorphin Pro, pour les coureurs qui recherchent une propulsion maximale et un confort ultime.',

    price: 195,
    category: 'Chaussures de course',

    image: 'shoes3.png',
    status: Status.INSTOCK,
    discount: 15,
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-10-15'),
  },
  {
    id: '9',
    code: 'PRD464',
    name: 'Under Armour HOVR Phantom',
    title: 'Chaussures de running HOVR Phantom',
    description:
      'Les HOVR Phantom d’Under Armour offrent un amorti exceptionnel et un confort longue durée.',

    price: 140,
    category: 'Chaussures de course',

    image: 'shoes4.png',
    status: Status.INSTOCK,
    discount: 20,
    createdAt: new Date('2023-07-12'),
    updatedAt: new Date('2023-09-19'),
  },
  {
    id: '10',
    code: 'PRD465',
    name: 'New Balance 1080v11',
    title: 'Chaussures de running 1080v11',
    description:
      'Le modèle 1080v11 de New Balance est conçu pour offrir un confort exceptionnel avec une performance optimale.',


    price: 165,
    category: 'Chaussures de course',

    image: 'shoes5.png',
    status: Status.INSTOCK,
    discount: 10,
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-11-30'),
  },
];
