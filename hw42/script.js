let button = new Vue({
    el: '#app',
    data:{
        container: '',
        typedText: '',
        isChosen: false,
    },
    methods: {
        chooseOrNot (){
            if(!this.isChosen){
                this.container = true;
                this.isChosen = true;
            } else {
                this.container = false;
                this.isChosen = false;
            }
        },
        
        pressedKey(e){
        
            if ('object' === typeof e) {
               let btnCode = e.button;
        
                switch (btnCode) {
                    case 0:
                        this.typedText = 'Left key is pressed';
                    break;
        
                    case 1:
                        this.typedText = 'Middle key is pressed';
                    break;
        
                    case 2:
                        this.typedText = 'Right key is pressed';
                    break;
        
                    default:
                        this.typedText = 'Error';
                }
            }
        },
        whatTime () {
            this.typedText = new Date().getDate()+'.'+ (new Date().getMonth()+1)+'.'+ new Date().getFullYear()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
        },
    }
})