import React from 'react';
import  {Select} from 'antd';


const {Option} = Select;

const CreateProfile = ({handleChange ,handleSubmit, values}) =>{
const {
    // image,
    name,
    email,
    phone_no,
    reset_password
} = values;

return (
    <form onSubmit={handleSubmit}>
          <div className='form-group'>
              <label>Full Name</label>
              <input
                    type='text'
                    name='name'
                    className='form-control'
                    value = {name}
                    onChange={handleChange}
                 required/>
          </div>

          <div className='form-group'>
              <label>Email</label>
              <input
                    type='email'
                    name='email'
                    className='form-control'
                    value={email}
                    onChange={handleChange}
                 required/>
          </div>

          <div className='form-group'>
              <label>Phone No.</label>
              <input
                    type='number'
                    name='phone_no'
                    className='form-control'
                    value={phone_no}
                    onChange={handleChange}
                 required/>
          </div>

          <div className='form-group'>
              <label>Reset Password</label>
              <input
                    type='password'
                    name='reset_password'
                    className='form-control'
                    value='123444445'
                    onChange={handleChange}
                 required/>
          </div>
        <br/>
        <button className='btn btn-outline-success'>Submit</button>
        </form>
    );
}

export default CreateProfile;