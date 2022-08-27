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
            <v-col md="2">
                <v-card>
                    <v-card-title>{{ $t('EXPLANATIONS.titel') }}</v-card-title>
                    <v-card-text v-t="uitleg"></v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-title>Cognition</v-card-title>
                    <v-card-text>
                        <v-list disabled>
                            <v-list-item-group v-model="c_perc" color="primary">
                                <v-list-item v-for="(item, i) in c_perc" :key="i">
                                    <v-list-item-content>
                                        <v-list-item> {{ item.name }} : {{ (Math.round(item.data * 100)).toFixed(0) }}%
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
                    <v-card-title>Metacognition</v-card-title>
                    <v-card-text>
                        <v-list disabled>
                            <v-list-item-group v-model="m_perc" color="primary">
                                <v-list-item v-for="(item, i) in m_perc" :key="i">
                                    <v-list-item-content>
                                        <v-list-item> {{ item.name }} : {{ (Math.round(item.data * 100)).toFixed(0) }}%
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
            [{ 'name': 'BLANK', 'data': [0.016900000000000002], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [0.9699333333333333], 'color': '#175a91' }, { 'name': 'Orientation', 'data': [1.0795166666666667], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [2.6826000000000003], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.5633], 'color': '#104469' }, { 'name': 'BLANK', 'data': [1.7250833333333333], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.0342333333333329], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.16995000000000035], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.049999999999999975], 'color': '#104469' }, { 'name': 'BLANK', 'data': [1.2106499999999996], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.12265000000000008], 'color': '#104469' }, { 'name': 'BLANK', 'data': [2.6921500000000003], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.44153333333333394], 'color': '#104469' }, { 'name': 'BLANK', 'data': [1.3471666666666668], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.050016666666665856], 'color': '#104469' }, { 'name': 'BLANK', 'data': [3.868766666666667], 'color': '#ebebeb' }, { 'name': 'Evaluation', 'data': [0.3710500000000003], 'color': '#2286de' }, { 'name': 'BLANK', 'data': [0.3066000000000004], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.04501666666666682], 'color': '#104469' }, { 'name': 'BLANK', 'data': [3.367683333333333], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [0.021916666666666737], 'color': '#104469' }, { 'name': 'Monitoring', 'data': [0.0805333333333351], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.04764999999999916], 'color': '#ebebeb' }, { 'name': 'Evaluation', 'data': [0.08395000000000039], 'color': '#2286de' }, { 'name': 'Monitoring', 'data': [0.06313333333333182], 'color': '#104469' }, { 'name': 'BLANK', 'data': [0.12701666666666872], 'color': '#ebebeb' }, { 'name': 'Orientation', 'data': [0.4053000000000001], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [9.69873333333333], 'color': '#ebebeb' }, { 'name': 'Monitoring', 'data': [1.259599999999999], 'color': '#104469' }, { 'name': 'Orientation', 'data': [1.7104833333333327], 'color': '#175a91' }, { 'name': 'Monitoring', 'data': [0.0600999999999991], 'color': '#104469' }, { 'name': 'Orientation', 'data': [0.09524999999999874], 'color': '#175a91' }, { 'name': 'BLANK', 'data': [1.66666666678086e-05], 'color': '#ebebeb' }]
        , m_perc:
            [{ 'name': 'Orientation', 'data': 0.12253830685269027 }, { 'name': 'Monitoring', 'data': 0.08030333898179146 }, { 'name': 'Evaluation', 'data': 0.0130865268693241 }]
        , cog:
            [{ 'name': 'BLANK', 'data': [0.0], 'color': '#ebebeb' }, { 'name': 'ESSAY_TASK_START', 'data': [0.016883333333333334], 'color': '#000000' }, { 'name': 'BLANK', 'data': [2.310683333333333], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.2988999999999997], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.27293333333333347], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [1.2245166666666667], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.6250166666666666], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.5633333333333337], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.3154166666666661], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.6646166666666661], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.5203], 'color': '#690008' }, { 'name': 'Elaboration/Organization', 'data': [0.22466666666666688], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.08749999999999947], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [0.025750000000000228], 'color': '#ffa9aa' }, { 'name': 'First Reading', 'data': [0.09075000000000019], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.05003333333333366], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.16511666666666588], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.3116333333333341], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.7338666666666659], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.12268333333333377], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.22534999999999974], 'color': '#690008' }, { 'name': 'First Reading', 'data': [1.3261166666666662], 'color': '#690008' }, { 'name': 'Elaboration/Organization', 'data': [0.25106666666666627], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.021100000000000084], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.8679333333333341], 'color': '#690008' }, { 'name': 'Elaboration/Organization', 'data': [0.0005000000000014473], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.4415666666666657], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.38498333333333296], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.7156666666666666], 'color': '#690008' }, { 'name': 'Elaboration/Organization', 'data': [0.15531666666666608], 'color': '#ffa9aa' }, { 'name': 'First Reading', 'data': [0.09111666666666593], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.05004999999999954], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [1.7191833333333344], 'color': '#690008' }, { 'name': 'Elaboration/Organization', 'data': [0.5295833333333334], 'color': '#ffa9aa' }, { 'name': 'First Reading', 'data': [0.07844999999999991], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.029416666666665283], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.5952166666666667], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.10686666666666617], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [0.6477833333333336], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.09003333333333365], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.01555000000000004], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.4276999999999985], 'color': '#ebebeb' }, { 'name': 'Elaboration/Organization', 'data': [0.30656666666666865], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.04504999999999858], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.051983333333336025], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.019799999999997868], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.35415000000000046], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.24493333333333153], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.15691666666666762], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.06210000000000103], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.8217499999999999], 'color': '#690008' }, { 'name': 'First Reading', 'data': [0.25756666666666966], 'color': '#690008' }, { 'name': 'First Reading', 'data': [1.1297499999999996], 'color': '#690008' }, { 'name': 'Elaboration/Organization', 'data': [0.06936666666666763], 'color': '#ffa9aa' }, { 'name': 'BLANK', 'data': [0.1437333333333343], 'color': '#ebebeb' }, { 'name': 'First Reading', 'data': [0.055249999999998765], 'color': '#690008' }, { 'name': 'BLANK', 'data': [0.8825333333333327], 'color': '#ebebeb' }, { 'name': 'Write Essay', 'data': [2.048449999999999], 'color': '#dd1d08' }, { 'name': 'Write Essay', 'data': [7.597266666666669], 'color': '#dd1d08' }, { 'name': 'BLANK', 'data': [3.1255166666666647], 'color': '#ebebeb' }]
        , c_perc:
            [{ 'name': 'First Reading', 'data': 0.3949072798000111 }, { 'name': 'Elaboration/Organization', 'data': 0.06358038746665465 }, { 'name': 'Write Essay', 'data': 0.27742622051037463 }]

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
                        show: true
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
