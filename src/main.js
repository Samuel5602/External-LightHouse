import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import underscore from 'vue-underscore';
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(axios);
Vue.use(underscore);
Vue.use(VueI18n)

const messages = {
  nl: {
    DASHBOARD:{
      titel: "Dashboard voor user"
    },
    EXPLANATIONS: {
      titel: 'Hover voor uitleg',
      BLANK: 'Bij het schrijven van een essay maak je gebruik van activiteiten met betrekking tot cognitieve- en metacognitieve processen. De combinatie van deze activiteiten bepalen jouw leerstrategie. Een leerstrategie gaat over de manier waarop je een leertaak aanpakt en uitvoert.',
      ORIENTATION: 'Orientatie is het verkennen van de leeromgeving en het activeren van voorkennis. Voorbeelden van oriënterende activiteiten bij het schrijven van een essay zijn: inhoud scannen van een leeromgeving, bepalen van leerdoelen en de rubriek bekijken.',
      PLANNING: 'Plannen heeft betrekking op activiteiten die jouw voorbereiding op het uitvoeren van de taak. Het gaat over het bepalen en plannen van activiteiten die nodig zijn om jouw leerdoel te behalen.',
      MONITORING: 'Monitoren betreft het controleren van jouw leerproces en het controleren van jouw geplande leerstrategie. Ben ik nog steeds aan het leren op de manier, zoals ik van te voren bedacht heb? Voorbeelden van monitoringsactiviteiten zijn: annotaties en notities gebruiken, je planning controleren en de timer bekijken.',
      EVALUATION: 'Evaluatie hangt nauw samen met monitoring. In beide toets je je leerproces en gedrag, maar bij evaluatie voeg je een oordeel toe aan de activiteiten die je toetst. Bij monitoring controleer je of je leerproces verloopt zoals je van te voren hebt bedacht. Met evaluatieactiviteiten beoordeel je of de dingen die je doen nog steeds nuttig zijn om je leerdoel te behalen. Dit oordeel kan leiden tot het aanpassen van je leerstrategie. Voorbeelden van evaluatie bij het schrijven van een essay zijn: het controleren van de instructie en/of de rubriek om de relevantie van de informatie voor het essay te beoordelen.',
      FIRSTREADING: 'Lezen valt onder cognitieve processen en weergeeft wanneer en hoe lang jij een tekst voor het eerste hebt gelezen.',
      REREADING: 'Het cognitieve proces herlezen weergeeft wanneer en hoe lang jij een tekst nogmaals hebt gelezen.',
      WRITEESSAY: 'Schrijven toont wanneer en hoe lang jij aan het schrijven was. ',
    },
    Voorbeeld_reflectievragen: {
      value: 'Wat val je op als je naar jouw tijdlijn kijkt? Welke processen komen meer of minder voor en wanneer komen ze voor? Heeft deze aanpak jou wel of niet geholpen bij het schrijven van je essay? Waarom wel of niet? Wat zou je een volgende keer anders doen en waarom denkt je dat dit je zou helpen? ',
      titel: "Uitleg"
    },
  },
  en:
  {
    DASHBOARD:{
      titel: "Dashboard for user"
    },
    EXPLANATIONS: {
      titel: 'Hover for explanation',
      BLANK: 'While writing an essay, you make use of cognitive- and metacognitive activities. The combination of these activities defines your learning strategy. Learning strategy refers to how you approach and carry out a learning task. ',
      ORIENTATION: 'Orientation is exploring the learning environment and activating prior knowledge. Examples of orientation activities during essay writing are: scanning the content of the learning environment, determining the learning goals, and looking at the rubric.',
      PLANNING: 'Planning prepares you to execute the actual task. It is about planning time and planning activities, that enables you to reach your learning goals.',
      MONITORING: 'Monitoring encompasses checking your learning process and controlling the execution of your planned strategies to pursue your learning goals. Am I still learning in the way I intended to learn? Examples of monitoring activities for writing the essay are: using annotations and notes, checking your planning, and checking the timer.',
      EVALUATION: 'Evaluation activities are closely related to monitoring. In both, you are checking your learning process and behavior, but with evaluation, you add a judgement to these activities. At monitoring, you check whether your learning process is occurring in the way you planned. With evaluation activities, you rate if the things you do are still helpful to pursuing your learning goals and may lead to adjustments in your learning strategy if necessary. Examples of evaluation with writing an essay are: checking the general instruction and/or the rubric to evaluate the relevance of the information you were using or were planning to use in your essay.',
      FIRSTREADING: 'Reading is part of cognitive processes and reflects when and how long you first read a text.',
      REREADING: 'The cognitive rereading process reflects when and how long you have read a text again.',
      WRITEESSAY: 'Writing shows when and how long you were writing.',
    },
    Voorbeeld_reflectievragen: {
      value: 'What do you notice when you look at your timeline? Which processes are more or less common and when do they occur? Did this approach help you or not in writing your essay? Why or not? What would you do differently next time and why do you think this would help you?',
      titel: "Explanation"
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
