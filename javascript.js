document.getElementById('menuButton').addEventListener('click', function(event) {
    let dropdownMenu = document.getElementById('dropdownMenu');
    let overlay = document.getElementById('overlay'); // Получаем ссылку на затемняющий слой

    if (dropdownMenu.style.display === 'none') {
        // Расчёт позиции меню относительно кнопки
        
        // Корректируем позицию меню
        dropdownMenu.style.display = 'block';

        // Показываем затемняющий слой
        overlay.style.display = 'block';

        // Добавляем анимацию появления
        setTimeout(function() {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.transition = 'opacity 0.3s ease-out';
        }, 10);
    } else {
        closeDropdown(); // Закрытие меню
    }
});
// Обработчик для кнопки закрытия
document.getElementById("closeBtn").addEventListener("click", closeDropdown);
// Функция закрытия меню
function closeDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const overlay = document.getElementById('overlay');

    dropdownMenu.style.display = "none"; // Скрываем меню
    overlay.style.display = "none"; // Скрываем затемняющий слой
    // Добавление анимации исчезновения
    setTimeout(() => {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.transition = "opacity 0.3s ease-in";
    }, 10)
}