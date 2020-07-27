$(document).ready(function () {
    {
        $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        URLhashListener:true,
        dots: false,
        smartSpeed: 1000,
        nav : true,
        navText: [`<svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5714 1L1 14.3611M1 14.3611L11.5714 27.7222M1 14.3611H38" stroke="#9399A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `,`<svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5714 1L1 14.3611M1 14.3611L11.5714 27.7222M1 14.3611H38" stroke="#9399A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `]
        });
    }
});