import axios from "axios";

export async function getTweets():Promise<Tweet>{
    const response = await axios.get('http://localhost:3001/');
    return response.data;
}

export interface Tweet{
    id: number,
    tweet: string,
    author: string
}