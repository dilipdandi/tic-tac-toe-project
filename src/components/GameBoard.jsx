


export default function GameBoard({ onSelectSquare, board }){
    


    // const [gameboard, setGameBoard] = useState(initialGameBoard);

    // function handleGameBoard(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //     const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
    //     newGameBoard [rowIndex][colIndex] = activePlayerSymbol;
    //     return newGameBoard;
    //     })

    //  onSelectSquare();
   // }

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li> ))}
                </ol>
            </li>)}
        </ol>
    )

}