<script>
export default {};
</script>

<template>
  <section>
    <div class="title">Luxury Spa Experiences</div>
    <font-awesome-icon icon="fa-brands fa-envira" class="icon" />
    <p class="paragraph">
      Morbu pharetra, quam id consequat imperdiet, lectus est tincidunt massa,
      eu posuere leo nibh non fermentum
    </p>
    <div class="line"></div>
    <p class="sub-paragraph">
      Vestibulum nec velit ante. Praesent dignissim interdum est, in lacinia
      elit pretium nec. Aliquam erat voluptat. Fusce laoreet mi leo. Vestibulum
      nec velit ante. Praesent dignissim interdum est, in lacinia elit pretium
      nec. Aliquam erat voluptat. Fusce laoreet mi leo.
    </p>
    <button class="btn"><a href="#"> OUR APPROACH</a></button>
  </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;

section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-paragraph {
  font-size: 0.7rem;
  width: 80%;
  color: $color-fontLarge;
  padding-top: 2rem;
}

.icon,
.paragraph {
  color: $color-fontSmall;
}
.line {
  width: 84px;
  height: 10px;
  border-bottom: 1px solid $color-fontSmall;
}

.btn {
  border: 1px solid $color-fontSmall;
  border-radius: 30px;
  padding: 0.3rem;
  margin-top: 20px;
  background-color: $color-whiteA;
  a {
    text-decoration: none;
    color: $color-fontSmall;
  }
}

.btn:hover {
  cursor: pointer;
  border: 1px solid $colorHover;
  a {
    color: $colorHover;
  }
}
</style>
