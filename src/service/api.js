import axios from "axios";

const Api_Url = 'http://localhost:3002/user';

export const AddNewUserAccount = async (data) => {
    try {
        return await axios.post(Api_Url, data)
    } catch (error) {
        console.log(error);
    }

}

export const GetAllUsersDetail = async () => {
    try {
        return await axios.get(Api_Url)
    } catch (error) {
        console.log(error)
    }
}

export const getSingleUser = async (data) => {
    try {
        return await axios.get(`${Api_Url}/${data}`)
    } catch (error) {
        console.log(error)
    }
}

export const updateSingleUser = async (data, id) => {
    try {
      await   axios.put(`${Api_Url}/${id}`,data)
    } catch (error) {
        console.log(error);
    }
}

export const deletUser = async (id)=> {
    try {
      await axios.delete(`${Api_Url}/${id}`)
    } catch (error) {
        console.log(error);
    }
}