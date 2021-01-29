import * as FriendAPIUtil from '../util/friends_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND_ERROR = 'RECEIVE_FRIEND_ERROR';


const receiveAllFriends = friends => {
    return {
        type: RECEIVE_FRIENDS,
        friends
    }
}

const receiveFriendError = errors => {
    return {
        type: RECEIVE_FRIEND_ERROR,
        errors
    }
}

export const fetchAllFriends = () => dispatch => {
    return FriendAPIUtil.fetchAllFriends()
    .then(friends => {
        return dispatch(receiveAllFriends(friends))
    })
}

export const addFriend = friend => dispatch => {
    return FriendAPIUtil.createFriend(friend)
    .then(user => {
        dispatch(fetchAllFriends()
        )
    }, err => {
            return dispatch(receiveFriendError(err.responseJSON))
    })
}

export const deleteFriend = friendId => dispatch => {
    return FriendAPIUtil.deleteFriend(friendId)
    .then(user => {
        dispatch(fetchAllFriends())
    })
}