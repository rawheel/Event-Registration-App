  
import axios from 'axios'

export function eventAPI() {
  
    return axios.get('http://127.0.0.1:8000/events/');
     //return axios.get(`http://127.0.0.1:5000/githubapi/${params}`);
  }