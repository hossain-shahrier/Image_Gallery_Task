// galleryReducer.ts

import { Action, GalleryState } from '../../types';
import {
  DELETE_SELECTED_IMAGES,
  DESELECT_IMAGE,
  SELECT_IMAGE,
  IMAGE_GALLERY,
} from '../constants/selectConstants';

const initialState: GalleryState = {
  galleryImages: [],
  selectedImagesCount: 0,
};

const galleryReducer = (
  state: GalleryState = initialState,
  { type, payload }: Action
): GalleryState => {
  switch (type) {
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImagesCount: state.selectedImagesCount + 1,
        galleryImages: state.galleryImages.map((image) =>
          image.src === payload.src ? { ...image, selected: true } : image
        ),
      };

    case DESELECT_IMAGE:
      return {
        ...state,
        selectedImagesCount: state.selectedImagesCount - 1,
        galleryImages: state.galleryImages.map((image) =>
          image.src === payload.src ? { ...image, selected: false } : image
        ),
      };

    case DELETE_SELECTED_IMAGES:
      return {
        ...state,
        selectedImagesCount: 0,
        galleryImages: state.galleryImages.filter((image) => !image.selected),
      };

    case IMAGE_GALLERY:
      return {
        ...state,
        galleryImages: payload,
      };

    default:
      return state;
  }
};

export default galleryReducer;
