import cls from "./Navbar.modules.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cls.navbar}>
            <h2>App</h2>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to='/'>
                    home
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to='/about'>
                    about
                </AppLink>
            </div>

        </div>
    )
}