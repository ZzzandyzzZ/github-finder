import { githubApi } from './githubBaseApi'

const getGithubUserResponse = async (username: string): Promise<GithubUserApiResponse> => {
  return await githubApi.get(`/users/${username}`).then(res => res.data)
}

const mapFromApiToData = (apiResponse: GithubUserApiResponse): UserData => {
  const {
    avatar_url: avatarUrl,
    blog: blogUrl,
    company,
    created_at: createdDate,
    followers,
    following,
    location,
    name,
    public_repos: NoRepos,
    twitter_username: twitterUsername,
    login: username
  } = apiResponse
  return {
    avatarUrl,
    blogUrl,
    company,
    createdDate: new Date(createdDate),
    followers,
    following,
    location,
    name,
    NoRepos,
    twitterUsername,
    username
  }
}

export const getGithubUserData = async (username: string): Promise<UserData> => {
  return await getGithubUserResponse(username).then(mapFromApiToData)
}
