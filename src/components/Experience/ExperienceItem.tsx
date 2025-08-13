import { Experience } from '@/data/experience';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex items-start gap-3">
        {/* 圆点标识 */}
        <div className="flex-shrink-0 mt-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        {/* 内容区域 */}
        <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {experience.title}
        </h3>
        <div className="text-md font-semibold text-gray-800 mb-1">
          {experience.company}
        </div>
        <div className="text-sm text-gray-800 mb-1 flex flex-col sm:flex-row sm:gap-4">
          <span className="font-medium">{experience.period}</span>
        </div>
        {experience.responsibilities && (
          <p className="text-gray-700 leading-relaxed mb-1">
            {experience.responsibilities}
          </p>
        )}
        
        {experience.projects && experience.projects.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.projects.map((project, index) => (
              <a 
                key={index}
                href={project.link} 
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                [{project.name}]
              </a>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}