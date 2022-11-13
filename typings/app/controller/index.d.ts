// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBill = require('../../../app/controller/bill');
import ExportHome = require('../../../app/controller/home');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    bill: ExportBill;
    home: ExportHome;
    upload: ExportUpload;
    user: ExportUser;
  }
}
