'use strict';

document.addEventListener('DOMContentLoaded', () => { 
    
    // keyboard
    {
        const keyboardButton    = document.querySelector('.search-form__keyboard');
        const keyboard          = document.querySelector('.keyboard');
        const closeKeyboard     = document.getElementById('close-keyboard');
        const search            = document.querySelector('.search-form__input');

        const toggleKeyboard    = () => {
            keyboard.style.top  = keyboard.style.top ? '' : "50%";
        };

        const typing            = event => {
            const target        = event.target;
            if (target.tagName.toLowerCase() === 'button' && target.id === 'keyboard-backspace') {
                search.value = search.value.slice(0, -1);
            } else if (target.tagName.toLowerCase() === 'button' && target.id !== 'keyboard-backspace' && target.id !== 'keyboard-space') {
                search.value    += target.textContent.trim();
            } else if (target.tagName.toLowerCase() === 'button' && target.id == 'keyboard-space') {
                search.value    += ' ';
            }
            // keyboard-space        - id at space
            // keyboard-backspace    - id at backspace
        };

        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);

    }

    // menu
    {
        const burger        = document.querySelector('.spinner');
        const sidebarMenu   = document.querySelector('.sidebarMenu');

        burger.addEventListener('click', () => {
            sidebarMenu.classList.toggle('rollUp');
            burger.classList.toggle('active');
        });

        sidebarMenu.addEventListener('click', e => {
            let target = e.target;
            target     = target.closest('a[href="#"]');

            if(target) {
                const parent = target.parentElement;
                sidebarMenu.querySelectorAll('li').forEach(elem => {
                    if (elem === parent) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                })
            }
        });
    }

    // modal
    // Набросал тут модалку за 20 минут))
    // Не судите строго;)
    {
        const modal         = document.createElement('div');
        const style         = document.createElement('style');

        document.getElementsByTagName('body')[0].appendChild(modal);
        document.getElementsByTagName('head')[0].appendChild(style);

        modal.classList.add('modal');
        // z-index: 667 - чтобы перебить стили сайдбар меню и вывести поверх него
        style.innerText = `
                        .modal {
                            transform-origin: top center;
                            transform: scale(0);
                            opacity: 0;
                            visibility: hidden;
                            position: absolute;
                            top: 0;
                            right: 0;
                            left: 0;
                            bottom: 0;
                            background-color: rgba(0, 0, 0, 0.7);
                            z-index: 667;
                        }
                        .innerModal {
                            position: absolute;
                            top: 10%;
                            right: 10%;
                            left: 10%;
                            bottom: 10%;
                            background-color: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 90px;
                        }
                        .closeModal {
                            font-size: 30px;
                            transform: rotate(45deg);
                            position: absolute;
                            top: 0px;
                            right: 5px;
                            font-weight: 700;
                            padding: 20px;
                        }`
        
        const innerModal = document.createElement('div');

        innerModal.classList.add('innerModal');
        innerModal.innerText = 'Тут будет видео!!!'
        document.querySelector('.modal').appendChild(innerModal);

        const createCloseModal = document.createElement('div');
        createCloseModal.classList.add('closeModal');
        createCloseModal.innerText = '+';
        document.querySelector('.innerModal').appendChild(createCloseModal);



        // открыть модалку
        const openModal   = document.querySelectorAll('.yt');
        openModal.forEach(e => {
            e.addEventListener('click', () => {
                const open = document.querySelector('.modal');
                open.style.visibility = "visible";
                open.style.opacity = "1";
                open.style.transform = "scale(1)";
            })
        });
        //закрыть модалку
        const closeModal = document.querySelector('.closeModal');
        closeModal.addEventListener('click', () => {
            const open = document.querySelector('.modal');
            open.style.visibility = "hidden";
            open.style.opacity = "0";
            open.style.transform = "scale(0)";
        });
    }

 });