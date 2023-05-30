<script>
import AppNavBar from "./AppNavBar.vue";

export default {
  components: {
    AppNavBar,
  },
};
</script>

<template>
  <header>
    <AppNavBar></AppNavBar>
    <div class="jumbotron">
      <div class="upp-title">Give yourself permission</div>
      <div class="title">Relax, Revive & Rejuvenate</div>
      <button class="btn"><a href="#">EXPLORE TREATMENTS</a></button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;
header {
  width: 100%;
}
.jumbotron {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-image: url("../assets/img/avada-spa-slider-image-1-new.png");
  background-size: cover;

  .title {
    color: $color-whiteA;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  .upp-title {
    color: $colorh6;
  }
  .btn {
    background-color: $color-fontSmall;
    border: 1px solid $color-fontSmall;
    border-radius: 30px;
    padding: 0.5rem;
  }
  a {
    color: $color-whiteA;
    text-decoration: none;
  }
}

.btn:hover {
  cursor: pointer;
  background-color: $colorHover;
  border: none;
  a {
    color: $color-whiteA;
  }
}
</style>
