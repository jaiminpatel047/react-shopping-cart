import Brightness5Icon from '@mui/icons-material/Brightness5';
import './style.css'

const DarkMode = ({toggleDark}) => {
  return (
    <>
        <div className="flottingButton" onClick={() => toggleDark()} title='Dark Mode'>
            <Brightness5Icon className='flottingIcon'/>
        </div>
    </>
  )
}

export default DarkMode