import axios from "axios"

export default class JobPostingService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdverts/getall")
    }
    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobAdverts/add",values)
    }
}