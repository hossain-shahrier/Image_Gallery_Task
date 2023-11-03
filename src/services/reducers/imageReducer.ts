// Types
import { Action, GalleryState } from '../../types';

// Constants
import {
  DELETE_SELECTED_IMAGES,
  DESELECT_IMAGE,
  SELECT_IMAGE,
  IMAGE_GALLERY,
  RESET_SELECTED_IMAGES,
} from '../constants/selectConstants';

// Declaring initial state
const initialState: GalleryState = {
  galleryImages: [],
  selectedImagesCount: 0,
};

// Reducer
const galleryReducer = (
  state: GalleryState = initialState,
  { type, payload }: Action
): GalleryState => {
  switch (type) {
    // Selecting image
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImagesCount: state.selectedImagesCount + 1,
        galleryImages: state.galleryImages.map((image) =>
          image.src === payload.src ? { ...image, selected: true } : image
        ),
      };

    // Deselecting image
    case DESELECT_IMAGE:
      return {
        ...state,
        selectedImagesCount: state.selectedImagesCount - 1,
        galleryImages: state.galleryImages.map((image) =>
          image.src === payload.src ? { ...image, selected: false } : image
        ),
      };
    // Deselecting all images
    case RESET_SELECTED_IMAGES:
      return {
        ...state,
        selectedImagesCount: 0,
        galleryImages: state.galleryImages.map((image) =>
          image.selected ? { ...image, selected: false } : image
        ),
      };
    // Deleting selected images
    case DELETE_SELECTED_IMAGES:
      return {
        ...state,
        selectedImagesCount: 0,
        galleryImages: state.galleryImages.filter((image) => !image.selected),
      };

    // Gallery images
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
