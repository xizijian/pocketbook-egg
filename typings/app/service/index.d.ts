// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBill = require('../../../app/service/bill');
import ExportHome = require('../../../app/service/home');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    bill: AutoInstanceType<typeof ExportBill>;
    home: AutoInstanceType<typeof ExportHome>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
