"use client";

import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

type Product = {
  id: number | string;
  title: string;
  thumbnail?: string;
  price?: number;
};

type Props = {
  products: Product[];
};

const drawerWidth = 240;

export default function ProductList({ products }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6">Product App</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem>
            <ListItemText primary="Products" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          {products?.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Card>
                {p.thumbnail && <CardMedia component="img" image={p.thumbnail} />}
                <CardContent>
                  <Typography variant="h6">{p.title}</Typography>
                  <Typography>${p.price ?? ""}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}