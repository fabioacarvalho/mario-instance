

const pipe = document.querySelector(".pipe")
const mario = document.querySelector(".mario")
const boo = document.querySelector(".boo")
const turtle = document.querySelector(".turtle")
const restart = document.querySelector("#restart")
const game_board = document.querySelector("#game-board")
const score_set = document.querySelector(".score")
const cloud = document.querySelector(".cloud")
const start = document.querySelector("#start")

var score = 0



const jump = () => {
    mario.classList.add("mario_jump")

    setTimeout(() => {
        mario.classList.remove("mario_jump")
    }, 500)
    
}

let gm = false
const loop = setInterval(() => {
    let pipe_position = pipe.offsetLeft
    let mario_position = +window.getComputedStyle(mario).bottom.replace("px", "")

    if(gm == false) {
        score += 1
        console.log(score)
        score_set.innerHTML = `<span style="margin-left:10px"> <strong> SCORE: </strong> ${score}</span>`

       
        if(score > 0) {
            cloud.src = 'image/cloud.png'
        }
        if(score > 1000) {
            score_set.style.color = "white"
            game_board.style.background = 'linear-gradient(#1d2e35, #b1c2c9)'
        }
        if(score > 2000) {
            score_set.style.color = "white"
            game_board.style.background = 'linear-gradient(#1d2e35, #484f52)'
            boo.style.display = "block"
            turtle.style.display = "none"
        }
        if(score >= 2850) {
            mario.src = 'image/mario-yoshi.gif'
        }
    }

    if(pipe_position <= 75 && pipe_position > 0 && mario_position < 75) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipe_position}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${mario_position}px`
        mario.src = "./image/game-over.webp"

        if(gm == false) {
            let img_gm = document.createElement("img")
            img_gm.src='./image/gm-over1.png'
            img_gm.classList.add("gm")
            game_board.appendChild(img_gm)
            gm = true
            restart.style.display = "block"
        }


    }
}, 10)

restart.addEventListener("click", () => {
    window.location.reload()
})

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);

