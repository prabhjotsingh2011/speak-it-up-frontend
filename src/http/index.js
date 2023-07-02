import axios from 'axios'


const api=axios.create({
    // baseURL:process.env.REACT_APP_API_URL,
    baseURL:'https://speakitup.onrender.com',
    // baseURL:'http://localhost:5500',
    withCredentials: true,
    headers:{
        'Content-Type':'application/json',
        Accept: 'application/json'
    }
})



//List of all end Points
export const sendOtp=(data)=>api.post('/api/send-otp',data)
export const verifyOtp=(data)=>api.post('/api/verify-otp',data)
export const activate=(data)=>api.post('/api/activate',data)
export const logout=()=>api.post('/api/logout')
export const createRoom=(data)=>api.post('/api/rooms',data)
export const getAllRooms=()=>api.get('/api/rooms')
export const getRoom=(RoomId)=>api.get(`/api/rooms/${RoomId}`)




// Interceptors 
api.interceptors.response.use((config)=>{
    return config;
},async(error)=>{
    const originalRequest=error.config;
    
    if( error.response.status === 401  && originalRequest && !originalRequest._isRetry){
        originalRequest._isRetry=true;
        try {
            await axios.get(`${"https://speakitup.onrender.com"}/api/refresh` , {withCredentials:true})
            // await axios.get(`${"http://localhost:5500"}/api/refresh` , {withCredentials:true})
            
            return api.request(originalRequest)
        } catch (err) {
            console.log(err.message);
        }   
    }  
    throw error 
})

export default api;

