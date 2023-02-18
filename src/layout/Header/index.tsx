import React from 'react';
import styles from './index.module.scss';
import HeaderLogo from '../../assets/images/bread.png';
import HeaderText from '../../assets/images/bread-head-logo.png';

interface IHeaderProps {

}

function Index(props: IHeaderProps) {
    return (
        <nav className={styles['header-layout']}>
            <div className={styles['header-content']}>
                <div className={styles['header-logo']}>
                    <img src={HeaderLogo} alt="bread-head-logo"/>
                </div>
                <div className={styles['header-slogan']}>
                    bread
                </div>
                <div className={styles['header-menu']}>
                    <ul className={styles['header-right-menu']}>
                        <li>首页</li>
                        <li>个人中心</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Index;
