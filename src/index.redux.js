
const ADD_GUN = '加机关枪';
const REMOVE_GUNM = '减机关枪';

// reducer
export function Counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUNM:
      return state - 1;
    default:
      return 10;
  }
}

// action creator
export function addGun() {
  return { type: ADD_GUN }
}
export function removeGun() {
  return { type: REMOVE_GUNM }
}
export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      return dispatch(addGun())
    }, 2000)
  }
}