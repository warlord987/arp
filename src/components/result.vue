<template>
  <div>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="12">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>NQS chart for actual values</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="combo"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Total Actual Work spread</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="actualWork"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Total Expected Work spread</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="pieChart"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="12">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Expected vs actual minutes</mdb-card-title>
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
        <mdb-col sm="12">
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
  methods: {
    
    comboCharts() {
        const result = new Array(this.selectedTasks.length).fill(null).map(() => ({
            name: "",
            data: new Array(7).fill(0)
          }));
        for (let index = 1; index <= 7; index++) {
          for (let taskIndex = 0; taskIndex < this.selectedTasks.length; taskIndex++) {
            const element = this.selectedTasks[taskIndex];
            result[taskIndex].name = element.name
            if(element.nqs == index){
              result[taskIndex].data[index-1] = element.actualTime
            }
          }
        }

        const options = {
          series: [
              ...result
            ],
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            type: 'categories',
            categories: [1,2,3,4,5,6,7],
          },
          fill: {
            opacity: 1
          }
        };
        const chart = new ApexCharts(document.querySelector("#combo"), options);
        chart.render();
    },
    timeLine() {
      const term1 = {
        x: 'Term 1',
        y: [
          new Date('2020-02-03').getTime(),
          new Date('2020-04-09').getTime()
        ],
        fillColor: '#008FFB'
      }
      const term2 = {
        x: 'Term 2',
        y: [
          new Date('2020-04-27').getTime(),
          new Date('2020-07-03').getTime()
        ],
        fillColor: '#00E396'
      }
      const term3 = {
        x: 'Term 3',
        y: [
          new Date('2020-07-20').getTime(),
          new Date('2020-09-25').getTime()
        ],
        fillColor: '#775DD0'
      }
      const term4 = {
        x: 'Term 4',
        y: [
          new Date('2020-10-12').getTime(),
          new Date('2020-12-18').getTime()
        ],
        fillColor: '#FEB019'
      }
      const options = {
          series: [
            {
              data: []
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
        let onlyOneTerm = true
        this.selectedTasks.map(task => {
          if(task.term != '4') {
            onlyOneTerm = false
          }
        })
        if(onlyOneTerm) {
            options.series[0].data.push(term4)
          } else {
            options.series[0].data.push(term1)
            options.series[0].data.push(term2)
            options.series[0].data.push(term3)
            options.series[0].data.push(term4)
          }
        const chart = new ApexCharts(document.querySelector("#timeLine"), options);
        chart.render();
    },
    actualWork () {
      const options = {
        series: this.selectedTasks.map(task => task.actualTime),
        labels: this.selectedTasks.map(task => task.name),
        chart: {
          width: 550,
          type: 'pie',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      const chart = new ApexCharts(document.querySelector("#actualWork"), options);
      chart.render();
    },
    expectedWork () {
      const options = {
        series: this.selectedTasks.map(task => parseInt(task.expectedHours+'')),
        labels: this.selectedTasks.map(task => task.name),
        chart: {
          width: 550,
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
          name: 'Expected minutes',
          data: this.selectedTasks.map(task => -task.expectedHours),
        },
        {
          name: 'Actual minutes',
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
          min: this.selectedTasks.map(task => -task.expectedHours).sort(function(a, b){return a - b})[0],
          max: this.selectedTasks.map(task => task.actualTime).sort(function(a, b){return a - b}).reverse()[0],
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
    this.actualWork()
    this.expectedWork()
    this.timeLine()
    this.negativeBar()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
