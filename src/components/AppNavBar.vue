<script>
export default {};
</script>

<template>
  <div class="nav-bar">
    <ul>
      <li>
        <a href="#"><font-awesome-icon icon="fa-solid fa-house" /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon icon="fa-brands fa-pagelines" />
          <h5>TREATMENTS</h5>
          <h6>Face & Body</h6>
        </a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon icon="fa-solid fa-person-dress" />
          <h5>ABOUT</h5>
          <h6>Our Team</h6>
        </a>
      </li>

      <li>
        <img src="../assets/img/avada-spa-logo-retina-new-200x23.png" alt="" />
      </li>
      <li>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-heart" />
          <h5>JOURNAL</h5>
          <h6>Tips & Tricks</h6>
        </a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon icon="fa-solid fa-bookmark" />
          <h5>BOOK NOW</h5>
          <h6>Special Offers</h6>
        </a>
      </li>
      <li>
        <a class="icon" href="#"
          ><font-awesome-icon icon="fa-solid fa-plus"
        /></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;
.nav-bar {
  height: 100px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: $color-whiteB;
}
ul {
  list-style: none;
  width: 60%;
  max-height: 100%;
  margin: auto;
  padding: 0.5rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  li {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5 {
      color: $color-fontLarge;
      font-weight: 500;
      font-size: x-small;
    }
    h6 {
      color: $color-fontSmall;
      font-size: x-small;
    }

    img {
      display: inline-block;
      width: 130px;
      height: 50px;
      object-fit: contain;
    }
  }
  a {
    text-decoration: none;
    text-align: center;
    color: $color-fontSmall;
  }
  a:hover {
    cursor: pointer;
    color: $colorHover;
  }
}
</style>
