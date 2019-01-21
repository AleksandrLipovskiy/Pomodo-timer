import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';
import { firebaseMutations } from 'vuexfire'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeScYF0kGDf0eku_vtYsWYGa-GTac2JLY",
  authDomain: "pomodoro-timer-64274.firebaseapp.com",
  databaseURL: "https://pomodoro-timer-64274.firebaseio.com",
  projectId: "pomodoro-timer-64274",
  storageBucket: "pomodoro-timer-64274.appspot.com",
  messagingSenderId: "320373298916"
})
let db = firebaseApp.database()

let configRef = db.ref('/configuration/test')
let statisticsRef = db.ref('/statistics/test')

export default new Vuex.Store({
	state: {
		...state,
		firebaseApp,
		configRef,
		statisticsRef
	},
	getters,
	mutations: {
		...mutations,
		...firebaseMutations
	},
	actions
})