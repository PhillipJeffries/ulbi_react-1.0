import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = (): ReactNode => {
  const { t } = useTranslation('about')

  return (
        <div>
            <h1>{t('Информация')}</h1>
        </div>
  )
}

export default AboutPage
