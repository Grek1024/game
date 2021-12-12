import React, { useState } from 'react'
import Board from './Board';
import './Game.css'
import {calculateWinner} from '../logicOfGame.js'

 const Game = () => {
     const [board, setBoard] = useState(Array(9).fill(null)); 
     const [xIsNext, setXIsNext] = useState(true);
     const winner = calculateWinner(board);
     
     const handleClick = (index) =>{
        const boardCopy = [...board];
        //Определить был ли клик по ячейке или игра закончена
        if(winner || boardCopy[index]) return;
        /****************************************************/
        //Определить чей ход X или O
        boardCopy[index] = xIsNext ? 'X' : 'O';
        /****************************************************/
        //Обновить наш board
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        /****************************************************/  
        
     }

     const startNewGame = () => {
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Очистить поле </button>
        )
    }

     /* const draw = () => {
        if(calculateWinner()==8)
        //Если победителя нету, значит ничья
        return (
            <p className='draw'>Ничья</p>
        )
    }  */
  

    return (
        <div className='wrapper'>
            <Board squares={board} click={handleClick} />
            <p className="game__info">
                {winner ? 'Победитель ' + winner : 'Сейчас ходит ' + ( xIsNext ? 'X' : 'O')}
            </p>
            { startNewGame() }
        </div>
    );
}

export default Game;