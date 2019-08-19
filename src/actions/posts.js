export const deletePosts = data => ({
  type: 'posts/deletePost',
  payload: data,
});
export const addPosts = data => ({
  type: 'posts/createPosts',
  payload: data,
});
export const editPosts = data => ({
  type: 'posts/editPosts',
  payload: data,
});
