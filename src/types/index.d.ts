// Declaring Type for Redux Action
interface Action<T = any> {
  type: string;
  payload?: T;
}

// Declaring Type for Images
interface Image {
  src: string;
  id: number;
  alt: string;
  featured: boolean;
  selected?: boolean;
}

// Declaring Type for Gallery State
interface GalleryState {
  galleryImages: Image[];
  selectedImagesCount: number;
}

export type { Action, Image, GalleryState };
