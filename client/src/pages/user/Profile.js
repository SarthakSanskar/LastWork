import React, {useEffect, useState} from 'react';
import ProfileListItem from '../../components/cards/ProfileListItem';
import UserNav from '../../components/nav/UserNav';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { getProfile } from '../../functions/user';


const initState = {
  name: 'Loading..',
  email: 'Loading..',
  phone: 'Loading..',
  role: 'Loding..',
  reset_password: ''
}

const Profile = () => {
  const [profileData, setProfileData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const {user} = useSelector((state) => ({ ...state }));
  // console.log("## ", user)
  useEffect(() => {
    if(user === null)
    {console.log("User not entered")
      return}else{ 
      // do stuff
    console.log("useffect user ", user)
    loadProfile(user);
  }
  },[user])

  const loadProfile = (user) => {
    console.log("!!!! ", user)
    getProfile(user.token)
    .then((res) => { 
      console.log("backend data ",res)
      setProfileData(res.data);
      // setLoading(false);
    }).catch((err) => {
      // setLoading(false);
      console.log(err);
    })
  }


return(
  <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'>
            <UserNav />
        </div>
        <div className='col'>
            <ProfileListItem profile = {profileData}>Profile</ProfileListItem>
            <button><Link to="/user/createProfile">Update Profile</Link></button>
        </div>
    </div>
  </div>
);
}

export default Profile;