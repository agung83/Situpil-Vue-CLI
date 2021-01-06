import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { setHeaderToken,removeHeaderToken } from '../headeraxios/auth' 


export default{

    state:{
        apakahuserlogin : false,
        dataloginuser : null,
    },
    mutations:{
        isiDataUser (state, data){
            state.dataloginuser = data
            state.apakahuserlogin = true

        },
        reset_user (state){
            state.dataloginuser = null
            state.apakahuserlogin = false
        }
    },
    getters:{ 
        apakahuserlogin(state){
            return state.apakahuserlogin
        },
        dataloginuser (state){
           return state.dataloginuser 
        }
   
    },
    actions:{
        login({dispacth, commit}, data){

            return new Promise((resolve,reject) => {

             axios.post('api_situpil/api/authuser', data)

                    .then(function (response) {
                        if (response.status == 200) {
                        
                            if (response.data.success == false) {
                                alert(response.data.messages);
                            }else{
                                const token = response.data.data
                                localStorage.setItem('token', token);
                                setHeaderToken(token)
    
                                const datauser = jwt_decode(token);
                                commit('isiDataUser', datauser)
                                resolve(response)
                            }
                        }
                        
                    }).catch(function (event) {
                        alert(event.response.status);

                        commit('reset_user')
                        localStorage.removeItem('token')
                        reject(event)
                    })
            })



        },

        logout({commit}){
            return new Promise((resolve) => {
                commit('reset_user') // commit melanjutkan ke mutasi reset user untuk  men set state user menajdi null dan status isloggein menajdi false lagi
                localStorage.removeItem('token')//remove token dari localstorage
              
                removeHeaderToken() // remove header global axios 
                resolve()
               })
        }



    }



}