export const fetchAllSplits = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/splits'
    })
}

export const createSplit = friend => {
    return $.ajax({
        method: 'POST',
        url: '/api/splits',
        data: { friend }
    })
}

export const deleteSplit = splitId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/splits/${splitId}`
    })
}