var box=document.querySelector('.box')
var up=document.querySelector('.up')
var down=document.querySelector('.down')
var left=document.querySelector('.left')
var right=document.querySelector('.right')
var front=document.querySelector('.front')
var back=document.querySelector('.back')

box.onclick=function () {
    up.classList.toggle('active')
    down.classList.toggle('active')
    left.classList.toggle('active')
    right.classList.toggle('active')
    front.classList.toggle('active')
    back.classList.toggle('active')
}