import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Card = styled(Paper)(({ theme, backgroundColor }) => ({
  backgroundColor: backgroundColor || '#FFFFFF',
  borderRadius: '10px',
  padding: theme.spacing(2),
}));

const CardComponent = ({ children, backgroundColor, ...props }) => {
  return <Card backgroundColor={backgroundColor} {...props}>{children}</Card>;
};

export default CardComponent;
