import { Box, Typography } from "@mui/material";
import about from "../../Images/aboutImage.png";
import about2 from "../../Images/aboutImage2.png";
import MemberLoginModal from "../MemberLogin/MemberLoginModal";
import Notifications from "../Notifications/Notifications";
import LogoTitle from "./LogoTitle";

export default function LandingPage() {

  return (
    <Box position={"relative"}>
      <Box
        display={["none", "initial", "initial", "initial"]}
        width={"100%"}
        position={"fixed"}
        top={["40px", "0"]}
        p={"10px 0"}
        bgcolor={"white"}
      >
        <LogoTitle />
      </Box>
      <Box
        position={"absolute"}
        right={["20px", "40px"]}
        top={["-30px", "10px", "10px", "25px"]}
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
      >
        <Notifications />
        <MemberLoginModal />
      </Box>
      <Box
        display={["block", "block", "flex", "flex"]}
        m={"5% 0"}
        justifyContent={"space-evenly"}
        bgcolor={"rgb(235,235,235)"}
      >
        <Box
          p={["30px", "30px", "20px"]}
          maxWidth={["100%", "100%", "90%", "90%"]}
          margin={"5% 0"}
          bgcolor={"rgb(235,235,235)"}
        >
          <Typography variant="h3" fontWeight={900}>
            {" "}
            Welcome to CMS: ICFDR
          </Typography>
          <br />
          <Box
            display={["flex"]}
            flexDirection={["column", "column", "row", "row"]}
          >
            <Box>
              <Typography variant="h4" fontWeight={900}>
                Elevate Lives, Empower Change: Together For A Brighter Tomorrow
              </Typography>
              <br />
              <Typography fontSize={["sm", "md"]}>
                ICFDR is a non-profit, humanitarian organization, dedicated to
                creating positive and lasting changes in the deprived
                communities with an emphasis on enduring initiatives and
                consciousness-raising efforts within the realms of Education,
                Health, Empowerment, and Environment. Our mission revolves
                around the enhancement of societal well-being through
                volunteer-driven initiatives, meticulously planned programs,
                impactful campaigns, and substantial projects. Central to
                ICFDR's ethos is the advancement of marginalized and vulnerable
                segments of society. Operating with a high level of
                professionalism, ICFDR ensures efficient resource allocation to
                attain optimal social outcomes.
              </Typography>
              <br />
              <Typography>
                We are a professionally run not for profit social organisation,
                ensuring optimum utilization of resources for maximum social
                impact.
              </Typography>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              textAlign={"center"}
              p={"8px"}
              borderRadius={"5px"}
            >
              <img src={about} width={"100%"} style={{ maxWidth: 400 }} alt={"Childrens"} />
              <Typography textAlign={"left"} component={"p"} variant="body2">
                ICDFR strives to provide a highly competent and skilled
                community focused on holistic wellness and livelihood. The core
                value system is to give training and skills to the struggling
                communities to come out of their challenges. The organization
                aims to educate, empower, and provide healthcare and livelihood
                support to 1 million beneficiaries by the year 2030.
              </Typography>
            </Box>
          </Box>
          <br />
          {/* ************************************** */}
          <Box
            display={["flex"]}
            gap={"10px"}
            flexDirection={["column", "column", "row-reverse", "row-reverse"]}
          >
            <Box>
              <Typography variant="h4" fontWeight={900}>
                Vision and Mission
              </Typography>
              <br />
              <Typography>
                Our Vision is for all of us to realise that each individual
                should care for society. Our work and events are open for all
                those who are passionate about creating a better, more
                empathetic society.
              </Typography>
              <br />
              <Typography>
                We at iCFDR strive towards achieving a joyous and healthy world,
                wherein people live in harmony whilst providing an ideal
                environment for generations to come.
              </Typography>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              textAlign={"center"}
              p={"8px"}
              borderRadius={"5px"}
            >
              <img src={about2} width={400} alt={"Childrens"} />
              <Typography textAlign={"left"} component={"p"} variant="body2">
                We believe it is possible to create a world which knows no
                suffering, one where knowledge permeates through all levels. We
                have put our mission as our motto in a few words i.e ''striving
                for a better society''
              </Typography>
            </Box>
          </Box>
          {/* ************************************** */}
          {/* <Box maxWidth={["100%", "100%", "60%", "60%"]} margin={"5% 0"}>
            <Typography variant="h4" fontWeight={900}>
              VISION & MISSION
            </Typography>
            <br />
            <Typography>
              Our Vision is for all of us to realise that each individual should
              care for society. Our work and events are open for all those who
              are passionate about creating a better, more empathetic society.
            </Typography>
            <br />
            <Typography>
              We at iCFDR strive towards achieving a joyous and healthy world,
              wherein people live in harmony whilst providing an ideal
              environment for generations to come.
            </Typography>
            <br />
            <Typography>
              We believe it is possible to create a world which knows no
              suffering, one where knowledge permeates through all levels. We
              have put our mission as our motto in a few words i.e ''striving
              for a better society''
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
