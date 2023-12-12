import { Component } from "react";
import PropTypes from 'prop-types';
import css from "./style.module.css"

class ImageItem extends Component{
     render() {
   const { image } = this.props;

    return (
      <>
        <li className={css.item}>
          <img className={css.image}
            src={image.webformatURL} 
            alt={image.tags} 
          />
        </li>
          
          
        
      </>
    );
  }

}

export default ImageItem;

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};