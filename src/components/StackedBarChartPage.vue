<template>
  <v-container fluid>
    <v-layout row>
      <v-col>
        <div id="chart">
          <apexchart
            type="bar"
            height="250"
            :options="chartOptionsMeta"
            :series="meta"
          ></apexchart>
        </div>
        <div id="chart">
          <apexchart
            type="bar"
            height="250"
            :options="chartOptionsCog"
            :series="cog"
          ></apexchart>
        </div>
      </v-col>
    </v-layout>
    <v-row align="stretch" no-gutters>
      <v-col md="2">
        <v-card>
          <v-card-title>{{ $t("EXPLANATIONS.titel") }}</v-card-title>
          <v-card-text>
            {{ $t(uitleg) }} <br />
            <div v-if="hoverName !== 'Niet Gedetecteerd'">
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
      <v-col md="3">
        <v-card>
          <v-card-title>{{ $t("PERCENTAGES.cog_titel") }}</v-card-title>
          <v-card-text>
            <v-list disabled>
              <v-list-item-group v-model="c_perc" color="primary">
                <v-list-item v-for="(item, i) in c_perc" :key="i">
                  <v-list-item-content>
                    <v-list-item>
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
            <v-list disabled>
              <v-list-item-group v-model="m_perc" color="primary">
                <v-list-item v-for="(item, i) in m_perc" :key="i">
                  <v-list-item-content>
                    <v-list-item>
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
          <v-card-title>Other</v-card-title>
          <v-card-text>{{ $t("EXPLANATIONS.OTHER") }}</v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
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
    // poggers
    translateHover(parameter) {
      // `this` inside methods point to the Vue instance
      var temp = parameter.split(" ").join("").toUpperCase();
      this.uitleg = "EXPLANATIONS." + temp;
      this.hoverName = parameter;
      this.personalMins = parameter + "Mins";
      this.personalStart = parameter + "Start";
      // `event` is the native DOM event
    },
  },
  data: () => ({
    uitleg: "",
    hoverName: "",
    personalMins: null,
    personalStart: null,
    meta:
[{'name': 'Niet Gedetecteerd', 'data': [0.016866666666666665], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.9541833333333335], 'color': '#175a91'}, {'name': 'Orientatie', 'data': [1.1941], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [28.061666666666667], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.05009999999999848], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.05341666666666689], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.050016666666669596], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [11.26018333333333], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.050233333333332686], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.02393333333333525], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.031466666666667975], 'color': '#104469'}, {'name': 'Monitoren', 'data': [0.20239999999999703], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [3.0514000000000014], 'color': '#ebebeb'}]
, m_perc:
[{'name': 'Orientatie', 'data': 0.04773962962962963}, {'name': 'Plannen', 'data': 0.0}, {'name': 'Evaluatie', 'data': 0.0}, {'name': 'Monitoren', 'data': 0.008538148148148128}]
, cog:
[{'name': 'Niet Gedetecteerd', 'data': [1.6666666666666667e-05], 'color': '#ebebeb'}, {'name': 'ESSAY_TASK_START', 'data': [0.016833333333333336], 'color': '#000000'}, {'name': 'Niet Gedetecteerd', 'data': [2.3042000000000002], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.49910000000000015], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.054566666666666305], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0014999999999998348], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.02013333333333346], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.2942666666666666], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.07220000000000025], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.002716666666666978], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.02088333333333338], 'color': '#ebebeb'}, {'name': 'Herlezen', 'data': [1.3831499999999999], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.025400000000000283], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.6309333333333331], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.03138333333333347], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [2.066916666666667], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.04948333333333402], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0012833333333329977], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.05159999999999956], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [1.8876666666666668], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.09498333333333359], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.6366333333333336], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.01994999999999955], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [3.2256166666666677], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.03313333333333307], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.3207333333333337], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.01909999999999773], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [7.566533333333336], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.23673333333333296], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.139733333333332], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.022066666666666346], 'color': '#ebebeb'}, {'name': 'Herlezen', 'data': [0.5729500000000015], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.020766666666665323], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [1.1495166666666659], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.02171666666666905], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.2503666666666682], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.09644999999999737], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [6.141566666666669], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.201733333333331], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.042100000000001025], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.05013333333333203], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.05338333333333334], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.05005000000000315], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.19876666666666487], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.1981166666666656], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.4327666666666691], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.1213000000000003], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.08131666666666482], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.15146666666666475], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [3.5157500000000006], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.06763333333333177], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.08790000000000131], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.176516666666669], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.22414999999999963], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.34869999999999624], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [5.2741833333333386], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.3799666666666679], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0015166666666666107], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.05026666666666624], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.023900000000001698], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.23391666666666533], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.4722500000000013], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.01646666666666463], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.23031666666666673], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.02101666666666946], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.1137500000000008], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.29825000000000046], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [1.8700666666666628], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.03646666666666576], 'color': '#dd1d08'}]
, c_perc:
[{'name': 'Lezen', 'data': 0.15795911248307226}, {'name': 'Herlezen', 'data': 0.060772105806735456}, {'name': 'Schrijven', 'data': 0.6857540994351649}]
, pplg:
[7.33, 7.33, 0.0]
, personal:
{'OrientatieMins': 2.1482833333333335, 'OrientatieStart': 0.016866666666666665, 'PlannenMins': 0.0, 'PlannenStart': 0, 'EvaluatieMins': 0.0, 'EvaluatieStart': 0, 'MonitorenMins': 0.38421666666666576, 'MonitorenStart': 30.226833333333335, 'LezenMins': 7.109300000000004, 'LezenStart': 2.87475, 'HerlezenMins': 2.735183333333334, 'HerlezenStart': 3.262883333333333, 'SchrijvenMins': 30.86388333333334, 'SchrijvenStart': 2.32105}

}),
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
          text: "Metacognition",
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
          text: "Cognition",
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
