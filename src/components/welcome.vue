<template>
  <div class="welcome">
    <div class="mainText">
      <div class="landingText">
        <div>
          Are you Being paid right?
        </div>
        <div>
          <mdb-btn gradient="blue" rounded>
            <router-link class="link" to="/info">Get Started</router-link>
          </mdb-btn>
        </div>
      </div>
    </div>
    <div class="line"><div id="line" class="line--inner"></div></div>
    <div class="footer">
      <div class="aboutLink" style="transform: translateY(0%);">
        <div class="dash"></div>
        <span class="outer">
          <span>About</span>
        </span>
      </div>
      footer
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mdbBtn } from "mdbvue";

export default Vue.extend({
  name: "welcome",
  props: {
    msg: String
  },
  components: {
    mdbBtn
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#texture {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: opacity 1s cubic-bezier(0.28, 0, 0.18, 1);
  transition: opacity 1s cubic-bezier(0.28, 0, 0.18, 1);
}
.aboutLink {
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  text-decoration: none;
  color: #fff;
  padding-left: 2.5vw;
  z-index: 100;
  cursor: pointer;
  text-indent: 0.16667vw;
}
.dash {
  width: 2vw;
  position: absolute;
  left: 0;
  display: block;
  top: 0;
  height: 100%;
  overflow: hidden;
  color: white;
}
.dash:after {
  content: "";
  width: 100%;
  height: 1px;
  background: #fff;
  position: absolute;
  left: 13px;
  top: 50%;
  cursor: pointer;
  opacity: 1 !important;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: background 0.5s cubic-bezier(1, 0, 0, 1) 0s,
    opacity 0s cubic-bezier(1, 0, 0, 1) 0s,
    -webkit-transform 0s cubic-bezier(1, 0, 0, 1) 0s;
  transition: background 0.5s cubic-bezier(1, 0, 0, 1) 0s,
    opacity 0s cubic-bezier(1, 0, 0, 1) 0s,
    -webkit-transform 0s cubic-bezier(1, 0, 0, 1) 0s;
  transition: background 0.5s cubic-bezier(1, 0, 0, 1) 0s,
    opacity 0s cubic-bezier(1, 0, 0, 1) 0s,
    transform 0s cubic-bezier(1, 0, 0, 1) 0s;
  transition: background 0.5s cubic-bezier(1, 0, 0, 1) 0s,
    opacity 0s cubic-bezier(1, 0, 0, 1) 0s,
    transform 0s cubic-bezier(1, 0, 0, 1) 0s,
    -webkit-transform 0s cubic-bezier(1, 0, 0, 1) 0s;
}
span.outer {
  visibility: visible;
  cursor: pointer;
  opacity: 1 !important;
}
.mainText {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  -webkit-transition: opacity 1s cubic-bezier(0.28, 0, 0.18, 1) 1s;
  transition: opacity 1s cubic-bezier(0.28, 0, 0.18, 1) 1s;
  color: white;
}
.landingText {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  color: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateY(calc(-50% - 28px)) translateX(-50%);
  transform: translateY(calc(-50% - 28px)) translateX(-50%);
}
.footer {
  position: fixed;
  max-width: 1864px;
  width: calc(100% - 60px);
  margin: 30px auto;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 100000;
  font-family: Norwester, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 12px;
  color: white;
}
.line {
  position: fixed;
  right: 0;
  bottom: 70px;
  left: 0;
  max-width: 1864px;
  width: calc(100% - 60px);
  height: 3px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
}
.line--inner {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  opacity: 1;
  transform: translateX(0%);
}
.link {
  display: block;
  font-family: Norwester;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 3px;
}
.link a {
  padding-bottom: 4px;
}
.link:after {
  content: "∫";
  position: absolute;
  top: 0;
  right: 100%;
  display: block;
  width: 0;
  overflow: hidden;
  -webkit-transition: all 0.32s cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.32s cubic-bezier(0.86, 0, 0.07, 1);
  -webkit-transition-delay: 0;
  transition-delay: 0;
  pointer-events: none;
  font-weight: 100;
}
</style>
