import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: 'emerald' | 'blue' | 'purple' | 'orange';
  hoverColor: 'emerald' | 'blue' | 'purple' | 'orange';
  children?: ReactNode;
}

const colorVariants = {
  emerald: {
    badge: 'bg-emerald-500',
    hover: 'hover:text-emerald-600 hover:border-emerald-200',
    glow: 'group-hover:bg-emerald-500/20',
    footerBg: 'bg-emerald-100 text-emerald-700',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  blue: {
    badge: 'bg-blue-500',
    hover: 'hover:text-blue-600 hover:border-blue-200',
    glow: 'group-hover:bg-blue-500/20',
    footerBg: 'bg-blue-100 text-blue-700',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600'
  },
  purple: {
    badge: 'bg-purple-500',
    hover: 'hover:text-purple-600 hover:border-purple-200',
    glow: 'group-hover:bg-purple-500/20',
    footerBg: 'bg-purple-100 text-purple-700',
    iconBg: 'bg-purple-50 group-hover:bg-purple-100',
    iconColor: 'text-purple-600'
  },
  orange: {
    badge: 'bg-orange-500',
    hover: 'hover:text-orange-600 hover:border-orange-200',
    glow: 'group-hover:bg-orange-500/20',
    footerBg: 'bg-orange-100 text-orange-700',
    iconBg: 'bg-orange-50 group-hover:bg-orange-100',
    iconColor: 'text-orange-600'
  }
};

export default function ServiceCard({
  title,
  description,
  image,
  badge,
  badgeColor,
  hoverColor,
  children
}: ServiceCardProps) {
  const colors = colorVariants[badgeColor];
  const hoverColors = colorVariants[hoverColor];

  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.glow} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105`} />
      
      <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 ${hoverColors.hover} hover:scale-[1.02] hover:-translate-y-2`}>
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className={`absolute top-4 right-4 ${colors.badge} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
            {badge}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${hoverColors.hover.split(' ')[0]} transition-colors duration-300`}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}