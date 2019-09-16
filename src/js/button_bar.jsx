import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


class Button_bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false, open_apps: false, snack_status: false};
        this.handle_click_contact = this.handle_click_contact.bind(this)
        this.handle_click_apps = this.handle_click_apps.bind(this)
        this.handle_snack_close = this.handle_snack_close.bind(this)
    }

    handle_click_contact() {
        this.setState((oldState) => {
            return {
                open: !oldState.open
            }
        })
    }

    handle_click_apps () {
        this.setState({
            snack_status: true
        })
    }

    handle_snack_close () {
        this.setState({
            snack_status: false
        })
    }


    render() {
        let contact;
        let snackbar = (
            <Snackbar
                anchorOrigin = {{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open = {this.state.snack_status}
                autoHideDuration = {5000}
                onClose = {this.handle_snack_close}
                message = {<span id="snackbar_notification">under development</span>}
                action = {[
                    <IconButton
                        key = "close"
                        aria-label = "close"
                        color = "white"
                        onClick =  {this.handle_snack_close}
                        >
                            <CloseIcon/>
                        </IconButton>
                ]}
            />
        )
        


        if (this.state.open) {
            contact = (
            <div className="contact_button_text">
                <div>justinweilbach@gmailcom</div>
                <div>650-815-1550</div>
                <div>github.com/weilbach</div>
                <div>https://www.linkedin.com/in/justin-weilbach-4b3023171/</div>
            </div>
            )
                    
        }
       return (
            <div>
                <Toolbar className="toolbar">
                    <Button className="contact_button" color="gray" onClick={this.handle_click_apps}>Apps</Button>
                    <Button className="contact_button" color="gray" onClick={this.handle_click_contact}>Contact Me</Button>
                    <Button className="contact_button" color="gray" href="/Weilbach_Justin_Resume.pdf" download>Resume</Button>
                </Toolbar>
                {contact}
                {snackbar}
            </div>
       )
    }

    
};

export default Button_bar;