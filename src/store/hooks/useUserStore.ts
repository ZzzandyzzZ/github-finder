import { getGithubReposData } from '../../api/githubReposApi'
import { getGithubUserData } from '../../api/githubUserApi'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { onUserLoad, onUserLoading, onUserReposLoad, onUserReposLoading } from '../slices/userSlice'

export const useUserStore = (): UserStore => {
  const {
    user,
    isUserLoading,
    userRepos,
    isReposLoading
  } = useAppSelector(state => state.user)
  const disptach = useAppDispatch()
  const startLoadingUser = async (username: string): Promise<void> => {
    disptach(onUserLoading())
    const userData = await getGithubUserData(username)
    disptach(onUserLoad(userData))
  }
  const startLoadingRepos = async (username: string): Promise<void> => {
    disptach(onUserReposLoading())
    const userReposData = await getGithubReposData(username)
    console.log({ userReposData })
    disptach(onUserReposLoad(userReposData))
  }
  return {
    // Props
    user,
    isUserLoading,
    userRepos,
    isReposLoading,
    // Methods
    startLoadingUser,
    startLoadingRepos
  }
}
