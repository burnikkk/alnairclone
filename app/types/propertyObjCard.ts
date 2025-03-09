export interface Price {
  amount: number; // Числовая цена
  currency: string; // Валюта
  formatted: string; // Отформатированная строка
}

export interface Discount {
  percentage: number; // Число (процент скидки)
  formatted: string; // Отформатированная строка
}

export interface PropertyCard {
  id: string; // Уникальный идентификатор объекта
  isRecommended: boolean; // Рекомендованный объект или нет
  imageUrl: string; // Ссылка на изображение
  title: string; // Название объекта
  developer: string; // Девелопер (название компании)
  propertyType: string; // Тип недвижимости (новостройка, вторичка и т. д.)
  price: Price; // Объект с ценой
  discount?: Discount; // Скидка (может отсутствовать)
}
