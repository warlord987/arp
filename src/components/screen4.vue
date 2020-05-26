<template>
  <mdb-row class="justify-content-md-center align-items-center">
    <mdb-col sm="7">
      <mdb-card wide class="center">
        <mdb-view gradient="peach" cascade>
          <h2 class="card-header-title mb-3 font24">How much time do u spend on the tasks?</h2>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-text class="font21">
            <mdb-card-text>
              From the list below please the no:of hours you spend for every task.
            </mdb-card-text>
              <mdb-list-group>
                <mdb-list-group-item tag="a" href="#" v-for="task in tasks" :key="task.name">
                    <div class="col-8 text-left">{{task.name}}</div>
                    <div class="col-4">
                      <span>
                        <mdb-input class="col-12" v-model="task.timeValue"  style="margin: 0px; padding: 0px" type="number" :min="0" outline/>&nbsp;{{task.unit}}
                      </span>
                    </div>
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
import { mapState, mapActions } from 'vuex'
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardText, mdbView, mdbIcon, mdbListGroup, mdbListGroupItem, mdbInput } from 'mdbvue';

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
    ...mapActions(['setSelectedTasks']),
    showPrevious(){
      this.$emit('previous')
    },
    showNext () {
      this.setSelectedTasks(this.tasks)
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
      tasks: []
    }
  },
  mounted(){
    this.tasks = this.state['answers']['tasks']
  }
});
</script>