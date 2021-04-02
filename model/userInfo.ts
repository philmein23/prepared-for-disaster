import { Action, action } from 'easy-peasy';

export interface UserInfo {
    firstName: string;
    lastName: string;
    address: string;
}

export interface UsersInfoModel {
    users: UserInfo[];
    updateUserInfo: Action<UsersInfoModel, { firstName: string, lastName: string, address: string }>
};

const userInfoModel: UsersInfoModel = {
    users: [],
    updateUserInfo: action((state, payload) => {
        state.users.push(payload);
    })
}

export default userInfoModel;