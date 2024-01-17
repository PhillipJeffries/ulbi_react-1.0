import cls from "./Navbar.modules.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();


    return (
        <div className={cls.navbar}>
            <h2>App</h2>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to='/'>
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to='/about'>
                    {t('Информация')}
                </AppLink>
            </div>

        </div>
    )
}