import axios from "axios";

type TUser = {
    uid: string;
    nameUser: string;
    emailUser: string;
    password?: string;
    photoURL: string;
};

type TProject = {
    projectName: string;
    userId: any;
};

axios.defaults.baseURL = "http://localhost:8000";

const newUser = async (props: TUser) => {
    try {
        const response = await axios.post("/api/users", props);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Erro ao criar novo usuário:", error);
        throw error;
    }
};

const getUserByEmail = async (email: string) => {
    const response = await axios.get(`/api/users/${email}`);
    return response.data;
    console.log(response.data);
};



export { newUser, getUserByEmail };
