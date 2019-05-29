import {fetchRequest} from './../../api'

const initState = {
    data: []
};
const GET_MACHINES_DETAIL = 'GET_MACHINES/VIEW/LISTMACHINE/DETAIL';

let getMachinesDetailAction = (tid) => dispatch => {
    fetchRequest('f/app/goods/info',{tid:tid}).then(res => {
        if (res.success === 1) {
            dispatch({type: GET_MACHINES, payload: res.body});
        }
    }).catch(err => {
        console.log('++++', err)
    });
};
export default function (state = initState, action) {
    let {type, payload} = action;
    switch (type) {
        case GET_MACHINES_DETAIL:
            return {
                ...state,
                data: payload
            };
        default:
            return state;
    }
}
export const actions = {
    getMachinesDetailAction
};

