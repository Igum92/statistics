const statistics = (state = [], action) => {
    switch (action.type) {
        case "USER_ACTION":
            console.log(JSON.stringify(action));
            let newState = [...state, {action: action.action, element: action.element}];
            console.log(JSON.stringify(newState));
            return state;
        default:
            return state;
    }
};

export default statistics;
