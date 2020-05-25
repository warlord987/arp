<template>
  <div>
      <!-- <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="12">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="combo"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row> -->
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="10">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Total Work done</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="pieChart"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="10">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Expected vs actual hours</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <mdb-card-text>
                  <div id="negativeBar"></div>
                </mdb-card-text>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="10">
          <mdb-card>
            <mdb-card-body >
              <mdb-card-title>Work done through out the year</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="timeLine"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mdbRow, mdbCol, mdbCard, mdbCardTitle, mdbCardBody, mdbCardText } from 'mdbvue';
import ApexCharts from 'apexcharts'
import moment from 'moment';
import { mapState } from 'vuex'


export default Vue.extend({
  name: "result",
  props: {
    msg: String
  },
  data: function () {
    return {
      barDatasets: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
      barOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      selectedRole: "",
      selectedType: "",
      selectedTasks: []
    }
  },
  components: {
		mdbRow,
		mdbCol,
		mdbCard,
		mdbCardBody,
    mdbCardText,
    mdbCardTitle
  },
  computed: {
      ...mapState({
          state: state => state,
      })
  },
  methods:{
    comboCharts() {
        const options = {
            series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
          }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          }],
            chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'Traffic Sources'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            title: {
              text: 'Website Blog',
            },  
          }, {
            opposite: true,
            title: {
              text: 'Social Media'
            }
          }]
        };
        const chart = new ApexCharts(document.querySelector("#combo"), options);
        chart.render();
    },
    timeLine() {
      const options = {
          series: [
          {
            data: [
              {
                x: 'Term 1',
                y: [
                  new Date('2020-02-03').getTime(),
                  new Date('2020-04-09').getTime()
                ],
                fillColor: '#008FFB'
              },
              {
                x: 'Term 2',
                y: [
                  new Date('2020-04-27').getTime(),
                  new Date('2020-07-03').getTime()
                ],
                fillColor: '#00E396'
              },
              {
                x: 'Term 3',
                y: [
                  new Date('2020-07-20').getTime(),
                  new Date('2020-09-25').getTime()
                ],
                fillColor: '#775DD0'
              },
              {
                x: 'Term 4',
                y: [
                  new Date('2020-10-12').getTime(),
                  new Date('2020-12-18').getTime()
                ],
                fillColor: '#FEB019'
              }
            ]
          }
        ],
          chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val, opts) {
            const label = opts.w.globals.labels[opts.dataPointIndex]
            const a = moment(val[0])
            const b = moment(val[1])
            const diff = b.diff(a, 'days')
            return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
          },
          style: {
            colors: ['#f3f4f5', '#fff']
          }
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          show: false
        },
        grid: {
          row: {
            colors: ['#f3f4f5', '#fff'],
            opacity: 1
          }
        }
        };
        const chart = new ApexCharts(document.querySelector("#timeLine"), options);
        chart.render();
    },
    pieChart () {
      const options = {
        series: this.selectedTasks.map(task => task.actualTime),
        labels: this.selectedTasks.map(task => task.name),
        chart: {
          width: 800,
          type: 'pie',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      const chart = new ApexCharts(document.querySelector("#pieChart"), options);
      chart.render();
    },
    negativeBar () {
      const options = {
          series: [{
          name: 'Expected hours',
          data: this.selectedTasks.map(task => -task.expectedHours),
        },
        {
          name: 'Actual Hours',
          data: this.selectedTasks.map(task => task.actualTime),
        }
        ],
          chart: {
          type: 'bar',
          height: 440,
          stacked: true
        },
        colors: ['#008FFB', '#FF4560'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: this.selectedTasks.map(task => -task.expectedHours).sort()[0],
          max: this.selectedTasks.map(task => task.actualTime).sort().reverse()[0],
          title: {
            text: 'Selected Tasks',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val)
            }
          }
        },
        title: {
          text: 'Expected vs actual hours'
        },
        xaxis: {
          categories: this.selectedTasks.map(task => task.name),
          title: {
            text: 'Total Calculated minutes/year'
          }
        },
        };

        const chart = new ApexCharts(document.querySelector("#negativeBar"), options);
        chart.render();
    },
    setMeta () {
      this.selectedRole = this.state.answers.role
      this.selectedType = this.state.answers.type
      this.state.answers.tasks.map((userEnteredTask) => {
        const existingTask = this.state[this.selectedRole]['type'][this.selectedType]['tasks'].find(existingTask => existingTask.name == userEnteredTask.name)
        existingTask.userEnterTime = userEnteredTask.timeValue
        this.selectedTasks.push(existingTask)
      })
    },
    calculateTheActualTime (element) {
      switch(element.time.unit){
        case 'minutes/child/week':
          return parseInt(element.time.value * this.state.answers.students + '')
        case 'minutes/child/day':
          return parseInt(element.time.value * this.state.answers.students + '')
        case 'minutes/child/year':
          return parseInt(element.time.value * this.state.answers.students + '')
        case 'minutes/week':
          return parseInt(element.time.value + '')
        case 'minutes/day':
          return parseInt(element.time.value + '')
        case 'hours/child/week':
          return parseInt((element.time.value * this.state.answers.students * 60)+'')
        case 'hours/child/year':
          return parseInt((element.time.value * this.state.answers.students * 60)+'')
        case 'hours/week':
          return parseInt((element.time.value * 60)+'')
        case 'hours/year':
          return parseInt((element.time.value * 60)+'')
        case 'hours/term':
          return parseInt((element.time.value * 60)+'')
        case 'hours/day':
          return parseInt((element.time.value * 60)+'')
      }
    },
    calculateTheExpectedTime (element) {
      switch(element.time.unit){
        case 'minutes/child/week':
          return element.userEnterTime
        case 'minutes/child/day':
          return element.userEnterTime
        case 'minutes/child/year':
          return element.userEnterTime
        case 'minutes/week':
          return element.userEnterTime
        case 'minutes/day':
          return element.userEnterTime
        case 'hours/child/week':
          return element.userEnterTime * 60
        case 'hours/child/year':
          return element.userEnterTime * 60
        case 'hours/week':
          return element.userEnterTime * 60
        case 'hours/year':
          return element.userEnterTime * 60
        case 'hours/term':
          return element.userEnterTime * 60
        case 'hours/day':
          return element.userEnterTime * 60
      }
    },
    calculateTotalHours () {
      for (let index = 0; index < this.selectedTasks.length; index++) {
        this.selectedTasks[index].actualTime = this.calculateTheActualTime(this.selectedTasks[index])
        this.selectedTasks[index].expectedHours = this.calculateTheExpectedTime(this.selectedTasks[index])
      }
    }
  },
  mounted() {
    this.setMeta()
    this.calculateTotalHours()
    this.comboCharts()
    this.pieChart()
    this.timeLine()
    this.negativeBar()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
