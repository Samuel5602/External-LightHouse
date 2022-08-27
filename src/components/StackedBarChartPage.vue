<template>
    <v-container fluid>
        <v-layout row>
            <v-col>
                <div id="chart">
                    <apexchart type="bar" height="250" :options="chartOptionsYear" :series="meta"></apexchart>
                </div>
                <div id="chart">
                    <apexchart type="bar" height="250" :options="chartOptionsYear" :series="cog"></apexchart>
                </div>
            </v-col>
        </v-layout>
        <v-row align="stretch" no-gutters>
            <v-col md="3">
                <v-card>
                    <v-card-title>Hover voor uitleg</v-card-title>
                    <v-card-text v-t="uitleg"></v-card-text>
                </v-card>
            </v-col>
            <v-col md="2">
                <v-card>
                    <v-card-title>Cognition</v-card-title>
                    <v-card-text>
                        <v-list flat>
                            <v-list-item-group v-bind="m_perc" color="primary">
                                <v-list-item v-for="(item, i) in m_perc" :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title>{{item}}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="2">
                <v-card>
                    <v-card-title>Metacognition</v-card-title>
                    <v-card-text>1</v-card-text>
                </v-card>
            </v-col>
            <v-col md="2">
                <v-card>
                    <v-card-title>Other</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ac leo
                        pharetra, sit amet vehicula leo sodales. Phasellus sed mi mi. Proin quis aliquam sapien. Cras
                        ante tellus, vehicula vel tellus at, egestas dapibus lacus. Ut commodo magna ac consectetur
                        ultricies. Aliquam at quam aliquet, l</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-title>{{ $t('Voorbeeld_reflectievragen.titel') }}</v-card-title>
                    <v-card-text>{{ $t('Voorbeeld_reflectievragen.value') }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: "StackedBarChart",
    components: {
        apexchart: VueApexCharts,
    },
    methods: {
        // poggers
        testfunction(parameter) {
            // `this` inside methods point to the Vue instance
            var temp = parameter.split(' ').join('').toUpperCase()
            this.uitleg = "EXPLANATIONS." + temp
            console.log(temp)
            // `event` is the native DOM event
        }
    },
    data: () => ({
        uitleg: "",
        testtext: "yeet",
        meta:
            [{ 'name': 'BLANK', 'data': [0.169], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [9.699333333333334], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [0.000166666666665094], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [10.795166666666667], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [26.825999999999997], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [5.633], 'color': '#104469' }, { 'name': 'BLANK', 'data': [17.25083333333334], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.3423333333333333], 'color': '#104469' }, { 'name': 'BLANK', 'data': [1.6995000000000005], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.5], 'color': '#104469' }, { 'name': 'BLANK', 'data': [12.106499999999997], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [1.2265], 'color': '#104469' }, { 'name': 'BLANK', 'data': [26.921499999999995], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [4.415333333333334], 'color': '#104469' }, { 'name': 'BLANK', 'data': [13.471666666666678], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.5001666666666666], 'color': '#104469' }, { 'name': 'BLANK', 'data': [38.68766666666667], 'color': '#ebebeb' }, { 'name': 'Evaluation', 'data': [3.7105], 'color': '#2286de' }, { 'name': 'BLANK', 'data': [3.0660000000000025], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.45016666666666666], 'color': '#104469' }, { 'name': 'BLANK', 'data': [33.67683333333335], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.21916666666666668], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.8053333333333333], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.4765000000000157], 'color': '#ebebeb' }, { 'name': 'Evaluation', 'data': [0.8395], 'color': '#2286de' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.6313333333333333], 'color': '#104469' }, { 'name': 'BLANK', 'data': [1.2701666666666824], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [4.053], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [96.98733333333334], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [12.596], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.00016666666664377772], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [17.104833333333332], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [0.00016666666664377772], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.601], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.00016666666664377772], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [0.9525], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [0.0], 'color': '#ebebeb' }]
        , m_perc:
            [{ 'Orientation': 0.12253836559267613 }, { 'Monitoring': 0.08030337747601521 }, { 'Evaluation': 0.013086533142484062 }]
        , cog:
            [{ 'name': 'BLANK', 'data': [0.0], 'color': '#ebebeb' }, { 'name': 'ESSAY_TASK_START', 'data': [0.16883333333333334], 'color': '#000000' }, { 'name': 'BLANK', 'data': [23.106833333333334], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [2.989], 'color': '#690008' }, { 'name': 'BLANK', 'data': [2.729333333333333], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [12.245166666666666], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.000166666666665094], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [6.250166666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [5.633333333333333], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [3.154166666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.000166666666665094], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [6.646166666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.000166666666665094], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [5.203], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [2.2466666666666666], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.875], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [0.2575], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.0018333333333373503], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.9075], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.5003333333333302], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [1.6511666666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [3.116333333333344], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [7.338666666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [1.2268333333333459], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [2.2535], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [13.261166666666666], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666665798857], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [2.510666666666667], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.21099999999999852], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [8.679333333333334], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666665798857], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [0.005], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [4.415666666666667], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [3.849833333333333], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [7.156666666666666], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666664377772], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [1.5531666666666666], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.9111666666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.5004999999999882], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [17.191833333333335], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [5.295833333333333], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.7845], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.2941666666666549], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [5.952166666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [1.0686666666666724], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [6.477833333333334], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.9003333333333217], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.1555], 'color': '#690008' }, { 'name': 'BLANK', 'data': [4.276999999999987], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [3.0656666666666665], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.45050000000000523], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.5198333333333334], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.1980000000000075], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [3.5415], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.002833333333342125], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [2.449333333333333], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [1.5691666666666666], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.6210000000000093], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [8.2175], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [2.5756666666666668], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [11.2975], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.00016666666664377772], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [0.6936666666666667], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [1.4373333333333278], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.5525], 'color': '#690008' }, { 'name': 'BLANK', 'data': [8.825333333333333], 'color': '#ebebeb' }, { 'name': 'Write Essay', 'data': [20.4845], 'color': '#dd1d08' }, { 'name': 'BLANK', 'data': [0.00016666666667219943], 'color': '#ebebeb' }, { 'name': 'Write Essay', 'data': [75.97266666666667], 'color': '#dd1d08' }, { 'name': 'BLANK', 'data': [0.0], 'color': '#ebebeb' }]
        , c_perc:
            [{ 'ESSAY_TASK_START': 0.0005335555340190374 }, { 'First Reading': 0.43391390636390076 }, { 'Elaboration/Organization': 0.06986048549866636 }, { 'Write Essay': 0.3048287565891212 }]

    }),
    computed: {
        chartOptionsYear: function () {
            return {
                chart: {
                    events: {
                        dataPointMouseEnter: (e, chart, opts) => {
                            // you can call Vue methods now as "this" will point to the Vue instance when you use ES6 arrow function
                            this.testfunction(opts.w.config.series[opts.seriesIndex].name);
                        }
                    },
                    type: 'bar',
                    height: 250,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                // title: {
                //     text: 'Fiction Books Sales'
                // },
                xaxis: {
                    categories: [""],
                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return (Math.round(val * 100) / 100).toFixed(2);
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    show: false,
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }
        }
    }

};
</script>
