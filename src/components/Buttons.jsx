import satData from './satData'

const Buttons = ({ filterByType, setSat, displayOrbitTypes }) => {
  return (
    <div>
      {displayOrbitTypes.map((satType, id) =>
        <button onClick={() => filterByType(satType)} key={id}>
          {satType} Orbit
        </button>)}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  )
}

export default Buttons