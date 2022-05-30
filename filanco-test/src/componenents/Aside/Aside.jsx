import React from 'react';
import './Aside.css'
import AsideItem from "../AsideItem/AsideItem";

const Aside = () => {

    const items = [
        {id: 1, name: 'Заказать', actions : [
            'Домены',
            'Почта',
            'Сертификаты',
            ]},
        {id: 2, name: 'Продлить/ изменить', actions : [
            'Домены',
            'Почта',
            'Сертификаты',
            ]},
        {id: 3, name: 'Финансы', actions : [
            'Домены',
            'Почта',
            'Сертификаты',
            ] },
        {id: 4, name: 'Увлечения', actions : [
            'Домены',
            'Почта',
            'Сертификаты',
            ]},
    ]

    return (
        <aside>
            {items.map(elem => <AsideItem elem={elem} key={elem.id} />)}
        </aside>
    );
};

export default Aside;