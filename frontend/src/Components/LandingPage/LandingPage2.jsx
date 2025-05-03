import { Box, Typography } from "@mui/material";
import about from "../../Images/aboutImage.png";
import about2 from "../../Images/aboutImage2.png";
import background from "../../Images/bgnew.png";
import MemberLoginModal from "../MemberLogin/MemberLoginModal";
import Notifications from "../Notifications/Notifications";
import s from "./LandingPage2.module.css";
import LogoTitle from "./LogoTitle";


export default function LandingPage2() {
    return <Box>
        <Box
            display={["none", "initial", "initial", "initial"]}
            width={"100%"}
            position={"fixed"}
            top={["40px", "0"]}
            p={"10px 0"}
            bgcolor={"white"}
            zIndex={1}
        >
            <LogoTitle />
        </Box>
        <Box
            position={"absolute"}
            right={["20px", "40px"]}
            top={"80px"}
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            zIndex={10}
        >
            <Notifications />
            <MemberLoginModal />
        </Box>

        <Box sx={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "25% 75%",
            backgroundRepeat: "no-repeat",
            m: "10% auto auto auto",
            height: ["100%", "75vh"],
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Box mt={"5%"}>
                <Typography variant="h3" fontSize={["20px", "3rem"]} fontWeight={900}>
                    Welcome to CMS: ICFDR
                </Typography>
                <br />
                <Box
                    display={["flex"]}
                    flexDirection={["column", "column", "row", "row"]}
                >
                    <Box >
                        <Typography variant="h4" fontSize={["18px", "2.125rem"]} fontWeight={900}>
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
                </Box>
            </Box>
        </Box>


        <Box m={["1% 0"]} display={"flex"} gap={"10px"} justifyContent={["center", "space-between"]} flexWrap={"wrap"} >
            <ImageCard img={about} content={"ICDFR strives to provide a highly competent and skilled community focused on holistic wellness and livelihood. The core value system is to give training and skills to the struggling communities to come out of their challenges. The organization aims to educate, empower, and provide healthcare and livelihood support to 1 million beneficiaries by the year 2030."} />
            <Box sx={{
                backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(https://img.freepik.com/free-vector/gradient-geometric-background_23-2148820352.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1711238400&semt=ais)",
                backgroundSize: ["cover"],
                backgroundRepeat: "no-repeat",
                // m:["1%","5% 0 0% 5%"],
                width: ["100%", "40%"],
                p: "10px",
                borderRadius: "10px",
                color: "white"


            }}>
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
                </Box>
            </Box>
            <ImageCard img={about2} content={"We believe it is possible to create a world which knows no suffering, one where knowledge permeates through all levels. We have put our mission as our motto in a few words i.e ''striving for a better society''"} />
        </Box>
    </Box>
}

function ImageCard({ img, content }) {
    return <div className={s["card-container"]}>
        <div className={s.card}>
            <div className={s["img-content"]}>
                <img src={img} width={"100%"} />
            </div>
            <div className={s.content}>
                <p>
                    {content}
                </p>
            </div>
        </div>
    </div>
}