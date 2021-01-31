<template>
  <div id="app">
    <Navigation />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  components: {
    Navigation,
    Footer,
  },

  metaInfo: {
    title: "SITUKANG",
    meta: [
      // apa tujuan vmid ialah , ketika kita pindah halaman maka meta di halaman yang kita tuju akan menimpan meta yang ada di app.vue , sehigga tidak ada duplicate metaa, dengan syarat di halaman yang kita tuju tadi, haru menyertakan vmid sesuai nama yang kita beri , penamaan vmid tidak harus sama dengan name meta yang add di bawah ini
      { vmid: "title", name: "title", content: "Situkang Mantap" },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "cari tukang terbaik, tukang padang,tukang bersertifikat, tukang sumbar",
      },
      {
        vmid: "description",
        name: "description",
        content: "Bersama SITUKANG dapatkan tukang terbaik",
      },
      { vmid: "og:url", property: "og:url", content: "situkang.com" },
      {
        vmid: "og:image",
        property: "og:image",
        content: "situkang mantap.jpg",
      },
    ],
  },
};
</script>


