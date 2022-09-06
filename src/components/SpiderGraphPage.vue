<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="3">
                <v-row>
                    <v-card>
                        <v-card-title>Essay about X</v-card-title>
                        <v-card-text>21-03-2021</v-card-text>
                    </v-card>
                </v-row>
                <v-row>
                    <v-card>
                        <v-card-title>{{$t("Spider.titel")}}</v-card-title>
                        <v-card-text>
                            {{$t("Spider.pre")}}{{pplg[0]}}/15 <br />
                            {{$t("Spider.post")}}{{pplg[1]}}/15 <br />
                            {{$t("Spider.lw")}}{{pplg[2]}}
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="9">
                <div id="chart">
                    <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: "SpiderGraphVue",
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            pplg: [10, 12, 2],
            series: [{
                name: 'Test Serie',
                data: [10, 12, 2],
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                yaxis: {
                    labels: {
                        show: false,
                    }
                },
                xaxis: {
                    labels: {
                        show: false,
                    }
                },
                scale: {
                    ticks: {
                        display: false
                    }
                }
                // title: {
                //     text: 'Basic Radar Chart'
                // },
                // xaxis: {
                //     categories: ['HP', 'Attack', 'Defense']
                // }
            },
        }
    }
};
</script>
