import { awards } from '@/data/awards';
import AwardItem from './AwardItem';

export default function Awards() {
  return (
    <section id="awards" className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 mb-2">
        Selected Honors & Awards
      </h2>
      <div className="space-y-0">
        {awards.map((award) => (
          <AwardItem 
            key={award.id} 
            award={award} 
          />
        ))}
      </div>
    </section>
  );
}
