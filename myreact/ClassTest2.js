class Clock{
    constructor({template}){
        this.template = template;
    }

    render(){
        let date= new Date();
        // let year =date.getFullYear();
        // if(year<10) year='0'+year;
        // let month = date.getMonth()+1;
        // if(month<10) month='0'+month;
        // let day= date.getDate();
        // if(day<10) day= '0'+day;
        // let output =  this. template.replace('y',year).replace('m',month).replace('d',day);
        // console.log(output);

        let hour =date.getHours();
        if(hour<10) hour='0'+hour;
        let mins = date.getMinutes();
        if(mins<10) mins='0'+mins;
        let seconds = date.getSeconds();
        if(seconds<10) seconds= '0'+seconds;
        let output2 =  this. template.replace('h',hour).replace('m',mins).replace('s',seconds);
        console.log(output2);
    }
    stop(){
        clearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(()=>this.render(),1000);
    }

}

// let clock = new Clock({template : 'y-m-d'});
let clock = new Clock({template : 'h시m분s초'}); 
clock.start();
setTimeout(()=>clock.stop(),10000);