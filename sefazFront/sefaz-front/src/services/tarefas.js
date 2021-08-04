import { http } from './config'

export default {

    listar:() => {
        return http.get('tarefa', {port:8080})
    }
}