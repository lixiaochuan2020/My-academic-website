import { publications } from '@/data/publications';
import PublicationItem from './PublicationItem';

export default function Publications() {
  return (
    <section id="publications" className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 mb-2">
          Publications
        </h2>
        <p className="text-sm text-gray-700 italic">
          (* stands for equal contribution)
        </p>
      </div>
      <div className="space-y-0">
        {publications.map((publication) => (
          <PublicationItem 
            key={publication.id} 
            publication={publication} 
          />
        ))}
      </div>
    </section>
  );
}
