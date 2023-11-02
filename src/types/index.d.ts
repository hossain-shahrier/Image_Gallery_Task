interface Action<T = any> {
  type: string;
  payload?: T;
}

interface Image {
  src: string;
  id: number;
  alt: string;
  featured: boolean;
  selected?: boolean;
}

interface GalleryState {
  galleryImages: Image[];
  selectedImagesCount: number;
}
export type { Action, Image, GalleryState };
