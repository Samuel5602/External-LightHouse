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
                    <v-card-title>{{$t("PERCENTAGES.cog_titel")}}</v-card-title>
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
                    <v-card-title>{{$t("PERCENTAGES.meta_titel")}}</v-card-title>
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
                    <v-card-text>{{$t("EXPLANATIONS.OTHER")}}</v-card-text>
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
    translateHover(parameter) {
      // `this` inside methods point to the Vue instance
      var temp = parameter.split(" ").join("").toUpperCase();
      this.uitleg = "EXPLANATIONS." + temp;
      // `event` is the native DOM event
    },
  },
  data: () => ({
    uitleg: "",
    meta:
[{'name': 'Niet Gedetecteerd', 'data': [0.0167], 'color': '#ebebeb'}, {'name': 'Evaluatie', 'data': [4.9999999999998234e-05], 'color': '#2286de'}, {'name': 'Niet Gedetecteerd', 'data': [0.08373333333333333], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.005399999999999995], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.014566666666666665], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.0053666666666666776], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.011033333333333329], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.026316666666666672], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.0014499999999999951], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.005899999999999992], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.01185], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0018666666666666788], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.05535000000000001], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.0030833333333333147], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.04670000000000001], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.00023333333333333973], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.0009333333333333199], 'color': '#ebebeb'}, {'name': 'Plannen', 'data': [0.0036833333333333423], 'color': '#52ccfd'}, {'name': 'Niet Gedetecteerd', 'data': [0.05243333333333332], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0009500000000000177], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.0005833333333333298], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [3.333333333331752e-05], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.020100000000000028], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.002350000000000017], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.051416666666666666], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0014499999999999756], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.039300000000000015], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0012499999999999924], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.02076666666666665], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0004833333333332992], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.0014666666666666734], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.019700000000000023], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.0303666666666667], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0026166666666666352], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.11993333333333334], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0009833333333332962], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.1352000000000001], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.00013333333333327008], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.11659999999999995], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0015500000000000062], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.20446666666666677], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0016666666666666566], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.27216666666666656], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.0019333333333333529], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.08479999999999989], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.0012000000000000552], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.16818333333333352], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.021966666666666627], 'color': '#175a91'}, {'name': 'Monitoren', 'data': [0.017933333333333412], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [0.7467833333333334], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0008833333333334997], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.0015499999999998501], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.00030000000000009186], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [0.13668333333333324], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.0005166666666666167], 'color': '#175a91'}, {'name': 'Niet Gedetecteerd', 'data': [3.9025499999999993], 'color': '#ebebeb'}, {'name': 'Orientatie', 'data': [0.08731666666666665], 'color': '#175a91'}, {'name': 'Monitoren', 'data': [0.030350000000000238], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [1.067183333333334], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.08494999999999947], 'color': '#104469'}, {'name': 'Monitoren', 'data': [0.01954999999999943], 'color': '#104469'}, {'name': 'Monitoren', 'data': [0.10015000000000038], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [3.5649000000000006], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.07139999999999813], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [3.212483333333333], 'color': '#ebebeb'}, {'name': 'Monitoren', 'data': [0.1968666666666674], 'color': '#104469'}, {'name': 'Niet Gedetecteerd', 'data': [30.087266666666668], 'color': '#ebebeb'}]
, m_perc:
[{'name': 'Orientatie', 'data': 0.0028911111111111104}, {'name': 'Plannen', 'data': 8.185185185185205e-05}, {'name': 'Evaluatie', 'data': 1.1111111111110719e-06}, {'name': 'Monitoren', 'data': 0.013034444444444413}]
, m_personal:
{'OrientatieMins': 0.13009999999999997, 'OrientatieStart': 0.16461666666666666, 'PlannenMins': 0.0036833333333333423, 'PlannenStart': 0.29053333333333337, 'EvaluatieMins': 4.9999999999998234e-05, 'EvaluatieStart': 0.0167, 'MonitorenMins': 0.5865499999999986, 'MonitorenStart': 0.10048333333333333}
, cog:
[{'name': 'ESSAY_TASK_START', 'data': [0.016749999999999998], 'color': '#000000'}, {'name': 'Herlezen', 'data': [6.666666666666675e-05], 'color': '#e34d4e'}, {'name': 'Herlezen', 'data': [0.0013166666666666665], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.014433333333333333], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0031833333333333306], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.01055], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.013849999999999996], 'color': '#ebebeb'}, {'name': 'Verwerking / Organisatie', 'data': [0.04035000000000001], 'color': '#ffa9aa'}, {'name': 'Niet Gedetecteerd', 'data': [0.025366666666666655], 'color': '#ebebeb'}, {'name': 'Herlezen', 'data': [0.006183333333333346], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.002633333333333333], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0021500000000000143], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.026349999999999988], 'color': '#ebebeb'}, {'name': 'Verwerking / Organisatie', 'data': [0.00046666666666667946], 'color': '#ffa9aa'}, {'name': 'Niet Gedetecteerd', 'data': [0.006883333333333326], 'color': '#ebebeb'}, {'name': 'Herlezen', 'data': [0.0022833333333333234], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.007683333333333357], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.001849999999999981], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0018999999999999963], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [5.000000000001531e-05], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.011033333333333329], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.000783333333333352], 'color': '#ffa9aa'}, {'name': 'Niet Gedetecteerd', 'data': [0.021149999999999995], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.001849999999999981], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.00406666666666665], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.015966666666666664], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00031666666666667256], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.003116666666666632], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.03743333333333333], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.006949999999999981], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0025333333333333414], 'color': '#ebebeb'}, {'name': 'Lezen', 'data': [0.0009000000000000024], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.00371666666666666], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.03016666666666668], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0013000000000000077], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0012666666666666512], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.018349999999999998], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0012499999999999924], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0009833333333333352], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0005500000000000123], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.019933333333333324], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00011666666666665035], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0023833333333333345], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0026166666666667133], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.008616666666666677], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.009366666666666672], 'color': '#690008'}, {'name': 'Niet Gedetecteerd', 'data': [0.0041666666666666415], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0011999999999999771], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.001699999999999974], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.0009499999999999786], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0019499999999999726], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0065166666666666585], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.003266666666666678], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0005333333333333145], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0010833333333333268], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0024666666666666674], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0009500000000000567], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.0012000000000000552], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.003833333333333388], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0005333333333333145], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0002499999999999985], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0014833333333332931], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.004566666666666686], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0013166666666666275], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0008333333333333283], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.009483333333333323], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.000999999999999994], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0006999999999999802], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.01741666666666672], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0003166666666667116], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0013166666666666275], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0018833333333333376], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00036666666666664884], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.00128333333333331], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.014083333333333326], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.006633333333333309], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.021683333333333388], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.009549999999999958], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00256666666666662], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0010500000000000093], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0008333333333333283], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0014499999999999756], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.006766666666666657], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0008999999999999633], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.001066666666666629], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.0037333333333332795], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.005349999999999999], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.03140000000000001], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0033833333333333285], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0005833333333333298], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00041666666666666415], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0016166666666666413], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.01496666666666667], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00044999999999998166], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.000999999999999994], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.042166666666666644], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0011666666666666596], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0012666666666666122], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.00011666666666672841], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0019333333333333529], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0008500000000000261], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.001349999999999945], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0006999999999999802], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.001716666666666672], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.013966666666666676], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [1.6666666666619728e-05], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0010166666666666917], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.004016666666666674], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0007999999999999327], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.04830000000000004], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00039999999999996635], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0009166666666667392], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.012216666666666608], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0006500000000000429], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.001566666666666626], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.06453333333333332], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0015833333333332457], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0211333333333333], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.000983333333333218], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.002050000000000003], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.006566666666666752], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.033633333333333376], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0012000000000000552], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.003999999999999976], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.022216666666666704], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0008333333333333283], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0222500000000001], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.001499999999999991], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0015833333333334018], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.001483333333333215], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0012499999999999144], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.00016666666666666566], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.03756666666666657], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0003833333333333466], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0013166666666667055], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.0629333333333333], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0001833333333334415], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.001216666666666675], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.017816666666666762], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0011833333333332793], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0019333333333333529], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.020916666666666774], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0003666666666665708], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.002266666666666684], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.005866666666666694], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.001349999999999945], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.001500000000000147], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.006183333333333249], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0013333333333333253], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.00029999999999993573], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.019866666666666765], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0005500000000000123], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.001633333333333261], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.014500000000000068], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [5.000000000001531e-05], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0017000000000000522], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.04346666666666665], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0011500000000000399], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.005449999999999951], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.020383333333333382], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0011166666666666443], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.001216666666666675], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.037583333333333344], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00029999999999993573], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0006666666666666626], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.051266666666666696], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0008166666666667086], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0005999999999998715], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.03650000000000009], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0002333333333333007], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0030333333333332213], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.06161666666666659], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00048333333333337725], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0013666666666667208], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.004700000000000034], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0019666666666665923], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.010100000000000126], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00019999999999990511], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0012999999999999297], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.0350333333333335], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0014000000000001164], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0010333333333332334], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.000283333333333316], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0004000000000001225], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0007499999999999174], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.019133333333333467], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0008333333333334844], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.003416666666666568], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.01049999999999978], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00020000000000006124], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0012333333333332946], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.045316666666666595], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.003483333333333359], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.00030000000000009186], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.020649999999999766], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0012500000000000705], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0006833333333334385], 'color': '#ffa9aa'}, {'name': 'Niet Gedetecteerd', 'data': [0.040900000000000034], 'color': '#ebebeb'}, {'name': 'Verwerking / Organisatie', 'data': [0.010166666666666761], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.002850000000000248], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.015616666666666869], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.005283333333333286], 'color': '#ebebeb'}, {'name': 'Herlezen', 'data': [0.006449999999999789], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.01033333333333327], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.004716666666666654], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.039950000000000055], 'color': '#ebebeb'}, {'name': 'Herlezen', 'data': [0.0015499999999998501], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.009950000000000236], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.001216666666666831], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0033166666666665373], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.003783333333333451], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [1.6666666666463603e-05], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.0026833333333334264], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.00243333333333335], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00010000000000003062], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0007333333333331415], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.013383333333333268], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0006666666666666626], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.001566666666666626], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [1.6666666666463603e-05], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.0032333333333332825], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.008133333333333222], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.01716666666666672], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0365166666666664], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.008066666666666743], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0008666666666667239], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.0005166666666666167], 'color': '#e34d4e'}, {'name': 'Schrijven', 'data': [0.21399999999999997], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.005150000000000016], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.012083333333333494], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.11374999999999985], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0015499999999998501], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.002050000000000003], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.10200000000000001], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0003333333333333313], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0026166666666666352], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.040249999999999835], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.00128333333333331], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0005500000000001684], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.035516666666666405], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0021000000000000185], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0036833333333334203], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0571], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.006650000000000163], 'color': '#dd1d08'}, {'name': 'Lezen', 'data': [0.005949999999999948], 'color': '#690008'}, {'name': 'Schrijven', 'data': [0.023000000000000173], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0006666666666666626], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0009166666666667392], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0015166666666666107], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.007716666666666948], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0015833333333334018], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0013500000000001011], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.01624999999999998], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0015333333333333865], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.06551666666666653], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0038833333333331693], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.018433333333333253], 'color': '#ffa9aa'}, {'name': 'Niet Gedetecteerd', 'data': [0.014283333333333231], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.0032500000000000584], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0024499999999998134], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0005500000000001684], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.13709999999999983], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0024666666666665893], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.09591666666666679], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.010483333333333004], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0011166666666671127], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.17631666666666643], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.001766666666666375], 'color': '#dd1d08'}, {'name': 'Verwerking / Organisatie', 'data': [0.0009000000000002756], 'color': '#ffa9aa'}, {'name': 'Schrijven', 'data': [0.14343333333333314], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.06403333333333316], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.04556666666666667], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [2.308066666666667], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.0019500000000002848], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.0030333333333332213], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.47423333333333384], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.08876666666666616], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.34688333333333266], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.12480000000000074], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.5375000000000003], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.004650000000000487], 'color': '#dd1d08'}, {'name': 'Niet Gedetecteerd', 'data': [0.00993333333333346], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.054099999999999704], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.038249999999999534], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.0012666666666674709], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.33691666666666686], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.03253333333333289], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.024250000000000244], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.020583333333333287], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.20471666666666638], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [1.2352333333333334], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [6.666666666585441e-05], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.1187666666666666], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [1.2804166666666665], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.08266666666666742], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.8476333333333332], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [0.0828499999999982], 'color': '#ebebeb'}, {'name': 'Schrijven', 'data': [0.706700000000001], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.12998333333333306], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [2.2879000000000005], 'color': '#dd1d08'}, {'name': 'Schrijven', 'data': [0.04418333333333302], 'color': '#dd1d08'}, {'name': 'Herlezen', 'data': [0.03220000000000112], 'color': '#e34d4e'}, {'name': 'Niet Gedetecteerd', 'data': [30.284149999999997], 'color': '#ebebeb'}]
, c_perc:
[{'name': 'Lezen', 'data': 0.0006877777777777759}, {'name': 'Herlezen', 'data': 0.028530000000000014}, {'name': 'Schrijven', 'data': 0.2693159259259259}]
, c_personal:
{'LezenMins': 0.030949999999999915, 'LezenStart': 0.2894166666666666, 'HerlezenMins': 1.2838500000000006, 'HerlezenStart': 0.016666666666666663, 'SchrijvenMins': 12.119216666666667, 'SchrijvenStart': 0.03248333333333333}
, pplg:
[6.67, 8.0, 1.33]


  }),
    computed: {
        chartOptionsMeta: function () {
            return {
                chart: {
                    events: {
                        dataPointMouseEnter: (e, chart, opts) => {
                            // you can call Vue methods now as "this" will point to the Vue instance when you use ES6 arrow function
                            this.translateHover(opts.w.config.series[opts.seriesIndex].name);
                            console.log(opts)
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
                            this.translateHover(opts.w.config.series[opts.seriesIndex].name);
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
