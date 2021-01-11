<template>
  <div>
    <main role="main" class="container">
      <nav aria-label="breadcrumb" class="alert alert-primary mt-3">
        <router-link :to="{ name: 'Home' }">Home</router-link> /
        <a style="color: black">Detail Keahlian</a>
      </nav>
      <div
        class="d-flex align-items-center p-3 my-3 text-white-50 bg-white rounded shadow-sm"
      >
        <img
          class="mr-3"
          :src="require('@/assets/images/landing-situpil.png')"
          alt=""
          width="48"
          height="48"
        />
        <div class="lh-100">
          <h2 class="mb-0 lh-100" style="color: black">
            <i class="fa fa-list"></i> Daftar Tukang
          </h2>
          <small style="color: black">Keahlian By : {{ head }}</small>
        </div>
      </div>

      <div class="form-group">
        <label for="Cari">Search</label>
        <input
          @keyup="datatukang()"
          type="text"
          v-model="searchtukang"
          style="border-radius: 18px"
          placeholder="Pencarian"
          class="form-control"
        />
      </div>

      <div
        class="my-3 p-3 bg-white rounded shadow-lg"
        v-for="(pecah, index) in tukang"
        :key="index"
      >
        <h6 class="border-bottom border-gray pb-2 mb-0">
          {{ pecah.nm_tukang }}
        </h6>
        <div class="media text-muted pt-3">
          <svg
            class="bd-placeholder-img mr-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
          </svg>
          <p
            class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
          >
            <strong class="d-block text-gray-dark">Tempat Tanggal Lahir</strong>
            {{ pecah.tempat_lahir }} ,
            {{ pecah.tgl_lahir | moment("d MMMM yyyy") }}
          </p>
        </div>
        <div class="media text-muted pt-3">
          <svg
            class="bd-placeholder-img mr-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#e83e8c" />
            <text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text>
          </svg>
          <p
            class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
          >
            <strong class="d-block text-gray-dark">Alamat Sekarang</strong>
            {{ pecah.kota }} Kec.{{ pecah.kecamatan }} Kel.{{ pecah.kelurahan }}
            Jl.
            {{ pecah.alamat }}
          </p>
        </div>
        <div class="media text-muted pt-3">
          <svg
            class="bd-placeholder-img mr-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#6f42c1" />
            <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
          </svg>
          <p
            class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
          >
            <strong class="d-block text-gray-dark">Keahlian</strong>
            {{ pecah.nama_keahlian }}
          </p>
        </div>
        <strong class="d-block text-right mt-3">
          <!-- <a
            href="#"
            id="bio"
            @click="showbiografi()"
            :tokentukang="pecah.id_tukang"
          >
            Lihat Biografi
          </a> -->
          <b-button
            variant="outline-info"
            size="sm"
            pill
            @click="showbiografi()"
            :tokentukang="pecah.id_tukang"
            >Lihat Biografi</b-button
          >
        </strong>
      </div>
    </main>

    <!-- ini modal dari bootstrap vue -->
    <b-modal
      ref="modalbiografi"
      size="lg"
      @ok="booking()"
      :title="`BIOGRAFI ${biografi.nama_tukang}`"
    >
      <div class="form-row">
        <div class="col form-group">
          <label for="">Nama Tukang</label>
          <input
            type="text"
            readonly
            class="form-control"
            v-model="biografi.nama_tukang"
          />
        </div>
        <div v-if="biografi.jenis_kelamin === 'L'" class="col form-group">
          <label for="">Jenis Kelamin</label>
          <input readonly type="text" class="form-control" value="Laki-Laki" />
        </div>
        <div v-else class="col form-group">
          <label for="">Jenis Kelamin</label>
          <input readonly type="text" class="form-control" value="Wanita" />
        </div>
      </div>

      <div class="form-row">
        <div class="col form-group">
          <label for="">Kota</label>
          <input
            readonly
            type="text"
            class="form-control"
            v-model="biografi.kota"
          />
        </div>
        <div class="col form-group">
          <label for="">Kecamatan</label>
          <input
            readonly
            type="text"
            class="form-control"
            v-model="biografi.kecamatan"
          />
        </div>
        <div class="col form-group">
          <label for="">Kelurahan</label>
          <input
            readonly
            type="text"
            class="form-control"
            v-model="biografi.kelurahan"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="">Alamat Lengkap</label>
        <textarea
          readonly
          name=""
          v-model="biografi.alamat"
          class="form-control"
          cols="30"
          rows="2"
        ></textarea>
      </div>

      <h5><i class="fa fa-check"></i>Sertifikat Keahlian</h5>
      <div
        v-for="(pecah, index) in biografi.nama_keahlian"
        :key="index"
        class="media text-muted pt-3"
      >
        <svg
          class="bd-placeholder-img mr-2 rounded"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 32x32"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#6f42c1" />
          <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
        </svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          {{ pecah.nama_keahlian }}
        </p>
      </div>

      <!-- ini contoh custom tombol modal -->
      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="outline-danger" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="outline-primary" @click="ok()">
          Booking
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
//JIKA MEMAKAI JQUERY SILAHKAN IMPORT SPEERTI DI BAWAH INI
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

export default {
  data() {
    return {
      head: {},
      tukang: {},
      biografi: {},
      searchtukang: [],
    };
  },

  mounted() {
    var namakeahlian = this.$route.params.keahlian;
    this.head = namakeahlian;

    this.datatukang();
  },

  methods: {
    booking() {
      console.log(this.biografi.id_tukang);
      if (this.$store.getters.apakahuserlogin == false) {
        this.$toasted.info("Mohon Maaf Silahkan Login Dulu Yaaa", {
          duration: 2000,
        });
        setTimeout(() => this.$router.push({ name: "Login" }), 3000);
      } else {
        this.$toasted.success("Yuk isi permintaan anda di formulir transaksi", {
          duration: 2000,
        });
        setTimeout(
          () =>
            this.$router.push({
              name: "Transaksi",
              params: { idtukang: this.biografi.id_tukang },
            }),
          3000
        );
      }
    },
    //  function di bawah contoh pengambilan nilai dari attribut yang kita buat sendiri dengan mengunakan jquery , dan jangan lupa import jquery dulu seperti di atas

    // showbiografi() {
    //   this.$modal.show("modalbiografi");
    //   var token = $("#bio").attr("tokentukang");

    //   console.log(token);
    // },

    //vanila js di  bawah event.target.getattribute
    async showbiografi() {
      try {
        var id = event.target.getAttribute("tokentukang");
        var response = await this.axios.get(
          `api_situpil/api/getdetailtukang?idtukang=${id}`
        );

        if (response.status == 200) {
          this.biografi = response.data.data[0];
          console.log(this.biografi);
          this.$refs["modalbiografi"].show();
          // this.$modal.show("modalbiografi");
        }
      } catch (event) {
        console.log(event.response.status);
        switch (event.response.status) {
          case 500:
            this.$toasted.error(
              "Server Sedang Gangguan,Silahkan Kembali Lagi Nanti",
              {
                duration: 7000,
                position: "top-right",
                icon: "icon",
                action: [
                  {
                    text: "Okay",
                    onClick: (e, toastObject) => {
                      toastObject.goAway(0);
                    },
                  },
                  {
                    text: "logout",
                    onClick: (e, toastObject) => {
                      this.tes();
                    },
                  },
                ],
              }
            );
            break;
          case 403:
            this.$toasted.error("Akses Tidak Di Izinkan", {
              duration: 5000,
            });
            break;
          case 404:
            this.$toasted.error("Not Found", {
              duration: 5000,
            });
            break;
          default:
            break;
        }
      }
    },

    async datatukang() {
      var searching = this.searchtukang;
      console.log(searching);
      // var id = this.$route.query.idkeahlian; <= ini digunakan ketika kitam mengoper parameter ke url dengan query string jika memakai params contoh seperti dibawah idkeahlian harus sesuai nama nyaa dengan yang ada di rute
      var id = this.$route.params.idkeahlian;

      var response = await this.axios.get(
        `api_situpil/api/getkeahlian?idkeahlian=${id}&searchtukang=${searching}`
      );

      this.tukang = response.data.data;
    },
  },
};
</script>