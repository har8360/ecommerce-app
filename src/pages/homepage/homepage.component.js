import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = (props) => {
    return(
        <div className='homepage'>
            <button onClick={()=> props.history.push('/hats') }>HATSPAGE</button>
            <br/>
            <Directory/>
        </div>
    );
}
export default HomePage;