import React from 'react';
import Logo from '../../components/logo';
import Button from '../../components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSelectedImages } from '../../services/actions/imageActions';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  // Delete Image/Images function
  const handleDelete = () => {
    dispatch(deleteSelectedImages());
  };

  // Get selected images count from Redux store
  const selectedImagesCount: number = useSelector(
    (state: any) => state.gallery.selectedImagesCount
  );

  return (
    <header className="w-full mx-auto z-50 bg-blue-50 flex items-center top-0 fixed h-16 border border-b-2">
      <div className="px-6 flex w-full items-center justify-between">
        {/* Logic for rendering seleted image/s count */}
        {selectedImagesCount > 0 ? (
          <span className="text-gray-500 font-semibold">
            {selectedImagesCount > 1
              ? selectedImagesCount + ' files selected'
              : selectedImagesCount + ' file selected'}
          </span>
        ) : (
          <Logo />
        )}
        {selectedImagesCount > 0 && (
          <Button
            className="text-rose-500 font-semibold px-4 py-2 cursor-pointer"
            onClick={handleDelete}
          >
            Delete Files
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
