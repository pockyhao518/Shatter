import * as SplitsAPIUtil from '../util/splits_api_util';

export const RECEIVE_SPLITS = 'RECEIVE_SPLITS';
export const RECEIVE_SPLIT_ERROR = 'RECEIVE_SPLIT_ERROR';

const receiveAllSplits = splits => {
    return {
        type: RECEIVE_SPLITS,
        splits
    }
}

const receiveSplitError = errors => {
    return {
        type: RECEIVE_SPLIT_ERROR,
        errors
    }
}

export const fetchAllSplits = () => dispatch => {
    return SplitsAPIUtil.fetchAllSplits()
        .then(splits => {
            return dispatch(receiveAllSplits(splits))
        })
}

export const createSplit = split => dispatch => {
    return SplitsAPIUtil.createSplit(split)
        .then(() => {
            dispatch(fetchAllSplits()
            )
        }, err => {
                return dispatch(receiveSplitError(err.responseJSON))
        })
}

export const deleteSplit = splitId => dispatch => {
    return SplitsAPIUtil.deleteSplit(splitId)
        .then(() => {
            dispatch(fetchAllSplits())
        })
}