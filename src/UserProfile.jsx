import { useEffect, useState } from "react"

const UserProfile = () => {
  const [userData, setUserData] = useState({})

  const getUserData = async()=>{
    await
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      }, 
    })
    .then(res => res.json())
    .then(data=> setUserData(data));
  }

  useEffect(()=>{
    getUserData()
  },[])


  return (
    <div>
      <div className="">
        <p>First name: {userData.firstName}</p>
        <p>Last name: {userData.lastName}</p>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <img src={userData.image} alt="user-img"/>
      </div>
    </div>
  )
}

export default UserProfile