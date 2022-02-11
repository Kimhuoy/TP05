
// function click(){
//      document.getElementById('container1').classList.toggle('active');
    
// }


// let counter = 0;
// function count(){
//     let counter = localStorage.getItem('counter');
//     counter++;
//     document.querySelector('#score').innerHTML = counter;
//     localStorage.setItem('counter', counter);
// }
// setInterval(count, 1000)
document.addEventListener('DOMContentLoaded', () =>{
    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    let isJumping = false;
    let gravity = 0.9
    let gameOver = false
    const alert = document.querySelector('#alert')
    function control(e){
        if(e.keyCode === 32){
            if(!isJumping){
                isJumping = true
                jump();
            }
           
        }

    }
    document.addEventListener('keyup', control)
    let position = 0
    function jump(){
        let count = 0
        let timeId = setInterval(function (){
            if(count === 15){
                clearInterval(timeId)
                console.log('down')
                let downTimeId = setInterval(function () {
                    if(count === 0){
                        clearInterval(downTimeId)
                        isJumping = false
                    }
                    position -=5
                    count--
                    position = position * gravity
                    dino.style.bottom = position + 'px'
                },20)
                
            }
            console.log('up');
            position +=30;
            count++
            position = position * gravity
            dino.style.bottom = position + 'px';
            console.log(dino.style.bottom)
        },20)
    }
    function generateObstracles(){
        let randomTime = Math.random() * 4000
        let obstraclePosition = 1000
        const obstacle = document.createElement('div')
        if(!gameOver) obstacle.classList.add('obstracle')
        grid.appendChild(obstacle)
        obstacle.style.left = obstraclePosition + 'px'


        let timeID = setInterval(function(){
            if(obstraclePosition > 0 && obstraclePosition < 60 && position < 60){
                clearInterval(timeID)
                alert.innerHTML = "Game Over"
                gameOver = true
                clearInterval(counter)
                while(grid.firstChild){
                    grid.removeChild(grid.lastChild)
                }
            }

            obstraclePosition -=10
            obstacle.style.left = obstraclePosition + 'px'
            
        },20)
        if(!gameOver) setTimeout(generateObstracles, randomTime)
    }
    generateObstracles()
})


   
    