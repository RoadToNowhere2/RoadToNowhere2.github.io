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
        $(".header-bottom ul").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 800);
            if ($(window).width() <= '700') {
              $('.header-bottom ul').css('display', 'none');
            }
        });
      }

      $('footer .header-top__logo').on('click', function () {
        $('body,html').animate({scrollTop: 0}, 800);
      })

      {
        $('.firstscreen .video-play').on('click', function () {
          $('.modal-video-1').css('display', 'flex');
        })

        $('.modal-video-1 .modal-video__inner--close').on('click', function () {
          $('.modal-video-1').css('display', 'none');
        })

        $('.zadachi-video .play').on('click', function () {
          $('.modal-video-2').css('display', 'flex');
        })

        $('.modal-video-2 .modal-video__inner--close').on('click', function () {
          $('.modal-video-2').css('display', 'none');
        })
      }

      {
        $('.header-bottom ul .close').on('click', function () {
          $('.header-bottom ul').css('display', 'none');
        })

        $('.burger').on('click', function () {
          $('.header-bottom ul').css('display', 'flex');
        })
      }

      {
        $(".masked-input").mask("+7 (999) 999-9999");
      }


      {

        $('.js-modal').on('click', function() {
          $('.modal').css('display', 'flex');
        })

        $('.modal-form-close').on('click', function() {
          $('.modal').css('display', 'none');
        })

      }

      {
        $('.modal-ty-close').on('click', function() {
          $('.modal-ty').css('display', 'none');
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
              $(element).fadeOut();
              if ($(element).hasClass('hidden')) {
                $(element).removeClass('hidden');
                $(element).fadeIn();
              } else {
                $(element).addClass('hidden');
                $(element).fadeOut();
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
              $(items).css('opacity', '0.1');
              $('.grid-nav__block').removeClass('active');
              $(element).addClass('active');

              
            }

          });

          $(buttons[0]).on('click', function () {
            
            $(items[7]).addClass('active');
            $(items[7]).css('opacity', '1');
            $(items[8]).addClass('active');
            $(items[8]).css('opacity', '1');
            $(items[4]).addClass('active');
            $(items[4]).css('opacity', '1');
            $(items[10]).addClass('active');
            $(items[10]).css('opacity', '1');
            $(items[9]).addClass('active');
            $(items[9]).css('opacity', '1');

          })

          $(buttons[1]).on('click', function () {
            
            $(items[7]).addClass('active');
            $(items[7]).css('opacity', '1');
            $(items[6]).addClass('active');
            $(items[6]).css('opacity', '1');
            $(items[13]).addClass('active');
            $(items[13]).css('opacity', '1');
            $(items[18]).addClass('active');
            $(items[18]).css('opacity', '1');
            $(items[23]).addClass('active');
            $(items[23]).css('opacity', '1');
            $(items[0]).addClass('active');
            $(items[0]).css('opacity', '1');
            $(items[10]).addClass('active');
            $(items[10]).css('opacity', '1');
            $(items[21]).addClass('active');
            $(items[21]).css('opacity', '1');
            $(items[14]).addClass('active');
            $(items[14]).css('opacity', '1');
            $(items[22]).addClass('active');
            $(items[22]).css('opacity', '1');

          })

          $(buttons[2]).on('click', function () {
            
            $(items[8]).addClass('active');
            $(items[8]).css('opacity', '1');
            $(items[7]).addClass('active');
            $(items[7]).css('opacity', '1');
            $(items[2]).addClass('active');
            $(items[2]).css('opacity', '1');
            $(items[21]).addClass('active');
            $(items[21]).css('opacity', '1');
            $(items[23]).addClass('active');
            $(items[23]).css('opacity', '1');
            $(items[22]).addClass('active');
            $(items[22]).css('opacity', '1');

          })

          $(buttons[3]).on('click', function () {
            
            $(items[7]).addClass('active');
            $(items[7]).css('opacity', '1');
            $(items[11]).addClass('active');
            $(items[11]).css('opacity', '1');
            $(items[17]).addClass('active');
            $(items[17]).css('opacity', '1');
            $(items[2]).addClass('active');
            $(items[2]).css('opacity', '1');
            $(items[20]).addClass('active');
            $(items[20]).css('opacity', '1');

          })

          $(buttons[4]).on('click', function () {
            
            $(items[3]).addClass('active');
            $(items[3]).css('opacity', '1');
            $(items[6]).addClass('active');
            $(items[6]).css('opacity', '1');
            $(items[17]).addClass('active');
            $(items[17]).css('opacity', '1');
            $(items[24]).addClass('active');
            $(items[24]).css('opacity', '1');
            $(items[1]).addClass('active');
            $(items[1]).css('opacity', '1');
            $(items[2]).addClass('active');
            $(items[2]).css('opacity', '1');
            $(items[14]).addClass('active');
            $(items[14]).css('opacity', '1');
            $(items[20]).addClass('active');
            $(items[20]).css('opacity', '1');
          })

        })

      }

      // Калькулятор

      {

        const columnsName         = $('.calculator-inner__block--2 .column:last-child .column-item:nth-child(2) .column-item__inner');
        const columns             = $('.calculator-inner__block--main .column');
        const columnsPrice        = $('.calculator-inner__block--2 .column:nth-child(2) .column-item');
        let activeColumns         = [];
        let activeColumnsPrice    = [];

        let columnSumm;
        let firstInputSumm        = 200000;
        let secondInputSumm       = '';
        let allSumm;



        columns.splice(0, 1);
        columnsPrice.splice(0, 1);
        columnsPrice.splice(2, 1);


        columnsName.each(function (index, element) {
          $(element).on('click', function () {
            $(columns[index]).trigger( "click" );
          })
          
        })

        columns.each(function (index, element) {

          $(element).on('click', function () {

            let inoutChek = +$('.calculator-inner__block--2 .column:last-child .column-item:first-child input').val();

            console.log(inoutChek);

            if (typeof (inoutChek) == NaN || inoutChek == 0) {
              return;
            } else {

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

                number1 = firstInputSumm;
                $(activeColumnsPrice[1]).text(Math.round(number1));
              
              } else if (index == 1) {

                number2 = firstInputSumm * $('.column-price-2').val() / 100;
                $(activeColumnsPrice[3]).text(Math.round(number2));
                
                
              } else if (index == 2) {
                
                number3 = firstInputSumm * $('.column-price-3').val() / 100;
                $(activeColumnsPrice[5]).text(Math.round(number3));
                

              } else if (index == 3) {
                
                number4 = firstInputSumm * $('.column-price-4').val() / 100;
                $(activeColumnsPrice[7]).text(Math.round(number4));
                

              } else if (index == 4) {
                
                number5 = firstInputSumm * $('.column-price-5').val() / 100;
                $(activeColumnsPrice[9]).text(Math.round(number5));
                

              }
              

            })



            columnSumm = (number1 != undefined ? +number1 : 0) + (number2 != undefined ? +number2 : 0) + (number3 != undefined ? +number3 : 0) + (number4 != undefined ? +number4 : 0) + (number5 != undefined ? +number5 : 0);

            }
            
            
          
          })
        })

        $('.calculator-inner__block--2 .column:last-child .column-item:first-child input').on('input', function() {

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

          $(activeColumns).each(function (index, element) {
            $(element).trigger('click');
            $(element).trigger('click');
          })
          
        })

        $('.calculator-inner__block--3 .column:last-child .column-item__inner input').on('input', function() {

          secondInputSumm = $(this).val();

          +secondInputSumm

          let format = new Intl.NumberFormat().format(secondInputSumm)

          $('.calculator-inner__block--3 .column:last-child .column-item__inner:last-child').text(format);

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

          allSumm = (+columnSumm) + (+secondInputSumm);

          
          allSumm = Math.round(allSumm);
          columnSumm = Math.round(columnSumm);

          let formatAll = new Intl.NumberFormat().format(allSumm);
          let formatColumns = new Intl.NumberFormat().format(columnSumm);

          
          $('.calculator-inner__block--2 .column:last-child .column-item:last-child').text(formatColumns);
          $('.calculator-inner__block--3 .column:last-child .column-item:last-child').text(formatAll);
        }
        

        setInterval(function () {
          setInputSumm();
        }, 300);

      }
});