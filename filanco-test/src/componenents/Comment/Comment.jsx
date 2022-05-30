import React, {useState} from 'react';
import './Comment.css'

const Comment = () => {
    const [comment, setComment] = useState('')
    const [activeInput, setActiveInput] = useState(false)

    const changeComment = (e) => {
        e.preventDefault()
        setActiveInput(false)
    }
    
    if (activeInput) {
        return (
            <form onSubmit={changeComment} className='comment'><input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button>Сохранить</button>
            </form>
            
        )
    }

    return (
        <div>
            {comment ?  <div className='comment'>{comment}
                    <img onClick={() => setActiveInput(true)} src="/plus.svg" alt="добавить"/>
            </div>
                :
                <div className='comment'>Нет комментария
                    <img onClick={() => setActiveInput(true)} src="/plus.svg" alt="добавить"/> </div>
            }
        </div>
    );
};

export default Comment;