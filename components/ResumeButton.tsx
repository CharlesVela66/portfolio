import React from 'react';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const ResumeButton = () => {
  const handleDownload = async () => {
    try {
      // Ruta directa al archivo PDF
      const resumePath = '/files/CV_CARLOSVELASCO.pdf';

      // Crea un enlace temporal
      const link = document.createElement('a');

      // Asigna la ruta del archivo PDF al atributo 'href' del enlace
      link.href = resumePath;

      // Establece el nombre del archivo para la descarga
      link.download = 'CV_CARLOSVELASCO.pdf';

      // Agrega el enlace al DOM (es necesario para algunos navegadores)
      document.body.appendChild(link);

      // Simula un clic en el enlace para iniciar la descarga
      link.click();

      // Elimina el enlace del DOM
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <div className='mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
      <button className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2' onClick={handleDownload}>
        <p> Download CV</p>
        <ArrowDownTrayIcon className='w-[1.6rem]h-[1.7rem] text-black'/>
      </button>
      <button className='flex items-cemter space-x-2'>
        <PlayCircleIcon className='w-16 h-16 hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]'/>
        <p className='text-[20px] font-semibold text-white mt-4'>Watch The Video</p>
      </button>
    </div>
  );
};

export default ResumeButton;
