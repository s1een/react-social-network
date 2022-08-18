import "./closefriend.css";

function CloseFriend({ user }) {
  return (
    <li className="sidebar-freind">
      <img className="sidebar-friend-img" src={user.profilePicture} alt="" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
