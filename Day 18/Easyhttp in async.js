class EasyHttp{
  async  get(url){
       const response = await fetch(url);
       const resdata = await response.json();
       return resdata;
    }
    // Post data
   async post(url,data){
        const response = await fetch(url,{
            method : 'POST',
            headers :{
                'Content-type' : 'application/json'
                     },
            body:JSON.stringify(data)
                    }
            )
      const resdata = await response.json();
      return resdata;
    }
    // Put data / Update data
    async put(url,data){
        const response = await fetch(url,{
            method : 'PUT',
            headers :{
                'Content-type' : 'application/json'
                     },
            body:JSON.stringify(data)
                    }
            )
      const resdata = await response.json();
      return resdata;
    }
   async delete(url){
        const response = await fetch(url,{
            method : 'DELETE',
            headers :{
                'Content-type' : 'application/json'
                     },

                    }
            )
      const resdata = await response.json();
      return "Data deleted succesfully";
    }
}