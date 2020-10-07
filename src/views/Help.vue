<template>
  <div class="help">
    <router-link class="go-back-button" to="/">Go Back</router-link>

    <div class="helpFlexContainer">

    <div class="questionBox" v-if="displayQuestions">
      <h1>Frequently Asked Questions</h1>
        <Questions
        v-for="item in questions"
        v-bind:item="item"
        v-bind:key="item.id"
        v-bind:onClick="openQuestion"
        >
        </Questions>
      </div>
    <div class="questionBox" v-else @click="goBack(1)">
      <h1>{{questionData}}</h1>
      <p id="answer">{{textData}}</p>
    </div>

  <div class="callHelpBox" v-if="helpShow">
    <h1>Need help from a human? </h1>
    <Call
        v-for="call in callHelp"
        v-bind:call="call"
        v-bind:key="call.id"
       v-bind:callHelp="getHelp">
    </Call>
  </div>
  <div class=callHelpBox v-else @click="goBack(2)">
    <h1>{{callText}}</h1>
  </div>

    </div>
  </div>
</template>

<script>

import Questions from '../components/Questions.vue'
import Call from '../components/CallHelp.vue'

export default {
  name: 'Parent',

  components: {
    Questions,
    Call
  },

data (){
    return {
      displayQuestions: true,
      questionData: '',
      textData: '',
      helpShow: true,
      callText: '',
      questions: [
        {
          question: 'What can you do?',
          text: 'I can do several different tasks! But my main purpose of existence is to make your travel easier.',
        },
        {
          question: "What is the recomended way of travel?",
          text: 'Public transport is the cheapest alternative, if you own a HSL ticket you can use all public transport for the specific area you choose.'
        },
        {
          question: "How long does it take for the train to get here?",
          text: 'The train is very efficient and will pass by here every 10 minutes or so.'
        },
        {
          question: "Do Finns speak English?",
          text: 'Most of us do. However due to not being from the same language branch, more often than not people have a thick finnish accent.'
        },
        {
          question: "How do you say Hello in Finnish?",
          text: 'Moi or terve are two of the most commonly used greetings.'
        }
      ],
      callHelp: [{
        prepare: "I can call a human for you if you need help understanding me. Click here!",
        task: "Calling for assistance..."
      }]

    }
  },
  methods: {
    openQuestion(question, text){
     this.textData = text
     this.questionData = question
     if(this.displayQuestions == true){
     this.displayQuestions = false;
     } else{this.displayQuestions = true}
    },
    getHelp(text){
      this.callText = text
      this.helpShow = false
    },
    goBack(nmr){
      if(nmr == 1){
      this.displayQuestions = !this.displayQuestions;
      }else{this.helpShow = !this.helpShow}
    }
  }
  }
</script>

<style scoped>
.help{
    opacity:0.8;
    background-color:rgb(156, 0, 0);
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
    color:rgb(73, 73, 73);
    font-size: 25px;
    -webkit-text-stroke: rgb(0, 0, 0) 0.6px;
}

.questionBox{
  align-content: center;
  background: white;
  width:80vh;
  padding: 6vh;
  border: 2px solid rgb(156, 0, 0);
  border-radius: 10px;

}
.questionBox > *:hover{
  color:rgba(202, 32, 69, 0.767);
  cursor:grab;
}

.callHelpBox{
  background: white;
  width:70vh;
  padding: 10vh;
  border: 2px solid rgb(156, 0, 0);
  border-radius: 10px;
  font-size: 4vh;
}
.callHelpBox > *:hover{
  color:rgba(202, 32, 69, 0.767);
  cursor:grab;
}

.helpFlexContainer{
display: flex;
flex-wrap:nowrap;
justify-content: center;
align-content: center;
}
.helpFlexContainer > div{
  margin: 6vh
}

#answer{
  font-size: 30px;
  color:rgba(202, 32, 69, 0.767);
}
</style>
