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
      Criar Conta
    </h2>
  </div>
  <form class="mt-8 space-y-6" @submit.stop.prevent="register">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Nome</label>
        <input
          id="email-address"
          name="name"
          type="text"
          autocomplete="name"
          required
          v-model="user.name"
          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Nome"
        />
      </div>
      <div>
        <label for="email-address" class="sr-only">E-mail</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          v-model="user.email"
          class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="E-mail"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          v-model="user.password"
          class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Senha"
        />
      </div>
      <div>
        <label for="password_confirmation" class="sr-only"
          >Confirmar Senha</label
        >
        <input
          placeholder="Confirmar Senha"
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          required
          v-model="user.password_confirmation"
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div class="flex items-end justify-between">
        <div class="text-sm">
          <router-link
            class="font-medium text-cht-secondary-contrast text-indigo-600 hover:text-indigo-500"
            :to="{ name: 'Login' }"
            >Faça login
          </router-link>
        </div>
        <button
          type="button"
          class="mt-4 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <div class="inline flex gap-2 items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
            Foto do perfil
          </div>
        </button>
      </div>
    </div>
    <div>
      <button
        type="submit"
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-cht-secondary-contrast py-2 px-4 text-sm font-medium text-white hover:bg-cht-contrast focus:outline-none focus:ring-2 focus:ring-cht-contrast focus:ring-offset-2"
      >
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
        Registre-se
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ViewRegister",
  data: () => {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    ...mapActions("user", {
      $_register: "register",
    }),
    register() {
      this.$_register(this.user);
    },
  },
};
</script>

<style scoped></style>
