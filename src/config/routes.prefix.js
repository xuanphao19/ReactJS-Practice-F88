export const ROUTES = {
  HOME: "/",
  LOGIN: "login",
  DASHBOARD: "dashboard",

  COMMENT: "comment",
  COUNTER: "counter",
  PRODUCTS: "products",
  PROFILE: "profile",
  TODOAPP: "todo-app",
  WEATHERS: "weathers",
};

export const ROUTES_MENU = [
  {
    id: "homework_2",
    title: "Homework buổi hai: NPM, NPX, Vite, CSS Module, React Router",
    url: "",
    children: [
      {
        id: "homework_2_1",
        title: "Counter App",
        url: ROUTES.COUNTER,
      },
      {
        id: "homework_2_2",
        title: "Todo App",
        url: ROUTES.TODOAPP,
      },
      {
        id: "homework_2_3",
        title: "Profile App",
        url: ROUTES.PROFILE,
      },
      {
        id: "homework_2_4",
        title: "Products App",
        url: ROUTES.PRODUCTS,
      },
      {
        id: "homework_2_5",
        title: "Comment App",
        url: ROUTES.COMMENT,
      },
      {
        id: "homework_2_6",
        title: "Weathers App",
        url: ROUTES.WEATHERS,
      },
    ],
  },

  {
    id: "homework_3",
    title: "Homework buổi ba: Cấu trúc dự án React",
    url: "",
    children: [
      {
        id: "homework_3_1",
        title: "Đang cập nhật dữ liệu",
        url: "homework_3/counter",
      },
      {
        id: "homework_3_2",
        title: "Đang cập nhật dữ liệu",
        url: "homework_3/counter",
      },
    ],
  },

  {
    id: "homework_4",
    title: "Homework buổi Bốn: Multiple Layout",
    url: "",
    children: [
      {
        id: "homework_4_1",
        title: "Đang cập nhật dữ liệu",
        url: "homework_4/counter",
      },
      {
        id: "homework_4_2",
        title: "Đang cập nhật dữ liệu",
        url: "homework_4/todo",
      },
      {
        id: "homework_4_3",
        title: "Đang cập nhật dữ liệu",
        url: "homework_4/profile",
      },
    ],
  },
];

export const EXERCISES = [
  {
    id: "exercises_1",
    title: "Homework buổi một: React JS là gì? JSX, Props, State!",
    url: "",
    children: [
      {
        id: "exercises_1_1",
        title: "Counter App",
        url: "exercises_1/counter",
      },
      {
        id: "exercises_1_2",
        title: "Todo List App",
        url: "exercises_1/todo",
      },
      {
        id: "exercises_1_3",
        title: "Profile Card",
        url: "exercises_1/profile",
      },
      {
        id: "exercises_1_4",
        title: "Product List",
        url: "exercises_1/products",
      },
      {
        id: "exercises_1_5",
        title: "Comment System",
        url: "exercises_1/comments",
      },
      {
        id: "exercises_1_6",
        title: "Weather App",
        url: "exercises_1/weather",
      },
    ],
  },
];

export const BASIC_THEORY = [
  {
    id: "theory_1",
    title: "🌱 Khởi động: React JS Nhập Môn",
    url: "",
    children: [
      {
        id: "theory_1_1",
        title: "React JS Là gì?",
        url: "https://vi.react.dev/learn",
      },
      {
        id: "theory_1_2",
        title: "SSR (Client-Side Rendering) và CSR (Server-Side Rendering)",
        url: "https://web.dev/articles/rendering-on-the-web?utm_source=chatgpt.com&hl=vi",
      },
      {
        id: "theory_1_3",
        title: "Tích hợp ReactJS vào web",
        url: "https://vi.legacy.reactjs.org/docs/add-react-to-a-website.html",
      },
      {
        id: "theory_1_4",
        title: "React CDN link",
        url: "https://vi.reactjs.org/docs/cdn-links.html",
      },
      {
        id: "theory_1_5",
        title: "Khởi tạo root và render",
        url: "https://vi.legacy.reactjs.org/docs/hello-world.html",
      },
      {
        id: "theory_1_6",
        title: "React.createElement()",
        url: "https://react.dev/reference/react/createElement?utm_source=chatgpt.com",
      },
      {
        id: "theory_1_7",
        title:
          "JSX - Cú pháp sugar: (giống HTML nhưng compile về React.createElement)",
        url: "https://vi.legacy.reactjs.org/docs/introducing-jsx.html",
      },
      /* Tài liệu JSX mới: https://vi.react.dev/learn/writing-markup-with-jsx?utm_source=chatgpt.com */
      {
        id: "theory_1_8",
        title: "Việc render element vào trong DOM",
        url: "https://vi.legacy.reactjs.org/docs/rendering-elements.html",
      },
      {
        id: "theory_1_9",
        title: "Components And Props",
        url: "https://vi.legacy.reactjs.org/docs/components-and-props.html",
      },
      {
        id: "theory_1_10",
        title: "State Và Cách sử dụng",
        url: "https://vi.legacy.reactjs.org/docs/state-and-lifecycle.html",
      },
    ],
  },

  {
    id: "theory_2",
    title: "🌞 Khai mở: Môi trường & Công cụ",
    url: "",
    children: [
      {
        id: "theory_2_1",
        title: "Build tool siêu nhanh với Vite",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://vite.dev/?utm_source=chatgpt.com",
      },
      {
        id: "theory_2_2",
        title: "NPM: cài & quản lý package",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://docs.npmjs.com/?utm_source=chatgpt.com",
      },
      {
        id: "theory_2_3",
        title: "NPX: Chạy package mà không cần cài đặt cục bộ",
        url: "https://docs.npmjs.com/cli/v10/commands/npx?utm_source=chatgpt.com",
      },
      {
        id: "theory_2_4",
        title: "CSS Module: Tự động đóng gói → tránh trùng tên class",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://vite.dev/guide/features.html?utm_source=chatgpt.com#css-modules",
      },
      {
        id: "theory_2_5",
        title: "Giới thiệu về Hook",
        url: "https://vi.legacy.reactjs.org/docs/hooks-overview.html",
      },
      {
        id: "theory_2_6",
        title: "React Router: Điều hướng nhiều trang trong SPA",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://reactrouter.com/7.8.2/start/declarative/routing",
      },
      {
        id: "theory_2_7",
        title: "React Component: Tư duy chia component",
        url: "https://vi.legacy.reactjs.org/docs/thinking-in-react.html",
      },
    ],
  },

  {
    id: "theory_3",
    title: "🏡 Nền móng: React nâng cao & tổ chức dự án",
    url: "",
    children: [
      {
        id: "theory_3_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
      },
      {
        id: "theory_3_2",
        title: "Cấu trúc dự án React",
        url: "https://vi.react.dev/learn/thinking-in-react?utm_source=chatgpt.com#step-5-add-interactivity",
      },
      {
        id: "theory_3_3",
        title: "Phân biệt Utils, Helpers",
        url: "https://vi.legacy.reactjs.org/docs/thinking-in-react.html",
      },
      {
        id: "theory_3_4",
        title: "Multiple Layout",
        url: "https://reactrouter.com/6.28.0/start/tutorial#creating-layout-routes",
      },
      {
        id: "theory_3_5",
        title: "Refs and the DOM",
        url: "https://vi.legacy.reactjs.org/docs/refs-and-the-dom.html",
      },
      {
        id: "theory_3_6",
        title: "HOC (Higher-Order Components)",
        url: "https://vi.legacy.reactjs.org/docs/higher-order-components.html",
      },
      {
        id: "theory_3_7",
        title: "Render Props: prop = callback -> callback() => render UI?",
        url: "https://vi.legacy.reactjs.org/docs/render-props.html",
      },
      {
        id: "theory_3_8",
        title: "Tối ưu hiệu suất component",
        url: "https://vi.legacy.reactjs.org/docs/optimizing-performance.html",
      },
    ],
  },
  {
    id: "theory_4",
    title: "🔑 Công cụ: Chờ cập nhật... !",
    url: "",
    children: [
      {
        id: "theory_4_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
      },
    ],
  },
  {
    id: "theory_5",
    title: "✨ Phép thuật: Chờ cập nhật... !",
    url: "",
    children: [
      {
        id: "theory_5_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
      },
    ],
  },
  {
    id: "theory_6",
    title: "🌍 Thế giới: Chờ cập nhật... !",
    url: "",
    children: [
      {
        id: "theory_6_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
      },
    ],
  },
  {
    id: "theory_7",
    title: "🏰 Kiến trúc: Chờ cập nhật... !",
    url: "",
    children: [
      {
        id: "theory_7_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
      },
    ],
  },
  {
    id: "theory_8",
    title: "📜 Bí kíp: Chờ cập nhật... !",
    url: "",
    children: [
      {
        id: "theory_8_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
      },
    ],
  },
];
