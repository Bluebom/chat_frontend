<template>
  <div
    role="alert"
    v-for="alert in flash"
    :key="alert"
    :class="`animate-pulse flex p-4 mb-2 text-sm text-${alert.layout.color}-700 bg-${alert.layout.color}-100 rounded-lg`"
  >
    <svg
      aria-hidden="true"
      class="flex-shrink-0 inline w-5 h-5 mr-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium pr-1">{{ alert.layout.title }}</span>
      {{ alert.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    data: {
      type: Array,
      default: () => [
        {
          type: String,
          message: String,
        },
      ],
    },
  },
  computed: {
    flash() {
      return this.data
        ? this.data.map((value) => {
            value.layout = this.layout(value.type);
            return value;
          })
        : null;
    },
  },
  methods: {
    layout(type) {
      switch (type) {
        case "error":
          return { title: "Erro!", color: "red" };
        case "success":
          return { title: "Sucesso!", color: "green" };
        case "info":
          return { title: "Aviso!", color: "blue" };
        case "warning":
          return { title: "Cuidado!", color: "yellow" };
        default:
          return { title: "", color: "gray" };
      }
    },
  },
};
</script>

<style scoped></style>
