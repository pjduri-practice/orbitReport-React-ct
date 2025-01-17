import './styling.css'

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map(s => <>
          <tr>
            <td>{s.name}</td>
            <td>{s.type}</td>
            <td>{s.launchDate}</td>
            <td>{s.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        </>)}
      </tbody>
    </table>
  )
}

export default Table