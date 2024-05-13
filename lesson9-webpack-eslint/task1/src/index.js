import printProfile from './renderProfile.js';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

const num = 17;

if (num === 17) {
  alert('Hi'); // eslint-disabled-line no-alert
}
