import uuidv4  from 'uuid/v4'


const url = "https://penit.herokuapp.com"

let token = localStorage.token

if (!token)
  token = localStorage.token = 'pa$$word'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

/* --- API Functions --- */

// Fetch all the categories
export const getCategories = () =>
    fetch(`${url}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

// Methods to fetch posts
  // Method to fetch all posts
export const getAllPosts = () =>
    fetch(`${url}/posts`, { headers })
        .then(res => res.json())
  // Method to fetch posts by category
export const getPosts = ( category ) =>
    fetch(`${url}/${category}/posts`, { headers })
        .then(res => res.json())
// Method to add new posts
/*
* params *
  Object
    - title: @string
    - body: @string
    - author: @string
    - category: @string
*/
export const addPost = ({ title, body, author, category }) =>
    fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: uuidv4(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category
        })
    })
    .then(res => res.json())
// Method to get post by id
export const getPost = (id) =>
    fetch(`${url}/posts/${id}`, { headers })
        .then(res => res.json())

// Method to Vote the post
export const votePost = (id, score) => {
    const option = score > 0 ? "upVote" : "downVote"
    return fetch(`${url}/posts/${id}`, {
      method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            option
        })
    })
        .then(res => res.json())
}
// Method to Edit the post
/*
* params *
  Object
    - title: @string
    - body: @string
*/
export const editPost = (id, { title, body }) =>
    fetch(`${url}/posts/${id}`, {
        method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body
        })
    })
        .then(res => res.json())
// Method to Delete the post
export const deletePost = (id) =>
    fetch(`${url}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
// Method to Get all comments for a given post
export const fetchComments = (postId) =>
    fetch(`${url}/posts/${postId}/comments`,{ headers })
        .then(res => res.json())
// Method to create new comment for a given post
/*
* params *
  Object
    - author: @string
    - body: @string
*/
export const addAPIComment = (postId, { content, author }) =>
    fetch(`${url}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: uuidv4(),
            timestamp: Date.now(),
            body: content,
            author,
            parentId: postId
        })
    })
      .then(res => res.json())
// addComment("6ni6ok3ym7mf1p33lnez", {
//   body: "Ek adda comment orr kar deta hun ",
//   author: "Papa ji hi hai"
// })
// Method to edit comment for a given comment ID.
/*
* params *
  Object
    - body: @string
*/
export const editComment = (id, { body }) =>
    fetch(`${url}/comments/${id}`,{
        method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body
        })
    })
    .then(res => res.json())
// Method to vote a comment
export const voteAPIComment = (id, score) => {
    const option = score > 0 ? "upVote" : "downVote"
    return fetch(`${url}/comments/${id}`, {
      method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            option
        })
    })
        .then(res => res.json())
}
// Method to Delete the comment
export const deleteAPIComment = (id) =>
    fetch(`${url}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
