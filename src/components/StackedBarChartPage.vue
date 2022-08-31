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
import VueApexCharts from "vue-apexcharts";

export default {
  name: "StackedBarChart",
  components: {
    apexchart: VueApexCharts,
  },
  methods: {
    // poggers
    testfunction(parameter) {
      // `this` inside methods point to the Vue instance
      var temp = parameter.split(" ").join("").toUpperCase();
      this.uitleg = "EXPLANATIONS." + temp;
      console.log(temp);
      // `event` is the native DOM event
    },
  },
  data: () => ({
    uitleg: "",
    testtext: "yeet",
    meta: [
      { name: "BLANK", data: [0.016700000000000003], color: "#ebebeb" },
      { name: "Evaluation", data: [4.9999999999999996e-5], color: "#2286de" },
      { name: "BLANK", data: [0.08373333333333334], color: "#ebebeb" },
      { name: "Monitoring", data: [0.005399999999999999], color: "#104469" },
      { name: "BLANK", data: [0.014566666666666683], color: "#ebebeb" },
      { name: "Monitoring", data: [0.005366666666666658], color: "#104469" },
      { name: "BLANK", data: [0.011033333333333341], color: "#ebebeb" },
      { name: "Monitoring", data: [0.026316666666666655], color: "#104469" },
      { name: "BLANK", data: [0.00145], color: "#ebebeb" },
      { name: "Orientation", data: [0.0059], color: "#175a91" },
      { name: "BLANK", data: [0.01185], color: "#ebebeb" },
      { name: "Orientation", data: [0.001866666666666658], color: "#175a91" },
      { name: "BLANK", data: [0.055350000000000024], color: "#ebebeb" },
      { name: "Monitoring", data: [0.003083333333333316], color: "#104469" },
      { name: "BLANK", data: [0.0467], color: "#ebebeb" },
      { name: "Orientation", data: [0.0002333333333333679], color: "#175a91" },
      { name: "BLANK", data: [0.000933333333333316], color: "#ebebeb" },
      { name: "Planning", data: [0.003683333333333316], color: "#52ccfd" },
      { name: "BLANK", data: [0.052433333333333366], color: "#ebebeb" },
      { name: "Orientation", data: [0.0009499999999999999], color: "#175a91" },
      { name: "BLANK", data: [0.000583333333333316], color: "#ebebeb" },
      { name: "Orientation", data: [3.333333333331605e-5], color: "#175a91" },
      { name: "BLANK", data: [0.0201], color: "#ebebeb" },
      { name: "Monitoring", data: [0.0023499999999999997], color: "#104469" },
      { name: "BLANK", data: [0.05141666666666668], color: "#ebebeb" },
      { name: "Orientation", data: [0.00145], color: "#175a91" },
      { name: "BLANK", data: [0.039299999999999995], color: "#ebebeb" },
      { name: "Orientation", data: [0.0012499999999999998], color: "#175a91" },
      { name: "BLANK", data: [0.020766666666666735], color: "#ebebeb" },
      { name: "Orientation", data: [0.000483333333333316], color: "#175a91" },
      { name: "BLANK", data: [0.001466666666666632], color: "#ebebeb" },
      { name: "Monitoring", data: [0.0197], color: "#104469" },
      { name: "BLANK", data: [0.03036666666666663], color: "#ebebeb" },
      { name: "Orientation", data: [0.002616666666666684], color: "#175a91" },
      { name: "BLANK", data: [0.11993333333333336], color: "#ebebeb" },
      { name: "Orientation", data: [0.0009833333333333159], color: "#175a91" },
      { name: "BLANK", data: [0.1352], color: "#ebebeb" },
      { name: "Orientation", data: [0.0001333333333333679], color: "#175a91" },
      { name: "BLANK", data: [0.1166], color: "#ebebeb" },
      { name: "Orientation", data: [0.0015500000000000518], color: "#175a91" },
      { name: "BLANK", data: [0.2044666666666667], color: "#ebebeb" },
      { name: "Orientation", data: [0.0016666666666665282], color: "#175a91" },
      { name: "BLANK", data: [0.27216666666666683], color: "#ebebeb" },
      { name: "Monitoring", data: [0.001933333333333264], color: "#104469" },
      { name: "BLANK", data: [0.08479999999999999], color: "#ebebeb" },
      { name: "Monitoring", data: [0.0012], color: "#104469" },
      { name: "BLANK", data: [0.1681833333333333], color: "#ebebeb" },
      { name: "Orientation", data: [0.02196666666666663], color: "#175a91" },
      { name: "Monitoring", data: [0.01793333333333347], color: "#104469" },
      { name: "BLANK", data: [0.7467833333333332], color: "#ebebeb" },
      { name: "Orientation", data: [0.0008833333333334197], color: "#175a91" },
      { name: "BLANK", data: [0.0015499999999999481], color: "#ebebeb" },
      { name: "Orientation", data: [0.00029999999999989627], color: "#175a91" },
      { name: "BLANK", data: [0.13668333333333363], color: "#ebebeb" },
      { name: "Orientation", data: [0.0005166666666663729], color: "#175a91" },
      { name: "BLANK", data: [3.90255], color: "#ebebeb" },
      { name: "Orientation", data: [0.08731666666666636], color: "#175a91" },
      { name: "Monitoring", data: [0.03034999999999953], color: "#104469" },
      { name: "BLANK", data: [1.0671833333333345], color: "#ebebeb" },
      { name: "Monitoring", data: [0.08494999999999973], color: "#104469" },
      { name: "Monitoring", data: [0.019549999999999946], color: "#104469" },
      { name: "Monitoring", data: [0.10015000000000056], color: "#104469" },
      { name: "BLANK", data: [3.5649000000000006], color: "#ebebeb" },
      { name: "Monitoring", data: [0.07139999999999937], color: "#104469" },
      { name: "BLANK", data: [3.212483333333334], color: "#ebebeb" },
      { name: "Monitoring", data: [0.19686666666666672], color: "#104469" },
      { name: "BLANK", data: [0.031683333333332585], color: "#ebebeb" },
    ],
    m_perc: [
      { name: "Evaluation", data: 3.3457311258942857e-6 },
      { name: "Monitoring", data: 0.03924877183786582 },
      { name: "Orientation", data: 0.008705592389576883 },
      { name: "Planning", data: 0.00024646885960754455 },
    ],
    cog: [
      {
        name: "ESSAY_TASK_START",
        data: [0.016749999999999998],
        color: "#000000",
      },
      { name: "Re Reading", data: [6.666666666666774e-5], color: "#e34d4e" },
      { name: "Re Reading", data: [0.0013166666666666676], color: "#e34d4e" },
      { name: "BLANK", data: [0.014433333333333334], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0031833333333333353], color: "#dd1d08" },
      { name: "Write Essay", data: [0.010549999999999999], color: "#dd1d08" },
      { name: "BLANK", data: [0.01385], color: "#ebebeb" },
      {
        name: "Elaboration/Organization",
        data: [0.04035000000000001],
        color: "#ffa9aa",
      },
      { name: "BLANK", data: [0.025366666666666655], color: "#ebebeb" },
      { name: "Re Reading", data: [0.006183333333333342], color: "#e34d4e" },
      { name: "Write Essay", data: [0.0026333333333333417], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00215], color: "#dd1d08" },
      { name: "BLANK", data: [0.02635], color: "#ebebeb" },
      {
        name: "Elaboration/Organization",
        data: [0.0004666666666666839],
        color: "#ffa9aa",
      },
      { name: "BLANK", data: [0.006883333333333315], color: "#ebebeb" },
      { name: "Re Reading", data: [0.0022833333333333416], color: "#e34d4e" },
      { name: "BLANK", data: [0.0076833333333333415], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0018499999999999999], color: "#dd1d08" },
      { name: "BLANK", data: [0.0018999999999999998], color: "#ebebeb" },
      { name: "Write Essay", data: [4.9999999999999996e-5], color: "#dd1d08" },
      { name: "Write Essay", data: [0.011033333333333341], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0007833333333333419],
        color: "#ffa9aa",
      },
      { name: "BLANK", data: [0.02115], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0018499999999999999], color: "#dd1d08" },
      { name: "Re Reading", data: [0.004066666666666658], color: "#e34d4e" },
      { name: "Write Essay", data: [0.01596666666666668], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00031666666666663206], color: "#dd1d08" },
      { name: "BLANK", data: [0.003116666666666684], color: "#ebebeb" },
      { name: "Write Essay", data: [0.03743333333333331], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00695], color: "#dd1d08" },
      { name: "BLANK", data: [0.002533333333333316], color: "#ebebeb" },
      { name: "First Reading", data: [0.0009], color: "#690008" },
      { name: "BLANK", data: [0.0037166666666666836], color: "#ebebeb" },
      { name: "Write Essay", data: [0.030166666666666682], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0013], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.001266666666666684],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.018349999999999998], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0012499999999999998], color: "#dd1d08" },
      { name: "BLANK", data: [0.0009833333333333159], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0005499999999999999], color: "#dd1d08" },
      { name: "Write Essay", data: [0.019933333333333313], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00011666666666668394], color: "#dd1d08" },
      { name: "BLANK", data: [0.002383333333333316], color: "#ebebeb" },
      { name: "Write Essay", data: [0.002616666666666684], color: "#dd1d08" },
      { name: "Write Essay", data: [0.008616666666666684], color: "#dd1d08" },
      { name: "First Reading", data: [0.009366666666666683], color: "#690008" },
      { name: "BLANK", data: [0.004166666666666632], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0012], color: "#dd1d08" },
      { name: "Elaboration/Organization", data: [0.0017], color: "#ffa9aa" },
      { name: "Write Essay", data: [0.0009499999999999999], color: "#dd1d08" },
      { name: "BLANK", data: [0.00195], color: "#ebebeb" },
      { name: "Write Essay", data: [0.006516666666666632], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0032666666666666838], color: "#dd1d08" },
      { name: "BLANK", data: [0.000533333333333316], color: "#ebebeb" },
      { name: "Write Essay", data: [0.001083333333333316], color: "#dd1d08" },
      { name: "Write Essay", data: [0.002466666666666684], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0009499999999999999],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.0012], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0038333333333333158], color: "#dd1d08" },
      { name: "BLANK", data: [0.0005333333333333678], color: "#ebebeb" },
      { name: "Write Essay", data: [0.00025], color: "#dd1d08" },
      { name: "BLANK", data: [0.001483333333333316], color: "#ebebeb" },
      { name: "Write Essay", data: [0.004566666666666683], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0013166666666666839], color: "#dd1d08" },
      { name: "BLANK", data: [0.0008333333333333159], color: "#ebebeb" },
      { name: "Write Essay", data: [0.009483333333333368], color: "#dd1d08" },
      { name: "Write Essay", data: [0.001], color: "#dd1d08" },
      { name: "BLANK", data: [0.0007], color: "#ebebeb" },
      { name: "Write Essay", data: [0.01741666666666668], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00031666666666663206], color: "#dd1d08" },
      { name: "BLANK", data: [0.0013166666666666839], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0018833333333333159], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0003666666666666839], color: "#dd1d08" },
      { name: "BLANK", data: [0.001283333333333316], color: "#ebebeb" },
      { name: "Write Essay", data: [0.014083333333333314], color: "#dd1d08" },
      { name: "Write Essay", data: [0.006633333333333368], color: "#dd1d08" },
      { name: "BLANK", data: [0.021683333333333315], color: "#ebebeb" },
      { name: "Write Essay", data: [0.009549999999999947], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0025666666666667357], color: "#dd1d08" },
      { name: "BLANK", data: [0.0010499999999999481], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0008333333333333679], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.001449999999999948],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.006766666666666632], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0009], color: "#dd1d08" },
      { name: "Re Reading", data: [0.001066666666666632], color: "#e34d4e" },
      { name: "Write Essay", data: [0.0037333333333333676], color: "#dd1d08" },
      { name: "BLANK", data: [0.005349999999999948], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0314], color: "#dd1d08" },
      { name: "Write Essay", data: [0.003383333333333316], color: "#dd1d08" },
      { name: "BLANK", data: [0.0002333333333333679], color: "#ebebeb" },
      { name: "Write Essay", data: [0.000583333333333316], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00041666666666668393], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0016166666666665801],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.014966666666666734], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0004500000000000518], color: "#dd1d08" },
      { name: "Elaboration/Organization", data: [0.001], color: "#ffa9aa" },
      { name: "Write Essay", data: [0.04216666666666663], color: "#dd1d08" },
      { name: "Write Essay", data: [0.001166666666666632], color: "#dd1d08" },
      { name: "BLANK", data: [0.0012666666666667358], color: "#ebebeb" },
      { name: "Write Essay", data: [0.00011666666666658024], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0019333333333333678], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0008499999999999481],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.0013500000000000517], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0007], color: "#dd1d08" },
      { name: "BLANK", data: [0.0017166666666666838], color: "#ebebeb" },
      { name: "Write Essay", data: [0.013966666666666735], color: "#dd1d08" },
      { name: "Write Essay", data: [1.6666666666683947e-5], color: "#dd1d08" },
      { name: "BLANK", data: [0.001016666666666684], color: "#ebebeb" },
      { name: "Write Essay", data: [0.004016666666666684], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0007999999999999999], color: "#dd1d08" },
      { name: "Write Essay", data: [0.048299999999999996], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00039999999999999996], color: "#dd1d08" },
      { name: "BLANK", data: [0.0009166666666666839], color: "#ebebeb" },
      { name: "Write Essay", data: [0.012216666666666683], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0006499999999999481], color: "#dd1d08" },
      { name: "BLANK", data: [0.0015666666666667357], color: "#ebebeb" },
      { name: "Write Essay", data: [0.06453333333333336], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0015833333333334196], color: "#dd1d08" },
      { name: "BLANK", data: [0.00016666666666663208], color: "#ebebeb" },
      { name: "Write Essay", data: [0.021133333333333365], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0009833333333334198], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0020500000000000518],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.006566666666666631], color: "#dd1d08" },
      { name: "Write Essay", data: [0.03363333333333336], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0012], color: "#dd1d08" },
      { name: "BLANK", data: [0.004], color: "#ebebeb" },
      { name: "Write Essay", data: [0.02221666666666658], color: "#dd1d08" },
      { name: "BLANK", data: [0.0008333333333333679], color: "#ebebeb" },
      { name: "Write Essay", data: [0.022249999999999947], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0014999999999999998], color: "#dd1d08" },
      { name: "BLANK", data: [0.001583333333333316], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0014833333333334196], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0012500000000000519], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.00016666666666663208],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.03756666666666663], color: "#dd1d08" },
      { name: "Write Essay", data: [0.000383333333333316], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0013166666666667875],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.06293333333333347], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00018333333333331604], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0012166666666666838],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.017816666666666474], color: "#dd1d08" },
      { name: "Write Essay", data: [0.001183333333333316], color: "#dd1d08" },
      { name: "BLANK", data: [0.0019333333333334715], color: "#ebebeb" },
      { name: "Write Essay", data: [0.02091666666666658], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0003666666666666321], color: "#dd1d08" },
      { name: "Re Reading", data: [0.002266666666666736], color: "#e34d4e" },
      { name: "Write Essay", data: [0.005866666666666528], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0013500000000001553], color: "#dd1d08" },
      { name: "BLANK", data: [0.0014999999999998962], color: "#ebebeb" },
      { name: "Write Essay", data: [0.006183333333333316], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0013333333333334714], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0003000000000001037],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.019866666666666734], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0005500000000001555], color: "#dd1d08" },
      { name: "BLANK", data: [0.0016333333333333677], color: "#ebebeb" },
      { name: "Write Essay", data: [0.014499999999999895], color: "#dd1d08" },
      { name: "Write Essay", data: [5.000000000005185e-5], color: "#dd1d08" },
      { name: "BLANK", data: [0.0016999999999998963], color: "#ebebeb" },
      { name: "Write Essay", data: [0.04346666666666673], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0011499999999999482], color: "#dd1d08" },
      { name: "BLANK", data: [0.005450000000000051], color: "#ebebeb" },
      { name: "Write Essay", data: [0.020383333333333316], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0011166666666665801], color: "#dd1d08" },
      { name: "BLANK", data: [0.0012166666666666838], color: "#ebebeb" },
      { name: "Write Essay", data: [0.037583333333333316], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0003000000000001037], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0006666666666665283],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.05126666666666673], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0008166666666666838], color: "#dd1d08" },
      { name: "BLANK", data: [0.0006], color: "#ebebeb" },
      { name: "Write Essay", data: [0.036499999999999894], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0002333333333333679], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0030333333333333675],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.06161666666666668], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0004833333333334197], color: "#dd1d08" },
      { name: "BLANK", data: [0.001366666666666632], color: "#ebebeb" },
      { name: "Write Essay", data: [0.004700000000000103], color: "#dd1d08" },
      { name: "BLANK", data: [0.0019666666666666318], color: "#ebebeb" },
      { name: "Write Essay", data: [0.010099999999999896], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00019999999999999998], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0013000000000001036],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.03503333333333316], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0014], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0010333333333333678],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.0002833333333334197], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00039999999999999996], color: "#dd1d08" },
      { name: "BLANK", data: [0.0007499999999999481], color: "#ebebeb" },
      { name: "Write Essay", data: [0.019133333333333263], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0008333333333333679], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0034166666666666837],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.010499999999999895], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00019999999999999998], color: "#dd1d08" },
      { name: "BLANK", data: [0.0012333333333333677], color: "#ebebeb" },
      { name: "Write Essay", data: [0.045316666666666575], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0034833333333334194], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.00029999999999989627],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.02065000000000005], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0012500000000000519], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0006833333333332123],
        color: "#ffa9aa",
      },
      { name: "BLANK", data: [0.0409000000000001], color: "#ebebeb" },
      {
        name: "Elaboration/Organization",
        data: [0.010166666666666631],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.0028499999999998444], color: "#dd1d08" },
      { name: "Write Essay", data: [0.015616666666666683], color: "#dd1d08" },
      { name: "BLANK", data: [0.005283333333333419], color: "#ebebeb" },
      { name: "Re Reading", data: [0.006450000000000051], color: "#e34d4e" },
      { name: "Write Essay", data: [0.010333333333333264], color: "#dd1d08" },
      { name: "Re Reading", data: [0.00471666666666658], color: "#e34d4e" },
      { name: "BLANK", data: [0.039949999999999944], color: "#ebebeb" },
      { name: "Re Reading", data: [0.0015500000000001554], color: "#e34d4e" },
      { name: "Write Essay", data: [0.009949999999999947], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0012166666666666838], color: "#dd1d08" },
      { name: "BLANK", data: [0.0033166666666667875], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0037833333333333156], color: "#dd1d08" },
      { name: "Write Essay", data: [1.6666666666683947e-5], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0026833333333334194],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.0024333333333333676], color: "#dd1d08" },
      { name: "Write Essay", data: [9.99999999998963e-5], color: "#dd1d08" },
      { name: "BLANK", data: [0.0007333333333334716], color: "#ebebeb" },
      { name: "Write Essay", data: [0.013383333333333315], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0006666666666665283], color: "#dd1d08" },
      { name: "Re Reading", data: [0.001566666666666632], color: "#e34d4e" },
      { name: "Write Essay", data: [1.6666666666683947e-5], color: "#dd1d08" },
      { name: "Re Reading", data: [0.0032333333333333675], color: "#e34d4e" },
      { name: "Write Essay", data: [0.008133333333333263], color: "#dd1d08" },
      { name: "Write Essay", data: [0.017166666666666632], color: "#dd1d08" },
      { name: "BLANK", data: [0.03651666666666679], color: "#ebebeb" },
      { name: "Write Essay", data: [0.008066666666666528], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0008666666666667357], color: "#dd1d08" },
      { name: "Re Reading", data: [0.0005166666666665802], color: "#e34d4e" },
      { name: "Write Essay", data: [0.214], color: "#dd1d08" },
      { name: "Write Essay", data: [0.005149999999999948], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.012083333333333418],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.11375000000000014], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0015499999999999481], color: "#dd1d08" },
      { name: "BLANK", data: [0.0020500000000000518], color: "#ebebeb" },
      { name: "Write Essay", data: [0.102], color: "#dd1d08" },
      { name: "Write Essay", data: [0.00033333333333326415], color: "#dd1d08" },
      { name: "BLANK", data: [0.0026166666666664765], color: "#ebebeb" },
      { name: "Write Essay", data: [0.04025000000000026], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0012833333333334197], color: "#dd1d08" },
      { name: "BLANK", data: [0.0005500000000001555], color: "#ebebeb" },
      { name: "Write Essay", data: [0.03551666666666658], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0021000000000001035], color: "#dd1d08" },
      { name: "BLANK", data: [0.0036833333333334195], color: "#ebebeb" },
      { name: "Write Essay", data: [0.057099999999999894], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0066499999999998435], color: "#dd1d08" },
      {
        name: "First Reading",
        data: [0.0059499999999999475],
        color: "#690008",
      },
      { name: "Write Essay", data: [0.023000000000000204], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0006666666666665283], color: "#dd1d08" },
      { name: "BLANK", data: [0.0009166666666667875], color: "#ebebeb" },
      { name: "Write Essay", data: [0.00151666666666658], color: "#dd1d08" },
      { name: "BLANK", data: [0.00033333333333326415], color: "#ebebeb" },
      { name: "Write Essay", data: [0.007716666666666787], color: "#dd1d08" },
      { name: "Write Essay", data: [0.001583333333333316], color: "#dd1d08" },
      { name: "BLANK", data: [0.0013499999999997407], color: "#ebebeb" },
      { name: "Write Essay", data: [0.016250000000000257], color: "#dd1d08" },
      { name: "Write Essay", data: [0.001533333333333264], color: "#dd1d08" },
      { name: "BLANK", data: [0.00031666666666658024], color: "#ebebeb" },
      { name: "Write Essay", data: [0.06551666666666657], color: "#dd1d08" },
      { name: "Write Essay", data: [0.003883333333333627], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.018433333333333368],
        color: "#ffa9aa",
      },
      { name: "BLANK", data: [0.01428333333333321], color: "#ebebeb" },
      { name: "Write Essay", data: [0.0032500000000000515], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0024500000000000515], color: "#dd1d08" },
      { name: "BLANK", data: [0.0005499999999997407], color: "#ebebeb" },
      { name: "Write Essay", data: [0.1370999999999999], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0024666666666667354], color: "#dd1d08" },
      { name: "BLANK", data: [0.00033333333333326415], color: "#ebebeb" },
      { name: "Write Essay", data: [0.09591666666666698], color: "#dd1d08" },
      { name: "Write Essay", data: [0.010483333333333004], color: "#dd1d08" },
      { name: "BLANK", data: [0.001116666666666995], color: "#ebebeb" },
      { name: "Write Essay", data: [0.17631666666666657], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0017666666666664246], color: "#dd1d08" },
      {
        name: "Elaboration/Organization",
        data: [0.0009000000000001036],
        color: "#ffa9aa",
      },
      { name: "Write Essay", data: [0.14343333333333355], color: "#dd1d08" },
      { name: "Write Essay", data: [0.06403333333333294], color: "#dd1d08" },
      { name: "BLANK", data: [0.04556666666666704], color: "#ebebeb" },
      { name: "Write Essay", data: [2.308066666666667], color: "#dd1d08" },
      { name: "Write Essay", data: [0.001949999999999948], color: "#dd1d08" },
      { name: "BLANK", data: [0.00303333333333316], color: "#ebebeb" },
      { name: "Write Essay", data: [0.47423333333333395], color: "#dd1d08" },
      { name: "Write Essay", data: [0.08876666666666662], color: "#dd1d08" },
      { name: "Re Reading", data: [0.34688333333333254], color: "#e34d4e" },
      { name: "BLANK", data: [0.1248], color: "#ebebeb" },
      { name: "Write Essay", data: [0.5375000000000006], color: "#dd1d08" },
      { name: "Write Essay", data: [0.004650000000000259], color: "#dd1d08" },
      { name: "BLANK", data: [0.009933333333332848], color: "#ebebeb" },
      { name: "Write Essay", data: [0.054100000000000516], color: "#dd1d08" },
      { name: "Write Essay", data: [0.038250000000000256], color: "#dd1d08" },
      { name: "Re Reading", data: [0.0012666666666671506], color: "#e34d4e" },
      { name: "BLANK", data: [0.3369166666666672], color: "#ebebeb" },
      { name: "Write Essay", data: [0.03253333333333223], color: "#dd1d08" },
      { name: "Write Essay", data: [0.024249999999999012], color: "#dd1d08" },
      { name: "Re Reading", data: [0.020583333333333523], color: "#e34d4e" },
      { name: "BLANK", data: [0.204716666666667], color: "#ebebeb" },
      { name: "Write Essay", data: [1.235233333333334], color: "#dd1d08" },
      { name: "Write Essay", data: [6.666666666673579e-5], color: "#dd1d08" },
      { name: "Write Essay", data: [0.1187666666666662], color: "#dd1d08" },
      { name: "Write Essay", data: [1.2804166666666665], color: "#dd1d08" },
      { name: "Write Essay", data: [0.08266666666666611], color: "#dd1d08" },
      { name: "Re Reading", data: [0.847633333333332], color: "#e34d4e" },
      { name: "BLANK", data: [0.08285000000000005], color: "#ebebeb" },
      { name: "Write Essay", data: [0.7067000000000002], color: "#dd1d08" },
      { name: "Write Essay", data: [0.12998333333333414], color: "#dd1d08" },
      { name: "Write Essay", data: [2.2879000000000005], color: "#dd1d08" },
      { name: "Write Essay", data: [0.0441833333333331], color: "#dd1d08" },
      { name: "Re Reading", data: [0.03220000000000021], color: "#e34d4e" },
      { name: "BLANK", data: [0.22856666666666722], color: "#ebebeb" },
    ],
    c_perc: [
      { name: "Re Reading", data: 0.08590833811958751 },
      { name: "Write Essay", data: 0.8109528084624693 },
      { name: "Elaboration/Organization", data: 0.006387000719332198 },
      { name: "First Reading", data: 0.0020710075669285698 },
    ],
    pplg: [10, 12, 2]
  }),
    computed: {
        chartOptionsMeta: function () {
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
                title: {
                    text: 'Metacognition'
                },
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
                            return (Math.round(val * 100) / 100).toFixed(2) + " min";
                        }
                    }
                },
                tooltip: {
                    x: {
                        show: false
                        // formatter: undefined,
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
        },
        chartOptionsCog: function () {
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
                title: {
                    text: 'Cognition'
                },
                xaxis: {
                    categories: [""],
                    labels: {
                        show: true
                    }
                },
                tooltip: {
                    x: {
                        show: false
                        // formatter: undefined,
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return (Math.round(val * 100) / 100).toFixed(2) + " min";
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
