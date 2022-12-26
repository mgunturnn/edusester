import axios from 'axios';

// Alamat API backends untuk nangkap data 
const USER_API_BASE_URL = "https://golang-swart.vercel.app/users"; //menampilkan home

class UserService {
    // menambahkan link user
    // Untuk dapetin data semua user
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    // Buat user baru dari form file CreateUserComponent
    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    // Buat cari lebih detail terhadap user tertentu dicari dari id nya
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    // Update data user berdasarkan id user dan data lamanya 
    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    // menghapus user berdasarkan id user tertentu
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()
