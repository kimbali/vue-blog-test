import axios from 'axios'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = () => {
  return axios.get(`${API_BASE_URL}/posts`)
}

export const fetchPost = (postId: string | number) => {
  return axios.get(`${API_BASE_URL}/posts/${postId}`)
}

export const fetchComments = (postId: string | number) => {
  return axios.get(`${API_BASE_URL}/posts/${postId}/comments`)
}

export const addComment = (
  postId: string | number,
  commentData: { email: string; body: string }
) => {
  return axios.post(`${API_BASE_URL}/posts/${postId}/comments`, commentData)
}

export const fetchUser = (userId: string | string[]) => {
  return axios.get(`${API_BASE_URL}/users/${userId}`)
}
