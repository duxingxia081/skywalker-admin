import * as env from '@env/environment.config';
import {deepExtend} from './helpers/extend';
import {Api, Canton, Define, Http, Router} from '@core/*';

/**
 *  路由配置
 */
export const router: Router = deepExtend(
  {
    login: '/passport/login',
    lock: '/passport/lock',
  },
  env.router,
);
