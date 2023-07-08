<template>
    Day la trang quan ly question
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
  setup() {
    useMenu().onSelectKeys(["admin-questions"]);
  },
};
</script>