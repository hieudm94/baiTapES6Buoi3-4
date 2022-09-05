export default class TaskService {
    
    getTaskList = () => {
        return axios({
            method: 'get',
            url: 'https://62e77b3993938a545bd290d6.mockapi.io/Task',
        });
    }

    addTaskList = (task) =>{
        return axios({
            method: 'POST',
            url: 'https://62e77b3993938a545bd290d6.mockapi.io/Task',
            data: task
        });
    }

    deleteTaskList = (id) =>{
        return axios({
            method: 'DELETE',
            url: `https://62e77b3993938a545bd290d6.mockapi.io/Task/${id}`,
        });
    }
    

    detailTaskList = (id) => {
        return axios({
            method: 'GET',
            url: `https://62e77b3993938a545bd290d6.mockapi.io/Task/${id}`,
        });
    }

}
