export interface DefensePartner {
  id: string
  name: string
  countryCode: string
  coordinates: [number, number] // [longitude, latitude]
  tier: 1 | 2
  tradeVolume: number // in millions USD
  equipment: string[]
  activeDeals: string[]
  color: string
  flag: string
}

export const defensePartners: DefensePartner[] = [
  // Tier 1 Partners - Major Suppliers
  {
    id: 'china',
    name: 'China',
    countryCode: 'CN',
    coordinates: [116.4074, 39.9042], // Beijing
    tier: 1,
    tradeVolume: 850,
    equipment: ['Tanks', 'Submarines', 'Artillery'],
    activeDeals: ['44 MBT-2000 tanks', '44 VT-5 light tanks', 'Ming-class submarines'],
    color: '#EF4444',
    flag: '🇨🇳'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    countryCode: 'TR',
    coordinates: [32.8597, 39.9334], // Ankara
    tier: 1,
    tradeVolume: 420,
    equipment: ['MBRL Systems', 'Guidance Kits', 'Artillery'],
    activeDeals: ['TRG-300 Tiger MBRL', 'TRG-230 MRLS', 'TEBER Guidance Kit'],
    color: '#DC2626',
    flag: '🇹🇷'
  },
  {
    id: 'russia',
    name: 'Russia',
    countryCode: 'RU',
    coordinates: [37.6173, 55.7558], // Moscow
    tier: 1,
    tradeVolume: 680,
    equipment: ['Fighter Aircraft', 'Air Defense', 'Helicopters'],
    activeDeals: ['SU-30SME fighters', 'MiG-35 aircraft', 'Mi-171Sh helicopters'],
    color: '#1E40AF',
    flag: '🇷🇺'
  },
  {
    id: 'usa',
    name: 'United States',
    countryCode: 'US',
    coordinates: [-77.0369, 38.9072], // Washington DC
    tier: 1,
    tradeVolume: 320,
    equipment: ['MRAP Vehicles', 'Communications', 'Training'],
    activeDeals: ['81 Maxxpro MRAP', 'C4ISR systems', 'Training programs'],
    color: '#2563EB',
    flag: '🇺🇸'
  },
  {
    id: 'india',
    name: 'India',
    countryCode: 'IN',
    coordinates: [77.2090, 28.6139], // New Delhi
    tier: 1,
    tradeVolume: 280,
    equipment: ['Ammunition', 'Spare Parts', 'Small Arms'],
    activeDeals: ['Arms & ammunition', 'Vehicle spares', 'Defense equipment'],
    color: '#EA580C',
    flag: '🇮🇳'
  },
  
  // Tier 2 Partners - Potential Markets
  {
    id: 'uk',
    name: 'United Kingdom',
    countryCode: 'GB',
    coordinates: [-0.1276, 51.5074], // London
    tier: 2,
    tradeVolume: 150,
    equipment: ['Naval Systems', 'Electronics', 'Training'],
    activeDeals: ['BAE Systems collaboration', 'Naval modernization'],
    color: '#4338CA',
    flag: '🇬🇧'
  },
  {
    id: 'france',
    name: 'France',
    countryCode: 'FR',
    coordinates: [2.3522, 48.8566], // Paris
    tier: 2,
    tradeVolume: 180,
    equipment: ['Air Defense', 'Electronics', 'Naval'],
    activeDeals: ['Thales systems', 'Defense electronics'],
    color: '#0891B2',
    flag: '🇫🇷'
  },
  {
    id: 'germany',
    name: 'Germany',
    countryCode: 'DE',
    coordinates: [13.4050, 52.5200], // Berlin
    tier: 2,
    tradeVolume: 220,
    equipment: ['Armored Vehicles', 'Artillery', 'Logistics'],
    activeDeals: ['Rheinmetall systems', 'Vehicle upgrades'],
    color: '#374151',
    flag: '🇩🇪'
  },
  {
    id: 'italy',
    name: 'Italy',
    countryCode: 'IT',
    coordinates: [12.4964, 41.9028], // Rome
    tier: 2,
    tradeVolume: 140,
    equipment: ['Helicopters', 'Naval Systems', 'Training'],
    activeDeals: ['Leonardo helicopters', 'Training aircraft'],
    color: '#059669',
    flag: '🇮🇹'
  },
  {
    id: 'sweden',
    name: 'Sweden',
    countryCode: 'SE',
    coordinates: [18.0686, 59.3293], // Stockholm
    tier: 2,
    tradeVolume: 160,
    equipment: ['Fighter Aircraft', 'Defense Systems', 'Submarines'],
    activeDeals: ['Saab defense systems', 'Gripen interest'],
    color: '#0369A1',
    flag: '🇸🇪'
  },
  {
    id: 'serbia',
    name: 'Serbia',
    countryCode: 'RS',
    coordinates: [20.4489, 44.7866], // Belgrade
    tier: 2,
    tradeVolume: 80,
    equipment: ['Armored Vehicles', 'Small Arms', 'Ammunition'],
    activeDeals: ['8 BOV M11 vehicles', 'Small arms supply'],
    color: '#7C3AED',
    flag: '🇷🇸'
  }
]

// Bangladesh hub location
export const bangladeshHub = {
  id: 'bangladesh',
  name: 'Bangladesh',
  countryCode: 'BD',
  coordinates: [90.4125, 23.8103] as [number, number], // Dhaka
  marketSize: 4300, // millions USD
  growthRate: 8.7, // CAGR %
  flag: '🇧🇩'
}

// Calculate total trade volume by category
export const getTradeVolumeByCategory = (category: string) => {
  return defensePartners
    .filter(partner => partner.equipment.some(eq => eq.toLowerCase().includes(category.toLowerCase())))
    .reduce((sum, partner) => sum + partner.tradeVolume, 0)
}

// Get partners by tier
export const getPartnersByTier = (tier: 1 | 2) => {
  return defensePartners.filter(partner => partner.tier === tier)
}

// Market statistics
export const marketStats = {
  totalMarketSize: 4300, // millions USD
  defensebudget: 4290, // millions USD
  acquisitionBudget: 900, // millions USD
  projectedGrowth2028: 1500, // millions USD
  forcesGoal2030Investment: 12000, // millions USD
  activeTenders: 47,
  completedDeals2024: 23,
  upcomingProjects: 31
}