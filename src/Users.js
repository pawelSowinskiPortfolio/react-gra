import React, {Component} from 'react';

import Heading from './Heading';
import UsersList from './UsersList';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Olga', 'Kasia', 'Basia']
        }
    }


    addUser = (e) => {
        e.preventDefault();
        console.log(this.userInput.value);
        
        this.setState(prevState=>{
            return({users: [...prevState.users, this.userInput.value]});
        });

    }

    removeUser = (indexToDelete) => {
        
        let filterredArray = this.state.users.filter((elem, index)=>{
            return index !== indexToDelete;
        });
        console.log(filterredArray);
        
        this.setState({users: filterredArray});
    }

    render () {
        
        return (
            <div className="users">
                <Heading text="User's list"/>
                
                <form className="add-user-form" onSubmit={this.addUser}>
                    <input type="text" placeholder="Nazwa uzytkownika" ref={input=>this.userInput = input} />
                    <button>Add user</button>
                </form>

                <UsersList usersList={this.state.users} deleteUser={this.removeUser}/>
            </div>
        );
    };
}

export default Users;