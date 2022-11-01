import s from "./Friends.module.css"
import Friend from './Frend/Friend';

const Friends = (props) => {
  let friendsElements = props.state.friends.map( f => <Friend name={f.name} />)
  return (
    <div className={s.wrapper}>
      <h1>Friend</h1>
      <div className={s.friends}>
        {friendsElements}
      </div>
    </div>
  )
}
export default Friends;

