<template>
  <span>
      <img v-if="loadingStatue" src="../assets/images/Spinner.svg" alt="">
  </span>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState({
    loadingStatue: state => state.LoadingShow
  })
};
</script>