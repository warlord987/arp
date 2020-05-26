<template>
  <mdb-row class="justify-content-md-center align-items-center">
    <mdb-col sm="12">
      <mdb-card wide class="center">
        <mdb-view gradient="peach" cascade>
          <h2 class="card-header-title mb-3 font24">Wat is your role?</h2>
        </mdb-view>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-text class="font21">
            <mdb-card-text>
              From the list below select the one which match the closest to the role at your organization.
            </mdb-card-text>
            <mdb-list-group>
              <mdb-list-group-item action :active="role == 'Teacher 4YO' && type == 'Kindergarten'">
                <div class="col" v-on:click="selectRoleAndType('Teacher 4YO', 'Kindergarten')">
                  works primarly educationg Kindergarten students, work consists of 15 hours contact time and 7.5 hours non-contact hours (total 22.5 hours per week per group)
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item action :active="role == 'Teacher 4YO' && type == 'ELC'">
                <div class="col" v-on:click="selectRoleAndType('Teacher 4YO', 'ELC')">
                  works primarly educationg ELC students, work consists of 15 hours contact time and 7.5 hours non-contact hours (total 22.5 hours per week per group)
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item action :active="role == 'Lead Educator' && type == 'Kindergarten'">
                <div class="col" v-on:click="selectRoleAndType('Lead Educator', 'Kindergarten')">
                  works primarly as Lead Educator
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item action :active="role == 'Teacher 3YO' && type == 'Kindergarten'">
                <div class="col" v-on:click="selectRoleAndType('Teacher 3YO', 'Kindergarten')">
                  works primarly educationg Kindergarten students, work normally consist of 6 hours shift per day, usually part-time and may not have paid work everyday
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item action :active="role == 'Educator' && type == 'Kindergarten'">
                <div class="col" v-on:click="selectRoleAndType('Educator', 'Kindergarten')">
                  works primarly educating Kindergarten students, work consists of 6 hours contact time and 3 hours non-contact hours (9 hours per week per group)
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item action :active="role == 'Educator' && type == 'Childcare'">
                <div class="col" v-on:click="selectRoleAndType('Educator', 'Childcare')">
                  works primarly educating Childcare students, work consists of 6 hours contact time and 3 hours non-contact hours (9 hours per week per group)
                </div>
              </mdb-list-group-item>
              <mdb-list-group-item action :active="role == 'Co-educator' && type == 'Childcare'">
                <div class="col" v-on:click="selectRoleAndType('Co-educator', 'Childcare')">
                  works primarly as Co-educator
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
  data() {
    return {
      role: "",
      type: ""
    }
  },
  methods: {
    ...mapActions(['setRole', 'setType']),
    selectRoleAndType (role, type) {
      this.role = role
      this.type = type
    },
    showPrevious(){
      this.$emit('previous')
    },
    showNext () {
      if(this.role) {
        this.setRole(this.role)
        this.setType(this.type)
        this.$emit('next')
      } else {
        this.$toasted.show('Please select a Role to proceed').goAway(1500)
      }
    }
  },
  computed: {
      ...mapState({
          state: state => state,
      })
  },
});
</script>