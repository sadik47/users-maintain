import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Userlist from '../Userlist/Userlist';
import './ShowUsers.css';
import Count from '../Count/Count';

const Users = () => {
    
    const fifteenUsers=fakeData;
    const [users,setUsers] = useState(fifteenUsers);
    const [count,setCount] = useState([]);
    

    const addFriendButton=(user)=>{
        
        const newCount = [...count,user];
        setCount(newCount);
      
        
    }


    return (
        <div className="totalSection">
            <div className="userSection">
            {
                users.map(user=><Userlist
                     user={user}
                     addFriendButton={addFriendButton}
                     ></Userlist>)
            }
            </div>
            <div className="extra-container">
                <Count count={count}></Count>
            </div>
        </div>
    );
};

export default Users;