import React, { Component, Fragment } from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink,
    Button,
    UncontrolledTooltip
} from 'reactstrap';

import {
    faStar,
    faBusinessTime,
    faPlusCircle

} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class ButtonOption extends Component {

    render() {
        return (

            <NavItem>
                <Link to={this.props.option.uri}>
                    <NavLink>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <span>{this.props.option.text}</span>
                    </NavLink>
                </Link>

            </NavItem>

        );
    }
}