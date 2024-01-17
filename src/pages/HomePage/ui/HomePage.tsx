import { useTranslation } from "react-i18next";
import { Counter } from "../../../components/Counter";

const HomePage = () => {
    const {t} = useTranslation('main');

    return (
        <div>
            <h1>{t("Главная страница")}</h1>
            <Counter />
        </div>
    )
}

export default HomePage;