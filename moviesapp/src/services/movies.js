import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://movies121.free.beeceptor.com/movies");
    return response.data
}