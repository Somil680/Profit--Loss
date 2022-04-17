const initialprice  = document.querySelector('#initialprice');
const totalshare    = document.querySelector('#totalshare');
const currentprice  = document.querySelector('#currentprice');
const btninput      = document.querySelector('#btninput');
const outputBox       = document.querySelector('#outputBox');

btninput.addEventListener('click', calculateprofitorloss) ;             

function calculateprofitorloss(){
 var ip = Math.floor(initialprice.value)
 var ts = Math.floor(totalshare.value)
 var cp = Math.floor(currentprice.value)

if (cp > ip ){

     var profit = (cp-ip)*ts
     var profitpercentage  = (profit /ip)*100
    outputBox.style.color = 'green';
    outputBox.innerHTML = `Yah!! Your profit is ${profit} and profit Percentage is ${parseFloat(profitpercentage).toFixed(2)}% `;


} else if(cp<ip) {   

     var loss = (ip-cp)*ts
     var losspercentage = (loss/ip)*100
     outputBox.style.color = 'red';
     outputBox.innerHTML = `Whoops !! Your loss is ${loss} and loss percentage is ${ parseFloat(losspercentage).toFixed(2)}%`;

 }else {
      outputBox.style.color = 'white';
       outputBox.innerHTML = `No pain No gain : No gain No pain!!`}
}
    

