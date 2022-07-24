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

    // En local doly zao reto anh REACT_APP_USERS_LOCAL_API_URL mila ovaina le Heroku

    static async registerPlayer(player) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/register-player/`
        const result = await axios.post(url, player, { headers: { 'Content-Type': 'multipart/form-data' } })
        return result
    }

    static async login(user) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/login/`
        const result = await axios.post(url, user)
        return result

    }

    static async logout(token) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/logout/`
        const result = await axios.post(url, { headers: { 'Authorization': `Token ${token}` } })
        return result

    }

    static async password_reset(user_email){
        const url = `${process.env.REACT_APP_AUTH_LOCAL_API_URL}/users/reset_password/`
        const result = await axios.post(url, user_email)
        return result
    }

    static async confirm_password_reset(user_password){
        const url = `${process.env.REACT_APP_AUTH_LOCAL_API_URL}/users/reset_password_confirm/`
        const result = await axios.post(url, user_password)
        return result
    }

    static async change_password(user_password, token) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/password-change/`
        const result = await axios.post(url, user_password, { headers: { 'Authorization': `Token ${token}` } })
        return result
    }

    static async getUserInfos(token) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/infos/`
        const result = await axios.get(url, { headers: { 'Authorization': `Token ${token}` } })
        return result
    }

    static async updateUserInfos(user, token) {
        const url = `${process.env.REACT_APP_USERS_LOCAL_API_URL}/infos/`
        const result = await axios.put(url, user, { headers: { 'Authorization': `Token ${token}` } })
        return result
    }


    // Mila ovaina anle en prod refa aveo eto ny BASE_URL vo miainga
    static async getPlayer(player){
        const user_params = ``
        const place_params = ``
        const organization_params = ``
        const player_params = ``
        const url = `${process.env.REACT_APP_BASE_LOCAL_API_URL}/players/?`
        
        const result = await axios.get(url)
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


