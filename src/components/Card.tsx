import Profilepic from './sebr.jpg';
import style from './Button.module.css'
function Card() {
  return (
    <div className={style.ard}>
      <img src={Profilepic} alt="profile picture" />
      <h2>anwar computer</h2>
      
    </div>
  );
}

export default Card;