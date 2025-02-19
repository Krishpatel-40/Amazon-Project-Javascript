function stopwatch (){
    let duration=0,startTime,endTime,running;
    this.start=function(){
        if(running)
            throw new Error("Stopwatch is alerady running");
        running=true;
        startTime=new Date();
    };
    this.stop=function(){
            if(!running)
                throw new Error("Stopwatch has not Started");
            running=false;
            endTime=new Date();
            const seconds = (endTime.getTime() - startTime.getTime())/1000;
            duration+=seconds;
                
    };
    this.reset=function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    };
    

   
    Object.defineProperty(this,'duration',
        {
            get:function(){
                return duration;
            }
        }
    )
};
