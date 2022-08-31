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
                        <v-card-title>Hover over de diagram voor uitleg</v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ac
                            leo pharetra, sit amet vehicula leo sodales. Phasellus sed mi mi. Proin quis aliquam sapien.
                            Cras ante tellus, vehicula vel tellus at, egestas dapibus lacus. Ut commodo magna ac
                            consectetur ultricies. Aliquam at quam aliquet, l</v-card-text>
                    </v-card>
                </v-row>
                <v-row>
                    <v-card>
                        <v-card-title>Hover voor uitleg</v-card-title>
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
            info: null,
            series: [{
                name: 'Test Serie',
                data: [60, 65, 60, 130, 75, 110],
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                // title: {
                //     text: 'Basic Radar Chart'
                // },
                xaxis: {
                    categories: ['HP', 'Attack', 'Defense', 'Sp.Atk', 'Sp.Def', 'Speed']
                }
            },
        }
    }
};
</script>
