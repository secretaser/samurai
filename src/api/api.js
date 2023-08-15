import axios from "axios"

const instance = axios.create({
   withCredentials: true,
   headers: { 'API-KEY': '06391572-b7e9-4cd6-8560-9a483e17805d' },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
   getUsers(pageNumber = 1, pageSize = 5) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
   },

   follow(id) {
      return instance.post(`follow/${id}`).then(response => response.data);
   },

   unfollow(id) {
      return instance.delete(`follow/${id}`).then(response => response.data);
   },

   getProfile(id) {
      return instance.get(`profile/${id}`)
         .then(response => response.data);
   }
};
export const authAPI = {
   // в уроках это me()
   checkAuth() {
      return instance.get(`auth/me`).then(response => response.data);
   },
};

export const profileAPI = {
   getProfile(id) {
      return instance.get(`profile/` + id).then(response => response.data);
   },

}