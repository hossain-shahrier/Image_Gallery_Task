import React, { useEffect, DragEvent } from 'react';
// Action
import {
  deselectImage,
  selectImage,
  imageGallery,
} from '../../services/actions/imageActions';

// Local Images
import { images } from '../../utils/images';

// Custom Styles
import '../custom-styles/gallery.css';

import { useDispatch, useSelector } from 'react-redux';
import { Image } from '../../types';

const Gallery: React.FC = () => {
  const dispatch = useDispatch();

  // Dispatch the imageGallery action once when the component mounts
  useEffect(() => {
    dispatch(imageGallery(images));
  }, [dispatch]);

  // Get images from Redux store
  const galleryImages: Image[] = useSelector(
    (state: any) => state.gallery.galleryImages
  );

  // Checkbox change handler
  const handleCheckboxChange = (image: Image) => {
    if (image.selected) {
      // Deselect the image
      dispatch(deselectImage(image));
    } else {
      // Select the image
      dispatch(selectImage(image));
    }
  };

  // Drag and Drop Handlers
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    image: Image
  ) => {
    e.dataTransfer.setData('text/plain', image.src);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, targetImage: Image) => {
    e.preventDefault();
    const draggedSrc = e.dataTransfer.getData('text/plain');
    const draggedIndex = galleryImages.findIndex(
      (img) => img.src === draggedSrc
    );

    const targetIndex = galleryImages.findIndex((img) => img === targetImage);

    const newGalleryImages = [...galleryImages];

    // Swap the images
    [newGalleryImages[draggedIndex], newGalleryImages[targetIndex]] = [
      newGalleryImages[targetIndex],
      newGalleryImages[draggedIndex],
    ];

    // Swap the 'featured' properties
    [
      newGalleryImages[draggedIndex].featured,
      newGalleryImages[targetIndex].featured,
    ] = [
      newGalleryImages[targetIndex].featured,
      newGalleryImages[draggedIndex].featured,
    ];

    // Dispatch the new gallery images
    dispatch(imageGallery(newGalleryImages));
  };

  return (
    <div className="my-16 h-full">
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {galleryImages.map((image) => (
            // Image Container
            <div
              key={image.src}
              draggable
              onDragStart={(e) => handleDragStart(e, image)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, image)}
              className={`dragable-image bg-white border rounded-md h-full w-full relative ${
                image.featured &&
                'row-start-1 col-start-1 col-end-3 lg:row-start-1 lg:col-start-1 lg:row-end-3 lg:col-end-3 md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-3'
              }`}
            >
              <img src={image.src} alt={image.alt} className="rounded-md" />

              {/* Checkbox */}
              <div className="check-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => handleCheckboxChange(image)}
                  checked={image.selected}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
