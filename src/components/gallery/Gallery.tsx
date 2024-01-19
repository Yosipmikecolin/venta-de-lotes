"use client";

import "./Gallery.css";
import Image, { StaticImageData } from "next/image";
import IconClose from "../../../public/icon-close.png";
import { useCallback, useState, MouseEvent } from "react";
import { listImages } from "@/utils/list-images";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [fotoSelect, setFotoSelect] = useState<{
    foto: StaticImageData;
    index: number;
  }>();

  const openModal = useCallback((foto: StaticImageData, index: number) => {
    setOpen(true);
    setFotoSelect({ foto, index });
  }, []);

  const nextFoto = useCallback((index: number) => {
    if (index !== 5) {
      const foto = listImages[index + 1].foto;
      setFotoSelect({ foto, index: index + 1 });
    } else {
      const foto = listImages[0].foto;
      setFotoSelect({ foto, index: 0 });
    }
  }, []);

  const prevFoto = useCallback((index: number) => {
    if (index !== 0) {
      const foto = listImages[index - 1].foto;
      setFotoSelect({ foto, index: index - 1 });
    } else {
      const foto = listImages[5].foto;
      setFotoSelect({ foto, index: 5 });
    }
  }, []);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    const clickedElement = e.target as HTMLDivElement;
    const nameClass = clickedElement.classList;
    if (nameClass[0] === "container-gallery") {
      setOpen(false);
    }
  };

  return (
    <section>
      <h1 className="title-gallery">Fotos de lotes</h1>

      <section className="container-image">
        {listImages.map((item, index) => (
          <div className="image" key={index}>
            <Image
              src={item.foto}
              alt="logo"
              onClick={() => openModal(item.foto, index)}
            />
          </div>
        ))}
      </section>

      {open && fotoSelect && (
        <div className="container-gallery" onClick={closeModal}>
          <img src={IconClose.src} width={50} onClick={() => setOpen(false)} />
          <div className="view-image" data-info={true}>
            <Image
              src={fotoSelect.foto}
              alt="foto de lote"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          <div className="buttons-gallery">
            <span className="progress">{fotoSelect.index + 1}/6</span>
            <div className="container-controls">
              <button onClick={() => prevFoto(fotoSelect.index)}>
                Anterior
              </button>
              <button onClick={() => nextFoto(fotoSelect.index)}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
