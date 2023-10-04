import axios from "axios";

type TPage = {
    pageName: string;
    projectId: any;
    body?: string;
};

axios.defaults.baseURL = "http://localhost:8000";

const newPage = async (props: TPage) => {
    console.log(
        "Esta a chegar aqui na funcao de criar projectos nome: " +
            props.pageName +
            " id: " +
            props.projectId
    );
    try {
        const response = await axios.post("/api/pages", props);
        return response;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};
  
const getPageById = async (id: any) => {
    console.log(id);
    const response = await axios.get(`/api/pages/${id}`);
    console.log(response.data);
    return response.data;
};

export { newPage, getPageById };
