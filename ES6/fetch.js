async function getdata()
{
    const response= await fetch("http://localhost:8080/get-employees");

    const data= await response.json();

    console.log(data);
    
}

getdata();