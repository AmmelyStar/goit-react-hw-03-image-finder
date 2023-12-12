import 'style.module.css'
import axios from "axios";
import SearchBar from './Searchbar/Searchbar'
import  { Component } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";


const perPage = 12;
const KEY = '40311007-381e26539f6c0a156243500cd';


class App extends Component {
  
    state = {
      searchName: '',
      images: [],
      currentPage: 1, 
    };
  
  componentDidUpdate(_, prevState) {
    
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchData(); 
    }
  }
  
   fetchData = async () => {
    try {
  
      const URL = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
      console.log(this.state.searchName);
      
      const response = await axios.get(URL);
      const data = response.data;
      const newImages = data.hits;
               
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages], 
      }));
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   handleSubmit = searchQuery => {
    this.setState({
      searchName: searchQuery,
      images: [], 
      currentPage: 1, 
    }, () => {
      this.fetchData(); 
    });
  };

    loadMore = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
      }),
      () => {
        this.fetchData();
      }
    );
  };


 

  render() {
    const { images} = this.state;
    

    return (
      <>
        <SearchBar onSubmit={this.handleSubmit}/>
        <ImageGallery images={images} /> 
        {images.length > 0 && <Button onClick={this.loadMore} />}
        </>
    );
  }
}

export default App;

 

  

 

 