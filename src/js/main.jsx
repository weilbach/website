import React from 'react';
import ReactDOM from 'react-dom';
import Main_page from './main_page';

const App = () => (
    <Main_page/>
)

ReactDOM.render(
    <App/>,
    document.getElementById('react_entry'),
);