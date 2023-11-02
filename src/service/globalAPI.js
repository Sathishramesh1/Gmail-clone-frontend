import axios from "axios";

const API_URL = `https://gmail-clone-yppd.onrender.com`;

const API_GMAIL = async (urlObject, payload,token) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}` ,
    data: payload, // initially it was {} payload
    headers:{
      "x-auth-token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2U4MWY5ODFhNmJiMzk3N2Y0YTkzNyIsImlhdCI6MTY5ODkwNzM4M30.AUlEW00xPud50EnoijcLshbWIEX6XDuA4RuXLhC5mbE'
    }
  });
};

export default API_GMAIL;



