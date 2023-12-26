import { useState } from "react";

import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Sidebar } from "primereact/sidebar";

import MemoizedAdminEventRewards from "./AdminEventRewards/AdminEventRewards";
import MemoizedCreateEvent from "./AdminEvents/AdminEvents";

import styles from "./Admin.module.scss";

enum AdminPagesTypes {
  EVENTS = "events",
  EVENT_REWARDS = "event-rewards",
}

const AdminPages: Record<AdminPagesTypes, JSX.Element> = {
  [AdminPagesTypes.EVENTS]: <MemoizedCreateEvent />,
  [AdminPagesTypes.EVENT_REWARDS]: <MemoizedAdminEventRewards />,
};

export default function Admin() {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<AdminPagesTypes>(
    AdminPagesTypes.EVENTS
  );

  const items: MenuItem[] = [
    {
      label: "Создать событие",
      icon: "pi pi-fw pi-plus",
      command: () => setCurrentPage(AdminPagesTypes.EVENTS),
    },
    {
      label: "Создать награду",
      icon: "pi pi-fw pi-plus",
      command: () => setCurrentPage(AdminPagesTypes.EVENT_REWARDS),
    },
  ];

  return (
    <div className={styles.wrapper + " md:flex-row flex-column"}>
      <div className={styles.side_bar + " md:block hidden"}>
        <Menu model={items} className="w-full" />
      </div>
      <div className="surface-card md:hidden block">
        <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
      </div>
      <div className={styles.page}>{AdminPages[currentPage]}</div>

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div className={styles.side_bar}>
          <Menu model={items} className="w-full" />
        </div>{" "}
      </Sidebar>
    </div>
  );
}
