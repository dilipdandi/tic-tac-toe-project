import { useState } from "react"

export default function Player ({initialName,symbol, isActive, onChangename}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
         
    function handleEditClick() {
        setIsEditing((editing) => !editing);
        
        if (isEditing) {    
         onChangename(symbol,playerName)
        }
    }

    function handleChangeName(event){
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
   // let buttonCaption = "Edit";

    if (isEditing) {
        editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChangeName} />
    );
      //  buttonCaption = "Save"
    }
     
    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
          </li>
    )
}