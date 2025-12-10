  const CurrentTime =()=>{
            let curTime =new Date().toLocaleTimeString();
            document.getElementById("clock").innerHTML =curTime;
        };
        CurrentTime();
        setInterval(()=>{
            CurrentTime();

        },1000);