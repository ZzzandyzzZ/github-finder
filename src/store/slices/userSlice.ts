import { createSlice } from '@reduxjs/toolkit'

const initialState: UserSliceInitialState = {
  user: { createdDate: 0 },
  isUserLoading: true,
  userRepos: [],
  isReposLoading: true,
  errorMsg: ''
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onUserLoading: (state) => {
      state.isUserLoading = true
    },
    onUserLoad: (state, { payload }) => {
      state.user = payload
      state.isUserLoading = false
    },
    onUserReposLoading: (state) => {
      state.isUserLoading = true
    },
    onUserReposLoad: (state, { payload }) => {
      state.userRepos = payload
      state.isReposLoading = false
    },
    onLoadingError: (state, { payload }) => {
      state.errorMsg = payload
      state.isUserLoading = true
      state.isReposLoading = true
    },
    onClearError: (state) => {
      state.errorMsg = initialState.errorMsg
    }
  }
})

export const { onUserLoad, onUserLoading, onUserReposLoading, onUserReposLoad, onLoadingError, onClearError } = userSlice.actions
