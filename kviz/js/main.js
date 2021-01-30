$(document).ready(function () {


    {
        $('.header .drop-lang').on('click', function (e) {

            e.preventDefault();
            $('.header-contacts__lang--dropdawn').toggleClass('active');
    
        })
    
        $('.footer .drop-lang').on('click', function (e) {
    
            e.preventDefault();
            $('.footer-top-contacts__lang--dropdawn').toggleClass('active');
            
        })

        $('.product-inner__info .select-lang').on('click', function (e) {
    
            e.preventDefault();
            $('.select-lang__dropdawn').toggleClass('active');
            
        })
    }

    // cart

    {
        let priceList = {
            "1" : {
                "name" : '«Предсказания»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-1.png"
            },
            "2" : {
                "name" : '«Вдохновение»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-2.png"
            },
            "3" : {
                "name" : '«True Story»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-3.png"
            },
            "4" : {
                "name" : '«Моя любовь»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-4.png"
            },
            "5" : {
                "name" : '«Creativity Challenge»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-5.png"
            },
            "6" : {
                "name" : '«Sex Challenge»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-6.png"
            },
            "7" : {
                "name" : '«Для подруги»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-7.png"
            },
            "8" : {
                "name" : '«Для мамы»',
                "price" : 150,
                "lang" : 'Рус',
                "img" : "img/product-img-8.png"
            },
            "101" : {
                "name" : '«Предсказания»',
                "price" : 150,
                "lang" : 'Укр',
                "img" : "img/product-img-1.png"
            },
            "201" : {
                "name" : '«Предсказания»',
                "price" : 150,
                "lang" : 'Eng',
                "img" : "img/product-img-1.png"
            },
        }

        let cart = {};
        let allProductsOnCart = 0;
        let cartPrice= 0;

        $('.select-lang__dropdawn span').on('click', function (e) {
    
            e.preventDefault();
            $('.product-inner__info .select-lang h3').text($(this).text());

            // let data = $('.product-inner').data('id');

            // if ($(this).text() == 'Рус') {
            //     $('.count-minus').data('id', data);
            //     $('.count-number').data('id', data);
            //     $('.count-plus').data('id', data);
            //     $('.product-inner__info .addCart').data('id', data);
            // }

            // if ($(this).text() == 'Укр') {
            //     $('.count-minus').data('id', (data + 100));
            //     $('.count-number').data('id', (data + 100));
            //     $('.count-plus').data('id', (data + 100));
            //     $('.product-inner__info .addCart').data('id', (data + 100));
            // }

            // if ($(this).text() == 'Eng') {
            //     $('.count-minus').data('id', (data + 200));
            //     $('.count-number').data('id', (data + 200));
            //     $('.count-plus').data('id', (data + 200));
            //     $('.product-inner__info .addCart').data('id', (data + 200));
            // }

            // console.log(data);
            // console.log($('.product-inner__info .addCart').data('id'));
            
        })
        

       document.onclick = e => {
            if (e.target.classList.contains('addCart')) {

                let target = e.target;
                let data = $('.product-inner').data('id');
                let idMain = e.target.dataset.id;

                if ($('body').hasClass('single-page')) {

                    if ($('.product-inner__info .select-lang h3').text() == 'Рус') {
                        $('.count-minus').data('id', data);
                        $('.count-number').data('id', data);
                        $('.count-plus').data('id', data);
                        $('.product-inner__info .addCart').data('id', data);
                        $('.product-inner__info .select-lang h3').text('Выберите язык баночки');
                    }

                    if ($('.product-inner__info .select-lang h3').text() == 'Укр') {
                        $('.count-minus').data('id', (data + 100));
                        $('.count-number').data('id', (data + 100));
                        $('.count-plus').data('id', (data + 100));
                        $('.product-inner__info .addCart').data('id', (data + 100));
                        $('.product-inner__info .select-lang h3').text('Выберите язык баночки');
                        data += 100;
                        idMain = data;
                    }

                    if ($('.product-inner__info .select-lang h3').text() == 'Eng') {
                        $('.count-minus').data('id', (data + 200));
                        $('.count-number').data('id', (data + 200));
                        $('.count-plus').data('id', (data + 200));
                        $('.product-inner__info .addCart').data('id', (data + 200));
                        $('.product-inner__info .select-lang h3').text('Выберите язык баночки');
                        data += 200;
                        idMain = data;
                    }

                }

                // console.log(e.target.dataset.id);
                // console.log(data);
                // console.log(idMain);

                plusProductOnCart(idMain, target);
                idMain = e.target.dataset.id;
                
            }
            
        }

        const plusProductOnCart = (id, target) => {

            if ($('body').hasClass('single-page') && target.classList.contains('addCartSingle')) {

                let numbers = $('.count-number').text();
                // let language = $('.select-lang h3').text();
                +numbers;

                if (cart[id]) {

                    // if (language.length < 5) {
                    //     cart[id].lang = language;
                    // }

                    allProductsOnCart+= +numbers;
                    cart[id].count+= +numbers;

    
    
                } else {

                    allProductsOnCart+= +numbers;
                    cart[id] = priceList[id];
                    cart[id].count = +numbers;



                    // if (language.length < 5) {
                    //     cart[id].lang = language;
                    // }


                }

            } else {

                if (cart[id]) {
                    allProductsOnCart++;
                    cart[id].count++;
    
    
                } else {
                    
                    allProductsOnCart++;
                    cart[id] = priceList[id];
                    cart[id].count = 1;
                }
            }

            

            if ($('body').hasClass('cart-page')) {
                $('.cart-inner__productsList--item').detach();
                
                for (let i = 1; i < 300; i++) {
                    if (cart[`${i}`]) {


                        $('.cart-inner__productsList').append(`
    
                            <div class="cart-inner__productsList--item" data-id="${i}">
                                <img src="${cart[`${i}`].img}" alt="" class="main-img">
                                <div class="info">
                                    <h3>${cart[`${i}`].name}</h3>
                                    <span class="language">${cart[`${i}`].lang}</span>
                                    <div class="price-info">
                                        <div class="counter">
                                            <div class="count-minus" data-id="${i}"><img src="img/lang-arrow.png" alt=""></div>
                                            <div class="count-number" data-id="${i}">${cart[`${i}`].count}</div>
                                            <div class="count-plus" data-id="${i}"><img src="img/plus.png" alt=""></div>
                                        </div>
                                        <span class="price" data-id="${i}">${cart[`${i}`].price * cart[`${i}`].count} грн</span>
                                    </div>
                                </div>
                                <div class="delete" data-id="${i}"><img src="img/pomoyka.png" alt=""></div>
                            </div>
    
                        `)
    
                    }
                }
                    cartPrice = 0;

                    for (let i = 1; i < 300; i++) {
                        if (cart[i]) {
                            cartPrice += cart[i].count * cart[i].price;
                        }
                    }

                    // if (cart['1']) {
                    //     cartPrice += cart['1'].count * cart['1'].price;
                    // }
                    // if (cart['2']) {
                    //     cartPrice += cart['2'].count * cart['2'].price;
                    // }
                    // if (cart['3']) {
                    //     cartPrice += cart['3'].count * cart['3'].price;
                    // }
                    // if (cart['4']) {
                    //     cartPrice += cart['4'].count * cart['4'].price;
                    // }
                    // if (cart['5']) {
                    //     cartPrice += cart['5'].count * cart['5'].price;
                    // }
                    // if (cart['6']) {
                    //     cartPrice += cart['6'].count * cart['6'].price;
                    // }
                    // if (cart['7']) {
                    //     cartPrice += cart['7'].count * cart['7'].price;
                    // }
                    // if (cart['8']) {
                    //     cartPrice += cart['8'].count * cart['8'].price;
                    // }

                    $('.cart-inner__info--price').text(`${cartPrice} грн`)

                    // удаление товаров из корзины

                    $('.delete').on('click', function() {
                        let id = $(this).data('id');
                        let element = $('.cart-inner__productsList--item');

                        $.each(element, (index, elem) => {
                            if (id == $(elem).data('id')) {
                                $(elem).detach();
                                delete cart[id];
                                
                                renderCart();
                            }
                        })
                        
                    })

                    // плюс минус в корзине

                    $('.count-plus').on('click', function() {
                        let id = $(this).data('id');
                        let element = $('.count-number');

                        $.each(element, (index, elem) => {
                            if (id == $(elem).data('id')) {

                                cart[id].count++

                                $(elem).text(cart[id].count);
                                $(`.price[data-id="${id}"]`).text(`${cart[id].count * cart[id].price} грн`)

                                renderCart();
                            }
                        })
                        
                    })

                    $('.count-minus').on('click', function() {
                        let id = $(this).data('id');
                        let element = $('.count-number');

                        $.each(element, (index, elem) => {
                            if (id == $(elem).data('id')) {

                                cart[id].count--

                                $(elem).text(cart[id].count);
                                $(`.price[data-id="${id}"]`).text(`${cart[id].count * cart[id].price} грн`)


                                if (cart[id].count == 0) {
                                    $(`.cart-inner__productsList--item[data-id="${id}"]`).detach();
                                    delete cart[id];
                                }

                                renderCart();
                            }
                        })
                        
                    })

            }

            


            renderCart();
        }

        const renderCart = () => {
            if(!$.isEmptyObject(cart)) {
                $('.mini-cart').css('right', 0)
            }

            cartPrice = 0;

            for (let i = 1; i < 300; i++) {
                if (cart[i]) {
                    cartPrice += cart[i].count * cart[i].price;
                }
            }

            // if (cart['1']) {
            //     cartPrice += cart['1'].count * cart['1'].price;
            // }
            // if (cart['2']) {
            //     cartPrice += cart['2'].count * cart['2'].price;
            // }
            // if (cart['3']) {
            //     cartPrice += cart['3'].count * cart['3'].price;
            // }
            // if (cart['4']) {
            //     cartPrice += cart['4'].count * cart['4'].price;
            // }
            // if (cart['5']) {
            //     cartPrice += cart['5'].count * cart['5'].price;
            // }
            // if (cart['6']) {
            //     cartPrice += cart['6'].count * cart['6'].price;
            // }
            // if (cart['7']) {
            //     cartPrice += cart['7'].count * cart['7'].price;
            // }
            // if (cart['8']) {
            //     cartPrice += cart['8'].count * cart['8'].price;
            // }

            $('.cart-inner__info--price').text(`${cartPrice} грн`)

            console.log(cart);


            $('.mini-cart .count').text(allProductsOnCart);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        const loadCart = () => {
            if(localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));

                for (let i = 1; i < 300; i++) {
                    if (cart[i]) {
                        allProductsOnCart += cart[i].count;
                    }
                }

                // if (cart['1']) {
                //     allProductsOnCart += cart['1'].count;
                // }
                // if (cart['2']) {
                //     allProductsOnCart += cart['2'].count;
                // }
                // if (cart['3']) {
                //     allProductsOnCart += cart['3'].count;
                // }
                // if (cart['4']) {
                //     allProductsOnCart += cart['4'].count;
                // }
                // if (cart['5']) {
                //     allProductsOnCart += cart['5'].count;
                // }
                // if (cart['6']) {
                //     allProductsOnCart += cart['6'].count;
                // }
                // if (cart['7']) {
                //     allProductsOnCart += cart['7'].count;
                // }
                // if (cart['8']) {
                //     allProductsOnCart += cart['8'].count;
                // }
                
                

                console.log(allProductsOnCart);

                if ($('body').hasClass('cart-page')) {
        
                    for (let i = 1; i < 300; i++) {
                        if (cart[`${i}`]) {
    
    
                            $('.cart-inner__productsList').append(`
        
                                <div class="cart-inner__productsList--item" data-id="${i}">
                                    <img src="${cart[`${i}`].img}" alt="" class="main-img">
                                    <div class="info">
                                        <h3>${cart[`${i}`].name}</h3>
                                        <span class="language">${cart[`${i}`].lang}</span>
                                        <div class="price-info">
                                            <div class="counter">
                                                <div class="count-minus" data-id="${i}"><img src="img/lang-arrow.png" alt=""></div>
                                                <div class="count-number" data-id="${i}">${cart[`${i}`].count}</div>
                                                <div class="count-plus" data-id="${i}"><img src="img/plus.png" alt=""></div>
                                            </div>
                                            <span class="price" data-id="${i}">${cart[`${i}`].price * cart[`${i}`].count} грн</span>
                                        </div>
                                    </div>
                                    <div class="delete" data-id="${i}"><img src="img/pomoyka.png" alt=""></div>
                                </div>
        
                            `)
        
                        }
                    }

                    // удаление товаров из корзины

                    $('.delete').on('click', function() {
                        let id = $(this).data('id');
                        let element = $('.cart-inner__productsList--item');

                        $.each(element, (index, elem) => {
                            if (id == $(elem).data('id')) {
                                $(elem).detach();
                                delete cart[id];
                                
                                renderCart();
                            }
                        })
                        
                    })

                    // плюс минус в корзине

                    $('.count-plus').on('click', function() {
                        let id = $(this).data('id');
                        let element = $('.count-number');

                        $.each(element, (index, elem) => {
                            if (id == $(elem).data('id')) {

                                cart[id].count++

                                $(elem).text(cart[id].count);
                                $(`.price[data-id="${id}"]`).text(`${cart[id].count * cart[id].price} грн`)

                                renderCart();
                            }
                        })
                        
                    })

                    $('.count-minus').on('click', function() {
                        let id = $(this).data('id');
                        let element = $('.count-number');

                        $.each(element, (index, elem) => {
                            if (id == $(elem).data('id')) {

                                cart[id].count--

                                $(elem).text(cart[id].count);
                                $(`.price[data-id="${id}"]`).text(`${cart[id].count * cart[id].price} грн`)


                                if (cart[id].count == 0) {
                                    $(`.cart-inner__productsList--item[data-id="${id}"]`).detach();
                                    delete cart[id];
                                }

                                renderCart();
                            }
                        })
                        
                    })
    
    
                }  
                
                

                


                renderCart();
            }
        }
        

        loadCart(); 
        
        if ($('body').hasClass('single-page')) {

            let element = $('.count-number');
        
            $('.count-plus').on('click', function() {

                let id = $(this).data('id');
                let elementText = $(element).text();
                let price = $('.product-inner__info .price-info .price');

                +elementText
                elementText++

                $(element).text(elementText);
                $(price).text(`${elementText * priceList[id].price} грн`)
                
            })

            $('.count-minus').on('click', function() {

                let id = $(this).data('id');
                let elementText = $(element).text();
                let price = $('.product-inner__info .price-info .price');

                +elementText

                if (elementText == 1) {
                    return
                } else {
                    elementText--

                    $(element).text(elementText);
                    $(price).text(`${elementText * priceList[id].price} грн`)
                }
                
            })
            
        }

        

    }


    {
        //single product

        let img = $('.main-img');

        $('.product-inner__slider--nav img').on('click', function() {
            let src = $(this).attr('src');
            $(img).attr('src', src);
        })




        
    }


});