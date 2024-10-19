import React,{useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgHome from '../FetchingImages.js';

function ImgSlider() {
const [selectedLanguage, setSelectedLanguage] = useState('English');
const [selectedMovietype, setSelectedMovietype] = useState('Movies');

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 6
  };

  return (
    
    <div className="slider-container bg-black m-6 p-6">
        <div className="trending-now-language-movies">
            <div className="">
                <h2 className="text-white text-2xl font-bold">Trending Now</h2>
            </div>
            <div className="language-showtype mt-2 flex justify-start">
            <div className="dropdown-language">
                    <select name="select" id="select" className="p-2 rounded flex-1 bg-black/80 border border-gray-700 text-white m-2 px-1">
                        <option value="English" defaultValue={selectedLanguage}>English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
            </div>
            <div className="dropdown-movietype">
            <select name="select" id="select" className="p-2 rounded flex-1 bg-black/80 border border-gray-700 text-white m-2 px-1">
                        <option value="English" defaultValue={selectedMovietype}>Movies</option>
                        <option value="Hindi">TV Shows</option>
                    </select>
            </div>
            </div>
        </div>
      <Slider {...settings}>
        
            {
                imgHome.map((img, index) => (
                  <div key={index} className="w-3/4 text-center py-8">
                    <img src={img.url} alt="" />
                  </div>
                ))
              }
        
      </Slider>
    </div>
  );
}

export default ImgSlider;
