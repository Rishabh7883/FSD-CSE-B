const fs=require("fs");
const fs1=require("fs").promises


function writeData(){
    let statusmsg="";

    try{
        fs.writeFile("students.txt","welcome tho Nods FS Module",()=>{
            console.log("hii..:)");
        })

        statusmsg="Data is written successfully";
    }catch(error){
        statusmsg=error;
    }

    return statusmsg;
}

function readData(){
    let statusmsg="";

    try{
        const filedata= fs.readFileSync("students.txt",{encoding: 'utf-8'});

        statusmsg=filedata;
    }catch(error){
        statusmsg=error;
    }

    return statusmsg;
}

function deleteData(){
    let statusmsg="";

    try{
        fs.unlinkSync("students.txt");

        statusmsg="Data deleted Successfully";
    }catch(error){
        statusmsg=error;
    }

    return statusmsg;
}

async function readFileAsync(){
    let statusmsg="";
    try{
        const data=await fs1.readFile("students.txt",{encoding: "utf-8"});
        statusmsg=data;
    }catch(e){
        console.log(e);
        statusmsg=e;
    }
    return statusmsg;
}

function copyData(){
    let statusmsg="";

    try{
        const data=readData();
        if(data.errno) statusmsg="File not Fount";
        else{
            fs.writeFile("students2.txt",data,()=>{
            console.log("hii..:)");
            statusmsg=data;
        })
    }
    
    }catch(error){
        statusmsg=error;
    }

    return statusmsg;
}


const obj={readData,writeData,deleteData,copyData,readFileAsync};
module.exports = obj;