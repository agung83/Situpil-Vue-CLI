<template>
  <div>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container" style="display: flex; justify-content: center">
        <div class="card login-card col-md-12" style="background-color: white">
          <div class="row no-gutters">
            <div class="col-md-6">
              <img
                style="height: 550px"
                class="img-fluid"
                :src="require('../assets/images/login.svg')"
                alt=""
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <div class="brand-wrapper">
                  <h3 class="login-card-description">
                    SITUPIL SUMBAR MUDAH BOOKING TUKANG DI SUMATERA BARAT
                  </h3>
                </div>
                <form action="" method="POST" @submit.prevent="login">
                  <div class="form-group">
                    <p class="footer-text">Username</p>
                    <input
                      type="text"
                      style="border-radius: 18px"
                      class="form-control"
                      v-model="formlogin.nohp"
                      placeholder="Nomor Handphone"
                    />
                  </div>

                  <div class="form-group mb-4">
                    <p class="footer-text">Password</p>
                    <input
                      type="password"
                      style="border-radius: 18px"
                      class="form-control"
                      v-model="formlogin.password"
                      placeholder="Password"
                    />
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <input
                        style="border-radius: 18px"
                        type="reset"
                        name="reset"
                        class="btn btn-default btn-block"
                        value="Reset"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="submit"
                        style="border-radius: 18px"
                        name="submit"
                        id="submit"
                        class="btn btn-primary btn-block"
                        value="Login"
                      />
                    </div>
                  </div>
                </form>

                <br />
                <p class="login-card-footer-text mt-3"></p>
                <nav class="login-card-footer-nav">
                  <a style="text-align: center; color: #a9a9a9"></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formlogin: {
        nohp: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      var data = new FormData();
      data.append("nohp", this.formlogin.nohp);
      data.append("password", this.formlogin.password);
      data.append("android_id", "2vuejs");
      data.append("device_name", "motorolla asus");
      data.append("fcmregid", "1xxxxcssssasvue");
      data.append("fcminstance", "wkwkwkkwkwland");
      // console.log(data);

      this.$store
        .dispatch("login", data)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
body {
  font-family: "Karla", sans-serif;
  background-color: #d0d0ce;
  min-height: 100vh;
}

.brand-wrapper {
  margin-bottom: 19px;
}

.brand-wrapper .logo {
  height: 37px;
}

.login-card {
  border: 0;
  border-radius: 27.5px;
  box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
  overflow: hidden;
}

.login-card-img {
  border-radius: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.login-card .card-body {
  padding: 85px 60px 60px;
}

@media (max-width: 422px) {
  .login-card .card-body {
    padding: 35px 24px;
  }
}

.login-card-description {
  font-size: 25px;
  color: #000;
  font-weight: normal;
  margin-bottom: 23px;
}

.login-card form {
  max-width: 326px;
}

.login-card .form-control {
  border: 1px solid #d5dae2;
  padding: 15px 25px;
  margin-bottom: 20px;
  min-height: 45px;
  font-size: 13px;
  line-height: 15;
  font-weight: normal;
}

.login-card .form-control::-webkit-input-placeholder {
  color: #919aa3;
}

.login-card .form-control::-moz-placeholder {
  color: #919aa3;
}

.login-card .form-control:-ms-input-placeholder {
  color: #919aa3;
}

.login-card .form-control::-ms-input-placeholder {
  color: #919aa3;
}

.login-card .form-control::placeholder {
  color: #919aa3;
}

.login-card .login-btn {
  padding: 13px 20px 12px;
  background-color: #000;
  border-radius: 4px;
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  color: #fff;
  margin-bottom: 24px;
}

.login-card .login-btn:hover {
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
}

.login-card .forgot-password-link {
  font-size: 14px;
  color: #919aa3;
  margin-bottom: 12px;
}

.login-card-footer-text {
  font-size: 16px;
  color: #0d2366;
  margin-bottom: 60px;
}

@media (max-width: 767px) {
  .login-card-footer-text {
    margin-bottom: 24px;
  }
}

.login-card-footer-nav a {
  font-size: 14px;
  color: #919aa3;
}

/* # sourceMappingURL=login.css.map */
</style>