import { Button, IconButton } from "@material-ui/core";
import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="SidebarButton">
      <Button
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
        startIcon={
          <img
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt=""
          />
        }
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={7}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={17} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={7} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={21} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={7} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
