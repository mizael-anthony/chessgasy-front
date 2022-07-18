import axios from "axios";
export class API {

    static async getPlayerIdFIDE(lastname) {
        const url = `${process.env.REACT_APP_FIDE_API_URL}/${lastname}/MAD`
        try{
            const result = await axios.get(url)
            return result.data
        
        }catch(error){
            return console.log(error)
        }
        



    }






}

