// @ts-nocheck
import { put, takeEvery, debounce, select } from '@redux-saga/core/effects';
import { getRequest, postRequest } from '../../utility/request';
import { Api } from '../../utility/api';
import { HTTP_CALL } from '../../constant/constants';



function* getregions(action: any) {
    // if (HTTP_CALL) {
    //     try {
    //         const response = yield getRequest(`${Api.getAllRegions}${action.payload}`);
    //         console.log('GET POST RESPONSE DATA', response);
    //         if (response.status == 200) {
    //             // console.log('GET POST RESPONSE DATA', response.data);
    //             yield put({
    //                 type: "Common/getRegionSuccess",
    //                 payload: response.data

    //             });
    //         } else {
    //             yield put({
    //                 type: "Common/getRegionsFailure",
    //                 payload: "not 200",
    //             });
    //         }
    //     } catch (error) {
    //         yield put({
    //             type: "Common/getRegionsFailure",
    //             payload: error,
    //         });
    //     }
    // }
    // else {
    //     yield put({
    //         type: "Common/getRegionSuccess",
    //         payload: region

    //     });
    // }
    yield put({
        type: "Common/getRegionSuccess",
        payload: ["manoj"]

    });

}



export default function* mySaga() {
    yield takeEvery('Common/getRegions', getregions);
}