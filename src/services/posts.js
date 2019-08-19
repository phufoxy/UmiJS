import { extend } from 'umi-request';
const request = extend({
  maxCache: 10, // The maximum number of caches. When it is exceeded, it will automatically clear the first one according to the time.
});
export async function fetchPosts() {
  return request('http://127.0.0.1:5000/api/posts', { method: 'GET' });
}
export async function deletePosts(id) {
  return request(`http://127.0.0.1:5000/api/posts/${id}/`, { method: 'DELETE' });
}
export async function addPosts(data) {
  return request(`http://127.0.0.1:5000/api/posts/`, { method: 'POST', data });
}
export async function editPosts(data) {
  return request(`http://127.0.0.1:5000/api/posts/${data.id}/`, { method: 'PUT', data });
}
