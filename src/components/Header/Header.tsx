import { profileData } from '@/data/profile';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import Biography from './Biography';

export default function Header() {
  return (
    <header>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8 md:ml-10 lg:ml-10">
        {/* Profile Image */}
        <div className="flex-shrink-0 mx-auto lg:mx-0 lg:flex lg:items-center">
          <ProfileImage name={profileData.name} />
        </div>
        
        {/* Profile Info */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <ProfileInfo profile={profileData} />          
        </div>
      </div>
      <div className="mt-8">
        <Biography />
      </div>
    </header>
  );
}
