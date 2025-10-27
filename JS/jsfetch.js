const url="https://api.github.com/users/Rishabh7883";
const res=fetch(url);
res.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log("Data: ",data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("fetch done successfully");
})