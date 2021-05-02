import React from 'react';
// import{Link} from 'react-router-dom';

const ProfileListItem = ({profile}) => {
    const{name,email,phone,reset_password, role} = profile;
    return (
        <ul className = 'list-group'>
            <li className = 'list-group-item'>
                Full Name {" "}<span className='label label-default label-pill pull-xs-right'>{name}</span>
            </li>
            <li className = 'list-group-item'>
                Email {" "}<span className='label label-default label-pill pull-xs-right'>{email}</span>
            </li>
            <li className = 'list-group-item'>
                Phone No. {" "}<span className='label label-default label-pill pull-xs-right'>{phone}</span>
            </li>
            <li className = 'list-group-item'>
                My Role {" "}<span className='label label-default label-pill pull-xs-right'>{role}</span>
            </li>
            <li className = 'list-group-item'>
                Reset Password {" "}<span className='label label-default label-pill pull-xs-right'>{reset_password}</span>
            </li>
        </ul>
    );
};

export default ProfileListItem;