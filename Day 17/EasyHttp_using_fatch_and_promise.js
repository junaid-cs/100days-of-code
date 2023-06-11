class EasyHttp{
    get(url){
       return new Promise((resovel,reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>resovel(data))
            .then(err => reject(err));
        })
    }
    // Post data
    post(url,data){
        return new Promise((resovel,reject)=>{
            fetch(url,{
                method : 'POST',
                headers :{
                    'Content-type' : 'application/json'
                         },
                body:JSON.stringify(data)
                        }
                )
            .then(res=>res.json())
            .then(data=>resovel(data))
            .then(err => reject(err));
        })
    }
    // Put data / Update data
    put(url,data){
       return new Promise((resovel,reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(data)
                        })
                .then(res=>res.json())
                .then(data=>resovel(data))
                .catch(err=>reject(err))
        })
    }
    delete(url){
        return new Promise((resovel,reject)=>{
            fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                },
            })
            .then(res=>res.json())
            .then(data=>resovel('data has been removed'))
            .catch(err=>reject(err))
        })
    }
}