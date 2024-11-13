import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList';

import user from './Profile/user.json'
import data from './Statistics/data.json'
import friends from './FriendList/friends.json'

import css from './App.module.css'


export const App = () => {
  return (
    <div className={css.container}>

      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

    </div>
  );
};
