import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LineChart from './LineChart';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


export default function Home() {

    const [mark, setMark] = useState('Stocks');
    const [data, setData] = useState([]);

    const [chartData, setChartData] = useState({});

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div>
        <Box sx={{ p: 2 }}>
            <Box sx={{ width: '100%' }} >
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        {mark}
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            setMark('Stocks');
                            handleClose();
                        }} disableRipple>
                            Stocks
                        </MenuItem>
                        <MenuItem onClick={() => {
                            setMark('Mutual Funds');
                            handleClose();
                        }} disableRipple>
                            Mutual Funds
                        </MenuItem>
                    </StyledMenu>
                </Box>
                <Box>
                    <LineChart chartData={chartData} location="Massachusetts" legendPosition="bottom" />
                </Box>
            </Box>
        </Box>
    </div>)
}