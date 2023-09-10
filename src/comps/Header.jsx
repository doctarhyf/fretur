import React, { useState } from "react";
import globe from "../assets/globe.svg";
import menu from "../assets/icons/menu.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { ROUTES } from "../helpers/flow";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function Header({}) {
  let navigate = useNavigate();
  const activeClass = `border-0 border-b-2  border-sky-500 `;
  const mgTopMin2 = `-mt-2`;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    //console.log(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    //console.log(e.currentTarget);
  };

  const onMenuClicked = (e) => {
    console.log(e);

    if ("myacc" === e) navigate(ROUTES.PAGE_MY_ACC.path);
    if ("logout" === e) alert("logging out ...");

    handleClose(e);
  };

  return (
    <div className="bg-slate-800 pt-4 justify-center flex flex-col items-center">
      <>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{
                right: "2rem",

                position: "absolute",
                top: 0,
              }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <img className="" src={menu} width={30} height={30} />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {/*  <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem> */}
          <MenuItem
            onClick={(e) => {
              onMenuClicked("myacc");
            }}
          >
            <Avatar /> My account
          </MenuItem>
          <Divider />
          {/*   <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem> */}
          <MenuItem
            onClick={(e) => {
              onMenuClicked("logout");
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </>

      <img src={globe} width={120} className="-mt-8" />
      <div className={`logo ${mgTopMin2} `}>
        <NavLink to="/">
          <span className="text-3xl text-sky-500 font-bold ">FRETUR</span>
        </NavLink>
      </div>
      {false && (
        <div className=" p-4 text-white gap-4 flex  justify-start items-start">
          <ul className="flex gap-4 text-xs " id="navbar">
            <li>
              <NavLink to={ROUTES.PAGE_IMP_EXP.path}>
                Import / Export<span></span>
              </NavLink>
            </li>

            <li className="">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={ROUTES.PAGE_COLIS_SEND.path}
              >
                Send Goods
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.PAGE_COLIS_REC.path}>
                Receive Goods<span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.PAGE_COLIS_TRACK.path}>
                Track Package<span></span>
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
