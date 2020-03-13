import React, { useState } from 'react';
import './Userlist.css';
import Count from '../Count/Count';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';

const Userlist = (props) => {
    const {img,name,address,phone,age,salary}=props.user;
    const [friend,setFriend] = useState(true);
    return (
        <div class="mainSection">
            <div className="profileDetails">
                <img src={img}></img>
                <p>Name:{name}</p>
                <p>Address:{address}</p>
                <p>Phone:{phone}</p>
                <p>Age:{age}</p>
                <p>Salary:{salary}</p>

                <button id="myButton" 
                onClick={()=>props.addFriendButton(props.user)}
                 class="addFriend">
                 <FontAwesomeIcon icon={faPlus} />
                 </button>
                
            </div>
        </div>
    );
};

export default Userlist;