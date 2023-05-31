<script>
export default {};
</script>

<template>
  <div class="content-box">
    <ul>
      <li class="left-text">
        <div class="first-row">25%</div>
        <div class="second-row">SPECIAL OFFER</div>
      </li>
      <li class="center-text">
        <div class="center-first-row">
          Take some time. Treat yourself. You reserve it.
        </div>
        <div class="second-row">
          Take some time. Treat yourself. You reserve it. Book a treatment this
          month and receive a 25% on all further treatments.
        </div>
      </li>
      <li>
        <button class="btn"><a href="#">BOOK NOW</a></button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;

.content-box {
  width: 100%;
  height: 220px;
  background-image: url("../assets/img/ptb_cta-new.jpg");
  background-position: left;
  color: $color-whiteA;
  color: $color-whiteA;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 8px solid $colorIconFooter;
}
ul {
  list-style: none;

  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  width: 60%;
  height: 100%;
  font-size: small;
}

.left-text {
  text-align: center;
  padding: 1rem;
}
.first-row {
  font-size: 30px;
}
.second-row {
  font-size: 7px;
}

.center-text {
  width: 60%;
}
.center-first-row {
  font-size: 20px;
}

.btn {
  background-color: $color-fontSmall;
  border: 1px solid $color-fontSmall;
  border-radius: 30px;
  padding: 0.5rem;
  a {
    color: $color-whiteA;
    text-decoration: none;
  }
}
.btn:hover {
  cursor: pointer;
  background-color: $colorHover;
  border: none;
}
</style>
