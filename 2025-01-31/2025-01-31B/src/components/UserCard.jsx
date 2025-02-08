import styled from 'styled-components';
import StatusButton from './StatusButton';
import Profilkep from './Profilkep';
import NevComponent from './NevComponent';
import EmailComponent from './EmailComponent';
import TelefonszamComponent from './TelefonszamComponent';

const UserCard = ({ profilkep, nev, email, telefonszam }) => {
    console.log(profilkep, nev, email, telefonszam);
    return (
        <div className="user-card">
            <p style={{ textAlign: "center" }}><Profilkep src={profilkep} alt={nev} /></p>
            <NevComponent nev={nev} />
            <EmailComponent email={email} />
            <TelefonszamComponent telefonszam={telefonszam} />
            <StatusButton />
        </div>
    );
};

export default UserCard;