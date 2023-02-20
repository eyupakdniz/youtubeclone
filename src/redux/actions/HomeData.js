import axios from "axios";


const homeAction = (data) => async(dispatch) => {
    try{
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
             // relatedToVideoId: '7ghhRHRP6t4',
              part: 'snippet',
              //type: 'video',
              q: data,
              maxResults: '50'
            },
            headers: {
                'X-RapidAPI-Key': '7cb50bf631msh7ac864fc107ea5cp1a1aeejsndf0a2f1ab623',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
              }
          };
          
          await axios.request(options).then(function (response) {
              dispatch({type:'GET_VIDEOS', payload: response.data})
          }).catch(function (error) {
              console.error(error);
          });
    }catch(error){
        console.error(error)
    }
}
export default homeAction