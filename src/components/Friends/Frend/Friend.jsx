import s from "./Friend.module.css"

const Friend = (props) => {
  return (
      <div className={s.item}>
        <div className={s.avatar}></div>
        <div className={s.name}>
          <p>{props.name}</p>
        </div>
      </div>
  )
}
export default Friend;

