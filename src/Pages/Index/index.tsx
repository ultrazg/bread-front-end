import React from 'react';
import {Button} from "antd";
import styles from './index.module.scss';

export default function index() {
    return (
        <div className={styles['content-layout']}>
            <div className={styles['content']}>
                <h3>主页</h3>
                <Button>刷新</Button>
            </div>
        </div>
    )
}
