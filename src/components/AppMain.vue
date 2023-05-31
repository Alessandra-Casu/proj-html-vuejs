<script>
import FirstSectionMain from "./FirstSectionMain.vue";
import SecondSectionMain from "./SecondSectionMain.vue";
import ThirdSectionMain from "./ThirdSectionMain.vue";
import FourthSectionMain from "./FourthSectionMain.vue";

export default {
  components: {
    FirstSectionMain,
    SecondSectionMain,
    ThirdSectionMain,
    FourthSectionMain,
  },
};
</script>

<template>
  <main>
    <FirstSectionMain></FirstSectionMain>
    <SecondSectionMain></SecondSectionMain>
    <ThirdSectionMain></ThirdSectionMain>
    <FourthSectionMain></FourthSectionMain>
  </main>
</template>

<style lang="scss">
@use "./../assets/styles/partials/variables" as *;

main {
  width: 100%;
}

section {
  width: 60%;
  margin: auto;
  padding-top: 3rem;
}

.title {
  color: $color-fontLarge;
  font-size: 2.5rem;
  padding-bottom: 2rem;
}
</style>
