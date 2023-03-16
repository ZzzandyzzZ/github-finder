import { githubApi } from './githubBaseApi'

const getGithubReposResponse = async (username: string): Promise<GithubRepoApiResponse[]> => {
  return await githubApi.get(`/users/${username}/repos?sort=created&direction=desc&per_page=5`).then(res => res.data)
}

const mapFromApiToData = (apiResponse: GithubRepoApiResponse[]): UserRepoData[] => {
  return apiResponse.map(
    dataFromApi => {
      const {
        created_at: createdDate,
        id,
        name
      } = dataFromApi
      console.log({ dataFromApi })
      return {
        createdDate,
        id,
        name
      }
    }
  )
}

export const getGithubReposData = async (username: string): Promise<UserRepoData[]> => {
  return await getGithubReposResponse(username).then(mapFromApiToData)
}
