<template>
  <nav
    style="background-color: #f9f1e9"
    class="navbar navbar-expand-md navbar-light"
  >
    <div class="container">
      <router-link
        class="navbar-brand text-black font-weight-bold"
        style="font-size: 20px; color: #ff8e7e"
        :to="{ name: 'Home' }"
        >Situpil Sumbar</router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label=""
      >
        <span class="navbar-toggler-icon">ss</span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto"></ul>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Authentication Links -->
          <li class="nav-item ml-3">
            <router-link
              class="nav-link"
              style="font-size: 19px; color: #ff8e7e"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item ml-3">
            <router-link
              class="nav-link"
              style="font-size: 19px; color: #ff8e7e"
              :to="{ name: 'About' }"
              >Tentang Kami</router-link
            >
          </li>
          <li class="nav-item ml-3">
            <router-link
              class="nav-link"
              style="font-size: 19px; color: #ff8e7e"
              :to="{ name: 'About' }"
              >Blog</router-link
            >
          </li>

          <template v-if="apakahuserlogin == false">
            <li class="nav-item ml-4">
              <router-link
                class="nav-link font-weight-bold"
                style="font-size: 19px; color: #ff8e7e"
                :to="{ name: 'Login' }"
                >Masuk</router-link
              >
            </li>
          </template>
          <template v-else>
            <li class="nav-item dropdown ml-4">
              <a
                style="font-size: 19px; color: #ff8e7e"
                class="nav-link dropdown-toggle font-weight-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ dataloginuser.data_auth.nama }}
              </a>
              <div
                class="dropdown-menu"
                style="border-radius: 10px"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Profile</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click="logout()">Logout</a>
              </div>
            </li>
            <li class="nav-item"></li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    //computed akan merender data secara langsung beda dengan mounted
    ...mapGetters({
      apakahuserlogin: "apakahuserlogin",
      dataloginuser: "dataloginuser",
    }),
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
