import http from '../http-common'

class AppointmentReqClass{
    AddAppointment(item){
      return http.post("/appointmentreq/",item);
    }
    getallappointment(){
      return http.get("/appointmentreq/");
    }
    sendmail(item){
      return http.post("/sendmail/",item);
    }
}

export default new AppointmentReqClass();
