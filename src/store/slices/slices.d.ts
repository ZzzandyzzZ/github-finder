interface UserSliceInitialState {
  user: UserData
  isUserLoading: boolean
  userRepos: UserRepoData[]
  isReposLoading: boolean
  errorMsg: string
}
