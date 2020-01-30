const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: "1", name: "Marina"},
        {id: "2", name: "Dima"},
        {id: "3", name: "Kirill"},
        {id: "4", name: "Mickhail"}
    ],
    messages: [
        {id: "1", message: "Hi!"},
        {id: "2", message: "How it`s going?"},
        {id: "3", message: "Yo"}
    ]
};

export const messagesReducer = (state = initialState, action ) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let bady = action.newMessageBady;
            return {
                ...state,
                messages: [...state.messages, {id: "4", message: bady}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBady) => ({ type: SEND_MESSAGE, newMessageBady })

export default messagesReducer;