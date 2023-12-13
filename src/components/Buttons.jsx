import satData from './satData'
import './styling.css'

const Buttons = ({ filterByType, setSat, displayOrbitTypes }) => {
  return (
    <div className='flex-container'>
      {displayOrbitTypes.map((satType, id) =>
        <button onClick={() => filterByType(satType)} key={id}>
          {satType} Orbit
        </button>)}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  )
}

export default Buttons