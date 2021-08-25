import axios from 'axios';

export async function loginUser(credentials: Credentials) {
    const response = await axios.post('http://localhost:3001/loginUser', credentials);
    return response.data;
}

export interface Credentials {
    username: string;
    password: string;
}
