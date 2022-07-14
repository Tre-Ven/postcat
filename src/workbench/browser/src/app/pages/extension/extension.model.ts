import { ModuleInfo } from 'eo/platform/node/extension-manager/types/index';

export enum ExtensionGroupType {
  all = 'all',
  official = 'official',
  installed = 'installed',
}

export interface EoExtensionInfo extends ModuleInfo{
  installed?:boolean;
  bugs:{
    url:string
  };
}
