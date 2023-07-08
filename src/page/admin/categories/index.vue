<template>
    Day la trang quan ly categories
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
  setup() {
    useMenu().onSelectKeys(["admin-categories"]);
  },
};
</script>