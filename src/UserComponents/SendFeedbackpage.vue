<template>
<div>
  <menu1></menu1>
    <h1>&nbsp;&nbsp;&nbsp;Send us your feedback !</h1>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do you have any suggestion or found some bug ? let us know in the field
        below.</p>

    <div class="row">
        <div class="main">
            <form @submit.prevent="onadd">

                    <label for="uname" style="margin-left: 20px;"><b>&nbsp;Your Experience <sup
                                style="color: red;">*</sup> :
                            &nbsp;</b></label>

                    <input @click="onradio" id="1" name="r1" type="radio" value="poor">&nbsp;Poor&nbsp;
                    <input @click="onradio" id="2" name="r1" type="radio" value="Good">&nbsp;Good&nbsp;
                    <input @click="onradio" id="3" name="r1" type="radio" value="Best">&nbsp;Best&nbsp;
                    <div id="experr" class="error-message"></div>

                    <br>
                    <br>


                    <label for="psw" style="margin-left: 20px;"><b>&nbsp;Comment<sup style="color: red;">*</sup>
                            :</b></label>

                    <br>
                    <br>

                    <textarea @input="oncomment" v-model="feedback.comment" name="txtcmt" class="login-input" placeholder="Enter Your Comment" id="comment" cols="30"
                        rows="5"></textarea>

                    <button type="submit" class="button-log" style="background-color: #3377ff;" :disabled="flag">Send</button>
                    <br>
                    <span v-if="flag" style="font-size:15px;color:red;margin-left:15px;">You have to do login *</span>
              </form>
        </div>

    </div>

    <div class="footer">
        <p>Email us : realestate@gamil.com <br>
            Call us : 9426085781 <br>
            All Copyrights are reserved | Terms of Use Privacy</p>
    </div>

</div>
</template>

<script>
import feedback from '../services/feedbackService'
export default {
  data:function(){
    return{
      flag:true,
      feedback:{
        feedbackId:'',
        userId:'',
        experience:'',
        comment:''
      },
    }
  },
  created(){
    if(localStorage.getItem("userId")!=null){
      this.feedback.userId = localStorage.getItem("userId");
      this.flag = false;
    }
    else{
      this.flag = true;
    }
  },
  methods:{
    onadd:function(){
        if(this.feedback.experience == ""){
          document.getElementById("experr").innerHTML="* required";
        }
        else if(this.feedback.comment == ""){
          document.getElementById("comment").style = "border-color:red";
        }
        else{
            feedback.getallfeedback().then(doc=>{
              for(let i=0;i<doc.data.length;i++){
                this.feedback.feedbackId = doc.data[i].feedbackId;
              }
              this.feedback.feedbackId++;
              feedback.addfeedback(this.feedback).then(doc=>{
                alert("Feedback Received");
              })
              this.feedback = {};
              document.getElementById("1").checked = false;
              document.getElementById("2").checked = false;
              document.getElementById("3").checked = false;
            })
        }
    },

    onradio:function(event){
      this.feedback.experience = event.target.value;
      document.getElementById("experr").innerHTML = "";
    },

    oncomment:function(){
      document.getElementById("comment").style = "border-color:lightgrey;"
    }
  }
}
</script>

<style lang="scss" scoped>
       .row {
            display: -ms-flexbox;
            /* IE10 */
            display: flex;
            -ms-flex-wrap: wrap;
            /* IE10 */
            flex-wrap: wrap;
        }

        /* Create two unequal columns that sits next to each other */
        /* Sidebar/left column */
        .side {
            -ms-flex: 30%;
            /* IE10 */
            flex: 30%;
            background-color: #f1f1f1;
            padding: 20px;
        }

        /* Main column */
        .main {
            -ms-flex: 70%;
            /* IE10 */
            flex: 70%;
            background-color: white;
            padding: 20px;
        }

        /* Fake image, just for this example */
        .fakeimg {
            background-image: url("../assets/images/mapp.png");
            background-size: cover;
            width: 100%;
            padding: 20px;
        }


        .footer {
            padding: 3px;
            text-align: center;
            background-color: #333;
            color: white;
        }

        .container {
            display: flex;
            height: 500;
            width: auto;
        }

        .item {
            width: auto;
            padding: 15px;
        }

		.button-log
		{
			height : 30px;
			width : 100px;
			text-align: center;
			padding : 0px;
		}

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
            p{
                font-size:13px;
            }
            h1{
                font-size:15px;
            }
        }

        @media screen and (min-width: 700px) {
            .footer {
                margin-top: 75px;
            }

        }

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
                padding: 3px 3px;
            }
        }
.error-message {
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}
</style>
