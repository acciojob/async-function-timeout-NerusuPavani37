function display (text,delay){
   return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      let output = document.getElementById('output');
      output.innerHTML += text;
      resolve()
   },Number(delay))
   })
    
}

async function handleSumbit(){
  let form = document.querySelector('form');
   let mess = document.getElementById('text').value;
   let delay = document.getElementById('delay').value;
   await display(mess,delay);
   form.reset()
}


document.getElementById('btn').addEventListener('click' , handleSumbit);