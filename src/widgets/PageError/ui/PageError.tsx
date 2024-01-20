import { type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.modules.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className = '' }: PageErrorProps): ReactNode => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Ошибка')}</p>
            <button onClick={reloadPage}>{t('Обновить')}</button>
        </div>
  )
}
