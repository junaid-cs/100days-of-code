// # version : 1

function easyhttp() {
    this.http = new XMLHttpRequest;
}
// Get request
easyhttp.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if (this.http.status == 200) {
            let data = JSON.parse(this.http.response);
            callback(null, data.products);
            // console.log(data.products[0].id);s
        }
        else {
            callback(`Error : ${this.http.status}`)
        }
    }
    this.http.send();
}
// Post Request
easyhttp.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    this.http.onload = ()=>{
    if(this.http.status === 200){
        callback(null,this.http.response);
    }else{
        callback(`Error : ${this.http.status}`)
    }
    }
    this.http.send(JSON.stringify(data))
}

//Put request
easyhttp.prototype.put = function(url,data,callback){
    this.http.open('Put',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    this.http.onload = ()=>{
    if(this.http.status === 200){
        callback(null,this.http.response);
    }else{
        callback(`Error : ${this.http.status}`)
    }
    }
    this.http.send(JSON.stringify(data))
}

// Delete request
easyhttp.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    this.http.onload = () => {
            let data = JSON.parse(this.http.response);
            callback('Data deleted');
            // console.log(data.products[0].id);s
        }
    this.http.send();
}