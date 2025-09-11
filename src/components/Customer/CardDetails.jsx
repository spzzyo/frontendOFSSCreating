import React from 'react';

function MastercardCard({ backgroundImage }) {
const cardStyle = {
backgroundImage: `url(${backgroundImage})`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
backgroundPosition: '10%',
padding: 16,
borderRadius: 16,
boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
color: 'white',
position: 'relative',
overflow: 'hidden',
minHeight: 190,
};

const bodyStyle = {
width: '100%',
height: '100%',
};

const colStyle = {
display: 'flex',
flexDirection: 'column',
height: '100%',
padding: '0 10px 20px 10px',
width: '100%',
};

const rowBetween = {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
};

const spacerStyle = {
flex: 1,
};

const numberStyle = {
letterSpacing: '2px',
fontWeight: 700,
fontSize: '20px', // sm: xl
};

const detailsRow = {
display: 'flex',
marginTop: 14,
gap: 34,
};

const labelStyle = {
fontSize: 12,
opacity: 0.9,
};

const valueStyle = {
fontSize: 12,
fontWeight: 700,
};

const titleStyle = {
fontSize: 16,
fontWeight: 700,
};



return (




<div style={{ color: '#BDBDBD' }}>



<div style={spacerStyle} />

<div style={{ display: 'flex', flexDirection: 'column' }}>
<div>
<div style={numberStyle}>7812 2139 0823 XXXX</div>
</div>

<div style={detailsRow}>
<div style={{ display: 'flex', flexDirection: 'column' }}>
<span style={labelStyle}>VALID THRU</span>
<span style={valueStyle}>05/24</span>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>
<span style={labelStyle}>CVV</span>
<span style={valueStyle}>09X</span>
</div>
</div>
</div>
</div>

);
}

export default MastercardCard;