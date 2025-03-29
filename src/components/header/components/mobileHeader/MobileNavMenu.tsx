'use client';

import React from 'react';

export function MobileNavMenu() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alnair</h1>
      <ul className="space-y-4">
        <li>
          <button className="text-lg font-semibold focus:outline-none">
            О нас
          </button>
          <ul className="pl-4 mt-2 space-y-2 text-gray-800">
            <li>
              <h3 className="text-md font-bold">База знаний</h3>
              <ul className="pl-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Поиск
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Коммерческое предложение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Фиды и интеграция
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Бронирование
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Создание агентства и управление пользователями
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-md font-bold">Сервисы</h3>
              <ul className="pl-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Все о нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Для агентств
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-md font-bold">Условия использования</h3>
              <ul className="pl-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Условия эксплуатации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Политика cookie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Контакты
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-lg font-semibold hover:underline">
            Застройщики
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-semibold hover:underline">
            Районы
          </a>
        </li>
      </ul>
      <footer className="mt-8 text-sm text-gray-500">
        ALNAIR. QUICK AND EASY. - FZCO
      </footer>
    </div>
  );
}
