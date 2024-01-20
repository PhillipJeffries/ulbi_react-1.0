import { useTranslation } from 'react-i18next'
import { type ReactNode } from 'react'

const NotFoundPage = (): ReactNode => {
  const { t } = useTranslation('notFound')

  return (
        <div>
            <h1>{t('Страница не найдена')}</h1>
        </div>
  )
}

export { NotFoundPage }
