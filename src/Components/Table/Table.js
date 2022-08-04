import React, { useState } from 'react'
import classes from './Table.module.css'
import Data from './mock-data.json'

const Table = () => {
    const [playerData, setPlayerData] = useState(Data);
  return (
    <div className={classes.tableContainer}>
        <form>
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Country</th>
                    <th>Club</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cristiano Ronaldo</td>
                    <td>Portugal</td>
                    <td>Real Madrid</td>
                    <td>left Wing Forward</td>
                </tr>
            </tbody>
        </table></form>
    </div>
  )
}

export default Table