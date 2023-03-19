import axios from 'axios';
import { useState, useEffect } from 'react';
import { Placeholder } from './Placeholder';
function App() {

    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(j => setData(j.data))
    }, [])
    const [data, setData] = useState([])

    return (
        <div className="App">

            {data.map((user, index) => {
                return (
                    <Placeholder key={index} name={user.name} hobby={user.hobby} />)
            })}

        </div>
    );
}

export default App;
