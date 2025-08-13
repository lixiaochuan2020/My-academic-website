import Image from 'next/image';

interface ProfileImageProps {
  name: string;
}

export default function ProfileImage({ name }: ProfileImageProps) {
  return (
    <div className="relative">
      <Image
        src="/self.png"
        alt={name}
        width={250}
        height={350}
        className="w-40 h-52 sm:w-44 sm:h-56 lg:w-48 lg:h-60 object-cover shadow-md"
        priority
      />
    </div>
  );
}
