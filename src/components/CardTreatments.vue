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
  </div>
</template>

<style lang="scss" scoped>
.card {
  max-width: 25%;
  text-align: center;
  background-color: gray;
  color: black;
  border: 2px solid salmon;
}

img {
  width: 100%;
}
</style>
