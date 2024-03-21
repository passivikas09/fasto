import axios from "axios"
import * as qs from 'qs'
const BASE_URL="http://localhost:5000/"

class apiservice{
    adduser(data){
        return axios.post(BASE_URL+"api/user/add", qs.stringify(data) )
    }
    alluser(){
        return axios.get(BASE_URL+"admin/user/all")
    }
    
    singleUser(data){
        return axios.post(BASE_URL+"api/user/single",data)
    }

    login(data){
        return axios.post(BASE_URL+"api/login",data)
    }
    deleteUser(data){
        return axios.post(BASE_URL+"admin/user/delete",data)
    }
    forgotpwd(data){
        return axios.post(BASE_URL+"api/user/forgotpassword",data)
    }

    //contact
    addContact(data){
        return axios.post(BASE_URL+"api/enquiry/add",qs.stringify(data))
    }
    allContact(){
        return axios.get(BASE_URL+"admin/enquiry/all")
    }
    singleContact(data){
        return axios.post(BASE_URL+"admin/enquiry/single",data)
    }
    deleteContact(data){
        return axios.post(BASE_URL+"admin/enquiry/delete",data)
    }

    //category
    addCategory(data){
        return axios.post(BASE_URL+"admin/category/add",data)
    }
    allCategory(){
        return axios.get(BASE_URL+"admin/category/all")
    }
    singleCategory(data){
        return axios.post(BASE_URL+"admin/category/single",data)
    }
    updateCategory(data){
        return axios.put(BASE_URL+"admin/category/update",data)
    }
    deleteCategory(data){
        return axios.post(BASE_URL+"admin/category/delete",data)
    }

    //trainee
    addTrainee(data){
        return axios.post(BASE_URL+"admin/trainee/add",data)
    }

    allTrainee(){
        return axios.get(BASE_URL+"admin/trainee/all")
    }
    categoryWiseTrainee(data){
        return axios.post(BASE_URL+"admin/trainee/categorywise",data)
    }
    singleTrainee(data){
        return axios.post(BASE_URL+"admin/trainee/single",data)
    }
    updateTrainee(data){
        return axios.put(BASE_URL+"admin/trainee/update",data)
    }
    deleteTrainee(data){
        return axios.post(BASE_URL+'admin/trainee/delete',data)
    }
    totalcategorywise(){
        return axios.post(BASE_URL+"admin/trainee/totalcategorywise")
    }
    //dashboard
    dashboard(){
        return axios.post(BASE_URL+"admin/dashboard")
    }
    totaltrained(){
        return axios.post(BASE_URL+"admin/totaltrained")
    }
    //file upload

    fileupload(){
        return axios.get(BASE_URL+"admin/image/all")
    }

    addfileupload(data){
        return axios.post(BASE_URL+"admin/image/add",data)
    } 
    singlefileupload(data){
        return axios.post(BASE_URL+"admin/image/single",data)
    }

    deletefileupload(data){
        return axios.post(BASE_URL+"admin/image/delete",data)
    }
    updatefileupload(data){
        return axios.put(BASE_URL+"admin/image/update",data)
    }

}

export default new apiservice