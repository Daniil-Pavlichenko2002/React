import { renderEntireTree } from './../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 6, },
            { id: 2, message: "It`s my first post", likesCount: 12, },
            { id: 3, message: "Blabla", likesCount: 12, },
            { id: 4, message: "Dada", likesCount: 12, },
            { id: 5, message: "Neneen", likesCount: 12, },
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Hi", },
            { id: 2, message: "How is your it-kamasutra?", },
            { id: 3, message: "Yo", },
            { id: 4, message: "Yo", },
            { id: 5, message: "Yo", },],
        newMessageText: 'Hi',
        dialogs: [
            { id: 1, name: "Dimych", },
            { id: 2, name: "Andrew", },
            { id: 3, name: "Sveta", },
            { id: 4, name: "Sasha", },
            { id: 5, name: "Victor", },
            { id: 6, name: "Valera", },]
    },
    friends: [
        { name: 'Andrew' },
        { name: 'Sasha' },
        { name: 'Sveta' },
    ]
}

window.state = state;

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newPostText = newText;
    renderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    renderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;