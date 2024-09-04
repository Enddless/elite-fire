$(document).ready(function () {
  const basePrice = 89000; // Начальная цена
  const increment = 1200; // Прибавка за каждые 0.1 м
  const checkboxPrice = 5700; // Цена за каждую функцию

  function updatePrice() {
    // Получаем текущее значение слайдера
    const sliderValue =
      $('#demo_0').data('ionRangeSlider').result.from;

    // Расчет стоимости
    const price = basePrice + ((sliderValue - 0.1) / 0.1) * increment;

    // Добавляем стоимость за выбранные функции
    const checkedCount = $('.constructor__checkbox:checked').length;
    const totalPrice = price + checkedCount * checkboxPrice;

    // Обновление цены на странице
    $('.constructor__price').text(totalPrice.toFixed(0) + ' ₽');
  }

  $('#demo_0').ionRangeSlider({
    min: 0.5,
    max: 10,
    from: 0.5,
    step: 0.1,
    // grid: true,
    onChange: function () {
      $('#demo_0').val(
        $('#demo_0').data('ionRangeSlider').result.from
      );
      $('#length').text(
        $('#demo_0').data('ionRangeSlider').result.from + ' м'
      );
      updatePrice(); // Обновляем цену при изменении слайдера
    }
  });

  // Инициализация значения в output
  $('#length').text($('#demo_0').val() + ' м');
  $('.constructor__price').text(basePrice + ' ₽');

  // Обработчик для чекбоксов
  $('.constructor__checkbox').on('change', function () {
    updatePrice(); // Обновляем цену при изменении состояния чекбоксов
  });
});
