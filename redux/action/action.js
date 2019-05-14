
export function updateListNoteFromServer(data) {
    return {
        type: 'updateListNoteFromServer',
        newData: data,
    };
}

export function changeTypeOfView(value) {
    return {
        type: 'changeTypeOfView',
        value,
    };
}

export function searchWithEmptyString(data) {
    return {
        type: 'searchWithEmptyString',
        searchedData: data,
    };
}

export function searchWithNonEmptyString(value, data) {
    return {
        type: 'searchWithNonEmptyString',
        searchedValue: value,
        searchFrom: [...data],
    };
}