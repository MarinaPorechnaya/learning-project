import profileReducer, {addPostActionCreator, deletePost} from "./profilePage";
import ReactDOM from "react-dom";
import App from "../App";

let state = {
    posts: [
        {id: "1", message: "Hi! How are you?", likesCount: "12"},
        {id: "2", message: "It's my first post", likesCount: "3"},
        {id: "3", message: "It's my second post", likesCount: "4"}
    ]
}

it('new post should be added', () => {
    //test data
    let action = addPostActionCreator("new ext")
       //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(4)
})
it('message should be correct', () => {
    //test data
    let action = addPostActionCreator("new ext")
       //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts[3].message).toBe("new ext")
})
it('length of messages array should be decremented', () => {
    //test data
    let action = deletePost(1)
       //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(2)
})