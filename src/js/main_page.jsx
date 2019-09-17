import React from 'react';
import PropTypes from 'prop-types';
import Button_bar from './button_bar'
import Word from './Word';
import Snake from './snake'

class Main_page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {snake_game: false};
        this.handle_snake_game = this.handle_snake_game.bind(this)
    };

    handle_snake_game() {
        
          this.setState((oldState) => {
            return {
              snake_game: !oldState.snake_game
            }
          })
        }


    render() {
        
        let display = (
        <div className="height_100">
            <div className="word_of_the_day">
                <Word/>
            </div>
            <div className="main">
                <div className="my_name">Justin Weilbach</div>
                <Button_bar handle_snake_game={this.handle_snake_game}
                />  
            </div>
        </div>
        )

        if(this.state.snake_game) {
            display = (
              <div className="container h-100"> 
                <div className="row h-100 justify-content-center align-items-center">
                  <Snake closeGame={this.handle_snake_game}/>
                </div>
              </div>
            );
        };

        return (
            <div className="height_100">
                {display}
            </div>
        );
    };

};


export default Main_page;