const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children : [
            //Users
            {
                path: "users",
                name: "admin-users",
                component : () =>import ("../page/admin/users/index.vue")
            },
            {
                path: "users/create",
                name: "admin-users-create",
                component : () =>import ("../page/admin/users/create.vue")
            },
            //categories
            {
                path: "categories",
                name: "admin-categories",
                component : () =>import ("../page/admin/categories/index.vue")
            },
            {
                path: "questions",
                name: "admin-questions",
                component : () =>import ("../page/admin/questions/index.vue")
            }
        ]
    }
];

export default admin;