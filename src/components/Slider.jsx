import sliderDetail from './../detail/SliderContain'
import '../components/style.css'

const Slider = () => {
  return (
    <>
     <div id='slider-container'>
      { sliderDetail.map((item)=>(
                <div className="slider-card" key={item.id} style={{backgroundImage: `url(${item.slideBackgroundImage})`}}>
                <div className="slider-content" >
                    <div className='slider-detail'>

                        <h1 className="slider-title">{item.title}</h1>
                        <div className="slider-discription">
                            <p>{item.discription}</p>
                        </div>

                    </div>
                </div>
            </div> )) }
      </div>
    </>
  )
}

export default Slider;