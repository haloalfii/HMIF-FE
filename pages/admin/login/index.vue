<template>
  <div class="row">
    <div
      class="col-lg-6 d-flex align-items-center justify-content-center"
      style="border-right: 1px solid #da2921"
    >
      <img
        src="~/assets/img/logo.png"
        width="250px"
        height="250px"
        alt=""
        srcset=""
      />
    </div>
    <div class="col-lg-6">
      <div class="p-5">
        <div class="d-flex justify-content-center mb-2">
          <img
            src="~/assets/img/logo.png"
            width="24px"
            height="24px"
            class="mx-2"
          />
          <nuxt-link to="/"
            ><h1 class="h4 text-gray-900 mb-4">HMIF Amikom</h1></nuxt-link
          >
        </div>
        <div class="">
          <h1 class="h4 text-gray-900">Welcome Back!</h1>
          <p class="text-gray-900 mb-4">
            Let's sign in you in into HMIF Amikom System, Made with
            <i class="fas fa-heart text-danger"></i> by
            <a href="https://github.com/haloalfii">@haloalfii </a>
          </p>
        </div>
        <form class="user" @submit.prevent="userLogin">
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              class="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="form-group">
            <input
              :type="displayPassword.type"
              v-model="password"
              class="form-control form-control-user"
              placeholder="Password"
            />
            <i
              v-if="!displayPassword.status"
              class="fas fa-eye see-pass-postition"
              @click="seePassword"
            ></i>

            <i
              v-if="displayPassword.status"
              class="fas fa-eye-slash see-pass-postition"
              @click="unseePassword"
            ></i>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox small">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck"
              />
              <label class="custom-control-label" for="customCheck"
                >Remember Me</label
              >
            </div>
          </div>
          <button type="submit" class="btn btn-hmif btn-user btn-block">
            Login
          </button>
        </form>
        <hr />
        <div class="text-center text-dark">
          Doesn't have an account?
          <nuxt-link class="" to="/admin/register"
            >Create an Account!</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",

  head() {
    return {
      title: "Login | HMIF",
    };
  },

  data() {
    return {
      email: "",
      password: "",
      displayPassword: {
        status: 0,
        type: "password",
      },
    };
  },

  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push("/");
    }
  },

  methods: {
    async userLogin() {
      const data = new FormData();
      data.append("email", this.email);
      data.append("password", this.password);
      const res = await this.$auth.loginWith("local", {
        data: data,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.access_token);
        console.log(this.$auth.user);
        this.$router.push("/");
      }
    },
    seePassword() {
      this.displayPassword.status = 1;
      this.displayPassword.type = "text";
    },
    unseePassword() {
      this.displayPassword.status = 0;
      this.displayPassword.type = "password";
    },
  },
};
</script>
