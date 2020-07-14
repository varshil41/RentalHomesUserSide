import http from '../http-common';

class userClass{
    login(emailid,password){
        return http.get("/user/" + emailid + "/" + password);
    }
    getpassword(emailid){
      return http.get("/user/" + emailid);
    }
    sendmail(item){
      return http.post("/sendmail/",item);
    }
    adduser(item){
      return http.post("/user/",item);
    }
    getalluser(){
      return http.get("/user/");
    }
    getuserbyid(id){
      return http.get("/userbyid/" + id);
    }
    updateuser(item){
      return http.put("/user/",item);
    }
    deleteimage(name){
      return http.delete("/user/" + name);
    }
}

export default new userClass();
