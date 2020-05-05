<template>
  <mdb-container>
    <result />
  </mdb-container>
</template>

<script>
// @ is an alias to /src
import result from "@/components/result.vue";
import { mdbContainer } from 'mdbvue';

export default {
  name: "Home",
  components: {
    mdbContainer,
    result
  }
};
</script>
