
import Axios from 'axios'
import progress from 'nprogress'


export function setHeaderToken (token) { 
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export function removeHeaderToken () {
  delete Axios.defaults.headers.common['Authorization']
}

export function sebelumrequesaxios(){
  Axios.interceptors.request.use(req => { // INI SEBELUM REQUEST DIKIRIM KAN AXIOS = INTERCEPTORS.request
      // console.log(`${req.method} ${req.url}`);
        progress.start()  // INI UNTUK LOADING
        // alert('sss')
      return req;
    });
}

export function sesudahresponsedatang(){
  Axios.interceptors.response.use(res => { // INI SEsudah REsponse DIKIRIM KAN AXIOS = INTERCEPTORS.response
      // console.log(`${res.method} ${res.url}`);aaaaaaaaaaaaa
        progress.done() // INI UNTUK BERHENTIKAN LOADING
      return res;
    });
}