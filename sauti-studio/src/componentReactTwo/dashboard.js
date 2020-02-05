import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

const UpdateButton = styled.button`
    background-color: #2D6476;
    border: 1px solid #2D6476;
    color: white;
    width: 20%;
    margin: 20px auto;
    border-radius: 5px;
`;
const SaveButton = styled.button`
    background-color: #235b2d;
    border: 1px solid #235b2d;
    color: white;
    border-radius: 5px;
    width: 25%;
    margin: 5px auto;
`;
const LogOutButton = styled.button`
    background-color: white;
    border: 1px solid #235b2d;
    color: #235b2d;
    border-radius: 5px;
    width: 25%;
    margin: 5px auto;
`;
const MainContain = styled.div`
    height: 93vh;
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const UserProfile = (props) => {
console.log('userprofile:', props);
    const [data, setData] = useState([]);
    const user = localStorage.getItem('username');
    console.log(user)
   
    const email = localStorage.getItem('email'); 
    console.log(email)
    useEffect(() => {
        axios.get(`https://sauti-studio-3.herokuapp.com/api/auth/users`)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(err => {
                console.log(err, 'Identity theft is not a joke! Now we gotta fix it.');
            });
    }, [])

    return (
        <div>
                    <h4>Hello user!</h4>
                    <SaveButton>Save Changes</SaveButton>
                    <LogOutButton onClick={e =>{
                        e.preventDefault();
                        localStorage.clear("username");
                        props.history.push("./login")
                    }}>Log out</LogOutButton>
        </div>
    );
}

export default UserProfile;