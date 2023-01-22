import React from 'react';
import Button from '../Button/Button';
import './GameBuy.css';

const GameBuy = ({game}) => {
    return (
        <div className='game-buy'>
            <span className="game-buy__price">{game.price} сом.</span>
            <Button
                type="primary"
                onClick={() => null}
            >
                В Карзину
            </Button>

        </div>
    );
};

export default GameBuy;