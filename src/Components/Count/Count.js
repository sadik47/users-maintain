import React from 'react';
import './Count.css';

const Count = (props) => {
    const count=props.count;
    let total=0;
     for(let i=0;i<count.length;i++){
       const user=count[i];
       total=(total+Number(user.salary));
   }

    return (
        <div className="count">
            <h4 className="header">Total Input</h4>
            <p className="attribute">Total Item: {count.length}</p>
            <p className="attribute">Total Salary: {total}</p>
        </div>
    );
};

export default Count;