export default function(state = false, action) {
	switch (action.type) {
		case 'TOGGLE_MODAL':
			return !state;
		default:
			return state;
	}
}
