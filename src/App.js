import axios from 'axios';
import { useState, useEffect } from 'react';
import { Placeholder } from './components/Placeholder';
import { Inputs } from './components/Inputs';
import { Button } from '@mui/material';


function App() {
    const [data, setData] = useState([])
    const [modalOn, setModalOn] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(j => setData(j.data))
    }, [data])



    return (
        <div className="App" >
            <div className='button_container'>
                <Button variant="contained" onClick={() => setModalOn(false)}>Добавить</Button>
            </div>

            <div className='users_container'>
                <div className='users'>
                    {data.map((user, index) => {
                        return (
                            <div className='user'>
                                <Placeholder key={index} name={user.name} hobby={user.hobby} />
                            </div>)

                    })}
                </div>
            </div>
            <Inputs modalOn={modalOn} setModalOn={setModalOn} />
        </div>
    );
}

export default App;
