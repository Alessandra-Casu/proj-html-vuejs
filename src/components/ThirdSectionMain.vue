<script>
export default {};
</script>

<template>
  <section>
    <div class="left">
      <div class="img-border">
        <img
          class="img"
          src="../assets/img/face_and_body_treatments-new-400x581.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="right">
      <div class="title">Face & Body Treatments</div>
      <p>
        Pellentesque nec felis efficitur, sagittis eros et, pharetra risus. Sed
        at lacus ex imperdiet dignissim vehicula quam. Vestibulum ante ipsu
        primis.
      </p>

      <div>
        <div class="Massage rectangle">
          <div class="firstRow">
            <font-awesome-icon icon="fa-solid fa-minus" class="icon minus" />
            <h6>Oil Massage</h6>
          </div>
          <p class="secondRow">
            <span class="price">$62 For 2 Hour</span> - Lorem ipsum dolor sit
            amet
          </p>
        </div>

        <div class="Manicure rectangle">
          <div class="firstRow">
            <font-awesome-icon icon="fa-solid fa-plus" class="icon plus" />
            <h6>Manicure</h6>
          </div>
        </div>

        <div class="Aromatherapy rectangle">
          <div class="firstRow">
            <font-awesome-icon icon="fa-solid fa-plus" class="icon plus" />
            <h6>Aromatherapy</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;

section {
  width: 70%;
  display: flex;
}
.left {
  width: 60%;
  display: flex;
  justify-content: center;
  .img-border {
    border: 1px solid $color-fontSmall;
    img {
      border: 1.5rem solid $color-whiteA;
    }
  }
}
.right {
  height: 100%;
  width: 40%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-content: end;
  justify-content: start;

  p {
    width: 80%;
    color: $color-fontLarge;
  }

  .rectangle {
    border: 1px solid $color-fontLarge;
    margin-bottom: 1rem;
    padding: 1.5rem;
  }

  .icon {
    width: 20px;
    height: 20px;
    padding: 3px;
    color: $color-whiteA;
    margin-right: 10px;
  }

  .icon.minus {
    background-color: $color-fontSmall;
  }

  .icon.plus {
    background-color: $color-fontLarge;
  }

  .firstRow {
    color: $color-fontSmall;
    margin-bottom: 1rem;
    display: flex;
  }

  .secondRow {
    font-size: x-small;

    .price {
      font-weight: 500;
    }
  }
}
</style>
