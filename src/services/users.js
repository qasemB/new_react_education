import axios from "axios";

export const getUsersService = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
};

export const createUserServicec = (data)=>{
    return axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "POST",
        data,
        headers: {
            "Content-Type":  'application/json; charset=UTF-8',
        },
    });
};

export const updateUserService = (id, data) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method: "PUT",
        data,
        headers: {
            "Content-Type":  'application/json; charset=UTF-8',
        },
    });
};

export const deleteUserService = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};
