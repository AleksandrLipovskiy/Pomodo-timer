export default {
	setUser (state, value) {
    state.user = value
  },

  setDisplayName (state, value) {
    state.displayName = value
  },

  setConfigRef (state, value) {
    state.configRef = value
  },

  setStatisticsRef (state, value) {
    state.statistiscRef = value
  },

  setWorkingPomodoro (state, workingPomodoro) {
    state.config.workingPomodoro = workingPomodoro
  },

  setShortBreak (state, shortBreak) {
    state.config.shortBreak = shortBreak
  },
  
  setLongBreak (state, longBreak) {
    state.config.longBreak = longBreak
  }
}