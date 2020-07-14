import http from '../http-common'

class feedbackClass{
  addfeedback(item){
    return http.post("/feedback/",item);
  }
  getallfeedback(){
    return http.get("/feedback/");
  }
}

export default new feedbackClass();
