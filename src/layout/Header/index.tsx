import React from 'react';
import styles from './index.module.scss';

interface IHeaderProps {

}

function Index(props: IHeaderProps) {
  return (
    <header className={styles['header-layout']}>
      <div className={styles['header-content']}>
        <div className={styles['header-logo']}>
          logo
        </div>
        <ul className={styles['header-menu']}>
          <li>首页</li>
          <li>个人中心</li>
        </ul>
      </div>
    </header>
  );
}

export default Index;
