<template>
    <div class="mt-16">
      <div class="background mb-10">
        <!-- <div class="font1 text-center" style="font-size: 80px;">{{status_code}}</div -->
        <div class="text-center">
            <img src="images/jlogo.webp" style="border-radius: 10px;height: 230px"/>
        </div>
      </div>
      <div style="text-align: center;" class="font2 mb-5">
        WELCOME TO JIM's ARCHIVE!
      </div>

      <div style="font-size: 20px;text-align: center;">
        Learn how to install softwares, packages and frameworks.<br />
        Create your dream project today!<br/>

          <v-btn class="mt-10 blue white--text" @click="$emit('open')">START</v-btn>
      </div>

    </div>

  </template>
  <script>
    	//Error.vue script
	export default {
	  data: () => ({
	   
	  }),

	 
	};
	
  </script>
  <style scoped>
    	/* Error.vue style */

	.font2{
	  font-family: TitanOne;
	  font-size: 30px;
	  color: white;
	  text-shadow:1px 1px 7px black;
      font-weight: bold;
	}
	.background{
	  background-position: center center;
	  background-size: contain;
	}
  </style>