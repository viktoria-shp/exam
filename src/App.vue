<template>
  <div class="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "./components/layout/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  background-color: var(--bg-color);
  color: var(--text-color);
}
:root {
  --bg-color: #EBEBEB;
  --text-color: #262626;
}
.dark-theme:root {
  --bg-color: #262626;
  --text-color: #fafafa;
}
a {
  color: inherit;
}
</style>
