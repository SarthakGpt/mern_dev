import React from 'react'

const Table = () => {
  return (
    <div>
        <h1>Table</h1>
        <table border="1px">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>MARKS</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Sam</td>
                <td>85</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Shivansh</td>
                <td>75</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Preet</td>
                <td>65</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Apoorv</td>
                <td>95</td>
            </tr>
        </table>
    </div>
  )
}

export default Table