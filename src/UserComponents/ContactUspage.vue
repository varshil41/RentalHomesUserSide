<template>
<div>
  <menu1></menu1>
   <div class="row">
        <div class="main">
            <h1>Contact Us</h1>
            <div class="container">
                <div class="item">
                    <div class="fakeimg">Image</div>
                </div>
                <div class="item">
                    <b>For More Details contact us on</b>
                    <p>Shrey Patel : 8401529943</p>
                    <p>Varshil Shah : 9426085174</p>
                    <br>
                    <b>Or Email us on</b>
                    <p>realestate@gamil.com</p>
                </div>
            </div>
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
export default {

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
            height: 400px; width: 800px;
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

        /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 800px) {
            .row {
                flex-direction: column;
            }
            .item{
                font-size:15px;
            }
            .footer{
                font-size:15px;
            }
            h1{
                font-size:15px;
                margin-left:10px;
            }
            .fakeimg{
                width:300px;
                height:200px;
            }
        }

        /* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
                padding: 3px 3px;
            }
            .fakeimg
            {
                height: 100px;
                width: 100px;
            }
        }
</style>
