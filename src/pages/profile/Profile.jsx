import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-righttop">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profile-user-img"
                src="/assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Dmitry Morozov</h4>
              <span className="profile-info-desc">Hello My Friends</span>
            </div>
          </div>
          <div className="profile-rightbottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
