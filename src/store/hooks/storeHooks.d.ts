interface UserStore {
  user?: UserData
  isUserLoading: booleanas
  userRepos: any[]
  isReposLoading: boolean
  startLoadingUser: (username: string) => Promise<void>
  startLoadingRepos: (username: string) => Promise<void>
}
