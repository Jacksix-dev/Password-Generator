
const uppercaseChars:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars:string = 'abcdefghijklmnopqrstuvwxyz';
const numericChars:string = '0123456789';
const specialChars:string = '!@#$%^&*()-=_+[]{}|;:,.<>?';

const password_input:any = document.getElementById('password_input')
const generation_button:any = document.getElementById('generation_button')
const characterlength:any = document.getElementById('character_value')
const slidevalue:any = document.getElementById('slidevalue')


const uppercasebox:any = document.getElementById('uppercase')
const lowercasebox:any = document.getElementById('lowercase')
const numberbox:any = document.getElementById('numbers')
const symbols:any = document.getElementById('symbols')


const bar1:any = document.getElementById('bar1')
const bar2:any = document.getElementById('bar2')
const bar3:any = document.getElementById('bar3')
const bar4:any = document.getElementById('bar4')

function password_generator(passwordlength:number=slidevalue.value){
let base:string='';
let password=[];
let basearray = [];
    if (uppercasebox.checked){
     basearray.push(uppercaseChars)
     
    }
    if (lowercasebox.checked){
      basearray.push(lowercaseChars)
     
    }
       if (numberbox.checked){
        basearray.push(numericChars)
        
      }

       if(symbols.checked){
        basearray.push(specialChars)
        
      }
      
  for(let i = 0; i< passwordlength;i++){
let mix = basearray.join('').split('')

password.push(mix[Math.floor(Math.random() * (mix.length+1) )])


}

if(passwordlength>10 && numberbox.checked && symbols.checked){
  bar1.classList.add('hard')
  bar2.classList.add('hard')
  bar3.classList.add('hard')
  bar4.classList.add('hard')
}
if(passwordlength>10 && numberbox.checked ||symbols.checked){
  bar1.classList.add('ideal')
  bar2.classList.add('ideal')
  bar3.classList.add('ideal')
}
 
if (passwordlength>10){
  bar1.classList.add('medium')
  bar2.classList.add('medium')
}  else{
 
  bar1.classList.add('easy')
}
return password.join('')
}

generation_button.addEventListener('click',()=>{
  password_input.value = password_generator(slidevalue.value)




})

slidevalue.addEventListener('click', () => {
characterlength.innerHTML= slidevalue.value

})

