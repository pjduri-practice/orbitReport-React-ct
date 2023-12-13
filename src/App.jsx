import Banner from "./components/Banner"
import Buttons from "./components/Buttons"
import Table from "./components/Table"
import { useState } from "react"
import satData from './components/satData'

function App() {

  const [sat, setSat] = useState(satData)
  const displayOrbitTypes = [...new Set(satData.map(data => data.orbitType))]

  const filterByType = (currentType) => {
    const displaySats = satData.filter(d => d.orbitType === currentType)
    setSat(displaySats)
  }

  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displayOrbitTypes={displayOrbitTypes}
      />
      <Table sat={sat} />
    </div>
  )
}

export default App;