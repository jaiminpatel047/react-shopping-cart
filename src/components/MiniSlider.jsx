import './style.css'
import { sliderImgae } from '../detail/MiniSliderItem'
import { useState } from 'react'

const MiniSlider = () => {
    const [ stateHover, setStateHover ] = useState(Array(sliderImgae.length).fill(false))

    const handleMouseEnter = (i) => {
        setStateHover(prevState => {
            const newState = [...prevState];
            newState[i] = true;
            return newState;
          });
    }

    const handleMouseLeave = (i) => {
        setStateHover(prevState => {
          const newState = [...prevState];
          newState[i] = false;
          return newState;
        });
      };
    
  return (
    <div id='mini-slider'>
        <h1 className='mini-slider-title'>Slider</h1>
        <div className="scroller">
            {
                sliderImgae.map((slideItem, i) => (
                    <div className="scroller-item" key={slideItem.id} >
                      <img 
                      src={slideItem.sliderImage} 
                      alt=""  
                      onMouseEnter={() => handleMouseEnter(i)} 
                      onMouseLeave={() => handleMouseLeave(i)} 
                      />
                      {
                          stateHover[i] && (
                            <div className='mini-slider-detail'>
                                <h4>{slideItem.sliderName}</h4>
                                <p className='mini-slider-price'>{slideItem.sliderPrice}</p>
                            </div>
                          )
                      }
                    </div>
                )) 
            }
        </div>
    </div>
  )
}

export default MiniSlider