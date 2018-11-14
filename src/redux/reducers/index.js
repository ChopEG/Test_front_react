const initialState = {
    loading: false,
    projects: [],
    query: {},
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_PROJECTS':
            return {
                ...state,
                loading: true
            }
        case 'REQUESTED_PROJECTS_SUCCESS':
            return {
                ...state,
                projects: action.payload.projects,
                query: action.payload.query,
                loading: false
            };
        case 'REQUESTED_PROJECTS_FAILED':
            return {
                ...state,
                error: {
                    ...action.payload
                },
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;