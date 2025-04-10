export function randomCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomIcons(obj) {
    const keys = Object.keys(obj); //Получаем массив ключей
    const randomKeys = Math.floor(Math.random() * keys.length); // Получаем рандоный ключ
    return obj[keys[randomKeys]]; // Возвращаем рандоное значение масива
}

export function saveValuesStartGame(doorCount, windowCount, garageCount, idItem, summ = null){
    return {
        door: doorCount,
        window:windowCount,
        garage:garageCount,
        idItem:idItem,
        summ,
    }
}