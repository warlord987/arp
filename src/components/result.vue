<template>
  <div>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
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
      </mdb-row>
      <mdb-row style="margin-top: 10px;" class="justify-content-md-center align-items-center">
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <hr/>
              <mdb-card-text>
                <div id="pieChart"></div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
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
              <mdb-card-title>Card title</mdb-card-title>
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
      }
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
                x: 'Task A',
                y: [
                  new Date('2019-02-27').getTime(),
                  new Date('2019-03-04').getTime()
                ],
                fillColor: '#008FFB'
              },
              {
                x: 'Task B',
                y: [
                  new Date('2019-03-04').getTime(),
                  new Date('2019-03-08').getTime()
                ],
                fillColor: '#00E396'
              },
              {
                x: 'Task C',
                y: [
                  new Date('2019-03-07').getTime(),
                  new Date('2019-03-10').getTime()
                ],
                fillColor: '#775DD0'
              },
              {
                x: 'Task D',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-12').getTime()
                ],
                fillColor: '#FEB019'
              },
              {
                x: 'Task E',
                y: [
                  new Date('2019-03-12').getTime(),
                  new Date('2019-03-17').getTime()
                ],
                fillColor: '#FF4560'
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
        series: [44, 55, 13, 43, 22],
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Task A', 'Task B', 'Task C', 'Task D', 'Task E'],
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
          data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
            3.9, 3.5, 3
          ]
        },
        {
          name: 'Actual Hours',
          data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
            -4.1, -4, -4.1, -3.4, -3.1, -2.8
          ]
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
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
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
              return Math.abs(val) + "%"
            }
          }
        },
        title: {
          text: 'Expected vs actual hours'
        },
        xaxis: {
          categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
          ],
          title: {
            text: 'Percent'
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%"
            }
          }
        },
        };

        const chart = new ApexCharts(document.querySelector("#negativeBar"), options);
        chart.render();
    }
  },
  mounted() {
    this.comboCharts()
    this.pieChart()
    this.timeLine()
    this.negativeBar()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
