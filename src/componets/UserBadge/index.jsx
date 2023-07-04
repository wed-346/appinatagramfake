import { useNavigate } from 'react-router-dom';
import './styles.css';
const UserBage = ({
    nickName,
    avatarUrl,
    id,
}) => {
    const navigate = useNavigate();

    const onUserBageckick = () => {
        navigate(`/${id}`);
    };
    return (
        <div className="cnUserBageRoot" onClick={onUserBageckick}>
          {avatarUrl ? <img src={avatarUrl} alt="logo"  className="cnUserBageavatarUrl"/> : <div className="cnUserBagePlacejold"/>}
            <span className="cnUserBagespan">{nickName}</span>
        </div>
    );
};
export default UserBage;