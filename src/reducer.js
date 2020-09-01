export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
    // token: "BQD95tombddcBTOqTmVRG0cdwlnpMEF6UYufaXE_F0WMqjozpnhO2TuUUndl9RRtIIFNtvnBQgMRzwF9V__z1nTL6kttl1K3mUT51LdoR6hyuWt_LJlIWCc14opSaNlOq80s6m3QWM5BHVbAUwVVZmd5G7U",
};

const reducer = (state, action) => {
console.log(action);

switch (action.type) {
    case "SET_USER":
        return {
            ...state,
            user: action.user,
        };

    case "SET_TOKEN":
        return {
            ...state,
            token: action.token,
        };
    default:
        return state;    
}
}

export default reducer;