<template>
    <v-container fluid>
        <v-layout row>
            <v-col>
                <div id="chart">
                    <apexchart type="bar" height="250" :options="chartOptions" :series="meta"></apexchart>
                </div>
                <div id="chart">
                    <apexchart type="bar" height="250" :options="chartOptions" :series="cog"></apexchart>
                </div>
            </v-col>
        </v-layout>
        <v-layout row>
            <v-flex>
                <v-card>
                    <v-card-title>Hover voor uitleg</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ac leo
                        pharetra, sit amet vehicula leo sodales. Phasellus sed mi mi. Proin quis aliquam sapien. Cras
                        ante tellus, vehicula vel tellus at, egestas dapibus lacus. Ut commodo magna ac consectetur
                        ultricies. Aliquam at quam aliquet, l</v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title>Cognition</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ac leo
                        pharetra, sit amet vehicula leo sodales. Phasellus sed mi mi. Proin quis aliquam sapien. Cras
                        ante tellus, vehicula vel tellus at, egestas dapibus lacus. Ut commodo magna ac consectetur
                        ultricies. Aliquam at quam aliquet, l</v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title>Metacognition</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ac leo
                        pharetra, sit amet vehicula leo sodales. Phasellus sed mi mi. Proin quis aliquam sapien. Cras
                        ante tellus, vehicula vel tellus at, egestas dapibus lacus. Ut commodo magna ac consectetur
                        ultricies. Aliquam at quam aliquet, l</v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title>Other</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ac leo
                        pharetra, sit amet vehicula leo sodales. Phasellus sed mi mi. Proin quis aliquam sapien. Cras
                        ante tellus, vehicula vel tellus at, egestas dapibus lacus. Ut commodo magna ac consectetur
                        ultricies. Aliquam at quam aliquet, l</v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title>{{ $t('Voorbeeld_reflectievragen.titel') }}</v-card-title>
                    <v-card-text>{{ $t('Voorbeeld_reflectievragen.value') }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
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
        testfunction: function (parameter) {
            // `this` inside methods point to the Vue instance
            console.log(parameter)
            // `event` is the native DOM event
        }
    },
    data: () => ({
        unique: [],
        testtext: "yeet",
        meta:
            [{ 'name': 'BLANK', 'data': [0.0004860709980034658], 'color': '#ebebeb' },
            { 'name': 'Orientation', 'data': [0.027896832149713703], 'color': '#175a91' },
            { 'name': 'Orientation', 'data': [0.031048623877398897], 'color': '#175a91' },
            { 'name': 'BLANK', 'data': [0.07715586149373357], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.01620140788019836], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.049616152513164424], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.0009846053549300848], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.004888033497673916], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.001438079875749898], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.034820228031532285], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.003527609935214504], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.0774305347500018], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.01269920402278879], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.03874666545228811], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.0014385592357084587], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.11127190974610701], 'color': '#ebebeb' },
            { 'name': 'Evaluation', 'data': [0.010671990757940009], 'color': '#2286de' },
            { 'name': 'BLANK', 'data': [0.008818305798098391], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.0012947512481334966], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.09685995259130009], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.000630358345537041], 'color': '#104469' },
            { 'name': 'Monitoring', 'data': [0.0023162673198745543], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.0013704901215896292], 'color': '#ebebeb' },
            { 'name': 'Evaluation', 'data': [0.0024145361113840913], 'color': '#2286de' },
            { 'name': 'Monitoring', 'data': [0.0018158155231134954], 'color': '#104469' },
            { 'name': 'BLANK', 'data': [0.003653202244363385], 'color': '#ebebeb' },
            { 'name': 'Orientation', 'data': [0.011657075472828682], 'color': '#175a91' },
            { 'name': 'BLANK', 'data': [0.27895106453862795], 'color': '#ebebeb' },
            { 'name': 'Monitoring', 'data': [0.03622810822989142], 'color': '#104469' },
            { 'name': 'Orientation', 'data': [0.04919623318944544], 'color': '#175a91' },
            { 'name': 'Monitoring', 'data': [0.0017285720106513525], 'color': '#104469' },
            { 'name': 'Orientation', 'data': [0.002739542163303521], 'color': '#175a91' },
            { 'name': 'BLANK', 'data': [4.793599586161434e-07], 'color': '#ebebeb' }],

        cog:
            [{ 'name': 'BLANK', 'data': [0.0], 'color': '#ebebeb' },
            {
                'name': 'ESSAY_TASK_START',
                'data': [0.00048559163804488245],
                'color': '#000000'
            },
            { 'name': 'BLANK', 'data': [0.06645894401794723], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.008596841497232888], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.007849998681760118], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.035219055517073605], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.017976477806832314], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.016202366600115536], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.009071887216188929], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.019115437068426222], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.014964659187053447], 'color': '#690008' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.0064617722417028844],
                'color': '#ffa9aa'
            },
            { 'name': 'BLANK', 'data': [0.0025166397825623077], 'color': '#ebebeb' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.0007406111360112044],
                'color': '#ffa9aa'
            },
            { 'name': 'First Reading', 'data': [0.002610114974486072], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.0014390385956670748], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.004749019109684727], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.008963072505590558], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.021107177696339824], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.003528568655131681], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.006481426000004786], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.03814123382459739], 'color': '#690008' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.007221078416098814],
                'color': '#ffa9aa'
            },
            { 'name': 'BLANK', 'data': [0.0006068697075664597], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.024963149203183932], 'color': '#690008' },
            {
                'name': 'Elaboration/Organization',
                'data': [1.4380798757540614e-05],
                'color': '#ffa9aa'
            },
            { 'name': 'BLANK', 'data': [0.012700162742705912], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.011072735683315627], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.020583716621566883], 'color': '#690008' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.004467155454037752],
                'color': '#ffa9aa'
            },
            {
                'name': 'First Reading',
                'data': [0.0026206608935748776],
                'color': '#690008'
            },
            { 'name': 'BLANK', 'data': [0.0014395179556256354], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.04944645908782597], 'color': '#690008' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.015231662683984348],
                'color': '#ffa9aa'
            },
            {
                'name': 'First Reading',
                'data': [0.0022563473250515886],
                'color': '#690008'
            },
            { 'name': 'BLANK', 'data': [0.000846070326899484], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.01711938220088538], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.0030736560544361025], 'color': '#ebebeb' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.018631283510257113],
                'color': '#ffa9aa'
            },
            { 'name': 'BLANK', 'data': [0.0025895024962669932], 'color': '#ebebeb' },
            {
                'name': 'First Reading',
                'data': [0.0004472428413582197],
                'color': '#690008'
            },
            { 'name': 'BLANK', 'data': [0.012301335257164592], 'color': '#ebebeb' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.00881734707818127],
                'color': '#ffa9aa'
            },
            { 'name': 'BLANK', 'data': [0.0012957099680506179], 'color': '#ebebeb' },
            {
                'name': 'First Reading',
                'data': [0.0014951237108213888],
                'color': '#690008'
            },
            { 'name': 'BLANK', 'data': [0.0005694796307968986], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.010185919759936546], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.007044673951340119], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.004513174010061793], 'color': '#690008' },
            { 'name': 'BLANK', 'data': [0.001786095205681404], 'color': '#ebebeb' },
            { 'name': 'First Reading', 'data': [0.02363484275794958], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.007408028799946398], 'color': '#690008' },
            { 'name': 'First Reading', 'data': [0.03249341479256895], 'color': '#690008' },
            {
                'name': 'Elaboration/Organization',
                'data': [0.0019950961476237206],
                'color': '#ffa9aa'
            },
            { 'name': 'BLANK', 'data': [0.004134000282822403], 'color': '#ebebeb' },
            {
                'name': 'First Reading',
                'data': [0.0015890782627036026],
                'color': '#690008'
            },
            { 'name': 'BLANK', 'data': [0.025383068526902863], 'color': '#ebebeb' },
            { 'name': 'Write Essay', 'data': [0.05891669442959757], 'color': '#dd1d08' },
            { 'name': 'Write Essay', 'data': [0.218509526080777], 'color': '#dd1d08' },
            { 'name': 'BLANK', 'data': [0.0898948523930847], 'color': '#ebebeb' }],
        chartOptions: {
            chart: {
                events: {
                    dataPointMouseEnter: function (event, chartContext, config) {
                        console.log(config.w.config.series[config.seriesIndex].name);
                        this.testfunction(config.w.config.series[config.seriesIndex].name);
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
                    // formatter: function (val) {
                    //     return val + "K"
                    // }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                },
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
        },


    }),

};
</script>
