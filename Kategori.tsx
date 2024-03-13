"use client";

import { useState, useRef, useEffect } from "react";

const Kategori: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutId.current) {
      clearTimeout(closeTimeoutId.current);
      closeTimeoutId.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (
      dropdownRef.current &&
      relatedTarget instanceof Node &&
      !dropdownRef.current.contains(relatedTarget)
    ) {
      closeTimeoutId.current = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutId.current) {
        clearTimeout(closeTimeoutId.current);
      }
    };
  }, []);

  const categories: string[] = [
    "Rumah Tangga",
    "Audio, Kamera & Elektronik Lainnya",
    "Buku",
    "Dapur",
    "Elektronik",
    "Fashion Anak & Bayi",
    "Fashion Muslim",
    "Fashion Pria",
    "Fashion Wanita",
    "Film & Musik",
    "Gaming",
  ];

  return (
    <div className="relative" onMouseLeave={handleMouseLeave} ref={dropdownRef}>
      <button
        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
        onMouseEnter={handleMouseEnter}
      >
        Kategori
      </button>
      {isOpen && (
        <div
          className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
        >
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Kategori;
