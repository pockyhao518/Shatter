export const fetchAllBills = (author_id) => (
    $.ajax({
        method: "GET",
        url: "api/bills",
        data: { author_id }
    })
)

export const fetchSingleBill = (billId) => (
    $.ajax({
        method: "GET",
        url: `api/bills/${billId}`
    })
)

export const createBill = (bill) => (
    $.ajax({
        method: "POST",
        url: `api/bills`,
        data: {bill}
    })
)

export const updateBill = (bill) => (
    $.ajax({
        method: "PATCH",
        url: `api/bills/${bill.id}`,
        data: {bill}
    })
)

export const deleteBill = (billId) => (
    $.ajax({
        method: "DELETE",
        url: `api/bills/${billId}`
    })
)