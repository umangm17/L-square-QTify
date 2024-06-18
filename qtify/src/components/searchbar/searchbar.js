import React from 'react';
import Searchiconlogo from "../../asset/assets/search-icon.svg"
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';


function SearchBar(){


    const handleSearch = () => {
        const query = document.getElementById('search-input').value;
        console.log("Searching for: " + query);
    };
    return <>
    <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: 1, padding: '2px 4px' }}>
            <InputBase
                id="search-input"
                placeholder="Search a album of your choice "
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    </>

}

export {SearchBar}
