import React, { useRef, useState } from 'react';
import './Workspace.css'

const Workspace = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadEnabled, setUploadEnabled] = useState(true); // Add a boolean state variable

  const handleDoubleClick = () => {
    if (uploadEnabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFile = e.target.files[0];
      setSelectedImage(imageFile);

      // Disable the upload option after an image is selected
      setUploadEnabled(false);
    }
  };

  return (
    <div onDoubleClick={handleDoubleClick} className="workspace container my-auto rounded bg-primary">
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageUpload}
        disabled={!uploadEnabled} // Disable the file input if upload is disabled
      />
      
      <div>
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default Workspace;
