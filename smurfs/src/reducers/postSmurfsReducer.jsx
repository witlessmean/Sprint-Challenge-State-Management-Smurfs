

const smurfPosts = {
    name: "",
    age: "",
    height: "",
}




export default (state = [smurfPosts] , action) => {
    switch(action.type) {
        case 'FETCH_POSTS': return  action.payload 
        default: 
        return state;
    }
  }
