import axios from 'axios';

const DATA_API_BASE_URL = "http://localhost:8080/laporbencana";

class DataService {
    // get semua data dari database
    getDatas = () => {
        return axios.get(DATA_API_BASE_URL);
    }

    // create data baru dari form file CreateData
    createData = (data) => {
        return axios.post(DATA_API_BASE_URL, data);
    }

    // get data secara detail berdasarkan Id
    getDataById = (dataId) => {
        return axios.get(DATA_API_BASE_URL + '/' + dataId);
    }

    // update data user berdasarkan Id dan data lamanya
    updateData = (data, dataId) => {
        return axios.put(DATA_API_BASE_URL + '/' + dataId, data);
    }

    deleteData = (dataId) => {
        return axios.delete(DATA_API_BASE_URL + '/' + dataId);
    }
}

export default new DataService();