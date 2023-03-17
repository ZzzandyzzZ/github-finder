import { getGithubReposData } from '../../api/githubReposApi'
import { getGithubUserData } from '../../api/githubUserApi'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { onUserLoad, onUserLoading, onUserReposLoad, onUserReposLoading, onLoadingError, onClearError } from '../slices/userSlice'

export const useUserStore = (): UserStore => {
  const {
    user,
    isUserLoading,
    userRepos,
    isReposLoading

  } = useAppSelector(state => state.user)
  const disptach = useAppDispatch()
  const clearErrorMsg = (): void => {
    disptach(onClearError())
  }
  const startLoadingUser = async (username: string): Promise<void> => {
    disptach(onUserLoading())
    try {
      const userData = await getGithubUserData(username)
      disptach(onUserLoad(userData))
    } catch (error) {
      disptach(onLoadingError('User does not exists'))
    }
  }
  const startLoadingRepos = async (username: string): Promise<void> => {
    disptach(onUserReposLoading())
    try {
      const userReposData = await getGithubReposData(username)
      disptach(onUserReposLoad(userReposData))
    } catch (error) {
      disptach(onLoadingError('User does not exists'))
    }
  }
  return {
    // Props
    user,
    isUserLoading,
    userRepos,
    isReposLoading,
    // Methods
    startLoadingUser,
    startLoadingRepos,
    clearErrorMsg
  }
}
