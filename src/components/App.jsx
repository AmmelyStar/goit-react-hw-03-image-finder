// import ImageGallery from './ImageGallery';
import axios from "axios";
import SearchBar from './Searchbar/Searchbar'
import  { Component } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery";

const q = 'cat';
const perPage = 12;
let currentPage = 1; 

const KEY = '40311007-381e26539f6c0a156243500cd';
const URL = `https://pixabay.com/api/?q=${q}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      images: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { searchTerm } = this.state;
      console.log(searchTerm);
      const response = await axios.get(URL);
      const data = response.data;
      // console.log(data);
      const images = data.hits;
      // console.log(images);
      // Оновлення стану компоненти з отриманими зображеннями
      this.setState({ images });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  handleSearchSubmit = () => {
    
    this.fetchData();
  };

  handleInputChange = (event) => {
    // Оновлення стану searchTerm при зміні введення
    this.setState({ searchTerm: event.target.value });
   console.log(this.state.searchTerm); 
  };

  render() {
    const { searchTerm } = this.state;
     const { images } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} onInputChange={this.handleInputChange} searchTerm={searchTerm} />
        <ImageGallery images={images} /> 
      </>
    );
  }
}

export default App;