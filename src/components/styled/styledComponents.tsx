import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import React from 'react';
const Glass = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%"
    // Add other styles as needed
}));

interface GlassCompProps {
    children: React.ReactNode
}

export const GlassComp = ({ children }: GlassCompProps) => (

    <Glass className='glass'>

        {children}

    </Glass>
)

export const InputField = styled(TextField)(({ theme }) => ({
    width: "100%",
    margin: "1rem",
    '& .MuiFormLabel-root': {
        color: theme.palette.secondary.main

    },
    '& .MuiInputBase-root ': {
        color: theme.palette.info.main,
        backgroundColor: "info.main",
        '& :hover': {
        }
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.info.main,
        '& :hover': {
        }
    }
}))


