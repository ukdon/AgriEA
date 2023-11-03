import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
          <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
              <div className="userShowTop">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1yL0iIhOW6zGJzN2fEar8oLNVrX5fUji5puWXaloF5sqiIyEL7cBGgyFGYWkU-CNd_M&usqp=CAU" alt="" className="userShowImg" />
                  <div className="userShowTopTitle">
                      <span className="userShowUsername">Ukasha Falalu</span>
                      <span className="userShowUserTitle">Software Engineer</span>
                  </div>
              </div>
              <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">    
                  <PermIdentity className="userShowIcon"/>
                  <span className="userShowInfoTitle">Ukdon Falalu</span>
                  </div>
                  <div className="userShowInfo">    
                  <CalendarToday className="userShowIcon"/>
                  <span className="userShowInfoTitle">14.02.1998</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">    
                  <PhoneAndroid className="userShowIcon"/>
                  <span className="userShowInfoTitle">+234 8164 6157 09</span>
                  </div>
                  <div className="userShowInfo">    
                  <MailOutline className="userShowIcon"/>
                  <span className="userShowInfoTitle">ukashafafaluu@gmail.com</span>
                  </div>
                  <div className="userShowInfo">    
                  <LocationSearching className="userShowIcon"/>
                  <span className="userShowInfoTitle">Katsina | Nigeria</span>
                  </div>
              </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>Username</label>
                          <input type="text" placeholder="Ukdon Jby" className="userUpdateInput" />
                      </div>
                      <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" placeholder="Ukasha Falalu" className="userUpdateInput" />
                      </div>
                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input type="text" placeholder="ukashafafaluu@gmail.com" className="userUpdateInput" />
                      </div>
                      <div className="userUpdateItem">
                          <label>Phone</label>
                          <input type="text" placeholder="+234 8164 6157 09" className="userUpdateInput" />
                      </div>
                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" placeholder="Katsina | Nigeria" className="userUpdateInput" />
                      </div>
                  </div>
                  <div className="userUpdateRight">
                      <div className="userUpdateUpload">
                          <img className="userUpdateImg" src="https://thumbs.dreamstime.com/z/smiling-farmer-holding-watermelon-shovel-full-length-portrait-isolated-white-background-32537999.jpg" alt="" />
                         <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                         <input type="file" id="file" style={{ display: "none" }}/>
                      </div>
                      <button className="userUpdateButton">Update</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  );
}
