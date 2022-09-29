const btnClick=document.getElementById("submit");
const inputvalue=document.getElementById("input");
var imgqrcode=document.getElementById("img");

const asyncFunc = async () => {
	const response = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputvalue.value);
    console.log(response)
    return response.blob();
}

btnClick.addEventListener('click', () => {
    asyncFunc().then(blobresponse =>{
    const imageObjectURL = URL.createObjectURL(blobresponse);
    console.log(imageObjectURL);
    imgqrcode.style.display="block";
    imgqrcode.style.src=imageObjectURL
})
})

