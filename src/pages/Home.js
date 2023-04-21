import './style/page.css'
import Item from '../components/Item'
import Slider from '../components/Slider'
import MiniSlider from '../components/MiniSlider'

const Home = ({handleClick}) => {

  return (
    <div className='container'>
        <h1 className='heading'>We offer People Best Way <br /> to eat Headlthy Food</h1>
        <Item handleClick={handleClick} />
        <Slider />
        <MiniSlider />
    </div>
  )
}

export default Home