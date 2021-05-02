import axios from 'axios';
const instance = axios.create();


export const getProfile= async (authtoken) => {
    return await axios.get(
          `${process.env.REACT_APP_API}/getProfile/${authtoken}`,
          { authtoken }
        )
  };


  export const createProfile = async (profileData,authtoken) => {
    return await axios.post(
          `${process.env.REACT_APP_API}/createProfile`,
          {authtoken,profileData}
        )
  };
  
