<template>
  <div class="container-md app-page">
    <div id="nav" class="mt-4">
      <router-link
        v-if="this.$store.getters.isAuth && this.$store.getters.hasDays"
        active-class="active"
        class="nav-link"
        to="/"
      >
        Гости
      </router-link>
      <router-link
        v-if="this.$store.getters.isAuth"
        active-class="active"
        class="nav-link"
        to="/day"
      >
        Смена
      </router-link>
      <router-link
        v-if="this.$store.getters.isAuth && this.$store.getters.isAdmin"
        active-class="active"
        class="nav-link"
        to="/users"
      >
        Пользователи
      </router-link>
      <router-link
        v-if="!this.$store.getters.isAuth"
        active-class="active"
        class="nav-link"
        to="/login"
      >
        Вход в систему
      </router-link>
      <LogOut v-if="this.$store.getters.isAuth" @push-login="pushed"/>

    </div>
    <hr style="border: 1px solid black">
    <h5 v-if="isAuth">Приветствую, {{ fullname }}</h5>
    <hr class="py-1">
    <router-view/>
  </div>
</template>

<script>
// import { authCheck } from './authCheck'
import { ref, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import LogOut from './components/LogOut'

export default {
  components: { LogOut },

  setup () {
    const store = useStore()
    const router = useRouter()

    const isAuth = ref(false)
    const isAdmin = ref(false)
    const fullname = ref('')
    const hasDaysOpened = ref(false)

    onBeforeMount(async () => {
      await store.dispatch('apiStatus')
      isAuth.value = store.getters.isAuth
      isAdmin.value = store.getters.isAdmin
      fullname.value = store.getters.fullname
    })

    isAuth.value = store.getters.isAuth
    isAdmin.value = store.getters.isAdmin
    fullname.value = store.getters.fullname

    return { isAdmin, fullname, isAuth, hasDaysOpened,
      pushed: () => router.push('/login')
    }
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap');

.app-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  #nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

.active {
  background: rgba(181, 201, 201, 0.6);
  border-radius: 5px;
}


a {
  cursor: pointer;
}
</style>
