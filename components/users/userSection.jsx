import React, { Component } from "react";
import UserForm from './userForm';
import UserList from './userList';
import PropTypes from 'prop-types';

class UserSection extends Component {

    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Users</strong>
                </div>
                <div className='panel-body users'>
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>

        )
    }
}

UserSection.propTypes = {
    users: PropTypes.array.isRequired,
    setUser: PropTypes.func.isRequired,
    setUserName: PropTypes.func.isRequired,
    activeUser:PropTypes.object.isRequired
}

export default UserSection;