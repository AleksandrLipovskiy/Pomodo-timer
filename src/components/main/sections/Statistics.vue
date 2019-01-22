<template>
  <div class="container min-full-height">
    <div class="main-content row">
      <div class="col-sm-12">
        <h2 class="title">Statistics</h2>
        <p>Total Pomodoros: {{totalPomodoros}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			totalPomodoros: 'getTotalPomodoros'
		})
	}
}

</script>

<style scoped lang="sass">
@import "../../../assets/styles/main";
</style>