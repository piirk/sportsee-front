export type UserInfos = {
  firstName: string
  lastName: string
  // ++
}

export type UserData = {
  data: {
    userInfos: UserInfos
  }
}
