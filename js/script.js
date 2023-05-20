var container = document.querySelector('.container');
var userImg = document.querySelector('.user_result img');
var cpuImg = document.querySelector('.cpu_result img');
var result = document.querySelector('.result');
var image = document.querySelectorAll('.option_image');

image.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        item.classList.add('active');
        cpuImg.src = 'image/rock.png';
        userImg.src = 'image/rock.png';
        result.textContent = 'Wait ...';

        image.forEach((item2, index2) => {
            if (index != index2 && item2.classList.contains('active')) {
                item2.classList.remove('active');
            }
        })

        container.classList.add('start');

        let time = setTimeout(() => {
            container.classList.remove('start');

            let imageSrc = e.target.querySelector('img').src;
            userImg.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let image = ["image/paper.png", "image/rock.png", "image/scissors.png"];
            cpuImg.src = image[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];;

            let output = {
                RR: 'Draw',
                RP: 'Cpu',
                RS: 'User',
                PP: 'Draw',
                PR: 'User',
                PS: 'Cpu',
                SS: 'Draw',
                SP: 'User',
                SR: 'Cpu',
            }

            let display = output[userValue + cpuValue];
            console.log(display);
            result.textContent = userValue === cpuValue ? "Match Draw" : `${display} Won!`;
        }, 2500);
    })

});

