export class UserInfos {
  firstName: string
  lastName: string
  age: number

  constructor(data: { firstName: string; lastName: string; age: number }) {
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.age = data.age
  }
}
