import axios from "axios"

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobstitle/getall")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobstitle/findById?id="+id)
    }
   
}