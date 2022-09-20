<template>
  <v-container fluid>
    <v-layout row>
      <v-col>
        <div id="chart">
          <apexchart type="bar" height="250" :options="chartOptionsMeta" :series="meta"></apexchart>
        </div>
        <div id="chart">
          <apexchart type="bar" height="250" :options="chartOptionsCog" :series="cog"></apexchart>
        </div>
      </v-col>
    </v-layout>
    <v-row align="stretch" no-gutters>
      <v-col md="4">
        <v-card>
          <v-card-title>{{ $t("EXPLANATIONS.titel") }}</v-card-title>
          <v-card-text>
            {{ $t(uitleg) }} <br />
            <div v-if="hoverName !== 'Niet Gedetecteerd' && hoverName !== 'EMPTY' && hoverName !== '' ">
              {{
              $t("PERSONAL.part1") +
              Math.round(personal[personalStart]).toFixed(1) +
              $t("PERSONAL.part2") +
              hoverName +
              $t("PERSONAL.part3") +
              Math.round(personal[personalMins]).toFixed(1) +
              $t("PERSONAL.part4") +
              hoverName +
              "."
              }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="2">
        <v-card>
          <v-card-title>{{ $t("PERCENTAGES.cog_titel") }}</v-card-title>
          <v-card-text>
            <v-list flat>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in c_perc" :key="i">
                  <v-list-item-content>
                    <v-list-item v-on:mouseover="translateHover(item.name)">
                      {{ item.name }} :
                      {{ Math.round(item.data * 100).toFixed(0) }}%
                    </v-list-item>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="2">
        <v-card>
          <v-card-title>{{ $t("PERCENTAGES.meta_titel") }}</v-card-title>
          <v-card-text>
            <v-list flat>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in m_perc" :key="i">
                  <v-list-item-content v-on:mouseover="translateHover(item.name)">
                    {{ item.name }} :
                    {{ Math.round(item.data * 100).toFixed(0) }}%
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col md="2">
        <v-card>
          <v-card-title>{{ $t("PERCENTAGES.other") }}</v-card-title>
          <v-card-text>{{ $t("EXPLANATIONS.OTHER") }}</v-card-text>
        </v-card>
      </v-col> -->
      <v-col md="4">
        <v-card>
          <v-card-title>{{
          $t("Voorbeeld_reflectievragen.titel")
          }}</v-card-title>
          <v-card-text>{{ $t("Voorbeeld_reflectievragen.value") }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "StackedBarChart",
  components: {
    apexchart: VueApexCharts,
  },
  methods: {
    mouseHover(parameter) {
      console.log(parameter);
    },
    translateHover(parameter) {
      // `this` inside methods point to the Vue instance
      // console.log(this.$t("EXPLANATIONS.EMPTY"));
      var temp = parameter.split(" ").join("").toUpperCase();
      this.uitleg = "EXPLANATIONS." + temp;
      this.hoverName = parameter;
      this.personalMins = parameter + "Mins";
      this.personalStart = parameter + "Start";
      // `event` is the native DOM event
    },
  },
  data: () => ({
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
    uitleg: "EXPLANATIONS.EMPTY",
    hoverName: "",
    personalMins: null,
    personalStart: null,
    meta: null,
    m_perc: null,
    cog: null,
    c_perc: null,
    personal: null,
  }),
  created() {
    let data = this.$serviceHandler.getData();
    this.meta = data.meta;
    this.m_perc = data.m_perc;
    this.cog = data.cog;
    this.c_perc = data.c_perc;
    this.personal = data.personal;
  },
  computed: {
    chartOptionsMeta: function () {
      return {
        chart: {
          events: {
            dataPointMouseEnter: (e, chart, opts) => {
              // you can call Vue methods now as "this" will point to the Vue instance when you use ES6 arrow function
              this.translateHover(opts.w.config.series[opts.seriesIndex].name);
              console.log(opts);
            },
            dataPointMouseLeave: () => {
              this.translateHover("EMPTY");
            },
          },
          type: "bar",
          height: 250,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          text: this.$t("PERCENTAGES.meta_titel"),
        },
        xaxis: {
          categories: [""],
          labels: {
            show: true,
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return (Math.round(val * 100) / 100).toFixed(2) + " min";
            },
          },
        },
        tooltip: {
          x: {
            show: false,
            // formatter: undefined,
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      };
    },
    chartOptionsCog: function () {
      return {
        chart: {
          events: {
            dataPointMouseEnter: (e, chart, opts) => {
              // you can call Vue methods now as "this" will point to the Vue instance when you use ES6 arrow function
              this.translateHover(opts.w.config.series[opts.seriesIndex].name);
            },
            mouseLeave: () => {
              this.translateHover("EMPTY");
            },
          },
          type: "bar",
          height: 250,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          text: this.$t("PERCENTAGES.cog_titel"),
        },
        xaxis: {
          categories: [""],
          labels: {
            show: true,
          },
        },
        tooltip: {
          x: {
            show: false,
            // formatter: undefined,
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return (Math.round(val * 100) / 100).toFixed(2) + " min";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      };
    },
  },
};
</script>
