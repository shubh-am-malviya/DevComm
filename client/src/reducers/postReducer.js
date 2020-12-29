import { initialize } from 'passport';

const intitialState = {
	posts: [],
	post: {},
	loading: false,
};

export default function (state = initialize, action) {
	switch (action.type) {
		default:
			return state;
	}
}
