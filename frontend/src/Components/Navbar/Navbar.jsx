import { Box, Typography } from "@mui/material";
import s from "./navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";
import {
  Contacts,
  CurrencyRupeeRounded,
  Dashboard,
  Email,
  Home,
  Login,
  Logout,
  MeetingRoom,
  MiscellaneousServices,
  Notes,
  People,
  Person,
  Security,
} from "@mui/icons-material";
import Cookies from "js-cookie";
export default function Navbar() {
  let { setIsMemberLogin, setMemberLoginData, userID, setUserID, theme, setTheme, ActivateToast, setIsAdmin, isAdmin, role, setRole } = useContext(Context);
  let navigate = useNavigate()
  return (
    <Box
      className={s.nav}
      height={"100vh"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={999}
      width={"70px"}
      bgcolor={"white"}
      color={"black"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      display={["none", "block"]}
    >
      <Box
        overflow={"hidden"}
        m={"0 5%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        height={"100%"}
      >
        <NavLink to="/" style={{ all: "unset", cursor: "pointer", }} >
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Home style={{ color: theme == "dark" ? "white" : "black" }} />{" "}
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}> Home</Typography>
          </Box>
        </NavLink>
        <NavLink to="/client/dashboard" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Dashboard
              style={{ color: theme == "dark" ? "white" : "black" }}
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}> Dashboard</Typography>
          </Box>
        </NavLink>
        <NavLink to="/client/contacts" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Contacts
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}> Contacts</Typography>
          </Box>
        </NavLink>
        <NavLink to="/client/notes" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Notes
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}> Notes</Typography>
          </Box>
        </NavLink>
        <NavLink to="/client/meetings" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <MeetingRoom
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}> Meetings</Typography>
          </Box>
        </NavLink>
        {role!=="Member" && <NavLink to="/client/emails" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Email
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Email</Typography>
          </Box>
        </NavLink>}
        {role === "Admin" || role === "Leader" || isAdmin ? <NavLink to="/client/addMembers" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <People
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Members</Typography>
          </Box>
        </NavLink> : null}
        {role === "Admin" || role === "Leader" || isAdmin ? <NavLink to="/client/addLeaders" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Security
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Leaders</Typography>
          </Box>
        </NavLink> : null}
        {role!=="Member" && <NavLink to="/client/misc" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <MiscellaneousServices
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Miscellaneous</Typography>
          </Box>
        </NavLink>}
        {(role==="Admin" || isAdmin) && <NavLink to="/client/donations" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <CurrencyRupeeRounded
              style={{ color: theme == "dark" ? "white" : "black" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Donations</Typography>
          </Box>
        </NavLink>}
        {!userID ? (
          <NavLink
            to="/client/login"
            style={{
              all: "unset",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
              &nbsp;&nbsp;
              <Login
                style={{ color: theme == "dark" ? "white" : "black" }}
              />
              &nbsp;&nbsp;&nbsp;
              <Typography className={s.titles}> Login</Typography>
            </Box>
          </NavLink>
        ) : (

          <Box
            display={"flex"}
            justifyContent={"left</Box>"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setUserID("")
              navigate("/")
              setIsAdmin(false)
              setRole("")
              Cookies.remove(`token`)
              localStorage.removeItem(`token`)
              Cookies.remove(`UserID`)
              // Cookies.set(`UserID`, JSON.stringify(""))
              Cookies.remove(`isMemberLogin`)
              setIsMemberLogin(false)
              setMemberLoginData({})
              ActivateToast("Logged Out Successfully", "success")
            }}
          >
            &nbsp;&nbsp;
            <Logout
              style={{ color: theme == "dark" ? "white" : "black" }}
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Logout</Typography>
          </Box>
        )}
        {userID ? <NavLink to="/client/profile" style={{ all: "unset", cursor: "pointer" }}>
          <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
            &nbsp;&nbsp;
            <Person
              style={{ color: theme == "dark" ? "white" : "black" }}
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <Typography className={s.titles}>Profile</Typography>
          </Box>
        </NavLink> : null}
        
      </Box>
    </Box>
  );
}
