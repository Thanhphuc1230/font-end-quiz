<template>
  <div class="container-fluid">
    <div
      class="row text-white"
      style="background-color: #0c731d; padding: 1rem"
    >
      <div
        class="col-1 d-flex d-sm-none align-items-center justify-content-center"
      >
        <span @click="showDrawer()"><font-awesome-icon icon="align-justify" /></span>
      </div>
      <div
        class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <img
          src="../assets/Logo/vue.svg"
          alt="Logo"
          height="32"
          width="34"
          class="ms-3 me-3"
        />
        <span class="d-none d-sm d-flex">Quản trị</span>
      </div>
      <div
        class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end"
      >
        <span>Admin</span>
      </div>

      <div
        class="col-1 d-flex d-sm-none align-items-center justify-content-center"
      >
        <span @click="showDrawerUser()"><font-awesome-icon icon="user" /></span>
      </div>
    </div>
  </div>
  <a-drawer v-model:visible="visible" title="Danh mục" placement="left">
    <TheMenu/>
  </a-drawer>

  <a-drawer v-model:visible="visible_user" title="Admin" placement="right"> 
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import TheMenu from "./TheMenu.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components:{
    TheMenu,
  },
  setup() {
    const visible = ref(false);
    const visible_user = ref(false);

    const showDrawer = () => {
      visible.value = true;
    };
    const showDrawerUser = () => {
      visible_user.value = true;
    };
    return {
      visible,
      visible_user,
      showDrawer,
      showDrawerUser,
    };
  },
});
</script>
