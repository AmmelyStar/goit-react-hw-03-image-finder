import css from './style.module.css'; 

const ImageGallery = ({ images }) => {
  const galleryItems = [];

  images.forEach((image) => {
    galleryItems.push(
      <li key={image.id}>
        <img src={image.smallImageUrl} alt={`Image ${image.id}`} className={css.galleryImage} />
      </li>
    );
  });

  return <ul className={css.gallery}>{galleryItems}</ul>;
};

export default ImageGallery;