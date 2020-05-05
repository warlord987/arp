<template>
  <div class="home">
    <welcome msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from "@/components/welcome.vue";

export default {
  name: "Home",
  components: {
    welcome
  }
};
</script>
