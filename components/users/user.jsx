import React,{Component} from "react";
import PropTypes from 'prop-types';

class User extends Component{
    onClick(e){
        e.preventDefault();
        const {user,setUser}=this.props;
        setUser(user);
    }
    render(){
        const {activeUser,user}=this.props;
        return(
            // <li className={this.props.user.active==true?'active':''}>
            <li className={activeUser===user?'active':''} >
                <a onClick={this.onClick.bind(this)}>
                    {this.props.user.name}
                </a>
            </li>
        )
    }
}

user.propTypes={
    user:PropTypes.object.isRequired,
    setUser:PropTypes.func.isRequired,
    activeUser:PropTypes.object.isRequired
}

export default User;