import UserBage from '../UserBadge';
import './styles.css';
const Navbar = ({
    nickName,
    avatarUrl,
    id,
}) => {
    return (
        <div className="cnNavbarrott">

            <div className="cnnavbarwrapper">
            <span>KIBZUNARIA</span>
           <UserBage  nickName={nickName} avatarUrl={avatarUrl} id={id} />

            </div>
          
        </div>

    );
};
export default Navbar;