<template>
  <div @touchstart="touchStartMethod" @touchEndMethod="touchEndMethod">
    <v-sheet rounded="lg" class="pa-4 my-2 mx-4" >
      <v-row>
        <v-col class="d-flex align-center">
          <h2 class="flex">SITE INFO</h2>
          
          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'site',
              params:{
                siteId: site.swipe_left_goto_site
              }
            }"
            @click="this.initialize"
            :disabled="site.swipe_left_goto_site == null"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'site',
              params:{
                siteId: site.swipe_right_goto_site
              }
            }"
            @click="this.initialize"
            :disabled="site.swipe_right_goto_site == null"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'site',
              params:{
                siteId: site.swipe_up_goto_site
              }
            }"
            @click="this.initialize"
            :disabled="site.swipe_up_goto_site == null"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'site',
              params:{
                siteId: site.swipe_down_goto_site
              }
            }"
            @click="this.initialize"
            :disabled="site.swipe_down_goto_site == null"
          >
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'object',
              params:{
                objectId: site.click_goto_object
              }
            }"
            @click="this.initialize"
            :disabled="site.click_goto_object == null"
          >
            <v-icon>mdi-arrow-down-bold-box-outline</v-icon>
          </v-btn>
        </v-col>
        
      </v-row>
    </v-sheet>
    <v-sheet rounded="lg" class="pa-4 my-2 mx-4" >
      <v-row>
                
        <v-col md="8" cols="12" max-height="600px">
          <v-img
            :src="`https://storage.googleapis.com/${site.site_url}`"
            aspect-ratio="1"
            max-height="600px"
          >
          </v-img>
        </v-col>
        <v-col md="4" cols="12">
          <!-- <h4>id: {{site.id}}</h4>
          <h4>type: {{site.type}}</h4> -->
          <p class="mb-0">
            <span v-for="(value, name) in site" v-if="value">
              <div v-if="name!= 'swipe_left_goto_site' 
                      && name!= 'swipe_right_goto_site'
                      && name!= 'swipe_down_goto_site'
                      && name!= 'swipe_up_goto_site'
                      && name!= 'click_goto_object'
                      && name!= 'site_url'">
                <b>{{ name }}</b>: {{ value }} <br>
              </div>
            </span>
          </p>
        </v-col>
      </v-row>
    </v-sheet>
    

  </div>
</template>

<script>
import SiteService from '@/services/SiteService'
// import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      site:{},
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    };
  },
  created () {
    this.$loading(true)
    this.initialize()
    this.$loading(false)
  },
  watch: {
   
  },
  methods: {
    async initialize () {
      const siteId = this.$store.state.route.params.siteId
      this.site = (await SiteService.getById(siteId)).data
    },

    gotoUrl(){

    },

    touchStartMethod (touchEvent) {
      if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      const posYStart = touchEvent.changedTouches[0].clientY;
      addEventListener('touchend', (touchEvent) => this.touchEndMethod(touchEvent, posXStart, posYStart), {once: true});
    },
    touchEndMethod (touchEvent, posXStart, posYStart) {
      if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      const posYEnd = touchEvent.changedTouches[0].clientY;

      // right and left
      if(Math.abs(posXStart-posXEnd) > Math.abs(posYStart-posYEnd)){
        if (posXStart < posXEnd) {
          // console.log("right")
          this.$router.push({ name: 'site', params: { siteId: this.site.swipe_right_goto_site } })
        } else if (posXStart > posXEnd) {
          // console.log("left")
          this.$router.push({ name: 'site', params: { siteId: this.site.swipe_left_goto_site } })
        }
      }
      
      // else{
      //   if (posYStart < posYEnd) {
      //     console.log("down")
      //     this.$router.push({ name: 'site', params: { siteId: this.site.swipe_right_goto_site } })
      //   } else if (posYStart > posYEnd) {
      //     console.log("up")
      //     this.$router.push({ name: 'site', params: { siteId: this.site.swipe_left_goto_site } })
      //   }
      // }
      
      this.initialize()
    }
    
  },
};
</script>
<style>
button.v-btn[disabled] {
  opacity: 0.6;
}
</style>