import axios from "axios";
export class API {

    static async getPlayerIdFIDE(player_name) {
        const url = `${process.env.REACT_APP_FIDE_API_ID_FIDE_URL}/${player_name}/MAD`
        const result = await axios.get(url)
        return result
    }

    static async getPlayerInfoFIDE(fide_id) {
        const url = `${process.env.REACT_APP_FIDE_API_INFO_FIDE_URL}/${fide_id}`
        const result = await axios.get(url)
        return result
    }







    static async listTeam(){
        const url = ``
        const result = axios.get(url)
        return result
    }


    static async listTournament(){
        const url = ``
        const result = axios.get(url)
        return result
    }

    static async listPlayer(){
        const url = ``
        const result = axios.get(url)
        return result
    }
}


