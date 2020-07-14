import http from '../http-common'

class property{
  getallproperty(){
    return http.get("/property");
  }
  addproperty(item){
    return http.post("/property",item)
  }
  getpropertybyuser(userid){
    return http.get("/propertybyuserid/" + userid);
  }
  getpropertybyid(propertyid){
    return http.get("/propertybyid/" + propertyid);
  }
  propertybytype(type){
    return http.get("/propertybytype/" + type);
  }
  propertybystatusandcity(status,city,type){
    return http.get("/property/" + status + "/" + city + "/" + type);
  }
  propertymaxrent(){
    return http.get("/propertymaxrent/");
  }
  updateproperty(item){
    return http.put("/property/",item);
  }
  deletefile(name){
    return http.delete("/deletepropertyimage/" + name);
  }
 }
 export default new property();

