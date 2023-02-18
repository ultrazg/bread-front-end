import React from "react";
import {Routes, Route, Link, createHashRouter, RouterProvider, useNavigate, useRoutes} from 'react-router-dom'
import {routesConfig} from './router';
import {ConfigProvider, Radio} from 'antd';
import type {RadioChangeEvent} from 'antd';
import Header from './layout/Header';

function App() {
    const navigate = useNavigate();
    const elements = useRoutes(routesConfig);

    /**
     * 跳转路由
     * @param url URL
     */
    const goHandle = (url: string) => {
        navigate(url);
    };

    const onTabChange = ({target: {value}}: RadioChangeEvent) => {
        goHandle(value);
    };

    const tabs = [
        {label: '主页', value: '/',},
        {label: '通讯录', value: '/friends'},
    ]

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#d48806',
                    },
                }}
            >
                {/*<h2>一个面包</h2>*/}
                {/*<div>*/}
                {/*  <Radio.Group options={tabs} onChange={onTabChange} optionType="button"/>*/}
                {/*</div>*/}
                <Header/>
                {
                    elements
                }
            </ConfigProvider>
        </>
    );
}

export default App;
