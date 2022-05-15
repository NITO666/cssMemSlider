let imgs = document.querySelectorAll('.img')
let controlPlace = document.querySelector('.control-container')
let textContainer = document.querySelector('.text-container')
let check = true
let response = await fetch("./pull.json")
let pull = await response.json()

function createElements(){
    for(let i = 0; i < pull.length;i++){
        let controlBody = document.createElement('div')
        let control = document.createElement('div')
        controlBody.className = 'control-body'
        control.className = 'control'
        controlPlace.appendChild(controlBody)
        controlBody.appendChild(control)
        if(i == 0){
            control.classList.add('active')
        }
    }
    for(let i = 0; i < 2;i++){
        let p = document.createElement('p')
        p.className = 'text'
        p.innerHTML = pull[0].text
        textContainer.appendChild(p)
    }
}
createElements()
let controls = document.querySelectorAll('.control-body')
let texts = document.querySelectorAll('.text')
controls.forEach((el,i)=>{
 el.addEventListener('click',()=>{
    let k = el.querySelector('.control')
    if(!(k.classList.contains('active'))){
        if(check == true){
            controls.forEach((f)=>{
                f.querySelector('.control').classList.remove('active')
            })
            k.classList.add('active')
            imgs.forEach((e,d)=>{
               check = false
               if(d == 0){
                    e.classList.add('next')
                    setTimeout(()=>{
                        e.style.zIndex = '-1'
                        e.classList.remove('next')
                        e.style.backgroundImage = pull[i].src
                    },400)
                    setTimeout(()=>{
                        e.style.zIndex = '1'
                        check = true
                    },700)
               }else if(d == 1){
                    e.style.backgroundImage = pull[i].src
               }
            })
            texts.forEach((g,l)=>{
                if(l == 0){
                    g.classList.add('next')
                    setTimeout(()=>{
                        g.style.zIndex = '-2'
                        g.classList.remove('next')
                        g.innerHTML = pull[i].text
                    },150)
                    setTimeout(()=>{
                        g.style.zIndex = '0'
                    },300)
               }else if(l == 1){
                    g.classList.remove('prev')
                    setTimeout(()=>{
                        g.style.zIndex = '-2'
                        g.classList.add('prev')
                        g.innerHTML = pull[i].text
                    },400)
                    setTimeout(()=>{
                        g.style.zIndex = '0'
                    },700)
                    g.innerHTML = pull[i].text
               }
            })  
        }
    }
 })
})