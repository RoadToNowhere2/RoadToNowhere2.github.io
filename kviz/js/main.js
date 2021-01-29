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
        }

        let cart = {};
        let allProductsOnCart = 0;
        let cartPrice= 0;

       document.onclick = e => {
            if (e.target.classList.contains('addCart')) {
                plusProductOnCart(e.target.dataset.id);
            }
        }

        const plusProductOnCart = (id) => {

            if (cart[id]) {
                allProductsOnCart++;
                cart[id].count++;


            } else {
                
                allProductsOnCart++;
                cart[id] = priceList[id];
                cart[id].count = 1;
            }

            if ($('body').hasClass('cart-page')) {
                $('.cart-inner__productsList--item').detach();
                
                for (let i = 1; i < 9; i++) {
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

                    if (cart['1']) {
                        cartPrice += cart['1'].count * cart['1'].price;
                    }
                    if (cart['2']) {
                        cartPrice += cart['2'].count * cart['2'].price;
                    }
                    if (cart['3']) {
                        cartPrice += cart['3'].count * cart['3'].price;
                    }
                    if (cart['4']) {
                        cartPrice += cart['4'].count * cart['4'].price;
                    }
                    if (cart['5']) {
                        cartPrice += cart['5'].count * cart['5'].price;
                    }
                    if (cart['6']) {
                        cartPrice += cart['6'].count * cart['6'].price;
                    }
                    if (cart['7']) {
                        cartPrice += cart['7'].count * cart['7'].price;
                    }
                    if (cart['8']) {
                        cartPrice += cart['8'].count * cart['8'].price;
                    }

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

            if (cart['1']) {
                cartPrice += cart['1'].count * cart['1'].price;
            }
            if (cart['2']) {
                cartPrice += cart['2'].count * cart['2'].price;
            }
            if (cart['3']) {
                cartPrice += cart['3'].count * cart['3'].price;
            }
            if (cart['4']) {
                cartPrice += cart['4'].count * cart['4'].price;
            }
            if (cart['5']) {
                cartPrice += cart['5'].count * cart['5'].price;
            }
            if (cart['6']) {
                cartPrice += cart['6'].count * cart['6'].price;
            }
            if (cart['7']) {
                cartPrice += cart['7'].count * cart['7'].price;
            }
            if (cart['8']) {
                cartPrice += cart['8'].count * cart['8'].price;
            }

            $('.cart-inner__info--price').text(`${cartPrice} грн`)

            console.log(cart);

            $('.mini-cart .count').text(allProductsOnCart);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        const loadCart = () => {
            if(localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));

                if (cart['1']) {
                    allProductsOnCart += cart['1'].count;
                }
                if (cart['2']) {
                    allProductsOnCart += cart['2'].count;
                }
                if (cart['3']) {
                    allProductsOnCart += cart['3'].count;
                }
                if (cart['4']) {
                    allProductsOnCart += cart['4'].count;
                }
                if (cart['5']) {
                    allProductsOnCart += cart['5'].count;
                }
                if (cart['6']) {
                    allProductsOnCart += cart['6'].count;
                }
                if (cart['7']) {
                    allProductsOnCart += cart['7'].count;
                }
                if (cart['8']) {
                    allProductsOnCart += cart['8'].count;
                }
                
                

                console.log(allProductsOnCart);

                if ($('body').hasClass('cart-page')) {
        
                    for (let i = 1; i < 9; i++) {
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
        


        

    }



});