import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1001,
      title: $t('administration.title'),
    },
    name: 'administration',
    path: '/administration',
    children: [
      {
        meta: {
          icon: 'ic:sharp-switch-account',
          title: $t('administration.identity_management.title'),
        },
        name: 'identity_management',
        path: '/administration/identity_management',
        children: [
          {
            name: 'Organization Units',
            path: '/administration/identity_management/organization_units',
            component: () =>
              import(
                '#/views/administration/identity_management/organization_units.vue'
              ),
            meta: {
              keepAlive: true,
              title: $t(
                'administration.identity_management.organization_units',
              ),
            },
          },
        ],
      },
    ],
  },
];

export default routes;
