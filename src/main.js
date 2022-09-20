import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import underscore from 'vue-underscore';
import VueI18n from 'vue-i18n'
import GlobalServiceHandler from '@/globalServiceHandler';

Vue.config.productionTip = false
Vue.use(axios);
Vue.use(underscore);
Vue.use(VueI18n)

Vue.prototype.$serviceHandler = new GlobalServiceHandler();

const messages = {
  nl: {
    MAIN: {
      timeline: "Tijdlijn",
      results: "Resultaten"
    },
    PERCENTAGES: {
      meta_titel: "Metacognitie",
      cog_titel: "Cognitie",
      other: "Overige",
    },
    DASHBOARD: {
      titel: "Dashboard voor user",

    },
    EXPLANATIONS: {
      titel: 'Hover voor uitleg',
      NIETGEDETECTEERD: 'Er is geen proces gedetecteerd. Dit betekent niet dat je niks hebt gedaan. Het gedrag kon enkel niet gedetecteerd worden als een cognitief en/of metacognitief proces.',
      ORIENTATIE: 'Oriëntatie is het verkennen van de leeromgeving en het activeren van voorkennis. Voorbeelden van oriënterende activiteiten bij het schrijven van een essay zijn: inhoud scannen van een leeromgeving, bepalen van leerdoelen en de rubriek bekijken.',
      PLANNEN: 'Plannen heeft betrekking op activiteiten die jouw voorbereiding op het uitvoeren van de taak. Het gaat over het bepalen en plannen van activiteiten die nodig zijn om jouw leerdoel te behalen.',
      MONITOREN: 'Monitoren betreft het controleren van jouw leerproces en het controleren van jouw geplande leerstrategie. Ben ik nog steeds aan het leren op de manier, zoals ik van te voren bedacht heb? Voorbeelden van monitoringsactiviteiten zijn: annotaties en notities gebruiken, je planning controleren en de timer bekijken.',
      EVALUATIE: 'Evaluatie is het beoordelen van inhoudelijke informatie. In hoeverre is de tekst die je leest relevant voor het essay? Ben je aan het lezen wat nodig is volgens de instructie? Is de informatie die je leest inhoudelijk correct? Dit oordeel kan leiden tot het aanpassen van je leerstrategie.',
      LEZEN: 'Lezen valt onder cognitieve processen en weergeeft wanneer en hoe lang jij een tekst voor het eerste hebt gelezen.',
      HERLEZEN: 'Het cognitieve proces herlezen weergeeft wanneer en hoe lang jij een tekst nogmaals hebt gelezen.',
      SCHRIJVEN: 'Schrijven toont wanneer en hoe lang jij aan het schrijven was.',
      OTHER: "Niet gedetecteerd: geen matacognitieve en/of cognitieve processen gedetecteerd.",
      EMPTY: "Bij het schrijven van een essay maak je gebruik van activiteiten met betrekking tot cognitieve- en metacognitieve processen. De combinatie van deze activiteiten bepalen jouw leerstrategie. Een leerstrategie gaat over de manier waarop je een leertaak aanpakt en uitvoert."
    },
    EXP_TITLE: {
      titel: 'Hover voor uitleg',
      NIETGEDETECTEERD: 'Geen Proces Gedetecteerd',
      ORIENTATIE: 'Oriëntatie',
      PLANNEN: 'Plannen',
      MONITOREN: 'Monitoren',
      EVALUATIE: 'Evaluatie',
      LEZEN: 'Lezen',
      HERLEZEN: 'Herlezen',
      SCHRIJVEN: 'Schrijven',
      EMPTY: "Hover voor uitleg"
    },
    PERSONAL: {
      part1: "Je bent na ",
      part2: " minuten begonnen met ",
      part3: ". Je hebt in totaal ",
      part4: " minuten besteed aan "
    },
    Voorbeeld_reflectievragen: {
      value1: 'Wat valt je op als je naar jouw tijdlijn kijkt?',
      value2: 'Welke processen komen meer of minder voor en wanneer komen ze voor?',
      value3: 'Heeft deze aanpak jou wel of niet geholpen bij het schrijven van je essay? Waarom wel of niet?',
      value4: 'Wat zou je een volgende keer anders doen en waarom denk je dat dit je zou helpen?',
      titel: "Reflectie"
    },
    Spider: {
      titel: "Behaalde Leer Winst",
      pre: "Voor toets: ",
      post: "Na toets: ",
      lw: "Leer Winst: ",
      sc: "Overlap met bronteksten",
      aw: "Aantal Woorden",
      gc: "Samenhang tussen onderwerpen"
    }
  },
  en:
  {
    MAIN: {
      timeline: "Timeline",
      results: "Results"
    },
    PERCENTAGES: {
      meta_titel: "Metacognition",
      cog_titel: "Cognition",
      other: "Other",
    },
    DASHBOARD: {
      titel: "Dashboard for user"
    },
    EXPLANATIONS: {
      titel: 'Hover for explanation',
      NIETGEDETECTEERD: 'No cognitive process has been detected. This does not mean you have done nothing. The action you performed could not be detected as a cognitive and/or metacognitive process.',
      ORIENTATIE: 'Orientation is exploring the learning environment and activating prior knowledge. Examples of orientation activities during essay writing are: scanning the content of the learning environment, determining the learning goals, and looking at the rubric.',
      PLANNEN: 'Planning prepares you to execute the actual task. It is about planning time and planning activities, that enables you to reach your learning goals.',
      MONITOREN: 'Monitoring encompasses checking your learning process and controlling the execution of your planned strategies to pursue your learning goals. Am I still learning in the way I intended to learn? Examples of monitoring activities for writing the essay are: using annotations and notes, checking your planning, and checking the timer.',
      EVALUATIE: 'Evaluation is reviewing content information. To what extent is the text you are reading relevant to the essay? Are you reading what is required by the instruction? Is the information you read substantively correct? This evaluation can lead to adjusting your learning strategy.',
      LEZEN: 'Reading is part of cognitive processes and reflects when and how long you first read a text.',
      HERLEZEN: 'The cognitive rereading process reflects when and how long you have read a text again.',
      SCHRIJVEN: 'Writing shows when and how long you were writing.',
      OTHER: "Not detected: no metacognition and/or cognition processes detected.",
      EMPTY: "While writing an essay, you make use of cognitive- and metacognitive activities. The combination of these activities defines your learning strategy. Learning strategy refers to how you approach and carry out a learning task."
    },
    EXP_TITLE: {
      titel: 'Hover for explanation',
      NIETGEDETECTEERD: 'Not detected',
      ORIENTATIE: 'Orientation',
      PLANNEN: 'Planning',
      MONITOREN: 'Monitoring',
      EVALUATIE: 'Evaluation',
      LEZEN: 'Reading',
      HERLEZEN: 'Rereading',
      SCHRIJVEN: 'Writing',
      OTHER: "Not detected",
      EMPTY: "Hover for explanation"
    },
    Voorbeeld_reflectievragen: {
      value1: 'What do you notice when you look at your timeline?',
      value2: 'Which processes are more or less common and when do they occur?',
      value3: 'Did this approach help you or not in writing your essay? Why or not?',
      value4: 'What would you do differently next time and why do you think this would help you?',
      titel: "Reflection"
    },
    PERSONAL: {
      part1: "After  ",
      part2: " minutes you started ",
      part3: ". In total you spent ",
      part4: " minutes on  "
    },
    Spider: {
      titel: "Learning Gain",
      pre: "Before Test: ",
      post: "After Test: ",
      lw: "Learning Gain: ",
      sc: "Overlap with information",
      aw: "Number of words",
      gc: "Cohesion between topics"
    }
  }
};
const i18n = new VueI18n({
  locale: 'nl',
  messages
});

new Vue({
  vuetify,
  render: h => h(App),
  i18n
}).$mount('#app')
