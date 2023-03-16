interface GithubUserApiResponse {
  avatar_url: string
  blog: string
  company: string
  created_at: Date
  followers: number
  following: number
  location: string
  login: string
  name: string
  public_repos: number
  twitter_username: string
  username: string
}

interface GithubRepoApiResponse {
  created_at: number
  id: number
  name: string
}
