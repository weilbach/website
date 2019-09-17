import React from 'react';
import Button from '@material-ui/core/Button';

function Cell(props) {
    let classes = `${props.foodCell ? 'cell-food' : ''} ${props.snakeCell ? 'cell-snake' : ''} ${!props.snakeCell && !props.foodCell ? 'cell' : ''}`;

    return (
        <div className = {classes} style={{height: "15px", width: "15px"}}></div>
    );

}



class Snake extends React.Component {


    constructor(props) {
        super(props);
        this.state = {start: false, snake_size: 0, score: 0, food: [10,10], snake: [[5,5]], direction: [39], game_over: false};
        this.gameRef = React.createRef();
        this.moveSnake = this.moveSnake.bind(this)
        this.setDirection = this.setDirection.bind(this)
        this.ateFood = this.ateFood.bind(this)
        this.moveFood = this.moveFood.bind(this)
        this.addToSnake = this.addToSnake.bind(this)
        this.noOverlap = this.noOverlap.bind(this)
        this.checkCollision = this.checkCollision.bind(this)
        this.closeGame = this.closeGame.bind(this)
        this.lastKey = 39
    }

    handleGameStart = () => {
        if(this.snakeInterval) {
            clearInterval(this.snakeInterval)
        }
        
        this.setState({
            game_over: false,
            start: true,
            score: 0,
            direction: [39]
        })
        this.moveFood();
        this.snakeInterval = setInterval(this.moveSnake, 100)
        this.gameRef.current.focus()
        

    }

    setDirection(keyCode) {
        let currentKey = keyCode.keyCode;
        let change = true
        if(this.state.direction == currentKey) {
            change = false
        }
        else if(currentKey - this.state.direction == -2 || currentKey - this.state.direction == 2) {
            change = false
        }
        let join = this.state.direction.concat(currentKey)
        if(change) {
            this.setState((oldState) => {
                return {
                    direction: join
                }
            })
        }
    }


    moveSnake() {
        let newSnake = []
        switch(this.state.direction[0]) {
            //down
            case 40:
                newSnake[0] = [this.state.snake[0][0], this.state.snake[0][1] + 1];
                break;
            // up
            case 38:
                newSnake[0] = [this.state.snake[0][0], this.state.snake[0][1] - 1];
                break;
            // right
            case 39:
                newSnake[0] = [this.state.snake[0][0] + 1, this.state.snake[0][1]];
                break;
            // left
            case 37:
                newSnake[0] = [this.state.snake[0][0] - 1, this.state.snake[0][1]];
                break;
        }

        [].push.apply(newSnake, this.state.snake.slice(1).map((toss,index) => {
                return this.state.snake[index];
            })
        );

        if(this.state.direction.length >= 2) {
            this.setState((oldState) => {
                return {
                    snake: newSnake,
                    direction: oldState.direction.slice(1)
                }
            })
        }
        else {
            this.setState({
                snake: newSnake
            })
        }

        this.checkCollision()
        this.ateFood()
    }


    moveFood() {

        let x = Math.floor(Math.random() * 19);
        let y = Math.floor(Math.random() * 19);
        while(x != this.state.food[0] && y != this.state.food[1] && !this.noOverlap(x,y))
        {
            x = Math.floor(Math.random() * 19)
            y = Math.floor(Math.random() * 19)
        }

        this.setState((oldState) => {
            return {
                food: [x,y],
                snake_size: oldState.snake_size + 1,
                score: oldState.score + 1
            }
        })

    }

    ateFood() {
        if(this.state.snake[0][0] === this.state.food[0] && this.state.snake[0][1] === this.state.food[1]) {
            this.addToSnake();
            this.moveFood();
            
        }
    }


    addToSnake() {
        let joined = this.state.snake.concat(this.state.snake[this.state.snake.length - 1][0] + 1) 
        this.setState({
            snake: joined
        })
    }

    noOverlap(x, y) {
        for(let i = 0; i < this.state.snake_length; i++) {
            if(this.state.snake[i][0] === x && this.state.snake[i][1] === y) {
                return false;
            }
        }
        return true;
    }

    checkCollision() {
        if(this.state.snake[0][0] < 0 || this.state.snake[0][1] < 0) {
            this.gameOver()
        }
        else if(this.state.snake[0][0] > 19 || this.state.snake[0][1] > 19) {
            this.gameOver()
        }

        for(let i = 1; i < this.state.snake.length; i++) {
            if(this.state.snake[0][0] == this.state.snake[i][0] && this.state.snake[0][1] == this.state.snake[i][1]) {
                this.gameOver()
            }
        }

    }
    

    gameOver() {
        clearInterval(this.snakeInterval)
        console.log(this.state.snake)
        this.setState({
            game_over: true,
            snake_size: 0, 
            food: [10,10], 
            snake: [[5,5]], 
            direction: [39]
        })
    }

    closeGame() {
        this.props.closeGame();
    }

    render() {
        this.numCells = 20;
        let cellIndexes = Array.from(Array(this.numCells).keys());
        let board = cellIndexes.map(y => {
            return cellIndexes.map(x => {
                let foodCell = this.state.food[0] === x && this.state.food[1] === y;
                let snakeCell = this.state.snake.filter(c => c[0] === x && c[1] === y);
                snakeCell = snakeCell.length && snakeCell[0];
                
                return (
                    <Cell 
                        foodCell={foodCell}
                        snakeCell = {snakeCell}
                        key= {x + " " + y}
                        />
                );

            })
        })
        let game;

        if(!this.state.start) {
            game = (
            <div className='start-overlay'>
                <Button color="primary" className='button-overlay' onClick={this.handleGameStart}>Start</Button>
            </div>
            );
        }
        else if(this.state.game_over) {
            game = (
                <div className='start-overlay'>
                    <div className="row score">
                        Your score: {this.state.score}
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button color="primary" className='button-overlay' onClick={this.handleGameStart}>
                                Again?
                            </Button>
                        </div>
                        <div className="col">
                            <Button color="primary" className='button-overlay' onClick={this.closeGame}>
                                Quit?
                            </Button>
                        </div>
                    </div>
                </div>
            )
        }
        
        


        return (
            <div className='snake-game' onKeyDown={this.setDirection} ref={this.gameRef} tabIndex="0">
                {game}
                <div className='grid' >
                    {board}
                </div>
            </div>
        );

    }
}

export default Snake;