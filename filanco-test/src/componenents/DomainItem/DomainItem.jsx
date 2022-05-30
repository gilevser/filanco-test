import React from 'react';
import './Domain.css'

const DomainItem = ({domain, onDelete}) => {
    return (
       <div className='domain-tem' >
           <a href={domain.url}>{domain.name}</a> <img src="minus.svg" alt="delete" onClick={onDelete}/>
       </div>
    );
};

export default DomainItem;