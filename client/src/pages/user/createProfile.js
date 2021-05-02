import React , {useState} from 'react';
import CreateProfile from '../../components/forms/CreateProfile';
import UserNav from '../../components/nav/UserNav';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {createProfile} from '../../functions/user';

const initState = {
  name: '',
  email: '',
  phone_no: '',
  reset_password: ''
}


const NewcreateProfile = () => {
  const [values, setValues] = useState(initState);
  const history = useHistory()

// redux
const {user} = useSelector((state) => ({...state}));

const handleSubmit = (e) => {
  e.preventDefault();
  createProfile(values, user.token)
  .then(res => {
    console.log(res);
    toast.success("Profile Create Completed");
    window.alert(`profile  is created`);
    // window.location.reload();
    history.push(`/user/Profile`);
  })
  .catch((err) => {
    console.log(err);
    // if (err.response.status === 400) toast.error(err.response.data);
    toast.error(err.response.data.err);
  })
};

const handleChange = (e) => {
  //
  setValues({...values, [e.target.name]: e.target.value })
  // console.log(e.target.name, '-------------', e.target.value);
}



  return(
  <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'>
            <UserNav />
        </div>
        <div className='col'>
            <CreateProfile
            values = {values}
            handleSubmit={handleSubmit}
            handleChange = {handleChange}
            />
        </div>
    </div>
  </div>
);
  }

export default NewcreateProfile;