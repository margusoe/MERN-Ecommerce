import {
    BANNER_LIST_SUCCESS,
    BANNER_LIST_REQUEST,
    BANNER_LIST_FAIL,
    BANNER_DELETE_REQUEST,
    BANNER_DELETE_SUCCESS,
    BANNER_DELETE_FAIL,
    BANNER_CREATE_REQUEST,
    BANNER_CREATE_SUCCESS,
    BANNER_CREATE_FAIL,
    BANNER_UPDATE_REQUEST,
    BANNER_UPDATE_SUCCESS,
    BANNER_UPDATE_FAIL,
    BANNER_DETAILS_REQUEST,
    BANNER_DETAILS_SUCCESS,
    BANNER_DETAILS_FAIL,
} from '../constants/imageConstants'

import axios from 'axios'

export const listBanners = () => async (dispatch) => {
    try {
        dispatch({ type: BANNER_LIST_REQUEST })

        const { data } = await axios.get('/api/images')

        dispatch({
            type: BANNER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANNER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listBannersDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BANNER_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/images/${id}`)

        dispatch({
            type: BANNER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANNER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteBanner = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BANNER_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/images/${id}`, config)

        dispatch({ type: BANNER_DELETE_SUCCESS })
    } catch (error) {
        dispatch({
            type: BANNER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createBanner = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: BANNER_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/images`, {}, config)

        dispatch({
            type: BANNER_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANNER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateBanner = (banner) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BANNER_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/api/images/${banner._id}`,
            banner,
            config,
        )

        dispatch({
            type: BANNER_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANNER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
