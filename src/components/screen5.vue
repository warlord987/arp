<template>
  <mdb-row class="justify-content-md-center align-items-center">
    <mdb-col sm="12">
      <mdb-card wide class="center">
        <mdb-view gradient="peach" cascade>
          <h2 class="card-header-title mb-3 font24">How many students do you teach for the tasks?</h2>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-text class="font21">
              <mdb-input v-model="noOfStudnets" style="margin: 0px;" type="number" :min="1" outline/>
          </mdb-card-text>
          <a class="orange-text mt-1 d-flex">
            <h5 class="p-2" waves v-on:click="showPrevious"><mdb-icon icon="angle-double-left" />Previous</h5>
            <div class="col-9"></div>
            <h5 class="p-2" waves v-on:click="showNext">Next <mdb-icon icon="angle-double-right" /></h5>
          </a>
        </mdb-card-body>
      </mdb-card>
    </mdb-col>
  </mdb-row>
</template>

<script lang="ts">
import Vue from "vue";
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardText, mdbView, mdbIcon, mdbInput } from 'mdbvue';
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: "screen1",
  components: {
		mdbRow,
		mdbCol,
		mdbCard,
		mdbCardBody,
		mdbCardText,
		mdbView,
		mdbIcon,
    mdbInput
  },
  methods: {
    ...mapActions(['setStudents']),
    showPrevious(){
      this.$emit('previous')
    },
    showNext () {
      this.setStudents(this.noOfStudnets)
      this.$emit('next')
    }
  },
  computed: {
      ...mapState({
          state: state => state,
      })
  },
  data () {
    return {
      noOfStudnets: 1
    }
  }
});
</script>