
const leftMenu  = document.querySelector('.left-menu'),
      hamburger = document.querySelector('.hamburger'),
      images    = document.querySelectorAll('.tv-card__img');

      hamburger.addEventListener('click', () => {
        leftMenu.classList.toggle('openMenu');
        hamburger.classList.toggle('open');
      });

      document.body.addEventListener('click', event => {
        if (!event.target.closest('.left-menu')) {
            leftMenu.classList.remove('openMenu');
            hamburger.classList.remove('open'); 
        }
      });

      leftMenu.addEventListener('click', event => {
        const target    = event.target;
        const dropdown  = target.closest('.dropdown');

        if (dropdown) {
            dropdown.classList.toggle('active');
            leftMenu.classList.add('openMenu');
            hamburger.classList.add('open');
        }

      });

      images.forEach((element)=> {

        const imageSrc = element.getAttribute('src');

        element.addEventListener('mouseover', () => {
            const dataImage = element.dataset.backdrop;
            element.setAttribute('src', dataImage) 
        })

        element.addEventListener('mouseout', () => {
            element.setAttribute('src', imageSrc);
        })
      })





