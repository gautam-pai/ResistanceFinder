const _band1=document.getElementById("band1")
const _band2=document.getElementById("band2")
const _band3=document.getElementById("band3")
const _multiplier=document.getElementById("multiplier")
const _tolerance=document.getElementById("tolerance")
const _result=document.getElementById("result")

function ResistanceCalculate(){
    const band1=Number(_band1.value);
    const band2=Number(_band2.value);
    const band3=Number(_band3.value);
    const multiplier=Number(_multiplier.value);
    const tolerance=Number(_tolerance.value);

    const res= getvalue(band1,band2,band3,multiplier);
    const lower= res-(0.2*res)
    const higher=res+(0.2*res)
    _result.innerText="Ideal Resistance Value is "+res+". Practial range is "+lower+" to "+higher;
    return false;

}
function getvalue(band1,band2,band3,multiplier){
    return (band1*100+band2*10+band3)*multiplier
}

