import { Action, action } from "easy-peasy";

export interface LovedOne {
  firstName: string;
  lastName: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  country: string;
  lovedOnes: LovedOne[];
}

export interface UsersInfoModel {
  users: UserInfo[];
  newUser: UserInfo;
  addNewUser: Action<UsersInfoModel, UserInfo>;
  updateUserInfo: Action<UsersInfoModel, UserInfo>;
}

const userInfoModel: UsersInfoModel = {
  users: [],
  newUser: null,
  addNewUser: action((state, payload) => {
    state.users.push(payload);
  }),
  updateUserInfo: action((state, payload) => {
    state.newUser = {
      ...payload,
    };
  }),
};

export default userInfoModel;
