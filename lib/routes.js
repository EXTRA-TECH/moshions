import { AlertTwoTone, UserAddOutlined, StockOutlined, CompassTwoTone, CrownTwoTone, DiffTwoTone, EditTwoTone, FireTwoTone, FolderTwoTone, HomeTwoTone, LayoutTwoTone, PictureTwoTone, PieChartTwoTone, QuestionCircleTwoTone, ShoppingTwoTone, SwitcherTwoTone, UnlockTwoTone, WarningTwoTone } from '@ant-design/icons';

export default [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeTwoTone style={{ fontSize: '16px' }} />
  },
  {
    name: "Members",
    icon: <UserAddOutlined style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/members",
        name: "All members"
      },
    ]
  },
  {
    name: "Stock",
    icon: <StockOutlined style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/productivity",
        name: "Productivity"
      },
    ]
  },
];
