import { githubApi } from './githubBaseApi'

const getGithubReposResponse = async (username: string): Promise<GithubRepoApiResponse[]> => {
  return await githubApi.get(`/users/${username}/repos?sort=created&direction=desc&per_page=5`).then(res => res.data)
}

const mapFromApiToData = (apiResponse: GithubRepoApiResponse[]): UserRepoData[] => {
  return apiResponse.map(
    dataFromApi => {
      const {
        name,
        created_at: createdDate
      } = dataFromApi
      return {
        name,
        createdDate
      }
    }
  )
}

export const getGithubReposData = async (username: string): Promise<UserRepoData[]> => {
  return await getGithubReposResponse(username).then(mapFromApiToData)
}
