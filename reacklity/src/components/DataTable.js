import React from 'react'

class DataTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Eye Color</th>
          </tr>
          {this.props.data.map(datum=>{ return (
            <tr>
              <td>{datum.index}</td>
              <td>{datum.name}</td>
              <td>datum.gender</td>
              <td>datum.height</td>
              <td>datum.eye_color</td>
            </tr>
          )
          })}
        </table>
      </div>
    );
  }
}


export default DataTable