import renderProfile from './profile/renderProfile.js';
import './index.css';

const profileData = {
    name: 'Tom',
    location: 'The world'
};

renderProfile(profileData)

alert('App is ready');