export const fetchAllSplits = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/splits'
    })
}

export const createSplit = split => {
    return $.ajax({
        method: 'POST',
        url: '/api/splits',
        data: { split }
    })
}

export const deleteSplit = splitId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/splits/${splitId}`
    })
}