import axios from "axios";
export default class Http{

    constructor(){
        
        this.devurl="";
        this.uaturl="";
        this.prodUrl="";
        this.httpUrl=this.devurl;
        this.http=axios;
    };
    async getallData(){
   
        const result = await this.http.get(this.httpUrl).then((data)=>{
            console.log(data);
            return data;
        });
        return result;
    }

    

};