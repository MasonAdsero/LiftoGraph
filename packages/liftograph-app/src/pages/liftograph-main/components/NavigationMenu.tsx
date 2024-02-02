import React from 'react';
import { CalendarMonth, FitnessCenter } from '@mui/icons-material';
import { ApplicationId } from '../ApplicationId';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

interface MenuSchema {
    id: ApplicationId;
    label: string;
    Icon?: React.FC;
}

const MENU_DATA: MenuSchema[] = [
    {
        id: ApplicationId.Workouts,
        label: 'Workouts',
        Icon: FitnessCenter
    },
    {
        id: ApplicationId.Calendar,
        label: 'Calendar',
        Icon: CalendarMonth
    }
];

const DRAWER_WIDTH = 240;

export interface NavigationMenuProps {
    onClick(id: ApplicationId): void;
}

export function NavigationMenu(props: NavigationMenuProps) {
    const { onClick } = props;

    const menuContent = MENU_DATA.map(({ id, label, Icon }) => {
        return (
            <ListItem key={id as string}>
                <ListItemIcon>
                    {
                        Icon ? <Icon />: null
                    }
                </ListItemIcon>
                <ListItemButton
                    onClick={() => onClick(id)}
                >
                    <ListItemText primary={label} />
                </ListItemButton>
            </ListItem>
        );
    });

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box'
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {menuContent}
                </List>
            </Box>
        </Drawer>
    );
}
