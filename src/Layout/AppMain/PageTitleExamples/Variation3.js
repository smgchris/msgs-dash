import React, { Component, Fragment } from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink,
    Button,
    UncontrolledTooltip
} from 'reactstrap';

import {
    faStar,
    faBusinessTime,

} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    toast,
    Slide
} from 'react-toastify';

import ButtonOption from './ButtonOption'

export default class TitleComponent2 extends Component {
    toggle(name) {
        this.setState({
            [name]: !this.state[name],
            progress: 0.5,
        })
    }

    notify22 = () => this.toastId = toast("Another toastify example!!!", {
        transition: Slide,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });

    render() {
        return (
            <Fragment>
                <UncontrolledDropdown className="d-inline-block">
                    <DropdownToggle color="info" className="btn-shadow" caret>
                        <span className="btn-icon-wrapper pr-2 opacity-7">
                            <FontAwesomeIcon icon={faBusinessTime} />
                        </span>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Nav vertical>
                            {
                                this.props.buttonOptions.map((option) => (

                                    <ButtonOption option={option} />

                                ))
                            }


                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Fragment>
        );
    }
}