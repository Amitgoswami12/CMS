import { useContext, useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";
import Cookies from "js-cookie";
export default function GoogleSignUpButton({ userObj, setUserObj }) {
    const [count1, setCount1] = useState(1)
    const [user, setUser] = useState([]);
    let { apiLink,axios, setUserID, ActivateToast } = useContext(Context)
    const [profile, setProfile] = useState(null);
    // const API_KEY = "AIzaSyCCSoLLN-m0Vg70Hxwjn3Q998YvqFCCr5U";
    const nav = useNavigate();
    const url = 'https://www.googleapis.com/oauth2/v4/token';

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            const data = {
                client_id: "390139244489-92v6mqj5oljo5a6iago8q8445eu35lpd.apps.googleusercontent.com",
                redirect_uri: 'postmessage',
                client_secret: "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",
                code: codeResponse.code,
                grant_type: 'authorization_code'
            };
            axios.post(url, data)
                .then(response => {
                    setUser(response.data)
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        onError: (error) => console.log('Login Failed:', error),
        clientId: '946652286578-p4i6i5di5gbs0bth338cv1tv2c033ts4.apps.googleusercontent.com',
        // 'https://www.googleapis.com/auth/gmail'
        scope: [`https://mail.google.com/`], // add required scope here
        isSignedIn: true,
        accessType: 'offline', // add this line
        prompt: 'consent',
        flow: "auth-code"
    });


    useEffect(() => {
        if (count1 == 1) {
            return setCount1(2);
        }
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            }).then(async (res) => {
                setProfile(res.data);
                let temp = {
                    name: res.data.name,
                    email: res.data.email,
                    googleRefreshToken: user.refresh_token,
                    googleLogin: true
                }
                console.log(temp)
                let { data } = await axios.post(`${apiLink}users`, temp);
                console.log(data);
                setUserID(data._id);
                Cookies.set(`UserID`,JSON.stringify(data._id))
                ActivateToast("Registered Successfully","success")
                nav("/client/dashboard")
            }).catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
        // setUserObj({
        //     name: "",
        //     email: "",
        //     password: ""
        // })
    };
    return (
        <div>
            {profile ? (
                <Button sx={{ height: "50px", width: "100%", border: "1px solid rgb(201 201 201)", display: "flex", justifyContent: "flex-start", position: "relative" }} onClick={logOut}>
                    <Box p={"0 20px"} position={"absolute"} width={"20%"} height={"100%"} display={"flex"} alignItems={"center"}>
                        <img style={{ height: "50%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" />
                    </Box>
                    <Box position={"absolute"} width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <Typography letterSpacing={"2px"} color={"black"} fontFamily={"arial"} fontWeight={"600"}>Log out</Typography>
                    </Box>
                </Button>
            ) : (
                <Button sx={{ height: "50px", width: "100%", border: "1px solid rgb(201 201 201)", display: "flex", justifyContent: "flex-start", position: "relative" }} onClick={login}>
                    <Box p={"0 20px"} position={"absolute"} width={"20%"} height={"100%"} display={"flex"} alignItems={"center"}>
                        <img style={{ height: "50%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt={"google logo"} />
                    </Box>
                    <Box position={"absolute"} width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <Typography fontSize={["13px","16px"]} letterSpacing={"2px"} color={"black"} fontFamily={"arial"} fontWeight={"600"}>Register with Google</Typography>
                    </Box>
                </Button>
            )}
        </div>
    );
}