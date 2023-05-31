import { createApp } from "vue";

import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faHands } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faPersonDress } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faEnvira,
  faHands,
  faSmile,
  faHeart,
  faMoon,
  faSnowflake,
  faMinus,
  faPlus,
  faPagelines,
  faHouse,
  faPagelines,
  faPersonDress,
  faBookmark
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
