import Alert from 'react-s-alert';

const requestProjectsSuccess = data => {
    return {
        type: 'REQUESTED_PROJECTS_SUCCESS',
        payload: data
    };
};

const requestProjectsError = (error = "An error occurred") => {
    Alert.error(error, {
        position: 'bottom-right',
        effect: 'bouncyflip',
        timeout: 4000,
    });
    return { type: 'REQUESTED_PROJECTS_FAILED', payload: error }
};

const fetchProjects = (payload) => {
    return { type: 'FETCHED_PROJECTS', payload}
};

export {
    requestProjectsSuccess,
    requestProjectsError,
    fetchProjects
}