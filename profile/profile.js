// confirm("To See Your profile , You have to login First !!")

async function main() {

    // Add event listener to hamburger
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left="0"
        
        
    })

    // Add evet listener to close
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left="-400vw"
        
    })



    
    
}

main()