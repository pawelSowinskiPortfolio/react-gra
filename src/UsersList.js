import React from 'react';

const UsersList = (props) => {

    const listItems = props.usersList.map((name, index) =>
    <li key={index} onClick={()=>props.deleteUser(index)}>{name}</li>
    );

    return (
        <ul className="users-list">
            {listItems}
        </ul>
        )
}

export default UsersList;