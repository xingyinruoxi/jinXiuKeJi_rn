import {fetchRequest} from './../../api'

const initState = {
    data: []
};
const GET_NETWORKS = 'GET_NETWORKS/VIEW/NETWORK';

let getNetworkListAction = () => dispatch => {
    fetchRequest('f/app/dot/list').then(res => {
        if (res.success === 1) {
            dispatch({type: GET_NETWORKS, payload: res.body});
        }
    }).catch(err => {
        console.log('++++', err)
    });
};
export default function (state = initState, action) {
    let {type, payload} = action;
    switch (type) {
        case GET_NETWORKS:
            return {
                ...state,
                data: payload
            };
        default:
            return state;
    }
}
export const actions = {
    getNetworkListAction,
};

