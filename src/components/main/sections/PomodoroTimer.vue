<template>
  <count-down-timer :time="time"></count-down-timer>
</template>

<script>
import CountDownTimer from './timer/CountDownTimer'

export default {
	computed: {
		time() {
			return 25 * 60
		}
	},

	components: {
		CountDownTimer
	}
}
</script>

<style scoped lang="sass">

</style>