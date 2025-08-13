import { Publication } from '@/data/publications';

interface PublicationItemProps {
  publication: Publication;
}

export default function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <div className="py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex items-start gap-3">
        {/* 圆点标识 */}
        <div className="flex-shrink-0 mt-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        {/* 内容区域 */}
        <div className="flex-1 space-y-1">
        <h3 className="text-md font-semibold text-gray-900 leading-tight">
          {publication.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed">
          {publication.authors.split(', ').map((author, index, array) => {
            if (author.includes('Xiaochuan Li')) {
              return (
                <span key={index} className="font-semibold text-blue-700 bg-blue-50 px-1 py-0.5 rounded">
                  {author}
                  {index < array.length - 1 ? ', ' : ''}
                </span>
              );
            }
            return (
              <span key={index}>
                {author}
                {index < array.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </p>
        
        <p className="text-gray-600">
          <em className="font-medium">{publication.venue}</em> {publication.year}
          {publication.special && (
            <span className="ml-3 text-red-600 font-medium">
              {publication.special}
            </span>
          )}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {publication.paperLink && (
            <a 
              href={publication.paperLink} 
              className="text-blue-600 hover:text-blue-800 text-md font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              [paper]
            </a>
          )}
          {publication.codeLink && (
            <a 
              href={publication.codeLink} 
              className="text-blue-600 hover:text-blue-800 text-md font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              [code]
            </a>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
