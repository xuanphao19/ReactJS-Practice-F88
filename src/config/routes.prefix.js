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
  SETUPROUTER: "setup-router",
  NICEBUTTON: "nice-button",
};

/* Bài 1:  */
export const EXERCISES = [
  {
    id: "exercises_1",
    title: "Bài tập về nhà - Day 34: Nhập Môn",
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
/* Bài 2.1:    SetupRouter*/
export const ROUTES_MENU = [
  {
    id: "homework_2",
    title: "Bài tập về nhà - Day 35: Setup React in Web",
    url: "",
    children: [
      {
        id: "homework_2_1",
        title: "Setup Router và Navigation",
        url: "",
        children: [
          {
            id: "homework_2_1-1",
            title: "Setup Router và Navigation",
            url: ROUTES.SETUPROUTER,
          },
          {
            id: "homework_2_1-2",
            title: "Counter App",
            url: ROUTES.COUNTER,
          },
          {
            id: "homework_2_1=3",
            title: "Todo App",
            url: ROUTES.TODOAPP,
          },
          {
            id: "homework_2_1-4",
            title: "Profile App",
            url: ROUTES.PROFILE,
          },
          {
            id: "homework_2_1-5",
            title: "Products App",
            url: ROUTES.PRODUCTS,
          },
          {
            id: "homework_2_1-6",
            title: "Comment App",
            url: ROUTES.COMMENT,
          },
          {
            id: "homework_2_1-7",
            title: "Weathers App",
            url: ROUTES.WEATHERS,
          },
        ],
      },

      {
        id: "homework_2_2",
        title: "Xây dựng: Button Component",
        url: "",
        children: [
          {
            id: "homework_2_2-1",
            title: "Button Biến thể màu sắc",
            url: ROUTES.NICEBUTTON,
          },
        ],
      },
    ],
  },

  {
    id: "homework_3",
    title: "Bài tập về nhà - Day 36: Cấu trúc dự án React",
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
    title: "Bài tập về nhà - Day 37: Multiple Layout",
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

export const BASIC_THEORY = [
  {
    id: "theory_1",
    title: "🌱 Khởi Nguyên Chi Pháp: React JS Nhập Môn",
    url: "",
    children: [
      {
        id: "theory_1_1",
        title: "React JS Là gì?",
        url: "https://vi.react.dev/learn",
        description:
          "React JS là bí thuật khởi nguyên, một cuốn sách ma pháp dệt nên giao diện từ những mảnh ghép linh hồn gọi là components. Nó triệu hồi Virtual DOM, uốn cong thực tại của trình duyệt, mang lại sức mạnh tái tạo giao diện mà không làm rung chuyển vương quốc DOM. Hãy bước vào cánh cổng này, nhưng cẩn thận, con đường phía trước đầy bí ẩn.",
      },
      {
        id: "theory_1_2",
        title: "SSR (Server-Side Rendering) và CSR (Client-Side Rendering)",
        url: "https://web.dev/articles/rendering-on-the-web&hl=vi",
        description:
          "SSR và CSR là hai trường phái ma thuật đối nghịch: CSR triệu hồi giao diện trong lòng trình duyệt, nhanh nhẹn nhưng phụ thuộc vào mana của client; SSR niệm chú từ máy chủ, mang ánh sáng tức thì nhưng nặng nề. Lựa chọn sai trường phái, và ngươi sẽ bị mắc kẹt trong bóng tối của hiệu suất.",
      },
      {
        id: "theory_1_3",
        title: "Tích hợp ReactJS vào web",
        url: "https://vi.legacy.reactjs.org/docs/add-react-to-a-website.html",
        description:
          "Tích hợp React là nghi thức ghép hồn phép thuật vào một trang web phàm tục. Như rải bụi ma pháp lên đất cằn, ngươi có thể thổi hồn React vào DOM mà không cần tái tạo cả vương quốc. Nhưng cẩn thận, sai bước trong nghi thức này sẽ làm rối loạn luồng mana.",
      },
      {
        id: "theory_1_4",
        title: "React CDN link",
        url: "https://vi.reactjs.org/docs/cdn-links.html",
        description:
          "CDN là cổng triệu hồi tức thời, mang bí thuật React từ xa mà không cần nghi lễ cài đặt phức tạp. Như gọi hồn từ các vì sao, nó cho phép ngươi sử dụng React ngay lập tức, nhưng thiếu sự ổn định của một thế giới trận pháp với các tông môn trường tồn. Hãy cân nhắc trước khi mở cổng này.",
      },
      {
        id: "theory_1_5",
        title: "Khởi tạo root và render",
        url: "https://vi.legacy.reactjs.org/docs/hello-world.html",
        description:
          "Khởi tạo root là nghi lễ khai mở, nơi ngươi khắc dấu ấn ma thuật để kết nối React với DOM. Render là lời nguyền đầu tiên, triệu hồi giao diện từ Virtual DOM. Nhưng mỗi lần niệm chú render, mana của ngươi sẽ bị thử thách bởi quái thú reconciliation.",
      },
      {
        id: "theory_1_6",
        title: "React.createElement()",
        url: "https://react.dev/reference/react/createElement",
        description:
          "React.createElement là câu thần chú nguyên thủy, biến ý chí thành hiện thực, tạo nên các mảnh ghép của giao diện. Mỗi lời niệm là một viên gạch ma thuật, nhưng quá phụ thuộc vào nó sẽ khiến ngươi kiệt sức trong sự phức tạp của cú pháp.",
      },
      {
        id: "theory_1_7",
        title:
          "JSX - Cú pháp sugar: (giống HTML nhưng compile về React.createElement)",
        url: "https://vi.legacy.reactjs.org/docs/introducing-jsx.html",
        description:
          "JSX là lớp vỏ đường ngọt ngào của ma thuật, che giấu sự thô ráp của React.createElement. Như viết bùa chú bằng ngôn ngữ phàm nhân, nó khiến phép thuật dễ dàng hơn, nhưng đừng để vẻ ngoài mê hoặc đánh lừa - mọi JSX đều hóa thành những lời nguyền nguyên thủy.",
      },
      /* Tài liệu JSX mới 18+: https://vi.react.dev/learn/writing-markup-with-jsx */
      {
        id: "theory_1_8",
        title: "Việc render element vào trong DOM",
        url: "https://vi.legacy.reactjs.org/docs/rendering-elements.html",
        description:
          "Render element vào DOM là nghi lễ hiến tế, nơi Virtual DOM hòa quyện với thực tại. Mỗi lần render là một lần thử thách, khi React cân bằng mana để chỉ thay đổi những gì cần thiết. Sai lầm trong nghi lễ này, và ngươi sẽ đánh thức quái thú re-render toàn diện.",
      },
      {
        id: "theory_1_9",
        title: "Components And Props",
        url: "https://vi.legacy.reactjs.org/docs/components-and-props.html",
        description:
          "Components là những linh hồn ma thuật, mang hình hài giao diện; Props là dòng mana chảy giữa chúng, truyền tải ý chí từ cha đến con. Nhưng cẩn thận, props không ổn định sẽ làm rung chuyển cả vương quốc, gây ra lời nguyền re-render bất tận.",
      },
      {
        id: "theory_1_10",
        title: "State Và Cách sử dụng",
        url: "https://vi.legacy.reactjs.org/docs/state-and-lifecycle.html",
        description:
          "State là trái tim đập của component, lưu giữ ký ức và ý chí. Mỗi lần thay đổi state là một lần niệm chú, khiến giao diện tái sinh. Nhưng lạm dụng state, và ngươi sẽ bị giam cầm trong vòng xoáy mana rối loạn, nơi DOM trở nên không thể còn kiểm soát.",
      },
    ],
  },
  {
    id: "theory_2",
    title: "🌞 Linh Lực Dẫn Đạo: Môi trường & Công cụ",
    url: "",
    children: [
      {
        id: "theory_2_1",
        title: "Build tool siêu nhanh với Vite",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://vite.dev/",
        description:
          "Vite là ngọn lửa thần tốc, một công cụ ma thuật xây dựng ứng dụng React với tốc độ xé kết giới. Nó tối ưu hóa mana, biến code thành thực tại trong chớp mắt. Nhưng hãy cảnh giác, cấu hình sai lầm sẽ khiến ngọn lửa này thiêu rụi cả dự án của ngươi.",
      },
      {
        id: "theory_2_2",
        title: "NPM: cài & quản lý package",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://docs.npmjs.com/",
        description:
          "NPM là kho báu ma thuật, nơi các phù thủy cất giữ và chia sẻ những câu thần chú mạnh mẽ dưới dạng package. Nó cho phép ngươi triệu hồi sức mạnh từ xa, nhưng một package lỗi thời hoặc xung đột sẽ kéo ngươi vào ma giáo hỗn loạn.",
      },
      {
        id: "theory_2_3",
        title: "NPX: Chạy package mà không cần cài đặt cục bộ",
        url: "https://docs.npmjs.com/cli/v10/commands/npx",
        description:
          "NPX là bóng ma thuật, cho phép ngươi triệu hồi package mà không cần giam chúng trong kho tàng cục bộ. Như một lời nguyền thoáng qua, nó thực thi phép thuật tức thời, nhưng cẩn thận, lạm dụng sẽ khiến mana của ngươi cạn kiệt.",
      },
      {
        id: "theory_2_4",
        title: "CSS Module: Tự động đóng gói → tránh trùng tên class",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://vite.dev/guide/features.html#css-modules",
        description:
          "CSS Module là bùa chú phong ấn, gói gọn các class vào lồng kính ma thuật, ngăn chặn xung đột trong vương quốc style. Nó biến tên class thành những ký tự bí ẩn, nhưng sai cách sử dụng, và giao diện của ngươi sẽ tan rã trong bóng tối.",
      },
      {
        id: "theory_2_5",
        title: "Giới thiệu về Hook",
        url: "https://vi.legacy.reactjs.org/docs/hooks-overview.html",
        description:
          "Hooks là những câu thần chú mới, cho phép nắm bắt mana của state và side effects mà không cần đến class cổ xưa. Chúng là chìa khóa mở ra cánh cổng phép thuật, nhưng gọi sai lệch sẽ khiến ngươi bị giam cầm trong lời nguyền của rules of Hooks.",
      },
      {
        id: "theory_2_6",
        title: "React Router: Điều hướng nhiều trang trong SPA",
        url: "https://translate.google.com/translate?hl=vi&sl=en&u=https://reactrouter.com/7.8.2/start/declarative/routing",
        description:
          "React Router là truyền tống trận, dẫn dắt ngươi qua các cảnh giới trong ứng dụng một trang. Nó uốn cong không gian, dịch chuyển giao diện tức thời mà không làm rung chuyển trình duyệt. Nhưng một tuyến đường sai lầm sẽ dẫn ngươi vào mê cung của lỗi 404.",
      },
      {
        id: "theory_2_7",
        title: "React Component: Tư duy chia component",
        url: "https://vi.legacy.reactjs.org/docs/thinking-in-react.html",
        description:
          "Tư duy chia component là bí thuật phân tách, biến ý tưởng phức tạp thành những mảnh ghép linh hồn đơn giản. Như cắt nhỏ một cuốn sách ma pháp, nó giúp ngươi kiểm soát mana, nhưng chia sai cách sẽ khiến giao diện của ngươi vỡ vụn trong hỗn loạn.",
      },
    ],
  },
  {
    id: "theory_3",
    title: "⚡ Ảo Hóa Pháp Tắc: React chuyên sâu",
    url: "",
    children: [
      {
        id: "theory_3_1",
        title: "Hành trình chinh phục React Hooks",
        url: "https://vi.react.dev/reference/react/hooks",
        description:
          "Hành trình chinh phục Hooks là con đường huyền bí, nơi ngươi nắm giữ sức mạnh của `useState`, `useEffect`, và những câu thần chú khác. Mỗi Hook là một viên ngọc ma thuật, nhưng sử dụng sai sẽ triệu hồi lời nguyền re-render hoặc side effects bất trị.",
      },
      {
        id: "theory_3_2",
        title: "Cấu trúc dự án React",
        url: "https://vi.react.dev/learn/thinking-in-react#step-5-add-interactivity",
        description:
          "Cấu trúc dự án React là bản đồ ma thuật, dẫn lối ngươi qua khu rừng component để xây dựng vương quốc giao diện. Mỗi thư mục, mỗi file là một nhánh cây ma pháp, nhưng sắp xếp sai lầm sẽ khiến khu rừng này trở thành mê cung bất tận.",
      },
      {
        id: "theory_3_3",
        title: "Phân biệt Utils, Helpers",
        url: "https://vi.legacy.reactjs.org/docs/thinking-in-react.html",
        description:
          "Utils và Helpers là những bùa chú phụ trợ, chứa đựng logic tái sử dụng để hỗ trợ các phù thủy React. Utils là những câu thần chú chung, Helpers là trợ thủ riêng biệt. Nhầm lẫn giữa chúng, và mana của ngươi sẽ bị phân tán trong bóng tối.",
      },
      {
        id: "theory_3_4",
        title: "Multiple Layout",
        url: "https://reactrouter.com/6.28.0/start/tutorial#creating-layout-routes",
        description:
          "Multiple Layout là trận pháp đa tầng, cho phép ngươi dựng lên những cấu trúc giao diện phức tạp, chuyển đổi giữa các cảnh giới mà không làm rối loạn mana. Nhưng thiết kế sai lầm sẽ khiến trận pháp sụp đổ, kéo theo sự hỗn loạn trong DOM.",
      },
      {
        id: "theory_3_5",
        title: "Refs and the DOM",
        url: "https://vi.legacy.reactjs.org/docs/refs-and-the-dom.html",
        description:
          "Refs là lá bùa liên kết, cho phép ngươi chạm vào thực tại DOM mà không cần qua Virtual DOM. Như một nhịp cầu ma thuật, nó giúp thao túng giao diện, nhưng lạm dụng sẽ khiến ngươi lạc lối trong vực thẳm của DOM trực tiếp.",
      },
      {
        id: "theory_3_6",
        title: "HOC (Higher-Order Components)",
        url: "https://vi.legacy.reactjs.org/docs/higher-order-components.html",
        description:
          "HOC là bí thuật cao cấp, bao bọc component trong một lớp áo ma thuật để chia sẻ logic. Như một phù thủy bậc thầy, nó tăng cường sức mạnh, nhưng sử dụng phức tạp sẽ khiến ngươi bị giam cầm trong mê cung code khó hiểu.",
      },
      {
        id: "theory_3_7",
        title: "Render Props: prop = callback -> callback() => render UI?",
        url: "https://vi.legacy.reactjs.org/docs/render-props.html",
        description:
          "Render Props là lời nguyền chia sẻ, cho phép component truyền mana qua callback để render giao diện. Như một nghi thức trao đổi linh hồn, nó mạnh mẽ nhưng rối rắm, dễ khiến ngươi lạc vào bóng tối nếu không hiểu rõ bản chất.",
      },
      {
        id: "theory_3_8",
        title: "Tối ưu hiệu suất component",
        url: "https://vi.legacy.reactjs.org/docs/optimizing-performance.html",
        description:
          "Tối ưu hiệu suất là nghệ thuật luyện kim ma thuật, giữ cho component thuần khiết và mana chảy mượt mà. Dùng `React.memo`, `useMemo`, và những bùa chú khác để ngăn quái thú re-render, nhưng lạm dụng sẽ khiến code của ngươi nặng nề như đá.",
      },
    ],
  },
  {
    id: "theory_4",
    title:
      "🏰 Huyền Quang Trận Pháp: Layout & Logic nâng cao (Trận pháp React)",
    url: "",
    children: [
      {
        id: "theory_4_1",
        title: "Đang cập nhật...",
        url: "https://vi.react.dev/reference/react/hooks",
        description:
          "Huyền Quang Trận Pháp là bí thuật dệt nên lưới ma thuật, sắp xếp các layout trong vương quốc React. Nó cho phép ngươi dựng những cấu trúc giao diện phức tạp, chuyển đổi mượt mà giữa các cảnh giới mà không làm rối loạn mana. Nhưng sai lầm trong thiết kế lưới sẽ khiến luồng mana tắc nghẽn, gây ra sự hỗn loạn trong DOM.",
      },
    ],
  },
  {
    id: "theory_5",
    title: "🔑 Hỗn Nguyên Bí Cảnh: (Thí luyện: closure, context, batching…).",
    url: "",
    children: [
      {
        id: "theory_5_1",
        title: "⏳ Closure trong Hooks - Lời nguyền thời gian",
        url: "https://overreacted.io/a-complete-guide-to-useeffect/",
        description:
          "Trong bóng tối của Hooks, Closure là một lời nguyền cổ xưa, giam cầm linh hồn state trong dòng thời gian bị bóp méo. Khi `useEffect` niệm chú mà thiếu đi rune dependency, giá trị cũ sẽ ám ảnh vĩnh viễn, khiến spell của ngươi lạc lối. Chỉ có ánh sáng của functional updates mới phá vỡ xiềng xích này, giải phóng state khỏi vực thẳm thời gian.",
      },
      {
        id: "theory_5_2",
        title: "🌜 Custom Hooks: Phù thủy chia bánh ngọt",
        url: "https://vi.react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components",
        description:
          "Bí thuật huyền bí trong khu rừng component, Custom Hooks mở ra quyền năng tái sử dụng vượt xa HOC và render props chỉ bằng một ý niêm. Chỉ khi tu luyện đến cảnh giới đỉnh phong thượng thừa, ngươi mới đủ linh lực khắc nên bí thuật này và thống lĩnh dòng chảy. Một sai lầm nhỏ trong bùa chú hoặc linh lực rối loạn sẽ cuốn cả cõi giới vào hỗn độn.",
      },
      {
        id: "theory_5_3",
        title: "💠 Key in List - Ngọc định vị linh hồn",
        url: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
        description:
          "Key là viên ngọc ma thuật, định danh linh hồn của từng phần tử trong danh sách huyền bí. Nếu chọn sai ngọc - như dùng chỉ số phàm tục - lằn ranh giữa các linh hồn sẽ tan vỡ, khiến state và DOM hỗn loạn như bị ám bởi quỷ dữ. Chỉ ngọc độc nhất mới giữ được trật tự khi niệm trú render.",
      },
      {
        id: "theory_5_4",
        title: "📔 useRef - Gương ký ức bất diệt",
        url: "https://vi.react.dev/reference/react/useRef",
        description:
          "useRef là một lá bùa vạn năng, lưu giữ bí mật bất biến qua những lần render đầy sóng gió. Nó thì thầm với DOM, giữ timers, và che giấu state trong bóng tối mà không đánh thức quái thú re-render. Nhưng lạm dụng lá bùa này, ngươi sẽ lạc lối trong mê cung của giá trị không được theo dõi, nơi debug trở thành cơn ác mộng.",
      },
      {
        id: "theory_5_5",
        title: "😈 Context API và Re-render - Lời Thì Thầm Của Quỷ",
        url: "https://vi.react.dev/learn/scaling-up-with-reducer-and-context",
        description:
          "Context API là tiếng thì thầm quyến rũ của quỷ dữ, len lỏi qua khu rừng component, truyền mana toàn cục trong bóng tối. Nhưng đằng sau vẻ mê hoặc, nó gieo rắc lời nguyền: mỗi thay đổi nhỏ sẽ triệu hồi cơn bão re-render, khiến cả vương quốc DOM rung chuyển. Chỉ có bùa `React.memo` và sự cảnh giác tối đa mới ngăn được nanh vuốt ác quỷ.",
      },
      {
        id: "theory_5_6",
        title: "📜 useMemo & useCallback - Bí Thuật Phong Ấn Tái Nguyên",
        url: "https://react.dev/reference/react/useMemo",
        description:
          "useMemo và useCallback là những bùa chú phong ấn, giam cầm giá trị và hàm số trong lồng kính của ký ức. Chúng ngăn cản quái vật re-render phá hoại phép thuật, nhưng chỉ khi rune dependency được khắc chính xác. Sai lầm trong nghi thức này, và bùa chú sẽ trở thành ảo tưởng, làm nặng thêm gánh nặng của ngươi.",
      },
      {
        id: "theory_5_7",
        title: "🪐 StrictMode - Cát Giới Song Song",
        url: "https://vi.react.dev/reference/react/StrictMode",
        description:
          "StrictMode mở ra một thế giới song song, nơi mọi phép thuật được niệm hai lần để lộ ra những lỗ hổng trong bùa chú của ngươi. Nó là gương soi ma thuật, phơi bày side effects ẩn trong bóng tối. Nhưng cẩn thận, những câu thần chú bất cẩn - như triệu hồi API trong render - sẽ bị lặp lại, dẫn ngươi vào mê cung của sự hỗn loạn.",
      },
      {
        id: "theory_5_8",
        title: "🍅 Re-render Cascade - Trái Táo bên cánh rừng",
        url: "https://react.dev/learn/render-and-commit",
        description:
          "Re-render Cascade là trái táo độc lấp lánh trong rừng sâu, mang lời nguyền của Bạch Tuyết, kéo cả vương quốc component vào vòng luân hồi tái sinh bất tận. Mỗi khi parent tỉnh giấc, nó lan truyền ma thuật hủy diệt, khiến con dân DOM run rẩy. Chỉ có bùa `React.memo` và sự cẩn trọng khi truyền props mới giải thoát ngươi khỏi vòng xoáy chết chóc này.",
      },
      {
        id: "theory_5_9",
        title: "🎃 Automatic Batching - Vũ hội HalloWeen hợp nhất Mana",
        url: "https://vi.react.dev/blog/2022/03/08/react-18-upgrade-guide#automatic-batching",
        description:
          "Automatic Batching là vũ điệu huyền bí, hợp nhất các luồng mana state để chỉ triệu hồi một lần render. Trong React 18, nó lan tỏa cả trong những nghi thức async, nhưng nếu lạc bước trong setTimeout hay promise, mana sẽ phân tán, gây ra nhiều lần tái sinh. Dùng `flushSync` để buộc mana hợp nhất trong nghi lễ.",
      },
    ],
  },
  {
    id: "theory_6",
    title: "🌍 Tâm Giới Hỗn Độn: (concurrent rendering, streaming).",
    url: "",
    children: [
      {
        id: "theory_6_1",
        title: "Concurrent Rendering: Dòng Sông Hỗn Độn Thời Gian",
        url: "https://react.dev/blog/2022/03/29/react-v18",
        description:
          "Concurrent Rendering là dòng sông hắc ám chảy qua tâm giới hỗn độn, nơi React uốn cong thời gian để ưu tiên mana, khiến giao diện mượt mà như lụa. Với Suspense và Streaming, nó cho phép ngươi trì hoãn phép thuật, hiển thị fallback trong khi chờ đợi. Nhưng lạc lối trong dòng sông này, và ứng dụng của ngươi sẽ chìm trong cơn lũ bất tận.",
      },
    ],
  },
  {
    id: "theory_7",
    title: "✨ Huyết Sát Chi Địa: Điểm tối của React (cạm bẫy & giới hạn)",
    url: "",
    children: [
      {
        id: "theory_7_1",
        title: "Huyết Sát Chi Địa: Vực Thẳm Cạm Bẫy React",
        url: "https://react.dev/learn#avoiding-common-mistakes",
        description:
          "Huyết Sát Chi Địa là chiến trường đỏ máu, nơi các cạm bẫy của React rình rập: từ side effects trong render phase đến lạm dụng state. Mỗi bước đi sai lầm có thể khiến ngươi rơi vào vực thẳm performance, nơi DOM bị xé toạc. Chỉ có sự khôn ngoan và bùa chú tối ưu mới dẫn lối thoát khỏi lưỡi hái hắc ám.",
      },
    ],
  },
  {
    id: "theory_8",
    title: "📜 Đại Đạo Vô Cực: Minh ngộ kiến trúc React",
    url: "",
    children: [
      {
        id: "theory_8_1",
        title: "Fiber Architecture: Cốt Lõi Vô Cực Của React",
        url: "https://react.dev/learn/react-developer-tools",
        description:
          "Fiber Architecture là cốt lõi vô cực, trái tim hắc ám của React, nơi mana của reconciliation và rendering được điều khiển. Như một cỗ máy ma thuật, nó phân chia thời gian và ưu tiên nhiệm vụ, nhưng chỉ những phù thủy bậc thầy mới có thể nhìn thấu bí mật của nó để tối ưu vương quốc giao diện.",
      },
    ],
  },
];
