export class KeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number

  constructor(data: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }) {
    this.calorieCount = data.calorieCount
    this.proteinCount = data.proteinCount
    this.carbohydrateCount = data.carbohydrateCount
    this.lipidCount = data.lipidCount
  }
}
