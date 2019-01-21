export default {
	getConfig: state => state.config,
  getUser: state => state.user,
  getDisplayName: state => state.user.displayName,
  getTotalPomodoros: state => state.statistics.totalPomodoros
}