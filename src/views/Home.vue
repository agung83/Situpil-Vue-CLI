<template>
  <div>
    <div>
      <img
        :src="require('@/assets/images/landing-situpil.png')"
        alt=""
        class="img-fluid"
      />
    </div>

    <div class="container mt-5">
      <template v-if="this.$store.getters.apakahuserlogin">
        <div class="alert alert-warning" style="border-radius: 8px">
          {{
            "Selamat Datang" +
            "    " +
            this.$store.getters.dataloginuser.data_auth.nama
          }}
        </div>
      </template>
      <h1>List Keahlian</h1>

      <div class="form-group">
        <label for="Cari">Search</label>
        <input
          @keyup="datakeahlian()"
          type="text"
          v-model="searchtrue"
          style="border-radius: 18px"
          placeholder="Pencarian"
          class="form-control"
        />
      </div>

      <div
        v-if="pesansearch"
        class="alert alert-info"
        style="border-radius: 8px"
      >
        {{ pesansearch }}
      </div>

      <div class="row">
        <div class="col-md-4" v-for="(pecah, index) in keahlian" :key="index">
          <div
            class="card shadow-lg my-3 p-3 bg-white"
            style="border-radius: 8px"
          >
            <!-- <img
              style="height: 230px; object-fit: cover; object-position: center"
              src="https://bprragadanasejahtera.co.id/assets/images/produk/1606232275_kredit-1.png"
              class="card-img-top rounded"
              alt="..."
            /> -->
            <div class="card-body">
              <p class="card-text">{{ pecah.nama_keahlian }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    @click="detail(pecah.id_keahlian)"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Detail
                  </button>
                  <!-- ini contoh mengirim parameter di url dengan query string -->
                  <!-- <router-link
                    class="btn btn-sm btn-outline-primary"
                    :to="{
                      name: 'tukang',
                      query: {
                        idkeahlian: pecah.id_keahlian,
                        keahlian: pecah.nama_keahlian,
                      },
                    }"
                    >Lihat</router-link -->

                  <!-- dan dibawah ini mengirim parameter ke url dengan params kalau mengunakan param harus di defenisikan di route, silahkan liat contoh di router -->
                  <router-link
                    class="btn btn-sm btn-outline-primary"
                    :to="{
                      name: 'tukang',
                      params: {
                        idkeahlian: pecah.id_keahlian,
                        keahlian: pecah.nama_keahlian,
                      },
                    }"
                    >Lihat</router-link
                  >
                </div>
                <small class="text-muted">Publish : 20 November 2020</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        @click="datakeahlian(3)"
        type="button"
        class="btn btn-info mx-auto d-block mb-5"
        style="border-radius: 18px"
        value="Load More"
      />
    </div>

    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <hr class="my-4" />
            <p>Lets Join Us</p>
            <a class="btn btn-success btn-lg" href="#" role="button"
              >Learn more</a
            >
          </div>
          <div class="col-md-6">
            <img
              style="height: 300px; width: 600px"
              class="img-fluid rounded"
              :src="require('@/assets/images/undraw_happy_2021_h01d.svg')"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- https://euvl.github.io/vue-js-modal/examples.html -->
    <modal name="example" :width="800">
      <div slot="top-right">
        <button @click="$modal.hide('example')">❌</button>
      </div>
      <input
        style="border-radius: 20px"
        type="text"
        name="hello"
        class="form-control"
      />
    </modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keahlian: [],
      searchtrue: [],
      pesansearch: null,
      limitdata: 6,
    };
  },

  mounted() {
    this.datakeahlian();

    let number = 1000000;
    let uang = this.rupiah.convert(number);

    console.log(uang);
  },

  methods: {
    // addlimit(res) {
    //   this.limitdata = this.limitdata + res;
    // },

    async datakeahlian(tambahlimit) {
      var limit;
      tambahlimit == null
        ? (limit = this.limitdata)
        : (limit = this.limitdata += tambahlimit);

      var searching = this.searchtrue;

      var response = await this.axios.get(
        `api_situpil/api/getkeahlian?searching=${searching}&limit=${limit}`
      );

      response.data.success == false
        ? (this.pesansearch = response.data.messages)
        : (this.pesansearch = response.data.messages);

      this.keahlian = response.data.data;
      console.log(this.keahlian);
    },

    detail(id) {
      this.$modal.show("example");
      console.log(id);
    },
  },
};
</script>


