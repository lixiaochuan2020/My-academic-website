'use client';

import { Award } from '@/data/awards';

interface AwardItemProps {
  award: Award;
}

export default function AwardItem({ award }: AwardItemProps) {
  return (
    <div className="pt-2 pb-1 border-b border-gray-100 last:border-b-0">
      <div className="flex items-start gap-3">
        {/* 圆点标识 */}
        <div className="flex-shrink-0 mt-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        {/* 内容区域 */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-900 mb-1">
                {award.title}
                {award.titleChinese && (
                  <span className="ml-3 text-gray-600 font-normal text-md">
                    {award.titleChinese}
                  </span>
                )}
              </h3>
              <p className="text-gray-600 text-md italic">
                {award.organization}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <span className="text-gray-600 text-sm font-medium">{award.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
