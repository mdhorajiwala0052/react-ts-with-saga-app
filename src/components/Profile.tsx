import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface ProfileProps {
    name: string,
    age: number
}


const Profile: React.FC = () => {
    const {name, age} = useSelector((state: ProfileProps) => state)
    const dispatch = useDispatch();

  return (
    <div>
        <h2>I am  {name}</h2>
        <h2>My age is {age}</h2>
        <button onClick={()=>dispatch({type: 'UPDATE_NAME'})} >update name</button>
    </div>
  )
}

export default Profile