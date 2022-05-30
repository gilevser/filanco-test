import React, {useState} from 'react';
import './Section.css'
import Comment from "../Comment/Comment";
import DomainItem from "../DomainItem/DomainItem";

const Section = () => {

    const domains = [
        {id: 1, name: 'shoku-yoku.ru', url: 'shoku-yoku.ru'},
        {id: 2, name: 'hostes-test.ru', url: 'hostes-test.ru'},
        {id: 3, name: 'секуёку.рф', url: 'секуёку.рф'},
    ]

    const [domainsState, setDomains] = useState(domains)

    const DeleteDomain = (id) => {
        setDomains((prev) => prev.filter(el => el.id !== id))
    }

    return (
            <section>
                <h1>АККАУНТЫ ХОСТИНГА</h1>
                <div className="section_container">
                    <div className="section_container__header">
                        <div>Аккаунт</div>
                        <div className="statistica">
                            Статистика
                            <div className="statistica__item">
                                <div>Занято</div>
                                <div>Cron</div>
                                <div>MySQL</div>
                                <div>FTP</div>

                            </div>
                        </div>
                        <div>Состояние</div>
                        <div>Действия</div>
                    </div>
                    <div className="section_container__header-data">
                        <div>(Бета- SSD)</div>
                            <div >675.01</div>
                            <div>0</div>
                            <div>1</div>
                            <div>0</div>
                        <div><a href="#">Включение</a></div>
                        <div>Icons</div>
                    </div>
                    <div className="section_container__main">
                        <div className="section_container__main-title">
                            <div>IP-адрес</div>
                            <div>Объем данных</div>
                            <div>Объем файлов</div>
                            <div>Комментарий</div>
                            <div>Услуга</div>
                            <div>Логин</div>
                            <div>Имя хоста FTP</div>
                            <div>Пароль FTP</div>
                            <div>Имя хоста SSH</div>
                            <div>Пароль SSh</div>
                            <div>Имя хоста MySQL</div>
                            <div>Имя хоста PgSQL</div>
                        </div>
                        <div className="section_container__main-data">
                                <div>31.28.24.122</div>
                                <div>10.89 md</div>
                                <div>700 mb</div>
                                <div>
                                    <Comment />
                                </div>
                                <div>Бета SSD</div>
                                <div>LoginName</div>
                                <div>HostName</div>
                                <div>**********</div>
                                <div>HostNameSSH</div>
                                <div>*********</div>
                                <div>Имя хоста MySQL</div>
                                <div>Имя хоста PgSQL</div>
                        </div>
                    </div>
                    <div className="section_container__main domain">
                        <div className="section_container__main-title">
                            <div>
                                <a href="#">Привязанные домены</a>
                            </div>
                        </div>
                        <div className="section_container__domain-data">
                            {domainsState.map(domain =>
                                <DomainItem domain={domain}  key={domain.id} onDelete={() => DeleteDomain(domain.id)}/>
                            )}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Section;