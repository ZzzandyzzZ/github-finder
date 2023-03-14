import axios from 'axios'
import { GITHUB_API_URL } from '../constants/api'

export const githubApi = axios.create({
  baseURL: GITHUB_API_URL
})
