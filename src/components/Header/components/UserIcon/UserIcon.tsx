import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { OverlayPanel } from "primereact/overlaypanel";

import avatar from "@/assets/images/avatar.png";
import { useAuthState } from "@/state/auth.state";

import MemoizedAuthBtn from "../AuthBtn/AuthBtn";
import MemoizedThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function UserIcon() {
  const navigate = useNavigate();
  const op = useRef<OverlayPanel | null>(null);
  const { user, logout } = useAuthState();

  const items: MenuItem[] = [
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
    {
      label: "Выйти",
      icon: "pi pi-sign-out",
      command: () => logout(),
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
            onClick={(e) => {
              op.current!.toggle(e);
            }}
          >
            <Badge value="4" severity="danger" />
          </Avatar>
          <OverlayPanel ref={op}>
            <div className="flex gap-4 align-items-center p-2">
              <div>Тема</div>
              <MemoizedThemeSwitcher />
            </div>
            <Menu model={items} />
          </OverlayPanel>
        </div>
      ) : (
        <div className="flex gap-2 align-items-center">
          <MemoizedThemeSwitcher />
          <MemoizedAuthBtn />
        </div>
      )}
    </>
  );
}

const MemoizedUserIcon = React.memo(UserIcon);
export default MemoizedUserIcon;
