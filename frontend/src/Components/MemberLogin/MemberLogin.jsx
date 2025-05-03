import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import { Context } from '../../Context';
import Cookies from 'js-cookie';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://icfdr.netlify.com/">
                ICFDR
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const themes = createTheme();

export default function MemberLogin() {
    const [phone, setPhone] = React.useState("")
    const [dob, setDob] = React.useState("")
    const { apiLink, memberLoginData,axios, setMemberLoginData, setUserID } = React.useContext(Context)
    async function handleLogin() {
        let temp = {
            phone, dob
        }
        const { data } = await axios.post(apiLink + "memberLogin", temp);
        console.log(data)
        setMemberLoginData(data)
        setUserID(data._id)
        Cookies.set(`MemberID`, JSON.stringify({ _id: data._id }))
        Cookies.set(`UserID`,JSON.stringify(data._id))
    }
    if (memberLoginData._id) return <Navigate to={"client/dashboard"} />
    return (
        <ThemeProvider theme={themes}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <br />
                        <Typography textAlign={"center"}>OR</Typography>
                        <TextField
                            label="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                            margin="normal"
                            sx={{ marginBottom: '10px' }}
                        />
                        <TextField
                            // label="Date"
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            fullWidth
                            margin="normal"
                            sx={{ marginBottom: '10px' }}
                        />
                        <Button
                            onClick={handleLogin}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
