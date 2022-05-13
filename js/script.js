const app = new Vue({
    el:'#root',
    data:{
        email: ''
    },
    methods:{
        generateEmail(){
            for(let i = 0; i <= 9; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((element) => {
                    this.email = element.data.response;
                    console.log(this.email);
                })
            }
        }
    }
})