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
    PERCENTAGES:{
      meta_titel: "Metacognitie",
      cog_titel: "Cognitie"
    },
    DASHBOARD:{
      titel: "Dashboard voor user"
    },
    EXPLANATIONS: {
      titel: 'Hover voor uitleg',
      NIETGEDETECTEERD: 'Er is geen proces gedetecteerd. Dit betekent niet dat je niks hebt gedaan. Het gedrag kon enkel niet gedetecteerd worden als een cognitief en/of metacognitief proces.',
      ORIENTATIE: 'Orientatie is het verkennen van de leeromgeving en het activeren van voorkennis. Voorbeelden van oriënterende activiteiten bij het schrijven van een essay zijn: inhoud scannen van een leeromgeving, bepalen van leerdoelen en de rubriek bekijken.',
      PLANNEN: 'Plannen heeft betrekking op activiteiten die jouw voorbereiding op het uitvoeren van de taak. Het gaat over het bepalen en plannen van activiteiten die nodig zijn om jouw leerdoel te behalen.',
      MONITOREN: 'Monitoren betreft het controleren van jouw leerproces en het controleren van jouw geplande leerstrategie. Ben ik nog steeds aan het leren op de manier, zoals ik van te voren bedacht heb? Voorbeelden van monitoringsactiviteiten zijn: annotaties en notities gebruiken, je planning controleren en de timer bekijken.',
      EVALUATIE: 'Evaluatie hangt nauw samen met monitoring. In beide toets je je leerproces en gedrag, maar bij evaluatie voeg je een oordeel toe aan de activiteiten die je toetst. Bij monitoring controleer je of je leerproces verloopt zoals je van te voren hebt bedacht. Met evaluatieactiviteiten beoordeel je of de dingen die je doen nog steeds nuttig zijn om je leerdoel te behalen. Dit oordeel kan leiden tot het aanpassen van je leerstrategie. Voorbeelden van evaluatie bij het schrijven van een essay zijn: het controleren van de instructie en/of de rubriek om de relevantie van de informatie voor het essay te beoordelen.',
      LEZEN: 'Lezen valt onder cognitieve processen en weergeeft wanneer en hoe lang jij een tekst voor het eerste hebt gelezen.',
      HERLEZEN: 'Het cognitieve proces herlezen weergeeft wanneer en hoe lang jij een tekst nogmaals hebt gelezen.',
      SCHRIJVEN: 'Schrijven toont wanneer en hoe lang jij aan het schrijven was. ',
      OTHER: "BLANK: Geen informatie.",
    },
    PERSONAL:{
      part1 : "Je bent na ",
      part2 : " minuten begonnen met ",
      part3 : ". Je hebt in totaal ",
      part4 : " minuten besteed aan "
    },
    Voorbeeld_reflectievragen: {
      value: 'Wat val je op als je naar jouw tijdlijn kijkt? Welke processen komen meer of minder voor en wanneer komen ze voor? Heeft deze aanpak jou wel of niet geholpen bij het schrijven van je essay? Waarom wel of niet? Wat zou je een volgende keer anders doen en waarom denkt je dat dit je zou helpen? ',
      titel: "Reflectie"
    },
    Spider :{
      titel: "Behaalde Leer Winst",
      pre: "Voor Meting: ",
      post: "Na Meting: ",
      lw: "Leer Winst: "
    }
  },
  en:
  {
    PERCENTAGES:{
      meta_titel: "Metacognition",
      cog_titel: "Cognition"
    },
    DASHBOARD:{
      titel: "Dashboard for user"
    },
    EXPLANATIONS: {
      titel: 'Hover for explanation',
      NIETGEDETECTEERD: 'No cognitive process has been detected. This does not mean you have done nothing. The action you performed could not be detected as a cognitive and/or metacognitive process.',
      ORIENTATIE: 'Orientation is exploring the learning environment and activating prior knowledge. Examples of orientation activities during essay writing are: scanning the content of the learning environment, determining the learning goals, and looking at the rubric.',
      PLANNEN: 'Planning prepares you to execute the actual task. It is about planning time and planning activities, that enables you to reach your learning goals.',
      MONITOREN: 'Monitoring encompasses checking your learning process and controlling the execution of your planned strategies to pursue your learning goals. Am I still learning in the way I intended to learn? Examples of monitoring activities for writing the essay are: using annotations and notes, checking your planning, and checking the timer.',
      EVALUATIE: 'Evaluation activities are closely related to monitoring. In both, you are checking your learning process and behavior, but with evaluation, you add a judgement to these activities. At monitoring, you check whether your learning process is occurring in the way you planned. With evaluation activities, you rate if the things you do are still helpful to pursuing your learning goals and may lead to adjustments in your learning strategy if necessary. Examples of evaluation with writing an essay are: checking the general instruction and/or the rubric to evaluate the relevance of the information you were using or were planning to use in your essay.',
      LEZEN: 'Reading is part of cognitive processes and reflects when and how long you first read a text.',
      HERLEZEN: 'The cognitive rereading process reflects when and how long you have read a text again.',
      SCHRIJVEN: 'Writing shows when and how long you were writing.',
      OTHER: "BLANK: No information."
    },
    Voorbeeld_reflectievragen: {
      value: 'What do you notice when you look at your timeline? Which processes are more or less common and when do they occur? Did this approach help you or not in writing your essay? Why or not? What would you do differently next time and why do you think this would help you?',
      titel: "Reflection"
    },
    PERSONAL:{
      part1 : "After  ",
      part2 : " minutes you started ",
      part3 : ". In total you spent ",
      part4 : " minutes on  "
    },
    Spider :{
      titel: "Learning Gain",
      pre: "Before Test: ",
      post: "After Test: ",
      lw: "Learning Gain: "
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
