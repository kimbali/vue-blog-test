export interface Post {
  id: number
  title: string
  body: string
}

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface ImageData {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
