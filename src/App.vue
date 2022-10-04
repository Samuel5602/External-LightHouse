<template>
  <v-app>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title
          >{{ $t("DASHBOARD.titel") }}:
          <input v-on:keyup.enter="setGlobalStudentNumber($event)" />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-select
          v-on:change="translate"
          v-model="$i18n.locale"
          v-bind:items="['en', 'nl']"
        >
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

      <v-tabs-items v-model="tab" v-if="dataLoaded && numberEntered">
        <v-tab-item v-for="item in translateItems.items" :key="item.tab">
          <v-card flat>
            <component v-bind:is="item.content" ref="componentU"></component>
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
    // sets change for the language so other components know what langauge should be displayed
    translate() {
      this.$serviceHandler.setLanguage(this.$i18n.locale);
    },

    // get data from the api and store it in the global service handler
    setGlobalStudentNumber(number) {
      this.$serviceHandler.setStudentNumber(number.target.value);
      axios({
        method: "get",
        url: this.$serviceHandler.url + "result",
        params: {
          studentNumber: number.target.value,
        },
      }).then((res) => {
        this.$serviceHandler.setData(res.data.body);
        this.dataLoaded = true;
      });
      this.studentNumber = number.target.value;
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
    };
  },
};
</script>
