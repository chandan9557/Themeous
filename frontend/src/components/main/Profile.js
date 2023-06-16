import React from 'react'
import{ useState } from 'react';
const Profile = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 25
      });

      const saveUserProfile = () => {
        // Perform save action, e.g., send data to server
        console.log(userProfile);
      }
      
  return (
    <div className="container">
    <div className='col-lg-4 mx-auto m-2 p-2 bg-primary'>
    <input className='d-block mt-2 mx-auto'
      type="text"
      value={userProfile.name}
      onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
    />
    <input className='d-block mt-2 mx-auto'
      type="email"
      value={userProfile.email}
      onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
    />
    <input className='d-block mt-2 mx-auto'
      type="number"
      value={userProfile.age}
      onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
    />
    <button className='d-block mt-2 mx-auto' onClick={saveUserProfile}>Save</button>
    </div>
    </div>
  )
}

export default Profile