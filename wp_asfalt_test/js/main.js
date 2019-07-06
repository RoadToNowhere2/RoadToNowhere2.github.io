// маска для телефона
$(".phone_form").mask("+9(999)999-9999");

// бургер меню
$(".menu_btn").on("click", function(e) {
  e.preventDefault();
  $(this).toggleClass("menu_btn_active");
  $(".menu").toggleClass("menu_active");
});
