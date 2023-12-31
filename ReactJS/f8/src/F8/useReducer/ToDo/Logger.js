

function Logger(reducer) {
    return (preState, action) => {
        console.group(action.type)

        console.log('pre state: ' + preState);

        console.log('action:' + action);
        const newState = reducer(preState, action)

        console.log('next state: ' + newState);

        console.groupEnd()
        return newState
    }
}

export default Logger