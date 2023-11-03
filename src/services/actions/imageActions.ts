// Types
import { Action, Image } from '../../types';

// Constants
import {
  SELECT_IMAGE,
  DESELECT_IMAGE,
  DELETE_SELECTED_IMAGES,
  IMAGE_GALLERY,
  RESET_SELECTED_IMAGES,
} from '../constants/selectConstants';

// Action for selecting image
export const selectImage = (image: Image): Action => {
  return {
    type: SELECT_IMAGE,
    payload: image,
  };
};

// Action for Deselecting image
export const deselectImage = (image: Image): Action => {
  return {
    type: DESELECT_IMAGE,
    payload: image,
  };
};
// Action for deseleting all images
export const resetSelectedImages = (): Action => {
  return {
    type: RESET_SELECTED_IMAGES,
  };
};
// Action for deleting selected images

export const deleteSelectedImages = (): Action => {
  return {
    type: DELETE_SELECTED_IMAGES,
  };
};
export const resetImages = (): Action => {
  return {
    type: RESET_SELECTED_IMAGES,
  };
};
// Action for images
export const imageGallery = (image: Image[]): Action => {
  return {
    type: IMAGE_GALLERY,
    payload: image,
  };
};
