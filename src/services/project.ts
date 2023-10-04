import axios from "axios";
import { Editor } from "grapesjs";

type TProjectNew = {
    projectName: string;
    userId: any;
};

type TProjectUpdate = {
    projectName: string;
    _id: any;
};

axios.defaults.baseURL = "http://localhost:8000";

const newProject = async (props: TProjectNew) => {
    console.log("Esta a chegar aqui na funcao de criar projectos" + props);
    try {
        const response = await axios.post("/api/projects", props);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};

const getProjectById = async (id: any) => {
    const response = await axios.get(`/api/projects/${id}`);
    return response.data;
    console.log(response.data);
};

const updateProject = async (edit: any, idData: any ) => {
    try {
        const response = await axios.patch(`/api/page/${idData}`, edit);
        return response.data
    } catch (error) {}
};

export { newProject, getProjectById, updateProject };
