import axios from "axios"

const instance = axios.create({
   withCredentials: true,
   headers: { 'API-KEY': 'b6363c64-81dc-4b7f-9c29-4d86d82558ef' },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

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
};


export const authAPI = {
   // в уроках это me()
   checkAuth() {
      return instance.get(`auth/me`).then(response => {
         console.log('me response');
         console.log(response);
         return response.data
      });
   },
   login(email, password, rememberMe = false, captcha) {
      const payload = { email, password, rememberMe, captcha };
      console.log(payload);

      return instance.post(`auth/login`, { email, password, rememberMe, captcha });
   },
   logout() {
      return instance.delete(`auth/login`);
   },
};
export const securityAPI = {
   getCaptcha() {
      return instance.get(`security/get-captcha-url`).then(response => response.data.url);
   },
}

export const profileAPI = {
   getProfile(id) {
      return instance.get(`profile/` + id).then(response => response.data);
   },
   getStatus(id) {
      return instance.get(`profile/status/` + id).then(response => response.data);
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status }).then(response => response.data);
   },
   savePhoto(photo) {
      const formData = new FormData();
      formData.append('image', photo)
      return instance.put(`profile/photo/`, formData, { headers: { "Content-Type": 'multipart/form-data' } })
         .then(response => response.data);
   },
   saveInfo(info) {
      return instance.put(`profile`, info).then(response => response.data);
   }
}