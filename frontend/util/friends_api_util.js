export const fetchAllFriends = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/friends'
    })
}

export const createFriend = friend => {
    return $.ajax({
        method: 'POST',
        url: '/api/friends',
        data: { friend }
    })
}

export const deleteFriend = friendId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/friends/${friendId}`
    })
}