import React from 'react';
import PropTypes from 'prop-types';
import Button_bar from './button_bar'
import Word from './Word';

class Main_page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }; 



    render() {
        
        return (
        <div className="height_100">
            <div className="word_of_the_day">
                <Word/>
            </div>
            <div className="main">
                
                <div className="my_name">Justin Weilbach</div>
                <Button_bar/>
                
            </div>
        </div>
        )
    };

};


export default Main_page;