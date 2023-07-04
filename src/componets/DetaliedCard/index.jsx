import { useState } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import UserBage from '../UserBadge';
import Comment from '../comment';

import './styles.css';
const DetalidCard = ({
    userName,
    avatarUrl,
    userId,
    imgUrl,
    likes,
    isLikedByYou,
    comments,
    className,

}) => {
    const [isCommentShown, setIsCommentsShow] = useState(false);
    const rendercomment = () => {
        if (comments.length > 2  && !isCommentShown) {
            const commentsCopy = [...comments];
           const commentsForReally = commentsCopy.splice(comments.length - 2, 2);

            return (
                <>
                <span className="cnDetaliedCardIScOMMENT" onClick={() => setIsCommentsShow(true)}>{`Показать еще ${comments.length - commentsForReally.length} коментария`}</span>
                {commentsForReally.map((comment) => <Comment {...comment} key={nanoid()}/>)}
                </>    
               );
        }
       return comments.map((comment) => <Comment {...comment} key={nanoid()}/>)
       
    }
    return (
        <div className={cn( "cnCardRootD",className)}>
            <div className="cnCardDetaliedBody">
        <UserBage nickName={userName} avatarUrl={avatarUrl} id={userId} />
            </div>
            <div>
                <img src={imgUrl} alt="img"  className="cnCardIMG"/>
            </div>
            <div className="cnDetaliedButton">
                <i className={`${isLikedByYou ? 'fas' : 'far'} fa-heart cnDetaliedLikeIcon `}/>
                <i className="fas fa-comment CnDetaliedCardComment"/>
            </div>
            <div className="Likecnn">
               {`Оценили ${likes} человек`}
            </div>
            <div className="cnDetaliedCardcommment">
           {rendercomment()}
                
                
            </div>
            <textarea className="CndetaliedCardYexyYerarea"/>
        </div>

    )
};
export default DetalidCard;
