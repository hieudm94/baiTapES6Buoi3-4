export default class CompleteService{
    getCompleteTaskList = () => {
        return axios({
            method: 'get',
            url: 'https://6311a6acf5cba498da82c529.mockapi.io/baiTapES',
        });
    }

    addCompleteTaskList = (task) =>{
        return axios({
            method: 'POST',
            url: 'https://6311a6acf5cba498da82c529.mockapi.io/baiTapES',
            data: task
        });
    }

    deleteCompleteTaskList = (id) =>{
        return axios({
            method: 'DELETE',
            url: `https://6311a6acf5cba498da82c529.mockapi.io/baiTapES/${id}`,
        
        });
    }

    
}