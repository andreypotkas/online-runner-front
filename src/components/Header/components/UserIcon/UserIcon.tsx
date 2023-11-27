import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { OverlayPanel } from "primereact/overlaypanel";

import avatar from "@/assets/images/avatar.png";
import { useAuthState } from "@/state/auth.state";

function UserIcon() {
  const navigate = useNavigate();
  const op = useRef<OverlayPanel | null>(null);
  const { user } = useAuthState();

  const items: MenuItem[] = [
    {
      label: "Настройки",
      icon: "pi pi-cog",
      command: () => navigate("/settings"),
    },
    {
      label: "Уведомления",
      icon: "pi pi-bell",
      command: () => navigate("/settings"),
    },
    {
      label: "Личный кабинет",
      icon: "pi pi-user",
      command: () => navigate("/settings"),
    },
  ];

  return (
    <>
      {user ? (
        <div>
          <Avatar
            className="p-overlay-badge "
            image={user.photo ?? avatar}
            size="large"
            onClick={(e) => op.current!.toggle(e)}
          >
            <Badge value="4" severity="danger" />
          </Avatar>
          <OverlayPanel ref={op}>
            <Menu model={items} />
          </OverlayPanel>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const MemoizedUserIcon = React.memo(UserIcon);
export default MemoizedUserIcon;
