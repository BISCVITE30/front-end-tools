export default (profileData) => {
  const { name, company } = profileData;
  profileData = document.querySelector('.profile');
  profileData.textContent = `${name} from ${company}`;
};
