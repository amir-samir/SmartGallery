import { useState } from 'react'
import './profileNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUserAlt, faMapMarker, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function ProfileNavbar() {
    const [isProfileActive, setProfileActive] = useState(false);
        const handleProfileIconClick = () => {
            setProfileActive(!isProfileActive);
        }
    return <div className='profileNavbar-wrapper'>
            <div className='profileNavbar'>
                <div className='profileNavbar-left'>
                        <div className='profileNavbar-logo'>
                            <a className='profile-navbar-logo-title' href='#'>Smart Memories</a>
                        </div>
                </div>
                <div className='profileNavbar-right'>
                    <div className={`navbar-profile ${isProfileActive ? 'active' : ''}`} onClick={handleProfileIconClick}>
                        <div className='navbar-profile-icon-wrap'>
                            <img className='navbar-profile-image' src="https://i.imgur.com/x3omKbe.png" alt="profile_pic"/>
                            <span className='navbar-profile-name'> John Alex</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className="profile_dd">
                            <ul className="profile_ul">
                                <li className="profile_li">
                                    <a className="profileNavbar-list-profile" href="#">
                                        <span className="picon">
                                            <FontAwesomeIcon icon={faUserAlt} />
                                        </span>Profile
                                    </a>
                                    <div className="navbar-profile-list-btn">My Account</div>
                                </li>
                                <li>
                                    <a className="navbar-profile-address" href="#">
                                        <span className="picon">
                                            <FontAwesomeIcon icon={faMapMarker} />
                                        </span>Address
                                    </a>
                                </li>
                                <li>
                                    <a className="navbar-profile-list-settings" href="#">
                                        <span className="picon">
                                            <FontAwesomeIcon icon={faCog} />
                                        </span>Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="profile-navbar-list-logout" href="#">
                                        <span className="picon">
                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                        </span>Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}
export default ProfileNavbar