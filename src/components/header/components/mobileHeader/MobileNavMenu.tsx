'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const MobileNavMenu = () => {
  const t = useTranslations('NavigationMenuHeader');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alnair</h1>
      <ul className="space-y-4">
        <li>
          <button className="text-lg font-semibold focus:outline-none">
            {t('about_us')}
          </button>
          <ul className="pl-4 mt-2 space-y-2 text-gray-800">
            <li>
              <h3 className="text-md font-bold">{t('knowledge_base')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    {t('search')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('commercial_offer')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('feeds_integration')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('booking')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('agency_management')}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-md font-bold">{t('services')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    {t('about_us_full')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('for_agencies')}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-md font-bold">{t('terms_of_use')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    {t('operating_terms')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('privacy_policy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('cookie_policy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t('contacts')}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-lg font-semibold hover:underline">
            {t('developers')}
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-semibold hover:underline">
            {t('districts')}
          </a>
        </li>
      </ul>
      <footer className="mt-8 text-sm text-gray-500">
        ALNAIR. QUICK AND EASY. - FZCO
      </footer>
    </div>
  );
};
