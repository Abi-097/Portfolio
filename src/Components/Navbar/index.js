import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SchoolIcon from '@mui/icons-material/School';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ColorizeIcon from '@mui/icons-material/Colorize';
// import { useNavigate } from 'react-router-dom';
import Working from '../Pages/Work';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'relative',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));



const actions = [
  { icon: <HomeWorkIcon />, name: 'Working Experience'},
  { icon: <SchoolIcon />, name: 'Education Experience' },
  { icon: <CardMembershipIcon />, name: 'Certification Experience' },
  { icon: <AccountTreeIcon />, name: 'Projects' },
  { icon: <ColorizeIcon />, name: 'Extra' },
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('right');
  const [hidden, setHidden] = React.useState(false);

  // const navigate = useNavigate();

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (
   
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
     
      <Box sx={{ position: 'relative', mt: 1, height: 100,}}>
        <StyledSpeedDial color=""
        FabProps={{ style: { backgroundColor: '#424242' } }}
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
