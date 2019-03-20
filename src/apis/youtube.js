import axios from 'axios';

const KEY = "AIzaSyBv5BARrJBXfm1DWlI7GUC0dgiR3DHr52c";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 15,
        key: KEY,
    }
});