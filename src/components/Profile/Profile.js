import React from 'react';
import Header from '../Header/Header';
import ProfileCard from '../ProfileCard/ProfileCard.js';
import './Profile.css';

const Profile = props => {
    return (
        <div className='Profile city'>
            <Header onPageChange={props.onPageChange} />
            <ProfileCard onPageChange={props.onPageChange} />
        </div>
    );
};

export default Profile;
