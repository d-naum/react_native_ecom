import *  as types from '../types'
import fsManager from '../../common/fs-manager'

export function setCurrentCustomer() {
    return (dispatch) => {
        fsManager.getCustomer().then((customer) => {
            if (customer !== undefined) {
                dispatch({ type: types.GET_CURRENT_CUSTOMER, data: customer })
            }
        })
    }
}


export function logout() {
    return (dispatch) => {
        dispatch({ type: types.UNAUTHORIZED_REQUEST })
        fsManager.logout();
    }
}
