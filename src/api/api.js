import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "fea414ab-285f-4648-bff7-cf8341009ac1"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    dellFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        console.warn("Please use profileAPI obj")
        profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
     getProfile(userId) {
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    }
}

export const authAPI = {
    setAuth() {
        return instance.get(`auth/me/`)
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login/', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login/')
    }
}