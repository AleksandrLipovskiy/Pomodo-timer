export default {
	setUser (state, value) {
    state.user = value
    if (value) state.isAnonymous = value.isAnonymous
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