import axios from 'axios'


export const get = path => axios.get("https://" + path).then(response => response).catch(error => console.log(error))
