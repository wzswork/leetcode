let post = function(url, data){
    return fetch(url, data)
        .then((res)=>{
            return res.json();
        }).catch((err)=>{
            console.log(err)
        })
}