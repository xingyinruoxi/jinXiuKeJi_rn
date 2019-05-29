import {fetchRequest} from './../../api'

const initState = {
    data: []
};
const GET_MACHINES = 'GET_MACHINES/VIEW/LISTMACHINE';

let getMachinesListAction = () => dispatch => {
    fetchRequest('f/app/goods/list').then(res => {
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
        case GET_MACHINES:
            return {
                ...state,
                data: payload
            };
        default:
            return state;
    }
}
export const actions = {
    getMachinesListAction
};

