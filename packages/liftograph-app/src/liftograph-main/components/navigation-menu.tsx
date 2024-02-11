import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

export interface MenuSchema<T> {
    id: T;
    label: string;
    Icon?: React.FC;
}

export interface NavigationMenuProps<T> {
    onClick(id: T): void;
    selectedMenuItem: T;
    menuData: MenuSchema<T>[];
}

export const BUTTON_TESTID = 'navigation-menu-button-';
const DRAWER_WIDTH = 240;

export function NavigationMenu<T>(props: NavigationMenuProps<T>) {
    const { onClick, selectedMenuItem, menuData } = props;

    const menuContent = menuData.map(({ id, label, Icon }) => {
        return (
            <ListItem key={id as string}>
                <ListItemIcon>
                    {
                        Icon ? <Icon /> : null
                    }
                </ListItemIcon>
                <ListItemButton
                    data-testid={`${BUTTON_TESTID}${id}`}
                    onClick={() => {
                        if (id !== selectedMenuItem) {
                            onClick(id);
                        }
                    }}
                    selected={selectedMenuItem === id}
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
