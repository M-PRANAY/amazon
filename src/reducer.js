export const initialState = {
	basket: [],
};

export default function reducer(state, action) {
	switch (action.type) {
		case "ADD_TO_BASKET":
			break;

		case "REMOVE_FROM_BASKET":
            break;
        default:
            return state;
	}

}
