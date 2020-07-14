<template>
<div>
   <menu1></menu1>
    <button @click="onadd" type="button" class="button-log" style="background-color: #3377ff; width:200px; float:right">Add Property</button>
    <form v-if="flag" @submit.prevent="onaddproperty">
        <section class="main-log-section">
            <header>
                <h1 style="text-align: center;">Add Property </h1>
            </header>

            <label for="pname" style="margin-left: 24px;"><b>&nbsp;Property Name</b></label>

            <input v-model="property.propertyName" class="login-input" id="pname" type="text" placeholder="Enter Property Name" name="pname" autocomplete="off">

            <label for="uname" style="margin-left: 24px;"><b>&nbsp;Property Type</b></label>

            <select class="login-input" placeholder="Select Type" name="ptype" @change="onpropertytype">
                <option value="Bunglow">Bunglow</option>
                <option value="Flat">Flat</option>
                <option value="Tenament">Tenament</option>
            </select>

            <label for="pbhk" style="margin-left: 24px;"><b>&nbsp;BHK</b></label>

            <input v-model="property.bhk" class="login-input" id="pbhk" type="text" placeholder="Enter e.g(3-BHK)" name="pbhk" autocomplete="off">

            <label for="pfacility" style="margin-left: 24px;"><b>&nbsp;Facility</b></label>

            <select class="login-input" placeholder="Select Type" name="pfacility" @change="onfacility">
                <option value="Full-furnished">Full Furnished</option>
                <option value="Semi-furnished">Semi Furnished</option>
                <option value="None-furnished">No Furnished</option>
            </select>

            <label for="paddress1" style="margin-left: 24px;"><b>&nbsp;AddressLine1</b></label>

            <input v-model="property.addressLine1" id="paddress1" class="login-input" type="text" placeholder="Enter address" name="paddress1" autocomplete="off">


            <label for="parea" style="margin-left: 24px;"><b>&nbsp;Area</b></label>

            <input id="parea" v-model="property.area" class="login-input" type="text" placeholder="Enter area" name="parea" autocomplete="off" >

            <label for="pcity" style="margin-left: 24px;"><b>&nbsp;City</b></label>

            <select class="login-input" placeholder="Select City" name="pcity" @change="oncity">
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Gandhinagar">Gandhinagar</option>
            </select>

            <label for="pcode" style="margin-left: 24px;"><b>&nbsp;Pincode</b></label>

            <input id="pcode" v-model="property.pincode" class="login-input" type="number" placeholder="Enter pincode" name="pcode">

            <label for="prent" style="margin-left: 24px;"><b>&nbsp;Rent(per month)</b></label>

            <input id="prent" v-model="property.rent" class="login-input" type="number" placeholder="Enter rent" name="prent">

            <label for="pmain" style="margin-left: 24px;"><b>&nbsp;Main Property Image</b></label>

            <input  id="pmain" @change="onfile" type="file" class="login-input" name="pmain">

            <br>

            <label for="psub" style="margin-left: 24px;"><b>&nbsp;Sub Property Image</b></label>


            <input id="psub" @change="onsubfile" type="file" class="login-input" name="psub">
            <table v-if="displayflag">
              <tr>
                <th>Image</th>
              </tr>
              <tr v-for="(item,id) in selectedFile1" v-bind:key="id">
                <td>{{item.name}}</td>
                <button @click="ondelete(item.name)" type="button" style="background-color: #3377ff; width:100px; height:30px; border-radius:40px;float:right;">Delete</button>
                <td>
                </td>
              </tr>
            </table>
            <button type="submit" class="button-log">Add Property</button>


        </section>

    </form>
    <br>
    <br>
    <br>
  <!--   <section class="main-log-section">
            <header>
                <h1 style="text-align: center;">Your Properties</h1>
            </header>
    </section>
 -->
             <h3 style="color:blue; text-align:center; border:1px solid black;">Your Selling Properties</h3>
             <h2 style="text-align:center;" v-if="sellarr.length == 0">No Properties</h2>

    <div class="row">
    <div class="card" v-for="(item,id) in sellarr" v-bind:key="id">
        <img v-bind:src="'http://localhost:3000/images/propertyImage/' + item.mainImage" class="img1" alt="John">
        <h1>{{item.propertyName}}</h1>
        <p class="title">{{item.city}},{{item.area}}</p>
        <p class="title">{{item.bhk}},{{item.propertyType}}</p>
        <p class="title">{{item.status}}</p>
        <p class="title">&#8377 {{item.rent}}(per month)</p>
        <p><router-link v-bind:to="'/propertyDetails/' + item.propertyId"><button class="button1">More Info</button></router-link></p>
        <p><router-link v-bind:to="'/ModifyProperty/' + item.propertyId"><button style="margin-top:-10px;" class="button1">Modify Info</button></router-link></p>

    </div>
    </div>
    <br>
    <br>
  <!--        <h3 style="color:blue; text-align:center; border:1px solid black;">Buying Properties</h3>
             <h2 style="text-align:center;" v-if="buyarr.length == 0">No Properties</h2>

    <div class="row">
    <div class="card" v-for="(item1,id) in buyarr" v-bind:key="id">
        <img v-bind:src="'http://localhost:3000/images/propertyImage/' + item1.mainImage" class="img1" alt="John">
        <h1>{{item1.propertyName}}</h1>
        <p class="title">{{item1.city}},{{item1.area}}</p>
        <p class="title">{{item1.bhk}},{{item1.propertyType}}</p>
        <p class="title">{{item1.status}}</p>
        <p class="title">&#8377 {{item1.rent}}(per month)</p>
        <p><router-link to="/propertyDetails"><button class="button1">More Info</button></router-link></p>
    </div>
    </div> -->


    <!-- <div id="footer">
        <p>Email us : realestate@gamil.com <br>
            Call us : 9426085781 <br>
            All Copyrights are reserved | Terms of Use Privacy</p>
    </div> -->

</div>
</template>

<script>
import property from '../services/propertyService'
import propertyImages from '../services/propertyImagesService'
import sellproperty from '../services/sellpropertyService'
export default {
    data:function(){
        return{
            flag:false,
            flag1:true,
            property:{
                propertyId:'',
                propertyType:'Bunglow',
                propertyName:'',
                bhk:'',
                facility:'Full-furnished',
                addressLine1:'',
                area:'',
                city:'Ahmedabad',
                pincode:'',
                rent:'',
                mainImage:'',
                status:'Unsold',
                userId:''
            },
            selectedFile:File,
            selectedFile1:[],
            imageflag:0,
            propertyImages:{
              propertyImageId:'',
              propertyId:'',
              propertyImage:''
            },
            imageid:'',
            displayflag:false,
            sellarr:[{}],
            buyarr:[{}]
        }
    },
    created(){
        property.getpropertybyuser(localStorage.getItem("userId")).then(doc=>{
            this.sellarr = doc.data;
        })
        sellproperty.getpropertybyuserid(localStorage.getItem("userId")).then(doc=>{
            var c=0;
            for(let i=0;i<doc.data.length;i++){
                property.getpropertybyid(doc.data[i].propertyId).then(doc=>{
                    this.buyarr.push(doc.data[0]);
                })
            }
            this.buyarr.splice(0,1);

        })
    },
    methods:{
        onadd:function(){
            if(localStorage.getItem("userId") == null){
                this.$router.push({path:'/login'});
            }
            else{
                this.flag = !this.flag;
            }
        },
        onaddproperty:function(){
            this.property.userId = localStorage.getItem("userId");
             if(this.property.propertyName == ""){
                    document.getElementById("pname").focus();
            }
            else if(this.property.bhk == ""){
                  document.getElementById("pbhk").focus();
            }
            else if(this.property.addressLine1 == ""){
                  document.getElementById("paddress1").focus();
            }
            else if(this.property.area == ""){
                  document.getElementById("parea").focus();
            }
            else if(this.property.pincode == ""){
                  document.getElementById("pcode").focus();
            }
            else if(this.property.rent == ""){
                  document.getElementById("prent").focus();
            }
            else if(this.imageflag == 0){
                document.getElementById("pmain").focus();
            }
            else if(this.selectedFile1.length == 0){
                document.getElementById("psub").focus();
            }
            else{
                const fd = new FormData();
                property.getallproperty().then(doc=>{
                for(let i=0;i<doc.data.length;i++){
                  this.property.propertyId = doc.data[i].propertyId;
                }
                    this.property.propertyId++;
                    var propertyid = this.property.propertyId;
                    fd.append('propertyId',this.property.propertyId);
                    fd.append('propertyType',this.property.propertyType);
                    fd.append('propertyName',this.property.propertyName);
                    fd.append('bhk',this.property.bhk);
                    fd.append('facility',this.property.facility);
                    fd.append('addressLine1',this.property.addressLine1);
                    fd.append('area',this.property.area);
                    fd.append('city',this.property.city);
                    fd.append('pincode',this.property.pincode);
                    fd.append('rent',this.property.rent);
                    fd.append('mainImage',this.selectedFile,this.selectedFile.name);
                    fd.append('status',this.property.status);
                    fd.append('userId',this.property.userId);
                    property.addproperty(fd).then(doc=>{

                          propertyImages.getallimages().then(doc=>{
                            for(let i=0;i<doc.data.length;i++){
                              this.imageid = doc.data[i].propertyImageId;
                            }
                            this.imageid++;

                            for(let i=0;i<this.selectedFile1.length;i++){
                                const fd1 = new FormData();
                                fd1.append("propertyImageId",this.imageid);
                                fd1.append("propertyId",propertyid);
                                fd1.append("propertyImage",this.selectedFile1[i],this.selectedFile1[i].name);
                                propertyImages.addpropertyimages(fd1).then(doc=>{
                                  console.log(doc.data);
                                })
                                this.imageid++;
                            }
                          })
                          alert("Property Added");
                          this.flag = !this.flag;
                          this.sellarr.push(this.property);
                          this.property = {};
                    })
                })


         }
        },
        onpropertytype:function(event){
            this.property.propertyType = event.target.value;
        },
        onfacility:function(event){
            this.property.facility = event.target.value;
        },
        oncity:function(event){
            this.property.city = event.target.value;
        },
        onfile:function(event){
          this.imageflag = 1;
          this.selectedFile = event.target.files[0];
          this.property.mainImage = this.selectedFile.name;
        },
        onsubfile:function(event){
          this.selectedFile1.push(event.target.files[0]);
          document.getElementById("psub").value="";
          this.displayflag = true;
        },
        ondelete:function(name){
          for(let i=0;i<this.selectedFile1.length;i++){
              if(this.selectedFile1[i].name == name){
                this.selectedFile1.splice(i,1);
              }
          }
          if(this.selectedFile1.length == 0){
            this.displayflag = false;
          }
        }

    }
}
</script>

<style scoped>
    .footer {
            padding: 3px;
            text-align: center;
            background-color: #333;
            color: white;
            bottom:0;
            width:100%;
        }

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
            .main-log-section{
                width:400px;
            }
        }


		  .img1{
               width:300px;height:200px;transition:1s;
            }


        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
                padding: 3px 3px;

            }
			    .main-log-section{
                width:350px;
            }
        }
        .card{
                width:270px;
				margin-left:50px;
            }
			  .img1{
                width:270px;
            }

        table {
            font-family: arial, sans-serif;
            width: 90%;
            margin-left:25px;
            border:1px solid black;
            border-radius:50px;
          }

        td, th {
          border: 0px solid #dddddd;
          text-align: left;
          padding: 8px;
          text-align: center;
        }

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            max-width:auto;
            text-align: center;
            font-family: arial;
            margin-top:50px;
            float: left;
            margin-left:50px;
        }
        .title {
        color: grey;
        font-size: 18px;
        }

        .button1 {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        }


        .button1:hover, a:hover {
        opacity: 0.7;
        }

        .card img:hover{
            transform:scale(0.8);
        }

        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }



</style>
