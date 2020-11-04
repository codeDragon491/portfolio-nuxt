import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://my-json-server.typicode.com/codeDragon491/portfolio-data`, //on mock api (json-server) http://localhost:3004
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getWorks() {
        return apiClient.get('/works')
    },
    getWork(id) {
        return apiClient.get('/works/' + id)
    }
}