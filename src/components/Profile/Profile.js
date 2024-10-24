import React from 'react';
import './Profile.css';
import profileIcon from '../../img/profile_img.png';

const Profile = () => {
    return (
        <div className="profile-container">
            {/* Static Information */}
            <div className="profile-info">
                <img 
                    className="profile-icon" 
                    src={profileIcon} // Placeholder icon, replace with real image if available
                    alt="User Icon" 
                />
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-email">john.doe@example.com</p>
                <p className="profile-gender">Gender: Male</p>
            </div>

            {/* Buttons */}
            <div className="profile-actions">
                <button className="profile-button change-password-button">Change Password</button>
                <button className="profile-button delete-button">Delete Account</button>
            </div>
        </div>
    );
};

export default Profile;
