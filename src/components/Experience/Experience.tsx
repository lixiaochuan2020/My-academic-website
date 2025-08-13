import { experiences } from '@/data/experience';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 mb-2">
        Experience
      </h2>
      <div className="space-y-0">
        {experiences.map((experience) => (
          <ExperienceItem 
            key={experience.id} 
            experience={experience} 
          />
        ))}
      </div>
    </section>
  );
}