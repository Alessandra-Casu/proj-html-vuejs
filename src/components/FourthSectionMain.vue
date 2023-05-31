<script>
import CardTreatments from "./CardTreatments.vue";

export default {
  components: {
    CardTreatments,
  },
  data() {
    return {
      arrTreatments: [
        {
          image: "Layer-1-new-400x440.png",
          titolo: "Hydroterapy",
          info: "Vesti",
        },
      ],
    };
  },
  methods: {
    getImagePath(img) {
      return new URL(`../components/src/assets/img/${img}`, import.meta.url)
        .href;
    },
  },
};
</script>

<template>
  <div class="box">
    <h2>OUR TREATMENTS</h2>
  </div>

  <div>
    <CardTreatments
      v-for="i in arrTreatments"
      :key="i.titolo"
      :urlImg:="getImagePath(i.image)"
      :titolo="i.titolo"
      :info="i.info"
    ></CardTreatments>
  </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;

.box {
  margin-top: 10rem;
  height: 180px;
  background-image: url("../assets/img/ptb_cta-new.jpg");
  background-position: left;

  color: $color-whiteA;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
