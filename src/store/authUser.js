import {create} from 'zustand'
import axios from 'axios'

export const useAuthStore = create((set) => ({
    user:null,
    signup : async (credentials) => {
        try{
            const response = await axios.post("/api/v1/auth/signup",credentials);
            set({user:response.data.user})
        }
        catch(error){
            console.log(error)
        }
    },
    login : async () => {},
    logout : async () => {},
    authAcheck : async () => {},
}))