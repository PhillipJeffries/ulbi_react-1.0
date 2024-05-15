import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.modules.scss';
import { FC, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div>
            <div 
                className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            >
                <button className={cls.sidebarButton} onClick={onToggle}>
                    x
                </button>
                <div className={cls.sidebarContent}>
                    <ul>
                        <li>eat</li>
                        <li>shit</li>
                    </ul>
                    <div className={cls.switchers}>
                        <ThemeSwitcher/>
                        <LangSwitcher/>
                    </div>
                </div>
            </div>
        </div>

    )
}