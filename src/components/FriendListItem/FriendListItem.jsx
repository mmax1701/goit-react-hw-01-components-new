import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {

    return (<li className={css.item}>
        <span className={isOnline ? css.status_on : css.status_off}></span>
        <img className={isOnline ? css.avatar_on : css.avatar_off} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{ name }</p>
    </li>)
}




