import {
  SELECT_IMAGE,
  DESELECT_IMAGE,
  DELETE_SELECTED_IMAGES,
  IMAGE_GALLERY,
} from '../constants/selectConstants';

interface Action<T = any> {
  type: string;
  payload?: T;
}

interface ImageData {
  src: string;
  id: number;
  alt: string;
  featured: boolean;
  selected?: boolean;
}
export const selectImage = (image: ImageData): Action => {
  return {
    type: SELECT_IMAGE,
    payload: image,
  };
};

export const deselectImage = (image: ImageData): Action => {
  return {
    type: DESELECT_IMAGE,
    payload: image,
  };
};

export const deleteSelectedImages = (): Action => {
  return {
    type: DELETE_SELECTED_IMAGES,
  };
};

export const imageGallery = (image: ImageData[]): Action => {
  return {
    type: IMAGE_GALLERY,
    payload: image,
  };
};
