<script>
export default {
  data() {
    return {
      menuIcon: [
        {
          icon: "fa-solid fa-hands",
          src: "#",
          name: "Massages",
        },
        {
          icon: "fa-regular fa-face-smile",
          src: "#",
          name: "Therapy",
        },
        {
          icon: "fa-solid fa-heart",
          src: "#",
          name: "Relaxing",
        },
        {
          icon: "fa-regular fa-moon",
          src: "#",
          name: "Meditation",
        },
        {
          icon: "fa-solid fa-snowflake",
          src: "#",
          name: "Natural Beauty",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="list-icon">
    <ul>
      <li class="icon" v-for="menuItem in menuIcon" :key="menuItem.name">
        <a class="text" :href="menuItem.src">
          <font-awesome-icon :icon="menuItem.icon" class="icon" />
          {{ menuItem.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/partials/variables" as *;
.list-icon {
  width: 70%;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

ul {
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  list-style: none;

  .icon {
    color: $color-fontSmall;
    height: 1.5rem;
    padding-bottom: 0.3rem;
  }
  .text {
    color: $color-fontLarge;
  }
  li a {
    height: 80px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }
  li:nth-child(even) {
    margin-top: 30px;
  }
}
</style>
