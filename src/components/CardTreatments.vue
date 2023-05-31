<script>
export default {
  props: {
    urlImg: String,
    titolo: String,
    info: String,
  },
};
</script>

<template>
  <div class="card">
    <img :src="urlImg" :alt="titolo" />
    <h2>{{ titolo }}</h2>
    <h5>{{ info }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;
.card {
  max-width: 25%;
  text-align: center;

  border: 2px solid $colorIconFooter;
  h2 {
    color: $color-fontSmall;
  }
  h5 {
    border-top: 1px dotted $color-fontSmall;
    color: $color-fontLarge;
    font-size: small;
  }
}

img {
  width: 100%;
}
</style>
