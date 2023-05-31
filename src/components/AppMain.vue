<script>
import FirstSectionMain from "./FirstSectionMain.vue";
import SecondSectionMain from "./SecondSectionMain.vue";
import ThirdSectionMain from "./ThirdSectionMain.vue";
import FourthSectionMain from "./FourthSectionMain.vue";
import SixthSectionMain from "./SixthSectionMain.vue";
import SeventhSectionMain from "./SeventhSectionMain.vue";

export default {
  components: {
    FirstSectionMain,
    SecondSectionMain,
    ThirdSectionMain,
    FourthSectionMain,
    SixthSectionMain,
    SeventhSectionMain,
  },
};
</script>

<template>
  <main>
    <FirstSectionMain></FirstSectionMain>
    <SecondSectionMain></SecondSectionMain>
    <ThirdSectionMain></ThirdSectionMain>
    <FourthSectionMain></FourthSectionMain>
    <SixthSectionMain></SixthSectionMain>
    <SeventhSectionMain></SeventhSectionMain>
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
