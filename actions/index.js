export const user_change = (user) => {
    return {
        type: 'user_change',
        payload: user
    }
}

export const filter_change = (filter) => {
    return {
        type: 'filter_change',
        payload: filter
    }
}

export const country_change = (country) => {
    return {
        type: 'country_change',
        payload: country
    }
}