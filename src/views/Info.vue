<template>
	<mdb-container>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false" mode="out-in">
      <screen1 v-if="nextPage == 0" @next="changeNextPage" @previous="previousPage"></screen1>
      <screen2 v-if="nextPage == 1" @next="changeNextPage" @previous="previousPage"></screen2>
      <screen3 v-if="nextPage == 2" @next="changeNextPage" @previous="previousPage"></screen3>
      <screen4 v-if="nextPage == 3" @next="changeNextPage" @previous="previousPage"></screen4>
      <screen5 v-if="nextPage == 4" @next="changeNextPage" @previous="previousPage"></screen5>
    </transition>
	</mdb-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mdbContainer } from 'mdbvue';
import screen1 from "@/components/screen1.vue";
import screen2 from "@/components/screen2.vue";
import screen3 from "@/components/screen3.vue";
import screen4 from "@/components/screen4.vue";
import screen5 from "@/components/screen5.vue";
import Velocity from 'velocity-animate'

export default Vue.extend({
  name: "info",
  data: function () {
    return {
      nextPage: 0
    }
  },
  components: {
    mdbContainer,
    screen1,
    screen2,
    screen3,
    screen4,
    screen5
  },
  methods: {
    changeNextPage() {
      if(this.nextPage < 4){
        this.nextPage++
      } else {
        this.$router.push({ path: 'about' })
      }
    },
    previousPage() {
      if(this.nextPage != 0){
        this.nextPage--
      } else {
        this.$router.push({ path: '/' })
      }
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 350 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
});
</script>

<style>
.row{
  height: 100%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.center{
  position: absolute;
  top: 200px
}
.card.card-cascade.wider .view.view-cascade {
    z-index: 2;
}
.card.card-cascade .view.view-cascade.gradient-card-header {
    padding: 1.6rem 1rem;
    color: #fff;
    text-align: center;
}
.card.card-cascade .view.view-cascade {
    border-radius: .25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
}
.view {
    position: relative;
    overflow: hidden;
    cursor: default;
}
.card.card-cascade.wider .card-body.card-body-cascade {
    z-index: 1;
    margin-right: 4%;
    margin-left: 4%;
    background: #fff;
    border-radius: 0 0 .25rem .25rem;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.card-body {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 0 !important;
}
.text-center {
    text-align: center !important;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
.card.card-cascade.wider {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
}
.card {
    font-weight: 400;
    border: 0;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: .25rem;
}
</style>