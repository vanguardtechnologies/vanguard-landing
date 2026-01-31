// Defense procurement categories data
// Used by DefenseProducts section and CategoryCard components

export interface Category {
  id: string
  name: string
  subtitle: string
  description: string
  budget: string
  image: string
  color: string
  link: string
}

export const categories: Category[] = [
  {
    id: 'land-systems',
    name: 'Land Systems',
    subtitle: 'Main Battle Tanks, APCs & Armored Vehicles',
    description: 'Complete support for armored vehicle procurement including MBTs, infantry fighting vehicles, and engineering equipment.',
    budget: '$400M',
    image: '/images/categories/land-systems.svg',
    color: '#16A34A',
    link: '/categories/land-systems',
  },
  {
    id: 'naval-systems',
    name: 'Naval Systems',
    subtitle: 'Frigates, Corvettes & Patrol Vessels',
    description: 'Naval platform procurement support covering surface combatants, submarines, and auxiliary vessels.',
    budget: '$280M',
    image: '/images/categories/naval-systems.svg',
    color: '#2563EB',
    link: '/categories/naval-systems',
  },
  {
    id: 'air-defense',
    name: 'Air Defence',
    subtitle: 'Fighter Aircraft, Helicopters & UAVs',
    description: 'Comprehensive air platform support including fixed-wing aircraft, rotary-wing, and unmanned systems.',
    budget: '$350M',
    image: '/images/categories/air-defense.svg',
    color: '#0EA5E9',
    link: '/categories/air-defense',
  },
  {
    id: 'communications',
    name: 'Communications',
    subtitle: 'Radar Systems, C4ISR & Electronic Warfare',
    description: 'Communications and surveillance equipment procurement for modern battlefield connectivity.',
    budget: '$200M',
    image: '/images/categories/communications.svg',
    color: '#9333EA',
    link: '/categories/communications',
  },
  {
    id: 'support-equipment',
    name: 'Support Equipment',
    subtitle: 'Infantry Gear, Protection & Logistics',
    description: 'Personal equipment, protective gear, and logistics support for armed forces personnel.',
    budget: '$150M',
    image: '/images/categories/support-equipment.svg',
    color: '#EA580C',
    link: '/categories/support-equipment',
  },
  {
    id: 'artillery-systems',
    name: 'Artillery Systems',
    subtitle: 'MLRS, Self-Propelled & Towed Artillery',
    description: 'Artillery systems procurement including multiple launch rockets, howitzers, and ammunition.',
    budget: '$250M',
    image: '/images/categories/artillery-systems.svg',
    color: '#DC2626',
    link: '/categories/artillery-systems',
  },
]
