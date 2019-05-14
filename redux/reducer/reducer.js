import {defaultState} from '../store/store';

export const reducer = (state = defaultState, action) => {
    var defaultDataSource = defaultState.dataSource;
    switch (action.type) {
        case 'updateListNoteFromServer': {
            return {
                ...state,
                dataSource: defaultDataSource.cloneWithRows(action.newData),
            };
        }
        case 'changeTypeOfView': {
            return {
                ...state,
                selectedPickerValue: action.value,
            };
        }
        case 'searchWithEmptyString': {
            return {
                ...state,
                dataSource: defaultDataSource.cloneWithRows(action.searchedData),
            };
        }
        case 'searchWithNonEmptyString': {
            var searchDataResults = action.searchFrom.filter((eachData) => {
                if (eachData.data.title.toLowerCase().includes(action.searchedValue.toLowerCase())) {
                    return eachData;
                }
            });
            return {
                ...state,
                dataSource: defaultDataSource.cloneWithRows(searchDataResults),
            };
        }
        default: {
            return state;
        }
    }
}