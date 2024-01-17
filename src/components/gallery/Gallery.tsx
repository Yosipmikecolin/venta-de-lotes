import "./Gallery.css";
import Post from "../../../public/image.jpg";
import Image from "next/image";

const Gallery = () => {
  const imagens = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <h1 className="title-gallery">Fotos de lotes</h1>
      <section className="container-image">
        {imagens.map((i) => (
          <div className="image" key={i}>
            <Image src={Post} alt="logo" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
