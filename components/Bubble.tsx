import React from 'react';
import Image from 'next/image';

interface BubbleProps {
  name: string;
  url: string;
  description: string;
  language: 'golang' | 'python';
  status?: 'green' | 'red' | 'yellow';
}

export const Bubble: React.FC<BubbleProps> = ({ name, language, description, status, url }) => {
  let statusClasses = '';

  const convertLanguageImg = (language: string) => {
    return `/lang/${language}.svg`;
  };

  switch (status) {
    case 'green':
      statusClasses = 'bg-teal-500';
      break;
    case 'red':
      statusClasses = 'bg-red-500';
      break;
    case 'yellow':
      statusClasses = 'bg-yellow-500';
      break;
    default:
      statusClasses = 'bg-gray-500';
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="relative w-64 h-64 bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <div>
        <Image className="w-full h-32 object-cover rounded-t-lg" src={convertLanguageImg(language)} alt={name} width={600} height={600}/>
        <div className={`absolute rounded-full ${statusClasses} w-4 h-4 right-2 bottom-2 animate-pulse`}></div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </a>
  );
};
