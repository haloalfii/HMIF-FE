export const menuItems = [
  {
    title: "Interface",
    menu: [
      {
        id: 1,
        menuName: "Components",
        active: "components",
        menuIcon: "fas fa-fw fa-cog",
        mainTitle: "Custom Components",
        isSubMenu: 1,
        subMenu: [
          {
            subMenuTitle: "Buttons",
            Link: "/components/buttons",
          },
          {
            subMenuTitle: "Cards",
            Link: "/components/cards",
          },
        ],
      },
      {
        id: 2,
        menuName: "Utilities",
        active: "utilities",
        menuIcon: "fas fa-fw fa-wrench",
        mainTitle: "Custom Utilities",
        isSubMenu: 1,
        subMenu: [
          {
            subMenuTitle: "Colors",
            Link: "/utilities/colors",
          },
          {
            subMenuTitle: "Bordres",
            Link: "/utilities/borders",
          },
        ],
      },
    ],
  },
  {
    title: "Add Ons",
    menu: [
      {
        id: 3,
        menuName: "Pages",
        active: "pages",
        menuIcon: "fas fa-fw fa-folder",
        mainTitle: "Login Screens",
        isSubMenu: 1,
        subMenu: [
          {
            subMenuTitle: "Login",
            Link: "/pages/login",
          },
          {
            subMenuTitle: "Register",
            Link: "/pages/register",
          },
          {
            subMenuTitle: "Forgot Password",
            Link: "/pages/forgot-password",
          },
          {
            subMenuTitle: "404 Page",
            Link: "/pages/404",
          },
        ],
      },
      {
        id: 4,
        menuName: "Charts",
        active: "charts",
        menuIcon: "fas fa-fw fa-chart-area",
        isSubMenu: 0,
        Link: "/charts",
        // mainTitle: "Custom Utilities",
        // subMenu: [
        //   {
        //     subMenuTitle: "Colors",
        //   },
        //   {
        //     subMenuTitle: "Bordres",
        //   },
        // ],
      },
    ],
  },
];
