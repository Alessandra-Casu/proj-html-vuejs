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
          thumb: "..\src\assets\img\Layer-1-new-400x440.jpg",
          type: "Hydroterapy",
          info: "Vesti",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="box">
    <h2>OUR TREATMENTS</h2>
  </div>

  <div>
    <CardTreatments
      v-for="treatment in arrTreatments"
      :key="treatment.thumb"
      :thumbImg="treatment.thumb"
      :type="treatment.type"
      :info="treatment.info"
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
