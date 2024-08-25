const getTodos = (resource,callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status===200){
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        } else if(request.readyState===4){
            callback(`finished but could not fetch data. Status ${request.status}!!!`,undefined);
        }
    });

    request.open('GET',resource);
    request.send();
};

getTodos('todos/first.json',(err,data)=>{
        console.log(data);
        getTodos('todos/second.json',(err,data) =>{
            console.log(data);
            getTodos('todos/third.json',(err,data) => {
                console.log(data);
                //this act of nesting callbacks is called callback hell and is a bad practice
            });
        });
    });