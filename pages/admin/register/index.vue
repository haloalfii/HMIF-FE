<template>
  <div class="row">
    <div
      class="col-lg-6 d-flex align-items-center justify-content-center"
      style="border-right: 1px solid #4e73df"
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
          <h1 class="h4 text-gray-900 mb-4">HMIF Amikom</h1>
        </div>
        <div class="">
          <h1 class="h4 text-gray-900">Register!</h1>
          <p class="text-gray-900 mb-4">
            Let's register you into HMIF Amikom System, Made with
            <i class="fas fa-heart text-danger"></i> by
            <a href="https://github.com/haloalfii">@haloalfii </a>
          </p>
        </div>
        <form class="user" @submit.prevent="registerAccount">
          <div class="form-group">
            <input
              v-model="register.name"
              type="text"
              class="form-control form-control-user"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name..."
            />
          </div>

          <div class="form-group row">
            <div class="col-sm-6">
              <select
                v-model="register.gender"
                id="gender"
                class="form-select form-control form-control-user-select"
                aria-label="Default select example"
              >
                <option value="" selected>Choose your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="col-sm-6">
              <select
                v-model="register.department"
                id="role"
                class="form-select form-control form-control-user-select"
                aria-label="Default select example"
              >
                <option value="">Choose your Department</option>
                <option value="AP">AP</option>
                <option value="PI">PI</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <input
              v-model="register.email"
              type="email"
              class="form-control form-control-user"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="form-group row">
            <div class="col-sm-6">
              <input
                :type="displayPassword.type"
                class="form-control form-control-user"
                placeholder="Password"
                v-model="register.password"
              />
              <i
                v-if="!displayPassword.status"
                class="fas fa-eye see-pass-postition-register"
                @click="seePassword"
              ></i>

              <i
                v-if="displayPassword.status"
                class="fas fa-eye-slash see-pass-postition-register"
                @click="unseePassword"
              ></i>
            </div>
            <div class="col-sm-6">
              <input
                :type="displayConfirmPassword.type"
                class="form-control form-control-user"
                placeholder="Confirm Password"
                v-model="register.password_confirmation"
              />
              <i
                v-if="!displayConfirmPassword.status"
                class="fas fa-eye see-pass-postition-register"
                @click="seeConfirmPassword"
              ></i>

              <i
                v-if="displayConfirmPassword.status"
                class="fas fa-eye-slash see-pass-postition-register"
                @click="unseeConfirmPassword"
              ></i>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6">
              <input
                v-model="register.address"
                type="text"
                id="address"
                class="form-control form-control-user"
                placeholder="Address"
              />
            </div>
            <div class="col-sm-6">
              <input
                v-model="register.contact"
                type="number"
                id="contact"
                class="form-control form-control-user"
                placeholder="Phone"
              />
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="register.year"
              type="number"
              class="form-control form-control-user"
              min="1900"
              max="2099"
              step="1"
              placeholder="Enter Years..."
            />
          </div>
          <div class="form-group">
            <input
              ref="file"
              @change="handleFileObject"
              type="file"
              class="form-control form-control-user"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-user btn-block">
            Register
          </button>
        </form>
        <hr />
        <div class="text-center text-dark">
          Already have an account?
          <nuxt-link class="" to="/admin/login">Login!</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  auth: false,
  head() {
    return {
      title: "Register | HMIF",
    };
  },
  data() {
    return {
      displayPassword: {
        status: 0,
        type: "password",
      },
      displayConfirmPassword: {
        status: 0,
        type: "password",
      },
      uploadedPicture: null,
      uploadedPictureName: null,
      register: {
        name: "",
        gender: "",
        department: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
        contact: "",
        year: "",
        status: "active",
        picture: null,
      },
    };
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push("/admin");
    }
  },
  methods: {
    seePassword() {
      this.displayPassword.status = 1;
      this.displayPassword.type = "text";
    },
    unseePassword() {
      this.displayPassword.status = 0;
      this.displayPassword.type = "password";
    },
    seeConfirmPassword() {
      this.displayConfirmPassword.status = 1;
      this.displayConfirmPassword.type = "text";
    },
    unseeConfirmPassword() {
      this.displayConfirmPassword.status = 0;
      this.displayConfirmPassword.type = "password";
    },
    registerAccount() {
      let data = new FormData();
      data.append("name", this.register.name);
      data.append("email", this.register.email);
      data.append("password", this.register.password);
      data.append("password_confirmation", this.register.password_confirmation);
      data.append("gender", this.register.gender);
      data.append("department", this.register.department);
      data.append("address", this.register.address);
      data.append("contact", this.register.contact);
      data.append("year", this.register.year);
      data.append("status", this.register.status);
      data.append("picture", this.uploadedPicture);
      this.$axios
        .post("/hmif_api/api/auth/register", data, {
          "Content-Type":
            "multipart/form-data; charset=utf-8; boundary=" +
            Math.random().toString().substr(2),
        })
        .then((res) => {
          this.$router.push("/admin/login");
          console.log(res);
        });
    },
    handleFileObject() {
      this.uploadedPicture = this.$refs.file.files[0];
    },
  },
};
</script>
