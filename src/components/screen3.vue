<template>
  <mdb-row class="justify-content-md-center align-items-center">
    <mdb-col sm="12">
      <mdb-card wide class="center">
        <mdb-view gradient="peach" cascade>
          <h2 class="card-header-title mb-3 font24">Select the tasks you do in this role?</h2>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-text class="font21">
            <mdb-card-text>
              From the list below please un-select all the tasks you dont perform in the role.
            </mdb-card-text>
              <mdb-list-group>
                <mdb-list-group-item action v-for="task in tasksToShow" :key="task.name" :active="selectedTask[task.name]">
                  <div class="text-left col" v-on:click="selectTask(task.name, task.time.value)" >{{task.name}}</div>
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
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardText, mdbView, mdbIcon, mdbListGroup, mdbListGroupItem } from 'mdbvue';

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
    mdbListGroupItem
  },
  methods: {
    ...mapActions(['setSelectedTasks']),
    showPrevious(){
      this.$emit('previous')
    },
    showNext () {
      if(this.tasks.length > 0){
        this.setSelectedTasks(this.tasks)
        this.$emit('next')
      } else {
        this.$toasted.show('Please select atleast one task to proceed').goAway(1500)
      }
    },
    selectTask (task, value) {
      if(!this.selectedTask[task]){
        this.selectedTask[task] = true
        this.$forceUpdate();
        this.tasks.push({
          name: task,
          timeValue: value,
          unit: this.taskUnit[task]
        })
      } else {
        this.selectedTask[task] = false
        this.$forceUpdate();
        const taskToRemove = this.tasks.map((task) => task.name).indexOf(task)
        this.tasks.splice(taskToRemove, 1)
      }
      console.log(this.tasks)
    }
  },
  data () {
    return {
      tasks: [],
      selectedTask: {},
      tasksToShow: [],
      taskUnit: {}
    }
  },
  computed: {
      ...mapState({
          state: state => state,
      })
  },
  mounted() {
    this.tasksToShow = this.state[this.state.answers.role]['type'][this.state.answers.type]['tasks']
    this.tasksToShow.map(task => {
      this.selectedTask[task.name] = false
      this.selectTask(task.name, task.time.value)
      this.taskUnit[task.name] = task.time.unit
    })
  }
});
</script>