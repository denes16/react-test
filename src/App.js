import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <Link to='/about'>{t('about')}</Link>
            </div>
        </div>
    );
}

export default App;
