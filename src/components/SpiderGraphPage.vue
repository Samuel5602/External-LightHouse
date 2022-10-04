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
              {{ $t("Spider.pre") }}{{ pplg[0] }} <br />
              {{ $t("Spider.post") }}{{ pplg[1] }} <br />
              {{ $t("Spider.lw") }}{{ pplg[2] }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="9">
        <div id="chart">
          <apexchart
            type="radar"
            height="500"
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
  methods: {
  test() {
        console.log("spider")
      }
  },
  created() {
    let data = this.$serviceHandler.getData(this.$t("LANG.status"));
    this.pplg = data.pplg;
    this.series[0].data = data.spiderData;
  },
  computed: {
    chartOptions: function () {
      return {
        chart: {
          height: 500,
          type: "radar",
        },
        xaxis: {
            categories: [this.$t("Spider.sc"), this.$t("Spider.gc"), this.$t("Spider.aw")]
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
      }
    }
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
    };
  },
};
</script>
