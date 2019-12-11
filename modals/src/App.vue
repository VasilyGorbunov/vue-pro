<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
          <modals title="First modal" v-if="modalFirst" @close="modalFirst = false"></modals>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modals from "./components/Modal";
export default {
  components: {
    modals
  },
  data() {
    return {
      modalFirst: false
    };
  }
};
</script>

<style>
</style>
