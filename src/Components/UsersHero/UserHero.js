import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser , deleteUser, updateUsername} from '../../features/Users'
import './UserHero.css'

function UserHero() {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')

  return (
    <div className='App'>
    <div className='addUser'>

    <input type='text'
    placeholder='Name'
    className='userInput'
    onChange={(event) =>{setName(event.target.value)} }/>


    <input type='text'
     placeholder='UserName'
     className='userInput'
     onChange={(event) => {setUsername(event.target.value)}} />

  <button className='userInputBtn' onClick={() => {dispatch(addUser({ id:userList[userList.length - 1].id + 1 ,name, username }))}}> AddUser </button>

    </div>
    <div className='displayUser'>
      {userList.map((user)=>{
        return(
          <div className='display'>
            <h1>{user.name}</h1>
            <h3>{user.username}</h3>
            <input type='text' placeholder='update'
            onChange={(event) =>{
              setNewUsername(event.target.value)
            }}
            />
            <button   onClick={()=> {dispatch(updateUsername({id:user.id, username:newUsername}))}}>Update User</button>
            <button  onClick={()=> {dispatch(deleteUser({id:user.id}))}}> Delete User</button>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default UserHero