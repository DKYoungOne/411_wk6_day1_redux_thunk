import React from 'react'
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container,
    Menu,
    MenuItem
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Import = (props) => {
    // fill out this component


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container sx={{}}>
            <Button variant='contained' color='primary' sx={{ marginTop: '50px' }} onClick={props.fetchMakes}>Import</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <MoreVert id="action" onClick={handleClick}></MoreVert>
                                <Menu
                                    id="action-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'action',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>


            </Table>
        </Container>

    )
}

export default Import