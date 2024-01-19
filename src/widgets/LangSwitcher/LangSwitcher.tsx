import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

export const LangSwitcher = (): ReactNode => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
        <div>
            <Button theme={ThemeButton.CLEAR} onClick={toggleLanguage}>
                {t('Перевод')}
            </Button>
        </div>
  )
}
