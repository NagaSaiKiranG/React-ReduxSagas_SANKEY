import React, { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function HomePage(props) {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <h1 className="text-center">{t("HomePage.Title")}</h1>
                <div className="row">

                    <div className="col-md-8">
                        <h3 className="text-left">{t("HomePage.Statement.Title")}</h3>
                        <p>
                            {t("HomePage.Statement.Content.p1")}
                        </p>
                        <p>
                            {t("HomePage.Statement.Content.p2")}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-center">{t("HomePage.Technology.Title")}</h3>
                        <p>{t("HomePage.Technology.Content.p1")}</p>
                        <p>{t("HomePage.Technology.Content.p2")}</p>
                        <p>{t("HomePage.Technology.Content.p3")}</p>
                        <p>{t("HomePage.Technology.Content.p4")}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <NavLink to='/sankey' className="text-center"> {t("HomePage.Link.Home")} </NavLink>
            </div>
            <Footer />
        </div>
    )
}
