import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  padding: theme.spacing(2), 
}));

const CardComponent = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export default CardComponent;
