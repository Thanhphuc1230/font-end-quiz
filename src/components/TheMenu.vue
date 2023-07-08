<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <a-menu-item key="admin-users'">
      <router-link :to="{ name: 'admin-users' }"
        ><span><UserOutlined class="me-1"/> Tài khoản </span></router-link
      >
    </a-menu-item>

    <a-menu-item key="admin-categories'">
      <router-link :to="{ name: 'admin-categories' }"
        ><span><ReadOutlined class="me-1"/> Chủ đề </span></router-link
      >
    </a-menu-item>

    <a-menu-item key="admin-questions'">
      <router-link :to="{ name: 'admin-questions' }"
        ><span><QuestionOutlined class="me-1"/> Câu hỏi </span></router-link
      >
    </a-menu-item>
  </a-menu>
</template>

<script>
import { UserOutlined,QuestionOutlined,ReadOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { useMenu } from "../stores/use-menu.js";
import { storeToRefs } from "pinia";
export default defineComponent({
  components: {
    UserOutlined,
    QuestionOutlined,
    ReadOutlined,
  },
  setup() {
    const store = useMenu();

    return {
      ...storeToRefs(store),
    };
  },
});
</script>
