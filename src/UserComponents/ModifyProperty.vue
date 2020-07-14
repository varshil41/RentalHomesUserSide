<template>
<div>
  <menu1></menu1>
     <form @submit.prevent="onupdateproperty">
        <section class="main-log-section">
            <header>
                <h1 style="text-align: center;">Modify Property </h1>
            </header>

            <label for="pname" style="margin-left: 24px;"><b>&nbsp;Property Name</b></label>

            <input v-model="property.propertyName" class="login-input" id="pname" type="text" placeholder="Enter Property Name" name="pname" autocomplete="off">

            <label for="uname" style="margin-left: 24px;"><b>&nbsp;Property Type</b></label>

            <select class="login-input" placeholder="Select Type" name="ptype" @change="onpropertytype">
                <option id="bunglow" value="Bunglow">Bunglow</option>
                <option id="flat" value="Flat">Flat</option>
                <option id="tenament" value="Tenament">Tenament</option>
            </select>

            <label for="pbhk" style="margin-left: 24px;"><b>&nbsp;BHK</b></label>

            <input v-model="property.bhk" class="login-input" id="pbhk" type="text" placeholder="Enter e.g(3-BHK)" name="pbhk" autocomplete="off">

            <label for="pfacility" style="margin-left: 24px;"><b>&nbsp;Facility</b></label>

            <select class="login-input" placeholder="Select Type" name="pfacility" @change="onfacility">
                <option id="full" value="Full-furnished">Full Furnished</option>
                <option id="semi" value="Semi-furnished">Semi Furnished</option>
                <option id="none" value="None-furnished">No Furnished</option>
            </select>

            <label for="paddress1" style="margin-left: 24px;"><b>&nbsp;AddressLine1</b></label>

            <input v-model="property.addressLine1" id="paddress1" class="login-input" type="text" placeholder="Enter address" name="paddress1" autocomplete="off">


            <label for="parea" style="margin-left: 24px;"><b>&nbsp;Area</b></label>

            <input id="parea" v-model="property.area" class="login-input" type="text" placeholder="Enter area" name="parea" autocomplete="off" >

            <label for="pcity" style="margin-left: 24px;"><b>&nbsp;City</b></label>

            <select class="login-input" placeholder="Select City" name="pcity" @change="oncity">
                <option id="ahmedabad" value="Ahmedabad">Ahmedabad</option>
                <option id="gandhinagar" value="Gandhinagar">Gandhinagar</option>
            </select>

            <label for="pcode" style="margin-left: 24px;"><b>&nbsp;Pincode</b></label>

            <input id="pcode" v-model="property.pincode" class="login-input" type="number" placeholder="Enter pincode" name="pcode">

            <label for="prent" style="margin-left: 24px;"><b>&nbsp;Rent(per month)</b></label>

            <input id="prent" v-model="property.rent" class="login-input" type="number" placeholder="Enter rent" name="prent">

            <label for="pmain" style="margin-left: 24px;"><b>&nbsp;Main Property Image</b></label>
            <br>
            <input v-if="!showpicflag" id="pmain" @change="onfile" type="file" class="login-input" name="pmain">
            <img v-if="showpicflag" v-bind:src="'http://localhost:3000/images/propertyImage/' + property.mainImage" style="height:50px;width:50px;border-radius:50px;margin-left:30px;margin-top:10px;">
            <br>
            <button v-if="showpicflag" type="button" @click="onclick" style="margin-left:26px;border-radius:20px;">Change Profile</button>
            <br>
            <br>
<!--             <label for="psub" style="margin-left: 24px;"><b>&nbsp;Sub Property Image</b></label>


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
 -->            <button type="submit" class="button-log">Modify Property</button>


        </section>

    </form>

</div>
</template>

<script>
import property from '../services/propertyService'
export default {
    data:function(){
      return{
        property:{},
        showpicflag:true,
        selectedFile:File,
        imageflag:0,
        updateflag:0
      }
    },
    created(){
      property.getpropertybyid(this.$route.params.propertyId).then(doc=>{
        this.property = doc.data[0];

        if(this.property.propertyType == "Bunglow"){
            document.getElementById("bunglow").selected = true;
        }
        else if(this.property.propertyType == "Flat"){
            document.getElementById("flat").selected = true;
        }
        else if(this.property.propertyType == "Tenament"){
            document.getElementById("tenament").selected = true;
        }

        if(this.property.facility == "Full-furnished"){
            document.getElementById("full").selected = true;
        }
        else if(this.property.facility == "Semi-furnished"){
            document.getElementById("semi").selected = true;
        }
        else if(this.property.facility == "None-furnished"){
            document.getElementById("none").selected = true;
        }

        if(this.property.city == "Ahmedabad"){
            document.getElementById("ahmedabad").selected = true;
        }
        else if(this.property.city == "Gandhinagar"){
            document.getElementById("gandhinagar").selected = true;
        }


      })
    },
    methods:{
      onupdateproperty:function(){
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

            /* else if(this.selectedFile1.length == 0){
                document.getElementById("psub").focus();
            } */
            else{
            const fd = new FormData();
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
                    if(this.updateflag == 1){
                    fd.append('mainImage',this.selectedFile,this.selectedFile.name);
                    }
                    fd.append('status',this.property.status);
                    fd.append('userId',this.property.userId);
                    fd.append('flag',this.updateflag);

                if(this.updateflag == 1){
                property.deletefile(this.property.mainImage).then(doc=>{})
                }
                property.updateproperty(fd).then(doc=>{
                   alert("Modify SuccessFully")
                   this.$router.push({path:"/addproperty"});
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
      onclick:function(){
          this.showpicflag = false;
      },
      onfile:function(event){
          this.selectedFile = event.target.files[0];
          this.imageflag = 1;
          this.updateflag = 1;
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

</style>
