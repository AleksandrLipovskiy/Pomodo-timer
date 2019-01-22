<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">

      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-brand">
        <logo></logo>
      </div>

      <div class="collapse navbar-collapse" id="navbarHeader">

        <ul v-if="isAuthenticated" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'settings' }">
              Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'statistics' }">
              Statistics
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'workouts' }">
              Workouts
            </router-link>
          </li>
        </ul>

        <form v-if="user" class="form-inline my-2 my-lg-0">
          <button v-if="isAuthenticated" class="btn btn-secondary" @click="onLogout">Logout</button>
          <button v-if="!isAuthenticated" class="btn btn-secondary" @click="onLogout">Go to the start page</button>
        </form>
      </div>

    </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Logo from './Logo'

export default {
  computed: {
    ...mapGetters({user: 'getUser', isAuthenticated: 'isAuthenticated'})
  },

  methods: {
    ...mapActions(['logout']),

    onLogout () {
      this.logout()
      this.$router.push('/')
    }
  },
  
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/main";

button {
  cursor: pointer;
}
</style>