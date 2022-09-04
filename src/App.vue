<template>
  <v-app>
    <v-card>
      <v-toolbar color="cyan" dark flat>

        <v-toolbar-title>{{$t('DASHBOARD.titel')}}: <input v-on:keyup.enter="setGlobalStudentNumber($event)"> </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-select v-model="$i18n.locale" v-bind:items="['en', 'nl']">
        </v-select>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      
      <v-tabs-items v-model="tab" v-if="numberEntered">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <component v-bind:is="item.content"></component>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

  </v-app>
</template>

<script>
import SpiderGraphPageVue from './components/SpiderGraphPage.vue';
import StackedBarChartVue from './components/StackedBarChartPage.vue';
import ClusterPageVue from './components/ClusterPage.vue';

export default {
  name: 'App',

  components: {
    SpiderGraphPageVue,
    StackedBarChartVue,
    ClusterPageVue
  },
  methods: {
    setGlobalStudentNumber(number){
      console.log(number.target.value)
      this.$serviceHandler.setStudentNumber(number);
      this.studentNumber = number;
      this.numberEntered = true;
      console.log(this.numberEntered);
    }

  },
  data() {
    return {
      numberEntered: false,
      tab: null,
      langs: ['en', 'nl'],
      items: [
        { tab: 'Timeline', content: 'StackedBarChartVue' },
        { tab: 'Results', content: 'SpiderGraphPageVue' },
        { tab: 'Cluster', content: 'ClusterPageVue' }
      ]
    }
  },
  watch: {
  },
};
</script>
