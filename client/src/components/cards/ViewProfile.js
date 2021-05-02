import React from 'react';
import { Card, Tabs } from 'antd';
import { Link } from 'react-router-dom';

import ProfileListItem from './ProfileListItem';

const { TabPane } = Tabs;

const ViewProfile = ({ profile }) => {

    return (
        <Card>
            <ProfileListItem profile={profile} />
        </Card>
    
        );
    }


export default ViewProfile;


