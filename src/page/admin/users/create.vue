<template>
  <form @submit.prevent="createUser()">
    <a-card title="Tạo mới tài khoản" style="width: 100%">
      <div class="row mb-3">
        <div class="col-12 col-sm-4">
          <div class="row">
            <div class="col-12 d-flex justify-content-center mb-3">
              <a-avatar shape="square" :size="200">
                <template #icon>
                  <img
                    src="../../../assets/Users/default_user.jpg"
                    alt="Avatar"
                  />
                </template>
              </a-avatar>
            </div>

            <div class="col-12 d-flex justify-content-center">
              <a-button type="primary">
                <font-awesome-icon icon="plus" class="me-2" />
                <span>Chọn ảnh </span>
              </a-button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-8">
          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.status_id }"
                  >Tình trạng :</span
                >
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-select
                show-search
                placeholder="Tình trạng"
                style="width: 100%"
                :options="users_status"
                :filter-option="filterOption"
                allow-clear
                v-model:value="status_id"
                :class="{ 'select-danger': errors.status_id }"
              ></a-select>

              <div class="w-100">
                <small v-if="errors.status_id" class="text-danger">{{
                  errors.status_id[0]
                }}</small>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.username }"
                  >Tên tài khoản :</span
                >
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-input
                placeholder="Tên tài khoản"
                allow-clear
                v-model:value="username"
                :class="{ 'input-danger': errors.username }"
              />
              <div class="w-100">
                <small v-if="errors.username" class="text-danger">{{
                  errors.username[0]
                }}</small>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.name }">Họ và tên:</span>
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-input
                placeholder="Họ và tên"
                allow-clear
                v-model:value="name"
                :class="{ 'input-danger': errors.name }"
              />
              <div class="w-100">
                <small v-if="errors.name" class="text-danger">{{
                  errors.name[0]
                }}</small>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.email }">Email:</span>
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-input
                placeholder="Email"
                allow-clear
                type="email"
                v-model:value="email"
                :class="{ 'input-danger': errors.email }"
              />
              <div class="w-100">
                <small v-if="errors.email" class="text-danger">{{
                  errors.email[0]
                }}</small>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.department_id }"
                  >Phòng ban :</span
                >
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-select
                show-search
                placeholder="Phòng ban"
                style="width: 100%"
                :options="departments"
                :filter-option="filterOption"
                allow-clear
                v-model:value="department_id"
                :class="{ 'select-danger': errors.department_id }"
              ></a-select>
              <div class="w-100">
                <small v-if="errors.department_id" class="text-danger">{{
                  errors.department_id[0]
                }}</small>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.password }"
                  >Mật khẩu:</span
                >
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-input-password
                placeholder="Mật khẩu:"
                allow-clear
                v-model:value="password"
                :class="{ 'input-danger': errors.password }"
              />
              <div class="w-100">
                <small v-if="errors.password" class="text-danger">{{
                  errors.password[0]
                }}</small>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-3 text-start text-sm-end">
              <label>
                <span class="text-danger me-1">*</span>
                <span :class="{ 'text-danger': errors.password_confirmation }"
                  >Xác định mật khẩu:</span
                >
              </label>
            </div>
            <div class="col-12 col-sm-5">
              <a-input-password
                placeholder="Xác định mật khẩu:"
                allow-clear
                v-model:value="password_confirmation"
                :class="{ 'input-danger': errors.password_confirmation }"
              />
              <div class="w-100">
                <small
                  v-if="errors.password_confirmation"
                  class="text-danger"
                  >{{ errors.password_confirmation[0] }}</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
          <a-button class="me-0 me-sm-2 mb-3 mb-sm-0">
            <router-link :to="{ name: 'admin-users' }">
              <span>Hủy</span>
            </router-link>
          </a-button>

          <a-button type="primary" html-type="submit">
            <span>Lưu</span>
          </a-button>
        </div>
      </div>
    </a-card>
  </form>
</template>
<script>
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useMenu } from "../../../stores/use-menu";
export default defineComponent({
  setup() {
    useMenu().onSelectKeys(["admin-users"]);

    const router = useRouter();
    const users_status = ref([]);
    const departments = ref([]);
    const users = reactive({
      username: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      department_id: [],
      status_id: [],
    });

    const getUsersCreate = () => {
      axios
        .get("http://localhost:8000/api/users/create")
        .then((response) => {
          users_status.value = response.data.users_status;
          departments.value = response.data.departments;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const errors = ref({});

    const createUser = () => {
      axios
        .post("http://localhost:8000/api/users/store", users)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            message.success("Tạo tài khoản người dùng thành công");
            router.push({ name: "admin-users" });
          }
        })
        .catch((error) => {
          errors.value = error.response.data.errors;
        });
    };

    getUsersCreate();

    return {
      users_status,
      departments,
      ...toRefs(users),
      filterOption,
      createUser,
      errors,
    };
  },
});
</script>

<style>
.select-danger,
.input-danger {
  border: 1px solid red;
}
</style>
