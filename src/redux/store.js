import profileReducer from "./profilePage";
import messagesReducer from "./messagesPage";
import sidebarReducer from "./sideBar";

let store = {
    _state: {
        messagesPage: {
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
            ],
            newMessageBady : ''
        },
        profilePage: {
            posts: [
                {id: "1", message: "Hi! How are you?", likesCount: "12"},
                {id: "2", message: "It's my first post", likesCount: "3"}
            ],
            newPostText: "new Post Text"
        },
        sidebar: {
            friendsBar: {
                friends: [
                    {
                        id: "1",
                        name: "Marina",
                        srcImg: "https://avatars.mds.yandex.net/get-pdb-preview/1661566/0dd9618a-dea0-4253-9645-313bb1da1c87/orig"
                    },
                    {
                        id: "2",
                        name: "Dima",
                        srcImg: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/11/rexfeatures-5885988bd.jpg"
                    },
                    {
                        id: "3",
                        name: "Kirill",
                        srcImg: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/11/rexfeatures-5885988bd.jpg"
                    },
                    {
                        id: "4",
                        name: "Mickhail",
                        srcImg: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/11/rexfeatures-5885988bd.jpg"
                    }
                ]
            }
        }

    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return (this._state);
    },
    setState(newState) {
        this._state = newState;
    },
  

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action){ // {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state );
    }
}

export default store;
window.store = store;