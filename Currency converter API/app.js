// const URL="https://cat-fact.herokuapp.com/facts";
// const factPara=document.querySelector("#fact");
// const btn=document.querySelector("#btn");
// const getFacts=async ()=>{
//     console.log("getting data.....");
//     let response=await fetch(URL);
//     console.log(response);
//     let data=await response.json();
//     factPara.innerText=data[0].text;
// }
// btn.addEventListener("click",getFacts);

const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg =document.querySelector(".msg");

document.addEventListener("load",()=>{
    updateExchangeRate();
});

for (let select of dropdowns){
    for (currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && select.name==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateExchangeRate=async ()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }

    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];

    let finalAmount = amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;
};



const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode= countryList[currCode];
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
  });
