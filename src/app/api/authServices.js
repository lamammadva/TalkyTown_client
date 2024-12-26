import api from "./configAPi"

export const login = async(newUser)=>{
    console.log(newUser);
    try {
        const response = await api.post('/auth/login',newUser)
        return response.data
    } catch (error) {
        throw new Error("Couldn't login")
        
    }
}

export const register = async(newUser)=>{
    try {
        const response = await api.post('/auth/register',newUser)
        return response.data
    } catch (error) {
        throw new Error("Couldn't register")
        
    }
}