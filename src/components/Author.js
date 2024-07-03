import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';

function Author() {
  return (
    <div className="profile">
      <ProfileImage src="../src/profile.png" alt="Author's profile image" />
      <ProfileName name="Greg Hooper" />
    </div>
  );
}

export default Author;