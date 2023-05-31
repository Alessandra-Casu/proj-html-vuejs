<script>
export default {
  props: {
    thumbImg: {
      type: String,
      required: false,
      default: "Indirizzo immagine di default",
    },
    Type: {
      type: String,
      required: false,
      default: "Indirizzo immagine di default",
    },
    Info: {
      type: String,
      required: false,
      default: "Indirizzo immagine di default",
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="thumbImg" :alt="type" />
    <h5>{{ type }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;

.card {
  width: 25%;
  height: 50%;
  text-align: center;
  background-color: pink;
  display: flex;
  h5 {
    color: $color-fontSmall;
  }
  h6 {
    color: $color-fontLarge;
  }
}

img {
  width: 100%;
  height: 120px;
}
</style>
