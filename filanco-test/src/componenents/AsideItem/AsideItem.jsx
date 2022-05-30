import React, {useState} from 'react';
import './AsideItem.css'

const AsideItem = ({elem}) => {

    const [isActive , setIsActive] = useState(false)

    return (
        <div>
            {isActive ?
            < div className="aside_item"  >
                <div className="aside_item__container">
                    <img className='aside_item__icon' src="/minus.svg" alt="plus" onClick={() =>  setIsActive(false)}/>
                    <h3 className="aside_item__name">
                        {elem.name}
                    </h3>
                </div>
                {elem.actions.map(item =>
                    <div className="aside_item__actions">
                        {item}
                    </div>
                )}
            </div>
                :
                <div className="aside_item">
                    <div className="aside_item__container">
                <img className='aside_item__icon' src="/plus.svg" alt="plus" onClick={() => setIsActive(true)}/>
                <h3 className="aside_item__name">
            {elem.name}
                </h3>
                </div>
                    </div>
                    }
        </div>
    );
};

export default AsideItem;