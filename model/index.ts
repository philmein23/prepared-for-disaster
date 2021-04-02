
import userInfoModel, { UsersInfoModel } from './userInfo';

export interface StoreModel {
    userInfo: UsersInfoModel
}

const storeModel = {
    userInfo: userInfoModel
}

export default storeModel;