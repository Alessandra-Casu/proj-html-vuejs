<script>
export default {};
</script>

<template>
  <div class="content-box">
    <div class="A"></div>
    <div class="B">
      <div class="text-box">
        <h6>
          "If you want to relax, watch the clounds pass by if you're laying on
          the grass, or sit in front of the creek; just doing nothing and having
          those still moments is what really rejuvenates the body..."
        </h6>
        <h5>FRIDA FRIEDSON, MASSEUSE</h5>
      </div>
    </div>
    <div class="C"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;

.content-box {
  height: 400px;
  width: 100%;
}
.A {
  height: 100px;

  background-image: url("../assets/img/\Home-quota-new.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: initial;
}
.B {
  height: 200px;
  background-image: url("../assets/img/\Home-quota-new.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: left;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
}
.text-box {
  width: 50%;
  text-align: center;
  color: $color-whiteA;
  font-size: small;
}
h5,
h6 {
  line-height: 2rem;
}

.C {
  height: 100px;
  background-image: url("../assets/img/\Home-quota-new.png");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: right;
}
</style>
