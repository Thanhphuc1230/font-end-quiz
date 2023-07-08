<template>
  <a-card title="Tài khoản " style="width: 100%">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-end">
        <router-link :to="{ name: 'admin-users-create' }">
          <a-button type="primary">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </a-button>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
          <template #bodyCell="{ column, index, record }">
            <template v-if="column.key === 'index'">
              <span>{{ index + 1 }}</span>
            </template>

            <template v-if="column.key === 'status'">
              <span v-if="record.status_id == 1" class="text-primary">{{
                record.name_status
              }}</span>
              <span v-else-if="record.status_id == 2" class="text-danger">{{
                record.name_status
              }}</span>
            </template>
          </template>
        </a-table>
      </div>
    </div>

    <!-- Pagination -->
    <a-pagination
      v-model:current="current"
      :total="totalItems"
      :page-size="pageSize"
      @change="handlePageChange"
    />
  </a-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMenu } from "../../../stores/use-menu.js";

export default defineComponent({
  setup() {
    useMenu().onSelectKeys(["admin-users"]);
    const users = ref([]);
    const current = ref(1); // Define current page variable
    const totalItems = ref(0); // Define total items variable
    const pageSize = 10; // Define page size

    const columns = [
      {
        title: "#",
        key: "index",
      },
      {
        title: "Avatar",
        key: "avatar",
      },
      {
        title: "Họ và tên",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Phòng ban",
        dataIndex: "name_department",
        key: "name_department",
        response: ["sm"],
      },
      {
        title: "Vai trò",
        dataIndex: "roles",
      },
      {
        title: "Tình trạng",
        dataIndex: "name_status",
        key: "name_status",
      },
      {
        title: "Công cụ",
        key: "action",
        fixed: "right",
      },
    ];

    const getUsers = (page) => {
      axios
        .get(`http://localhost:8000/api/users?page=${page}`)
        .then((response) => {
          users.value = response.data.data.data;
          current.value = response.data.data.current_page;
          totalItems.value = response.data.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUsers();
    const handlePageChange = (page) => {
      getUsers(page);
    };

    return {
      users,
      columns,
      current,
      totalItems,
      pageSize,
      handlePageChange,
    };
  },
});
</script>
