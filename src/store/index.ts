import Vue from "vue";
import Vuex from "vuex";


const state = {
  "Teacher 4YO":{
    type: {
      Kindergarten: {
        tasks: [
          {
            name: "Assess development needs of children",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '2',
            principle: '3',
            nqs: '1',
            isContract: 'C'
          },
        {
            name: "Create the required plans to meet children's development needs",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
        {
            name: "Teach children",
            time: {
              value: '1',
              unit: 'hours/child/week',
              calUnit: 'hours'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '4',
            principle: '3',
            nqs: '5',
            isContract: 'C'
          },
        {
            name: "Create range of activities for improving children’s social and intellectual growth",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
        {
            name: "Write transition statement",
            time: {
              value: '1',
              unit: 'hours/child/year',
              calUnit: 'hours'
            },
            frequency: 'per_child_per_year',
            term: '4',
            practice: '',
            principle: '',
            nqs: '1',
            isContract: 'N'
          },
        {
            name: "Discuss transition statement with parent",
            time: {
              value: '15',
              unit: 'minutes/child/year',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_year',
            term: '4',
            practice: '',
            princip2le: '',
            nqs: '1',
            isContract: 'N'
          },
        {
            name: "Check hazard and risk to maintain a safe and comfortable environment",
            time: {
              value: '30',
              unit: 'minutes/week',
              calUnit: 'minutes'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '',
            nqs: '2',
            isContract: 'N'
          },
        {
            name: "Communicate with families (in person)",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'N'
          },
        {
            name: "Communicate with families (electronic)",
            time: {
              value: '30',
              unit: 'minutes/week',
              calUnit: 'minutes'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'N'
          },
        {
            name: "Document children's development including portfolios and individual progress records",
            time: {
              value: '10',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '8',
            principle: '',
            nqs: '1',
            isContract: 'N'
          },
        {
            name: "Review and plan according to the early childhood guidelines and curriculum",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '1',
            isContract: 'N'
          },
        {
            name: "Participate in professional development",
            time: {
              value: '20',
              unit: 'hours/year',
              calUnit: 'hours'
            },
            frequency: 'per_year',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '7',
            isContract: 'N'
          }
        ]
      },
      ELC: {
        tasks: [
          {
            name: "Assess development needs of children",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '2',
            principle: '3',
            nqs: '1',
            isContract: 'C'
          },
          {
            name: "Create the required plans to meet children's development needs",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Teach children",
            time: {
              value: '30',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '4',
            principle: '3',
            nqs: '5',
            isContract: 'C'
          },
          {
            name: "Create range of activities for improving children’s social and intellectual growth",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Communicate with families",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'N'
          },
          {
            name: "Document children's development including portfolios and individual progress records",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '8',
            principle: '',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Review and plan according to the early childhood guidelines and curriculum",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Participate in professional development",
            time: {
              value: '20',
              unit: 'hours/year',
              calUnit: 'hours'
            },
            frequency: 'per_year',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '7',
            isContract: 'N'
          }
        ]
      }
    }
  },
  "Lead Educator":{
    type: {
      Kindergarten: {
        tasks: [
          {
            name: "Mentor other educators",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '5',
            nqs: '7',
            isContract: 'C'
          },          {
            name: "Observe interactions of educators with children",
            time: {
              value: '30',
              unit: 'minutes/week',
              calUnit: 'minutes'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '5',
            nqs: '7',
            isContract: 'C'
          },          {
            name: "Identify and participate in professional development opportunities",
            time: {
              value: '1',
              unit: 'hours/term',
              calUnit: 'hours'
            },
            frequency: 'per_term',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '5',
            nqs: '7',
            isContract: 'N'
          },          {
            name: "Lead reflective discussions about practice",
            time: {
              value: '0.5',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '5',
            nqs: '7',
            isContract: 'N'
          }
        ]
      }
    }
  },
  "Educator":{
    type: {
      Kindergarten: {
        tasks: [
          {
            name: "Deliver curriculum to children individually or in small groups under the direction of the teacher or director",
            time: {
              value: '5',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '4',
            principle: '1',
            nqs: '5',
            isContract: 'C'
          },
          {
            name: "Perform administrative duties such as finances and records management",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '',
            nqs: '3',
            isContract: 'N'
          },
          {
            name: "Organise resources for activities within the safety guidelines under the direction of the teacher",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '',
            nqs: '2',
            isContract: 'N'
          },
          {
            name: "Discuss program implementation and evaluation with the teacher",
            time: {
              value: '30',
              unit: 'minutes/week',
              calUnit: 'minutes'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Help organise special events and children's work displays",
            time: {
              value: '2',
              unit: 'hours/term',
              calUnit: 'hours'
            },
            frequency: 'per_term',
            term: '1, 2, 3, 4',
            practice: '8',
            principle: '2',
            nqs: '1',
            isContract: 'N'
          }
        ]
      },
      Childcare: {
        tasks: [
          {
            name: "Assess development needs of children",
            time: {
              value: '5',
              unit: 'minutes/child/day',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_day',
            term: 'weekday',
            practice: '2',
            principle: '3',
            nqs: '1',
            isContract: 'C'
          },
          {
            name: "Create the required plans to meet children's development needs",
            time: {
              value: '5',
              unit: 'minutes/child/day',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_day',
            term: 'weekday',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Provide experiences to support children's play and learning",
            time: {
              value: '8',
              unit: 'hours/day',
              calUnit: 'hours'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '4',
            principle: '3',
            nqs: '5',
            isContract: 'C'
          },
          {
            name: "Create range of activities for improving children’s social and intellectual growth",
            time: {
              value: '5',
              unit: 'minutes/child/day',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_day',
            term: 'weekday',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Check hazard and risk to maintain a safe and comfortable environment",
            time: {
              value: '10',
              unit: 'minutes/day',
              calUnit: 'minutes'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '',
            principle: '',
            nqs: '2',
            isContract: 'N'
          },
          {
            name: "Communicate with families (in person)",
            time: {
              value: '5',
              unit: 'minutes/child/day',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_day',
            term: 'weekday',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'N'
          },
          {
            name: "Provide care for babies and toddlers",
            time: {
              value: '4',
              unit: 'hours/day',
              calUnit: 'hours'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'C'
          },
          {
            name: "Document children's development including portfolios and individual progress records",
            time: {
              value: '5',
              unit: 'minutes/child/day',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_day',
            term: 'weekday',
            practice: '8',
            principle: '',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Review and plan according to the early childhood guidelines and curriculum",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: 'weekday',
            practice: '1',
            principle: '5',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Participate in professional development",
            time: {
              value: '10',
              unit: 'hours/year',
              calUnit: 'hours'
            },
            frequency: 'per_year',
            term: 'weekday',
            practice: '1',
            principle: '5',
            nqs: '7',
            isContract: 'N'
          }
        ]
      }
    }
  },
  "Teacher 3YO":{
    type: {
      Kindergarten: {
        tasks: [
          {
            name: "Assess development needs of children",
            time: {
              value: '5',
              unit: 'minutes/child/year',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '2',
            principle: '3',
            nqs: '1',
            isContract: 'C'
          },
          {
            name: "Create the required plans to meet children's development needs",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Teach children",
            time: {
              value: '1',
              unit: 'hours/child/week',
              calUnit: 'hours'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '4',
            principle: '3',
            nqs: '5',
            isContract: 'C'
          },
          {
            name: "Create range of activities for improving children’s social and intellectual growth",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '5',
            principle: '3',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Check hazard and risk to maintain a safe and comfortable environment",
            time: {
              value: '15',
              unit: 'minutes/week',
              calUnit: 'minutes'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '',
            principle: '',
            nqs: '2',
            isContract: 'N'
          },
          {
            name: "Communicate with families (in person)",
            time: {
              value: '5',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'N'
          },
          {
            name: "Communicate with families (electronic)",
            time: {
              value: '30',
              unit: 'minutes/week',
              calUnit: 'minutes'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '2',
            nqs: '6',
            isContract: 'N'
          },
          {
            name: "Document children's development including portfolios and individual progress records",
            time: {
              value: '10',
              unit: 'minutes/child/week',
              calUnit: 'minutes'
            },
            frequency: 'per_child_per_week',
            term: '1, 2, 3, 4',
            practice: '8',
            principle: '',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Review and plan according to the early childhood guidelines and curriculum",
            time: {
              value: '1',
              unit: 'hours/week',
              calUnit: 'hours'
            },
            frequency: 'per_week',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '1',
            isContract: 'N'
          },
          {
            name: "Participate in professional development",
            time: {
              value: '10',
              unit: 'hours/year',
              calUnit: 'hours'
            },
            frequency: 'per_year',
            term: '1, 2, 3, 4',
            practice: '1',
            principle: '5',
            nqs: '7',
            isContract: 'N'
          }
        ]
      }
    }
  },
  "Co-educator":{
    type: {
      Childcare: {
        tasks: [
          {
            name: "Provide care for babies and toddlers",
            time: {
              value: '5.2',
              unit: 'hours/day',
              calUnit: 'hours'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '4',
            principle: '1',
            nqs: '5',
            isContract: 'C'
          },
          {
            name: "Perform administrative duties such as filling out accident/incident reports",
            time: {
              value: '5',
              unit: 'minutes/day',
              calUnit: 'minutes'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '',
            principle: '',
            nqs: '3',
            isContract: 'N'
          },
          {
            name: "Organise resources for activities within the safety guidelines under the direction of the teacher",
            time: {
              value: '5',
              unit: 'minutes/day',
              calUnit: 'minutes'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '5',
            principle: '',
            nqs: '2',
            isContract: 'N'
          },
          {
            name: "Provide experiences to support children's play and learning",
            time: {
              value: '1.8',
              unit: 'hours/day',
              calUnit: 'hours'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '1',
            principle: '5',
            nqs: '1',
            isContract: 'C'
          },
          {
            name: "Help organise children's work displays",
            time: {
              value: '15',
              unit: 'minutes/day',
              calUnit: 'minutes'
            },
            frequency: 'per_day',
            term: 'weekday',
            practice: '8',
            principle: '2',
            nqs: '1',
            isContract: 'N'
          }
        ]
      }
    }
  },
  answers: {
    role: "",
    type: "",
    students: 0,
    tasks: [
      {
        name: "",
        timeValue: 0,
        unit: ""
      }
    ],
  }
};

const actions = {
  setRole({commit}, data) {
    commit('saveRole', data)
  },
  setType ({commit}, data) {
    commit('saveType', data)
  },
  setSelectedTasks({commit}, data) {
    commit('saveTask', data)
  },
  setStudents({commit}, data) {
    commit('saveStudent', data)
  }
};

const mutations = {
  saveRole(state, data) {
    state.answers.role = data
  },
  saveType(state, data) {
    state.answers.type = data
  },
  saveTask(state, data) {
    state.answers.tasks = data
  },
  saveStudent(state, data) {
    state.answers.students = data
  }
};

Vue.use(Vuex);
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {}
});
