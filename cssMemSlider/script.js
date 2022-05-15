let controls = document.querySelectorAll('.control')
let imgs = document.querySelectorAll('.img')
let texts = document.querySelectorAll('.text')
let check = true
let response = await fetch("./pull.json")
let pull = await response.json()
console.log(pull)
controls.forEach((el,i)=>{
 el.addEventListener('click',()=>{
    if(!(el.classList.contains('active'))){
        if(check == true){
            controls.forEach((f)=>{
                f.classList.remove('active')
            })
            el.classList.add('active')
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
                        e.style.zIndex = '0'
                        check = true
                    },700)
               }else if(d == 1){
                    e.style.zIndex = '-1'
                    e.style.backgroundImage = pull[i].src
               }
            })
            texts.forEach((g,l)=>{
                if(l == 0){
                    g.classList.add('next')
                    setTimeout(()=>{
                        g.style.zIndex = '-1'
                        g.classList.remove('next')
                        g.innerHTML = pull[i].text
                    },150)
                    setTimeout(()=>{
                        g.style.zIndex = '0'
                    },300)
               }else if(l == 1){
                    g.classList.remove('prev')
                    setTimeout(()=>{
                        g.style.zIndex = '-1'
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