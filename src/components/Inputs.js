import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


const theme = createTheme();

export const Inputs = ({ modalOn, setModalOn }) => {
    const [nameInput, setNameInput] = useState("")
    const [hobbyInput, setHobbyInput] = useState("")


    const AddData = () => {
        axios.post("http://localhost:3001/users",
            {
                name: nameInput,
                hobby: hobbyInput
            })
        setModalOn(true)
    }
    return (
        <div className={modalOn ? "modal" : "modal_active"} onClick={setModalOn}>
            <div className="modal_content" onClick={e => e.stopPropagation()} >
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Typography component="h1" variant="h5">
                                Внесите данные
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Имя"
                                    name="email"
                                    autoFocus
                                    onChange={e => setNameInput(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Хобби"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={e => setHobbyInput(e.target.value)}
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={() => AddData()}
                                >
                                    Добавить
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
}