import {
  Box,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
// import LandingPage from "./Components/LandingPage/LandingPage";
import { useContext, useEffect } from "react";
import Login2 from "./Components/Authorisation/Login/Login2";
import Register from "./Components/Authorisation/Register/Register";
import Chats from "./Components/Chats/Chats";
import Contacts from "./Components/Contacts/Contacts";
import Emails from "./Components/Email/Email";
import Employees from "./Components/Employees/Employees";
import ExternalForm from "./Components/ExternalForm/ExternalForm";
import ChangePassword from "./Components/Features/ChangePassword";
import InitialModal from "./Components/InitialModal/InitialModal";
import LandingPage2 from "./Components/LandingPage/LandingPage2";
import Meetings from "./Components/Meetings/Meetings";
// import MemberLogin from "./Components/MemberLogin/MemberLogin";
import Donations from "./Components/Donations/Donations";
import MemberLogin2 from "./Components/MemberLogin/MemberLogin2";
import Members from "./Components/Members/Members";
import Miscellaneous from "./Components/Miscellaneous/Miscellaneous";
import IndividualProfessionCategory from "./Components/Miscellaneous/ProfessionCategories/IndividualProfessionCategory";
import ProfessionCategories from "./Components/Miscellaneous/ProfessionCategories/ProfessionCategories";
import NavMobile from "./Components/Navbar/NavMobile";
import Notes from "./Components/Notes/Notes";
import NewNotes from "./Components/NotesNew/NewNotes";
import NewProfile from "./Components/Profile/NewProfile";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import { Context } from "./Context";

function App() {
  let { apiLink, universalLoading, setIsAdmin, userID, setRole, setHide, setUserPermissions, setCenters, setUserName, axios } =
    useContext(Context);
  const { setOpen, setConfigurationSettings, token, setMemberLoginData, newNotesArray, setNewNotesArray } = useContext(Context);
  const { setUserData, isMemberLogin, setUserID } = useContext(Context);
  const { setUserCreator, setAssignedCenter, setUniversalLoading, selected } = useContext(Context);
  const { setGender } = useContext(Context);
  const { setName } = useContext(Context);
  const { setMaritalStatus } = useContext(Context);
  const { setDegree } = useContext(Context);
  const { setImage } = useContext(Context)


  useEffect(() => {
    if (!isMemberLogin) {
      return
    }
    axios.get(apiLink + "member/" + userID).then(({ data }) => {
      console.log(data)
      setMemberLoginData(data)
      setName(data.details.name || "");
      setUserCreator({
        name: data.createdBy,
        userID
      })
      setAssignedCenter(data.center || "")
    })
  }, [apiLink, axios, isMemberLogin, setAssignedCenter, setMemberLoginData, setName, setUserCreator, userID])

  useEffect(() => {
    ((async () => {
      let { data } = await axios.get(`${apiLink}configuration/647589da7d9cb06b225e4638`)
      setConfigurationSettings(data)
    })())
    if (!token) return;
    if ((token && userID)) return;
    if (!token && userID) return;
    setUniversalLoading(true)
    axios.get(apiLink + "userDataByToken").then(({ data: res }) => {
      setUserID(res._id)
      setUserData(res.details);
      setName(res.name || "");
      setUserName(res.name || "")
      setRole(res.role || "");
      setIsAdmin(res.isAdmin || false);
      setUserPermissions(res.permissions)
      setCenters(res.centers)
      setAssignedCenter(res.assignedCenter || "")
      setUserCreator(res?.creator)
      setHide(!!(res.isDataHidden))
      setMaritalStatus(res.details?.maritalStatus || "");
      setImage(res.details?.photo || "");
      setDegree(res.details?.degree || "");
      setGender(res.details?.gender || "");
      setUniversalLoading(false)
    }).catch((err) => setUniversalLoading(false))
    
  }, [])

  return (
    <Box p={["60px 0 0 0", "0 0 0 100px"]} className="App">
      <InitialModal />
      <Navbar />
      <NavMobile />
      <Chats />
      <Box zIndex={9} display={"flex"} flexWrap={"wrap"} alignItems={"flex-end"} flexDirection={"row-reverse"} position={"fixed"} gap={"10px"} bottom={10} right={[120,selected?340:120]}>
        {newNotesArray.map((el, i) => {
          return <NewNotes key={i} right={i} />
        })}
      </Box>
      <br />
      {/* <DonationModal /> */}
      <Box p={"10px"}>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<LandingPage2 />} />
          <Route path="/client/notes" element={<Notes />} />
          <Route path="/client/emails" element={<Emails />} />
          <Route path="/client/whatsApp" element={<WhatsApp />} />
          <Route path="/client/contacts" element={<Contacts />} />
          <Route path="/client/meetings" element={<Meetings />} />
          <Route path="/client/misc" element={<Miscellaneous />} />
          <Route path="/client/misc/professionCategories" element={<ProfessionCategories />} />
          <Route path="/client/misc/professionCategories/:center" element={<IndividualProfessionCategory />} />
          {/* <Route path="/client/donations" element={<Donations />} /> */}
          <Route path="/client/donations" element={<Donations />} />
          <Route path="/client/dashboard" element={<Dashboard />} />
          <Route path="/client/addLeaders" element={<Employees />} />
          <Route path="/client/form/:formID" element={<ExternalForm />} />
          <Route path="/client/addMembers" element={<Members />} />
          <Route path="/client/register" element={<Register />} />
          <Route path="/client/login" element={<Login2 />} />
          <Route path="/client/profile" element={<NewProfile />} />
          {/* <Route path="/client/memberLogin" element={<MemberLogin />} /> */}
          <Route path="/client/memberLogin" element={<MemberLogin2 />} />
          <Route path="/client/changePassword" element={<ChangePassword />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
