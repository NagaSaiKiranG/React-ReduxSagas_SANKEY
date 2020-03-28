import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SankeyChartComponent from '../../components/SankeyChart';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const displayBox = (selectedRowData) => {
    console.log("selectedRowData",selectedRowData);
    if(selectedRowData.length){
        return `Money: ${selectedRowData[2]}, spent on: ${selectedRowData[1]} come under category: ${selectedRowData[3]}. Income source: ${selectedRowData[0]}`
    }
    return `Please click on any flow to get detailed explation`
}

export default function SankeyPage(props) {
    const { t, i18n } = useTranslation();
    const selectedRowData = useSelector((state)=>state.selectedRowData);
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <NavLink to='/'> {t('Sankey.Link.Sankey')} </NavLink>
                    </div> 
                </div> 
            </div>
            <div className="container-fluid">
                <h1 className="text-center">
                    {t('Sankey.Header')}
                </h1>
                <p className="text-center">
                    {t('Sankey.Content')}
                </p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h4>{t('Sankey.ChartHeader')}</h4>
                        <SankeyChartComponent />
                    </div>
                    <div className="col-md-4">
                        <h4>{t('Sankey.info')}</h4>
                        {displayBox(selectedRowData)}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}