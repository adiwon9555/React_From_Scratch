import React,{Component} from "react";
import User from './user';
import PropTypes from 'prop-types';

class UserList extends Component{
    
    render(){
        const {users}=this.props;
        return(
            <ul>
                {users.map(user=>{
                    return <User user={user} {...this.props} key={user.id}/>
                })
            }
                
            </ul>
        )
    }
}

UserList.propTypes={
    users:PropTypes.array.isRequired,
    setUser:PropTypes.func.isRequired,
    activeUser:PropTypes.object.isRequired
}

export default UserList;