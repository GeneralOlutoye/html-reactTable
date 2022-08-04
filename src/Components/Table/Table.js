import React, { useState } from 'react'
import classes from './Table.module.css'
import { nanoid } from 'nanoid'
import Data from '../mock-data.json'

const Table = () => {
    const [playerData, setPlayerData] = useState(Data);
    const [addFormData, setAdddFormData] = useState({
        name: '',
        Country: '',
        Club: '',
        Position: ''
    })

    const addFormChangeHandler =(event)=>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newFormData ={...addFormData};
        newFormData[fieldName] = fieldValue;

        setAdddFormData(newFormData)
    }

    const formSubmitHandler = (event)=>{
        event.preventDefault();
 
        const newPlayer = {
            id: nanoid(),
            name: addFormData.name,
            Country: addFormData.Country,
            Club: addFormData.Club,
            Position: addFormData.Position
        };

        const newPlayers = {...playerData, newPlayer}
        setPlayerData(newPlayers);
    }

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
                {playerData.map((player)=>(
                <tr>
                    <td>{player.name}</td>
                    <td>{player.Country}</td>
                    <td>{player.Club}</td>
                    <td>{player.Position}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </form>
            <h2>Add Player</h2>
            <form onSubmit={formSubmitHandler}>
                <input 
                type="text" 
                name="name" 
                required="required" 
                placeholder='Enter player name...'
                onChange={addFormChangeHandler}
                />
                <input 
                type="text" 
                name="Country" 
                required="required" 
                placeholder='Enter player country...'
                onChange={addFormChangeHandler}
                />
                <input 
                type="text" 
                name="Club" 
                required="required" 
                placeholder='Enter player club...'
                onChange={addFormChangeHandler}
                />
                <input 
                type="text" 
                name="Position" 
                required="required" 
                placeholder='Enter player position...'
                onChange={addFormChangeHandler}
                />
                <button type="submit">Add</button>
            </form>
    </div>
  )
}

export default Table