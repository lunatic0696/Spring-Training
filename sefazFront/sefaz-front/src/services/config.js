import axios from 'axios'

export const http = axios.create({
    publicPath: 'http://localhost:8080'
})