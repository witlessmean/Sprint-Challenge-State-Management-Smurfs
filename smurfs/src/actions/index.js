import axios from 'axios'


export const fetchPosts = () => {

    return async (dispatch, getState) => {
      const response = await axios.get('http://localhost:3333/smurfs');
   //console.log(response)
    dispatch({type: 'FETCH_POSTS', payload: response.data})
   
   } 
    }

//thunk gives us dispatch and getState