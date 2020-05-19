<template>
  <mdb-row class="justify-content-md-center align-items-center">
    <mdb-col sm="7">
      <mdb-card wide class="center">
        <mdb-view gradient="peach" cascade>
          <h2 class="card-header-title mb-3">Which term are u teaching?</h2>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-text>
            <mdb-card-text>
              Please enter the term you teach in.
            </mdb-card-text>
              <mdb-list-group>
                <mdb-list-group-item tag="a" href="#">
                    <div class="text-left">Please enter the term number</div>
                    <mdb-input style="margin: 0px;" type="number" :min="1" :max="4" outline/>
                </mdb-list-group-item>
              </mdb-list-group>
          </mdb-card-text>
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
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardText, mdbView, mdbIcon, mdbListGroup, mdbListGroupItem, mdbInput } from 'mdbvue';
import { mapState } from 'vuex'

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
    mdbListGroup,
    mdbListGroupItem,
    mdbInput
  },
  methods: {
    showPrevious(){
      this.$emit('previous')
    },
    showNext () {
      this.$emit('next')
    }
  },
  computed: {
      ...mapState({
          state: state => state,
      })
  },
});
</script>