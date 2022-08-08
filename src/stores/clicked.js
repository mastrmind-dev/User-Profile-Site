import {defineStore} from 'pinia'

export const useClickedStore = defineStore('clicked', {
    state:()=>{
        return {clicked : false}
    },
    actions:{
        gotClicked(){
            this.clicked = true;
        },
        gotUnClicked(){
            this.clicked=false;
        }
    }
})

