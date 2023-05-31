<script>
export default {
  data() {
    return {
      logoImgName: "avada-spa-logo-retina-new-200x23.png",
      iconFooter: [
        {
          icon: "fa-brands fa-square-facebook",
          src: "#",
        },
        {
          icon: "fa-brands fa-square-twitter",
          src: "#",
        },
        {
          icon: "fa-brands fa-square-instagram",
          src: "#",
        },
        {
          icon: "fa-brands fa-square-youtube",
          src: "#",
        },
      ],
    };
  },
  methods: {
    getImagePath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <footer>
    <ul>
      <li><img class="image" :src="getImagePath(logoImgName)" alt="" /></li>
      <li class="center">
        COPYRIGHT 2012-2020 | AVADA THEME BY THEME BY THEMEFUSION | ALL RIGHT
        RESERVED | POWERED BY WORDPRESS
      </li>
      <li class="icon">
        <div v-for="menuItem in iconFooter" :key="menuItem.icon">
          <a :href="menuItem.src">
            <font-awesome-icon :icon="menuItem.icon" />
          </a>
        </div>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;
footer {
  height: 100px;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    width: 80%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    list-style: none;
    color: $color-fontLarge;

    a {
      color: $colorIconFooter;
    }

    .center {
      width: 50%;
      text-align: center;
      font-size: x-small;
    }
    .icon {
      display: flex;
      width: 10%;
      justify-content: space-between;
    }
  }
}
</style>
