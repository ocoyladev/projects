import React from 'react';
import { SkillGroup as SkillGroupType } from '../types';

interface SkillGroupProps {
  group: SkillGroupType;
}

const colorMap = {
  orange: {
    header: 'text-orange-500 dark:text-orange-400',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400',
  },
  blue: {
    header: 'text-blue-500 dark:text-blue-400',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
  },
  purple: {
    header: 'text-purple-500 dark:text-purple-400',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
  },
  green: {
    header: 'text-emerald-500 dark:text-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
  yellow: {
    header: 'text-amber-500 dark:text-amber-400',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  },
  red: {
    header: 'text-rose-500 dark:text-rose-400',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
  },
};

export const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  const colors = colorMap[group.color];

  return (
    <div className="bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 rounded-xl p-4 hover:border-white/20 transition-colors duration-300">
      <h4 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${colors.header}`}>
        {group.category}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`px-2.5 py-1 rounded-md text-xs font-medium ${colors.badge}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
