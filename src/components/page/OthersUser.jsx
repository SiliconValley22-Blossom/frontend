import React from 'react';
import '../../App.css'
import OthersUserWrapper from '../organisms/OthersUserWrapper';

function OthersUser({match}){
    return (
        <div className="othersuser">
            <OthersUserWrapper user_id={match.params.id}/>
        </div>
    )
};

export default OthersUser;



