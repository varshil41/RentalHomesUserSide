<template>
<div>
  <menu1></menu1>
  <br>
    <div>
    </div>
    <div>
      <img style="margin-left:20px; height:200px;width:200px;" class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
         <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>

    <p class="p1">Property Name :- {{propertyArr.propertyName}}</p>
    <p class="p1">Property Type :- {{propertyArr.propertyType}}</p>
    <p class="p1">Facilities : {{propertyArr.bhk}},{{propertyArr.facility}}</p>
    <p class="p1">Address1 : {{propertyArr.addressLine1}}</p>
    <p class="p1">Area : {{propertyArr.area}}</p>
    <p class="p1">City : {{propertyArr.city}},{{propertyArr.pincode}}</p>
    <p class="p1">Rent(per month) : &#8377 {{propertyArr.rent}}</p>
    <p class="p1">Owner : {{userArr.userName}}</p>
    <p class="p1"></p>
    <p><button v-show ="userTypeflag==1 && unsoldflag!=1" type="button" @click="onsetappointment" v-bind:disabled="flag==0">Request Appointment</button><br><br><span v-if="flag==0" style="margin-left:10px;color:red;">You have to login first for set Appointment *</span></p>


    <div class="footer">
        <p>Email us : realestate@gamil.com <br>
            Call us : 9426085781 <br>
            All Copyrights are reserved | Terms of Use Privacy</p>
    </div>
</div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
import propertyImages from '../services/propertyImagesService'
import property from '../services/propertyService'
import user from '../services/userService'
import appointment from '../services/AppointmentReqService'
export default {
  components: {
    VueGallerySlideshow
  },
  data:function(){
    return{
      images: [],
      index: null,
      propertyImageArr:[{}],
      propertyArr:[],
      userArr:[],
      flag:0,
      flag1:0,
      appointmentArr:{
        appointmentReqId:'',
        userId:'',
        propertyId:'',
        status:''
      },
      unsoldflag:0,
      userTypeflag:0,
      userName:'',
      sendmailArr:{
        to:'varshilshah44@gmail.com',
        subject:'Appointment Request Received',
        message:''
      }

    }
  },
  created(){


      if(localStorage.getItem("userId") != null){
        this.flag = 1;
      }

      propertyImages.getpropertybypropertyid(this.$route.params.propertyId).then(doc=>{
        this.images[0] = "http://localhost:3000/images/propertySubImage/" +  doc.data[0].propertyImage;
        this.images[1] = "http://localhost:3000/images/propertySubImage/" +  doc.data[1].propertyImage;
        console.log(this.images[0]);
      })
      property.getpropertybyid(this.$route.params.propertyId).then(doc=>{
        this.propertyArr = doc.data[0];
        if(this.propertyArr.status == "Sold"){
          this.unsoldflag = 1;
        }
        user.getuserbyid(doc.data[0].userId).then(doc=>{
          this.userArr = doc.data[0];
        })
      })
       user.getuserbyid(localStorage.getItem('userId')).then(doc=>{
            if(doc.data[0].userType == "2"){
              this.userTypeflag = 1;
            }
       })
  },
  methods:{
         onsetappointment:function(){
          this.appointmentArr.userId = localStorage.getItem('userId');
          this.appointmentArr.propertyId = this.$route.params.propertyId;
          this.appointmentArr.status = "pending";

          user.getuserbyid(localStorage.getItem('userId')).then(doc=>{
            this.userName = doc.data[0].userName;
            if(doc.data[0].userType == "2"){
              this.userTypeflag = 1;
            }
          })


        appointment.getallappointment().then(doc=>{
          for(let i=0;i<doc.data.length;i++){
              this.appointmentArr.appointmentReqId = doc.data[i].appointmentReqId;
              if(this.appointmentArr.userId == doc.data[i].userId && this.appointmentArr.propertyId == doc.data[i].propertyId){
                this.flag1 = 1;
              }
          }
          this.appointmentArr.appointmentReqId++;

          if(this.flag1 == 0){
          appointment.AddAppointment(this.appointmentArr).then(doc=>{
            alert("Appointment Request sucessfully , Will inform you the time and location soon");
            this.sendmailArr.message = this.userName + " send Appointment Request for " + this.propertyArr.propertyName + " " + this.propertyArr.propertyType;
            appointment.sendmail(this.sendmailArr).then(doc=>{

            })
          })
          }
          else{
            alert("Already Reqested");
          }
        })
    }
  }
}

</script>

<style lang="scss" scoped>
  button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color:#000;
        text-align: center;
        cursor: pointer;
        width: 20%;
        font-size: 18px;
        margin-left:20px;
        }


        button:hover, a:hover {
        opacity: 0.7;
        }


        .footer {
            padding: 3px;
            text-align: center;
            background-color: #333;
            color: white;
            bottom:0;
            width:100%;
        }
        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-left:20px;
        }

        .container{
            display:flex;
            width:auto;
            height:250px;
            margin-top:10px;
            padding:20px;
        }

         .avatar2 {
            height: 250px;
            width:1300px;
            filter: blur(8px);

            }
         .p2{
            position: absolute;
            color: white;
            font-size:40px;
            border: 3px solid #f1f1f1;
            margin-left:43%;
            margin-top:100px;
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
             }

         .p1{
            color:currentColor;
            font-size: 18px;
            font-weight:550;
            margin-top:30px;
            margin-left:20px;
            }


        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
                margin-left:0px;
            }
            .p1{
               font-size:17px;
            }
            .p2{
                font-size:20px;
            }
            p button{
                font-size:8px;
            }

        }

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
                padding: 3px 3px;

            }
        }

</style>
