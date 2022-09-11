<template>
  <v-app>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title
          >{{ $t("DASHBOARD.titel") }}:
          <input v-on:keyup.enter="setGlobalStudentNumber($event)" />
        </v-toolbar-title>
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

      <!-- <div v-if="numberEntered"> -->
      <v-tabs-items v-model="tab" v-if="dataLoaded && numberEntered">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <component v-bind:is="item.content"></component>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <div class="text-center" v-else-if="numberEntered && !dataLoaded">
        <v-progress-circular
          :size="500"
          :width="30"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <!-- </div> -->
    </v-card>
  </v-app>
</template>

<script>
import SpiderGraphPageVue from "./components/SpiderGraphPage.vue";
import StackedBarChartVue from "./components/StackedBarChartPage.vue";
// import ClusterPageVue from './components/ClusterPage.vue';
import axios from "axios";

export default {
  name: "App",

  components: {
    SpiderGraphPageVue,
    StackedBarChartVue,
    // ClusterPageVue
  },
  methods: {
    setGlobalStudentNumber(number) {
      console.log(number.target.value);
      console.log(number);
      this.$serviceHandler.setStudentNumber(number.target.value);
      axios({
          method:"get", 
          url: this.$serviceHandler.url + "result",
          data: {
            studentNumber: number.target.value
          },
          params: {
            studentNumber: number.target.value
          }
        }).then((res) => {
          this.$serviceHandler.setData(res.data.body);
          this.dataLoaded = true;
      });
      this.studentNumber = number.target.value;
      this.numberEntered = true;
      // console.log(this.numberEntered);
    },
  },
  created() {},
  data() {
    return {
      dataLoaded: false,
      numberEntered: false,
      tab: null,
      langs: ["en", "nl"],
      items: [
        { tab: "Tijdlijn", content: "StackedBarChartVue" },
        { tab: "Resultaten", content: "SpiderGraphPageVue" },
        // { tab: 'Cluster', content: 'ClusterPageVue' }
      ],
    };
  },
  watch: {},
};
</script>
