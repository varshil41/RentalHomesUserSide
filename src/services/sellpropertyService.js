import http from '../http-common'

class propertySell{
  getpropertybyuserid(userid){
    return http.get("/sellproperty/" + userid);
  }
}
 export default new propertySell();

