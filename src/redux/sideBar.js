let initialState = {
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
const sidebarReducer = (state = initialState, action ) => {

    return state;
}
export default sidebarReducer;