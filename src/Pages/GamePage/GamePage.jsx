import React from 'react';
import { useSelector } from 'react-redux';
import GameCover from '../../Components/GameCover/GameCover';
import './GamePage.css';

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)
    
    if(!game) return null
    
    return (
        <div className='game-page'>
            <h1 className='game-page__title'>{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__lift">
                    <iframe 
                        width = '90%'
                        height='400px' 
                        src={game.video} 
                        title= 'YouTube Video Player'
                    ></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукты:</p>
                    {game.genres.map((genres) => <GamePage genres={genres} key={genres}/>)}
                    <div className="game=page__by-game">
                        <GamePage game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;