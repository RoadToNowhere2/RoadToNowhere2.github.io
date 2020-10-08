$(document).ready(function () {
    $('.slider-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '260px',
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                centerMode: false,
              }
            },
          ]
      });

      {

        $('.js-modal').on('click', function() {
          $('.modal').css('display', 'flex');
        })

        $('.modal-form-close').on('click', function() {
          $('.modal').css('display', 'none');
        })

      }

      {

        $('.tabs-nav__item').on('click', function () {
          if ($(this).hasClass('active')) {
            return;
          } else {
            $('.tabs-nav__item').removeClass('active');
            $(this).addClass('active');
            
            let tabs = $('.tabs-content');

            tabs.each(function (index, element) {
              if ($(element).hasClass('hidden')) {
                $(element).removeClass('hidden');
              } else {
                $(element).addClass('hidden');
              }
            })

          }
        });

      }

      {

        let items = $('.grid-item');
        let buttons = $('.grid-nav__block');

        $(buttons).each(function (index, element) {

          $(element).on('click', function () {

            if ($(element).hasClass('active')) {

              $(element).removeClass('active');
              $(items).each(function (index, element) {

                  $(element).removeClass('active');
                  $(element).css('opacity', '1')
                  

              })
              

            } else {

              $(items).removeClass('active');
              $('.grid-nav__block').removeClass('active');
              $(element).addClass('active');

              let data = $(element).data("item");

              $(items).each(function (index, element) {

                let dataInner = $(element).data("item");

                if (data === dataInner) {
                  $(element).addClass('active');
                } else {
                  $(element).css('opacity', '0.5')
                }

              })

            }

          });
        })

      }

      // Калькулятор

      {

        const columns             = $('.calculator-inner__block--main .column');
        const columnsPrice        = $('.calculator-inner__block--2 .column:nth-child(2) .column-item');
        let activeColumns         = [];
        let activeColumnsPrice    = [];

        let columnSumm;
        let firstInputSumm        = 200000;
        let secondInputSumm       = 20000;
        let allSumm;



        columns.splice(0, 1);
        columnsPrice.splice(0, 1);
        columnsPrice.splice(2, 1);


        columns.each(function (index, element) {

          $(element).on('click', function () {

            $(columnsPrice[1]).children().text('');

            if (!$(element).hasClass('clicked')) {

              $(element).addClass('clicked');
              activeColumns.push(element);
              let indexColumnActive = index;

              $(columnsPrice).each(function (index, element) {

                let children = $(element).children()

                $(children).each(function (i, e) {

                  if (i == indexColumnActive) {

                    $(e).addClass('clicked');
                    activeColumnsPrice.push(e);

                  }

                })

              })
              

            } else {

              $(element).removeClass('clicked');
              let indexColumnActive = index;
              let indexActiveColumn = $(activeColumns).index(element);

              activeColumns.splice(indexActiveColumn, 1);

              $(columnsPrice).each(function (index, element) {

                let children = $(element).children()

                $(children).each(function (i, e) {

                  let indexActiveColumn = $(activeColumnsPrice).index(e);

                  if (i == indexColumnActive) {

                    $(e).removeClass('clicked');
                    activeColumnsPrice.splice(indexActiveColumn, 1);
                    
                    
                  }

                })

              })

            }

            $(columns).each(function (index, element) {
              $(element).css('background-color', `#fff`);
            })

            $(columnsPrice).children().each(function(index, element) {
              $(element).css('background-color', `#fff`);
            })

            $(activeColumns).each(function (index, element) {
              let coef = 1 - ( (index * 20) / 100 );

              $(element).css('background-color', `rgba(186, 166, 255, ${coef})`);
            })

            $(activeColumnsPrice).each(function (index, element) {
              let coef = 1 - ( (index * 10) / 100 );
              

              if (index == 0 || index == 1) {

                $(element).css('background-color', `rgba(186, 166, 255, 1)`);

              } else if (index == 2 || index == 3) {

                $(element).css('background-color', `rgba(186, 166, 255, 0.8)`);

              } else if (index == 4 || index == 5) {

                $(element).css('background-color', `rgba(186, 166, 255, 0.6)`);

              } else if (index == 6 || index == 7) {

                $(element).css('background-color', `rgba(186, 166, 255, 0.4)`);

              } else if (index == 8 || index == 9) {

                $(element).css('background-color', `rgba(186, 166, 255, 0.2)`);

              }
              
            })

            //Подсчет
            let number1;
            let number2;
            let number3;
            let number4;
            let number5;

            $(activeColumns).each(function (index, element) {

              if (index == 0) {

                number1 = $('.column-price-1').val();
                $(activeColumnsPrice[1]).text(number1);
              
              } else if (index == 1) {

                number2 = $('.column-price-1').val() * $('.column-price-2').val() / 100;
                $(activeColumnsPrice[3]).text(number2);
                
                
              } else if (index == 2) {
                
                number3 = $('.column-price-1').val() * $('.column-price-3').val() / 100;
                $(activeColumnsPrice[5]).text(number3);
                

              } else if (index == 3) {
                
                number4 = $('.column-price-1').val() * $('.column-price-4').val() / 100;
                $(activeColumnsPrice[7]).text(number4);
                

              } else if (index == 4) {
                
                number5 = $('.column-price-1').val() * $('.column-price-5').val() / 100;
                $(activeColumnsPrice[9]).text(number5);
                

              }
              

            })



            columnSumm = (number1 != undefined ? +number1 : 0) + (number2 != undefined ? +number2 : 0) + (number3 != undefined ? +number3 : 0) + (number4 != undefined ? +number4 : 0) + (number5 != undefined ? +number5 : 0);
            
            
          
          })
        })

        $('.calculator-inner__block--2 .column:last-child .column-item:first-child input').on('input', function() {

          //$(this).val($(this).val().replace(/ +/g, ''));

          firstInputSumm = $(this).val();

          +firstInputSumm

          if (firstInputSumm <= 250000) {
            firstInputSumm = firstInputSumm * 0.11;
          } else if (firstInputSumm >= 250001 && firstInputSumm <= 400000) {
            firstInputSumm = firstInputSumm * 0.10;
          } else if (firstInputSumm >= 400001 && firstInputSumm <= 700000) {
            firstInputSumm = firstInputSumm * 0.09;
          } else if (firstInputSumm >= 700001 && firstInputSumm <= 1000000) {
            firstInputSumm = firstInputSumm * 0.08;
          } else if (firstInputSumm >= 1000001 && firstInputSumm <= 2000000) {
            firstInputSumm = firstInputSumm * 0.07;
          } else if (firstInputSumm >= 2000001 && firstInputSumm <= 5000000) {
            firstInputSumm = firstInputSumm * 0.06;
          } else if (firstInputSumm >= 5000001) {
            firstInputSumm = firstInputSumm * 0.05;
          }

          
        })

        $('.calculator-inner__block--3 .column:last-child .column-item__inner input').on('input', function() {

          //$(this).val($(this).val().replace(/ +/g, ''));

          secondInputSumm = $(this).val();

          +secondInputSumm

        })

        if (firstInputSumm <= 250000) {
          firstInputSumm = firstInputSumm * 0.11;
        } else if (firstInputSumm >= 250001 && firstInputSumm <= 400000) {
          firstInputSumm = firstInputSumm * 0.10;
        } else if (firstInputSumm >= 400001 && firstInputSumm <= 700000) {
          firstInputSumm = firstInputSumm * 0.09;
        } else if (firstInputSumm >= 700001 && firstInputSumm <= 1000000) {
          firstInputSumm = firstInputSumm * 0.08;
        } else if (firstInputSumm >= 1000001 && firstInputSumm <= 2000000) {
          firstInputSumm = firstInputSumm * 0.07;
        } else if (firstInputSumm >= 2000001 && firstInputSumm <= 5000000) {
          firstInputSumm = firstInputSumm * 0.06;
        } else if (firstInputSumm >= 5000001) {
          firstInputSumm = firstInputSumm * 0.05;
        }



        function setInputSumm() {

          columnSumm = columnSumm != undefined ? columnSumm : 0;

          allSumm = (+columnSumm) + (+firstInputSumm) + (+secondInputSumm);
          
          $('.calculator-inner__block--3 .column:last-child .column-item:last-child').text(allSumm);
          $('.calculator-inner__block--3 .column:last-child .column-item__inner:last-child').text(secondInputSumm);
          $('.calculator-inner__block--2 .column:last-child .column-item:last-child').text(columnSumm + firstInputSumm);
        }
        

        setInterval(function () {
          setInputSumm();
        }, 300);

      }
});