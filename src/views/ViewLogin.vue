<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-16 h-16 mx-auto text-cht-primary"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
    <h2
      class="mt-6 text-center text-3xl font-bold tracking-tight text-cht-secondary-contrast"
    >
      Login
    </h2>
  </div>
  <AlertComponent :data="$_flash" />
  <form class="mt-8 space-y-6" @submit.stop.prevent="login">
    <input type="hidden" name="remember" value="true" />
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">E-mail</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          v-model="user.email"
          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="E-mail"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="password"
          required
          v-model="user.password"
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Senha"
        />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm">
        <router-link
          :to="{ name: 'Register' }"
          class="font-medium text-cht-secondary-contrast text-indigo-600 hover:text-indigo-500"
          >Registre-se</router-link
        >
      </div>
      <div class="text-sm">
        <router-link
          to="/"
          class="font-medium text-cht-secondary-contrast text-indigo-600 hover:text-indigo-500"
          >Esqueceu a senha?</router-link
        >
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-cht-secondary-contrast py-2 px-4 text-sm font-medium text-white hover:bg-cht-contrast focus:outline-none focus:ring-2 focus:ring-cht-contrast focus:ring-offset-2"
      >
        <template v-if="!spin">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <!-- Heroicon name: mini/lock-closed -->
            <svg
              class="h-5 w-5 text-cht-primary group-hover:text-cht-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          Entrar
        </template>
        <template v-if="spin">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-4 h-4 mr-2 text-gray-200 animate-spin fill-cht-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </template>
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AlertComponent from "@/components/AlertComponent.vue";

export default {
  name: "ViewLogin",
  components: { AlertComponent },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      spin: false,
    };
  },
  computed: {
    ...mapState({
      $_flash: ({ flash }) => flash,
    }),
  },
  methods: {
    ...mapActions("user", {
      $_login: "login",
    }),
    login() {
      this.spin = true;
      this.$_login(this.user).then(() => {
        this.spin = false;
      });
    },
  },
};
</script>

<style scoped></style>
