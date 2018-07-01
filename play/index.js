/* eslint-disable */

import { play } from "vue-play"
import Message from "../src/ExampleMessageComponent.vue"

play("Example Message Component", module)
  .add("default", h => h(Message))
