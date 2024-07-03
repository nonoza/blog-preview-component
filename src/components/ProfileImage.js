import profileImage from '../profile.png';
function ProfileImage({ alt }) {
    return <img src={profileImage} alt={alt} className="profile-image" />;
  }
  
  export default ProfileImage;