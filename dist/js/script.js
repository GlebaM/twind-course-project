const clickNavI = document.querySelector(".icon-click");
const iconArr = document.querySelectorAll(".menu-button-icon");
const showNaw = document.querySelector("nav ul");
const liItems = document.querySelectorAll("nav ul>li a")



clickNavI.addEventListener('click', function() {
    iconArr[0].classList.toggle('hidden');
    iconArr[1].classList.toggle('hidden');
    showNaw.classList.toggle('hidden');

    
})

liItems.forEach(item => item.addEventListener('click', function() {
        console.log('wahsv')
        iconArr[0].classList.remove('hidden');
        iconArr[1].classList.add('hidden');
        showNaw.classList.add('hidden');
    }))
