import React from 'react'

class DataTable extends React.Component {
  render() {
    return (
      <div>
        <table className="striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Eye Color</th>
            </tr>
          </thead>
          <tbody>
          {this.props.data.map((datum,index)=>{ return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{datum.name}</td>
              <td>{datum.gender}</td>
              <td>{datum.height}</td>
              <td>{datum.eye_color}</td>
            </tr>
          )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}


export default DataTable