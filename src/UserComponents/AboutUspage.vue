<template>
<div>
  <menu1></menu1>
    <div class="row">
        <div class="main">
            <h1>About Us Page</h1>
            <p>We are one of the leading real estate broker in Ahmdebad since 2005.
                <br> Our main goal is to set meeting
                between two right person at right time so everyone can achieve there goals and get what
                they want. </p>

            <br>
            <h2>Our Team</h2>
            <div class="row-mt">
                <div class="column">
                    <img src="../assets/images/broker.png" alt="shrey" width=" 200px" height="200px">
                    <h2>Shrey Patel</h2>
                    <p class="title">CEO & Founder</p>
                    <p>shrey1998@gmail.com</p>
                </div>

                <div class="column">
                    <img src="../assets/images/broker.png" alt="varshil" width=" 200px" height="200px">
                    <div class="container">
                        <h2>Varshil Shah</h2>
                        <p class="title">Partner</p>
                        <p>varshil@gmail.com</p>
                    </div>
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

        .row-mt {
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

        .item {
            width: auto;
            padding: 15px;
        }

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }

            .row-mt {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                margin-left: 10px;
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
