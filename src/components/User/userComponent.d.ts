interface DescriptionCardProps {
  title?: string
  measure?: number
}

interface RepoCardDataProps {
  name?: string
  createdDate?: number
}

interface MediaCardProps {
  Icon: JSX.Element
  content?: string
}

interface RepoListItemsProps {
  userRepos: UserRepoData[]
}
