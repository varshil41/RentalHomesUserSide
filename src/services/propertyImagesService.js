import http from '../http-common'

class propertyImages{
  addpropertyimages(item){
    return http.post("/propertyimages",item)
  }
  getallimages(){
    return http.get("/propertyimages");
  }
  getpropertybypropertyid(propertyid){
    return http.get("/propertyimages/" + propertyid);
  }
 }
 export default new propertyImages();

