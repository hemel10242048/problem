const pe=document.querySelector('.playlist')

const listener=()=>{
    pe.addEventListener('click',(event)=>{

        const le=event.target
        const ci=[le].indexOf(le)
        console.log(ci)
    })
}

listener()


