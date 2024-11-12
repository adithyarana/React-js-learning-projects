import React from "react";

function Card({usernamee,email}){   // props 
    console.log(usernamee);
    
    
 return (
        <div className="card">
            <img src="https://images.pexels.com/photos/20430480/pexels-photo-20430480/free-photo-of-candle-in-a-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" />
            <div className="container">
                <h4><b>{usernamee}</b></h4>
                <p>Web Developer</p>
                <p>Email:{email}</p>
                <p>Phone: 9876543210</p>
            </div>
        </div>
    )
}

export default Card