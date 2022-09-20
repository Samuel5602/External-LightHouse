<template>
  <v-app>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title
          >{{ $t("DASHBOARD.titel") }}:
          <input v-on:keyup.enter="setGlobalStudentNumber($event)" />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-select v-on:change="translate" v-model="$i18n.locale" v-bind:items="['en', 'nl']">
        </v-select>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="item in translateItems.items" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <!-- <div v-if="numberEntered"> -->
      <v-tabs-items v-model="tab" v-if="dataLoaded && numberEntered">
        <v-tab-item v-for="item in translateItems.items" :key="item.tab">
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
    translate(){
      // let data = this.$serviceHandler.getData()
      // let myJSON = JSON.stringify(data);
      // myJSON.replaceAll('dog', 'monkey')
    },
    setGlobalStudentNumber(number) {
      // console.log(number.target.value);
      // console.log(number);
      var strippedNum = parseInt(number.target.value.replace(/\D/g, ""));
      this.$serviceHandler.setStudentNumber(strippedNum);
      axios({
        method: "get",
        url: this.$serviceHandler.url + "result",
        params: {
          studentNumber: strippedNum,
        },
      }).then((res) => {
        this.$serviceHandler.setData(res.data.body);
        this.dataLoaded = true;
      });
      this.studentNumber = strippedNum;
      this.numberEntered = true;
    },
  },
  computed: {
    translateItems: function () {
      return {
        items: [
          { tab: this.$t("MAIN.timeline"), content: "StackedBarChartVue" },
          { tab: this.$t("MAIN.results"), content: "SpiderGraphPageVue" },
          // { tab: 'Cluster', content: 'ClusterPageVue' }
        ],
      };
    },
  },
  data() {
    return {
      dataLoaded: false,
      numberEntered: false,
      tab: null,
      langs: ["en", "nl"],
      tempt: "",
      tempr: "",
    };
  },
  watch: {},
};
</script>
