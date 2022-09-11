<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="3">
        <v-row>
          <!-- <v-card>
            <v-card-title>Essay about X</v-card-title>
            <v-card-text>21-03-2021</v-card-text>
          </v-card> -->
        </v-row>
        <v-row>
          <v-card>
            <v-card-title>{{ $t("Spider.titel") }}</v-card-title>
            <v-card-text>
              {{ $t("Spider.pre") }}{{ pplg[0] }}/15 <br />
              {{ $t("Spider.post") }}{{ pplg[1] }}/15 <br />
              {{ $t("Spider.lw") }}{{ pplg[2] }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="9">
        <div id="chart">
          <apexchart
            type="radar"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "SpiderGraphVue",
  components: {
    apexchart: VueApexCharts,
  },
  created() {
    let data = this.$serviceHandler.getData();
    this.pplg = data.pplg;
    this.series[0].data = data.spiderData;
  },
  data() {
    return {
      pplg: null,
      series: [
        {
          name: "Test Serie",
          data: null,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "radar",
        },
        xaxis: {
            categories: ["Semantische Kruising", "Gemiddelde Cohesie", "Aantal Woorden"]
          },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  },
};
</script>
