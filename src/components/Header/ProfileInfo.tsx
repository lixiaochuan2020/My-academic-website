import { ProfileData } from '@/data/profile';
import { FaGithub, FaTwitter, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

interface ProfileInfoProps {
  profile: ProfileData;
}

export default function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {profile.name}
        <span className="text-gray-600 text-2xl sm:text-2xl lg:text-3xl ml-4">
          {' '}{profile.chineseName}
        </span>
      </h1>
      
      <div className="mb-6">
        <p className="text-lg text-gray-900 leading-relaxed mb-2">
          {profile.department}, <br />
          {profile.institution}
        </p>
        <p className="text-base text-gray-700">
          Email: {profile.email}
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        {profile.socialLinks.github && (
          <a 
            href={profile.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        )}
        {profile.socialLinks.twitter && (
          <a 
            href={profile.socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        )}
        {profile.socialLinks.googleScholar && (
          <a 
            href={profile.socialLinks.googleScholar} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Google Scholar"
          >
            <FaGraduationCap className="w-6 h-6" />
          </a>
        )}
        {profile.socialLinks.cv && (
          <a 
            href={profile.socialLinks.cv} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-200"
            aria-label="CV"
          >
            <FaFileAlt className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
}
