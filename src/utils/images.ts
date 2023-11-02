interface Image {
  src: string;
  id: number;
  alt: string;
  featured: boolean;
}

export const images: Image[] = [
  { src: '/images/image-1.webp', id: 1, alt: 'featured', featured: false },
  { src: '/images/image-2.webp', id: 2, alt: 'image', featured: false },
  { src: '/images/image-3.webp', id: 3, alt: 'image', featured: false },
  { src: '/images/image-4.webp', id: 4, alt: 'image', featured: false },
  { src: '/images/image-5.webp', id: 5, alt: 'image', featured: false },
  { src: '/images/image-6.webp', id: 6, alt: 'image', featured: false },
  { src: '/images/image-7.webp', id: 7, alt: 'image', featured: false },
  { src: '/images/image-8.webp', id: 8, alt: 'image', featured: false },
  { src: '/images/image-9.webp', id: 9, alt: 'image', featured: false },
  { src: '/images/image-10.jpeg', id: 10, alt: 'image', featured: false },
  { src: '/images/image-11.jpeg', id: 11, alt: 'image', featured: true },
];

export default images;
