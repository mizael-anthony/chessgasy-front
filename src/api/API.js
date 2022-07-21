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

    static async getAdressMap(quarter_name) {
        const url = `${process.env.REACT_APP_MAP_API_URL}/${quarter_name}`
        const result = await axios.get(url)
        return result
    }


    static async registerPlayer(player) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/register-player/`
        const result = await axios.post(url, player, {headers:{'Content-Type': 'multipart/form-data'}})
        return result
    }

    static async getUserInfos(token){
        const url = `${process.env.REACT_APP_USERS_API_URL}/infos/`
        const result = await axios.get(url)
        return result
    }

    static async login(user){
        const url = `${process.env.REACT_APP_USERS_API_URL}/login/`
        const result = await axios.post(url, user)
        return result

    }

    static async logout(user, token){
        const url = `${process.env.REACT_APP_USERS_API_URL}/logout/`
        const result = await axios.post(url, user)
        return result

    }













    static async listTeam() {
        const url = ``
        const result = axios.get(url)
        return result
    }


    static async listTournament() {
        const url = ``
        const result = axios.get(url)
        return result
    }

    static async listPlayer() {
        const url = ``
        const result = axios.get(url)
        return result
    }
}


