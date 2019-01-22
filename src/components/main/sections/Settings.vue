<template>
  <div class="container min-full-height">
    <div class="main-content row">

      <div class="col-sm-12 col-lg-4">
        <account-settings></account-settings>
      </div>

      <div class="col-sm-12 col-lg-8">
        <pomodoro-timer-settings></pomodoro-timer-settings>
      </div>
      
    </div>
  </div>
</template>

<script>
import PomodoroTimerSettings from './settings/PomodoroTimerSettings'
import AccountSettings from './settings/AccountSettings'

export default {
	components: {
    PomodoroTimerSettings,
    AccountSettings
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/main";
</style>