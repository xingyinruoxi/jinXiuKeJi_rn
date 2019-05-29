import {combineReducers} from 'redux';
import machine from './../view/listmachine/reducer'
import detailMachine from './../view/detailMachine/reducer'
import network from './../view/network/reducer'
export default combineReducers({
    machine,
    network,
    detailMachine
});