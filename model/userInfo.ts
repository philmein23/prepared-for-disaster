import { Action, action } from 'easy-peasy';

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	state: string;
	country: string;
	geo: {
		lat: string;
		lng: string;
	};
}

export interface LovedOne {
	firstName: string;
	lastName: string;
}

export interface RallyPoint {
	locationName: string;
	address: Address;
}

export interface UserInfo {
	firstName: string;
	lastName: string;
	address: string;
	state: string;
	country: string;
	lovedOnes: LovedOne[];
	rallyPoints: RallyPoint[];

}

export interface UsersInfoModel {
	users: UserInfo[];
	newUser: UserInfo;
	addNewUser: Action<UsersInfoModel, UserInfo>;
	updateUserInfo: Action<UsersInfoModel, UserInfo>;
}

const userInfoModel: UsersInfoModel = {
	users: [],
	newUser: {} as UserInfo,
	addNewUser: action((state, payload) => {
		state.users.push(payload);
	}),
	updateUserInfo: action((state, payload) => {
		state.newUser = {
			...payload
		};
	})
};

export default userInfoModel;
