import calorieIcon from '../assets/icons-keydata/calorie.svg'
import proteinIcon from '../assets/icons-keydata/protein.svg'
import carbohydrateIcon from '../assets/icons-keydata/carbohydrate.svg'
import lipidIcon from '../assets/icons-keydata/lipid.svg'

type KeyDataConfig = {
  title: string
  unit: string
  icon: string
  bgColor: string
}

export const keyDataConfig: Record<string, KeyDataConfig> = {
  calorieCount: {
    title: 'Calories',
    unit: 'kCal',
    icon: calorieIcon,
    bgColor: 'rgba(255, 0, 0, 0.066)',
  },
  proteinCount: {
    title: 'Protéines',
    unit: 'g',
    icon: proteinIcon,
    bgColor: 'rgba(74, 184, 255, 0.1)',
  },
  carbohydrateCount: {
    title: 'Glucides',
    unit: 'g',
    icon: carbohydrateIcon,
    bgColor: 'rgba(249, 206, 35, 0.1)',
  },
  lipidCount: {
    title: 'Lipides',
    unit: 'g',
    icon: lipidIcon,
    bgColor: 'rgba(253, 81, 129, 0.1)',
  },
}
