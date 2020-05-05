<template>
  <mdb-row class="justify-content-md-center align-items-center">
    <mdb-col sm="7">
      <mdb-card wide class="center">
        <mdb-view gradient="peach" cascade>
          <h2 class="card-header-title mb-3">Select are the tasks you do in this role and how much time do u spend on them indivisually?</h2>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</mdb-card-text>
          <a class="orange-text mt-1 d-flex">
            <h5 class="p-2" waves v-on:click="showPrevious"><mdb-icon icon="angle-double-left" />Previous</h5>
            <div class="col-7"></div>
            <h5 class="p-2" waves v-on:click="showNext">Next <mdb-icon icon="angle-double-right" /></h5>
          </a>
        </mdb-card-body>
      </mdb-card>
    </mdb-col>
  </mdb-row>
</template>

<script lang="ts">
import Vue from "vue";
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardText, mdbView, mdbIcon } from 'mdbvue';

export default Vue.extend({
  name: "screen1",
  components: {
		mdbRow,
		mdbCol,
		mdbCard,
		mdbCardBody,
		mdbCardText,
		mdbView,
		mdbIcon
  },
  methods: {
    showPrevious(){
      this.$emit('previous')
    },
    showNext () {
      this.$emit('next')
    }
  }
});
</script>