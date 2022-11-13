// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJwtErr = require('../../../app/middleware/jwtErr');

declare module 'egg' {
  interface IMiddleware {
    jwtErr: typeof ExportJwtErr;
  }
}
