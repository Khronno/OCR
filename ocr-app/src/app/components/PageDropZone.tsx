import React, { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

interface PageDropzoneProps {
  onDrop: (files: File[]) => void;
  children: React.ReactNode;
}

const PageDropzone: React.FC<PageDropzoneProps> = ({ onDrop, children }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => onDrop(acceptedFiles),
    noClick: true,
  });

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      {...getRootProps()}
      className={`relative ${isDragActive ? 'bg-blue-50' : ''}`}
      style={{ minHeight: '100vh' }}
      aria-live="polite"
    >
      <input
        {...getInputProps()}
        ref={fileInputRef}
        style={{ display: 'none' }} 
      />
      {isDragActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 backdrop-blur-sm z-10">
          <p className="text-xl font-semibold text-[#323e48]">Soltá tu archivo acá</p>
        </div>
      )}

      {children}

      <button
        type="button"
        onClick={handleButtonClick}
        className="absolute top-10 right-10 px-4 py-2 bg-[#536878] text-white rounded-md hover:bg-[#4b5e6c] z-20"
      >
        + Añadir factura
      </button>
    </div>
  );
};

export default PageDropzone;
