import axios from 'axios';
import React, { useState } from 'react'
import { UserData } from '../Types/UserData';

export default function NewUser() {
    const [userData, setUserData] = useState<string>('');
    var username = '';
    var password = '';
    var usernamesearch = '';
    function OnUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        username = event.target.value;
    }
    function OnPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        password = event.target.value;
    }
    function OnUserNameSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        usernamesearch = event.target.value;
    }
    function OnSubmitUserData() {
        let userData: UserData = {username: username, password, salt:undefined}
        axios.post('/api/UserData/AddUserData', userData)
        .then(function (response) {
            alert(response)
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    function OnSubmitUserSearch(){
        axios.get(`/api/UserData/GetUserDataByUsername?username=${usernamesearch}`)
        .then(function (response) {
            setUserData(response.data)
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    return (
        <div className='text-center'>
            <div className='container border border-primary rounded p-2 my-2 shadow-sm'>
                <h1>Create New User</h1>
                <div className='my-2'>
                    <label className='m-1'>username:</label>
                    <input type="text" name="name" onChange={OnUserNameChange} />
                </div>
                <div className='my-2'>
                    <label className='m-1'>password:</label>
                    <input type="text" name="name" onChange={OnPasswordChange} />
                </div>
                <div className='my-2'>
                    <button className="btn btn-primary" type="submit" value="Submit" onClick={OnSubmitUserData}>Submit</button>
                </div>
            </div>
            <div className='container border border-primary rounded p-2 my-2 shadow-sm'>
                <h1>Get User Data</h1>
                <div className='my-2'>
                    <label className='m-1'>username:</label>
                    <input type="text" name="name" onChange={OnUserNameSearchChange} />
                </div>
                <div className='my-2'>
                    <button className="btn btn-primary" type="submit" value="Submit" onClick={OnSubmitUserData}>Submit</button>
                </div>
                <h2>

                </h2>
            </div>
        </div>
    )
}