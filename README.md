# ReactJS-Practice-F88

> **Conquer ReactJS with F8 🚀**

> ReactJS-Practice-F88: Dấu ấn hành trình học tập và chinh phục ReactJS theo lộ
> trình F8 - [fullstack.edu.vn.](https://fullstack.edu.vn/) Nơi lưu giữ kiến
> thức, bài tập thực hành tổng hợp và tiến trình rèn luyện bền bỉ.

---

## 📌 Giới thiệu:

Chào mừng bạn đến với kho lưu trữ **ReactJS-Practice-F8**, nơi tôi ghi lại hành
trình học tập và khám phá ReactJS. Dự án được tạo với mục tiêu:

- [📝 Lưu trữ các ghi chú và kiến thức quan trọng về ReactJS.](https://github.com/chantastic/sites/blob/main/reactpatterns.com/hooks.md#usestate)
- [⏳ Theo dõi tiến trình học tập từ cơ bản đến nâng cao.]()
- [💻 Các bài tập Thực hành củng cố kỹ năng lập trình.]()
- 📚 Xây dựng một tài liệu tham khảo hữu ích cho việc ôn tập sau này.

Kho này sẽ bao gồm code mẫu, bài tập thực hành, và tài liệu liên quan đến các
chủ đề như Components, Hooks, Props, State, và hơn thế nữa. Mỗi thư mục hoặc
file sẽ được tổ chức rõ ràng để dễ dàng tra cứu.

## 📌 Các giai đoạn học tập trong dự án:

### Giai đoạn 1: Làm quen ReactJS qua CDN

- Công cụ: index.html, exerciseX.html dùng React + ReactDOM + Babel CDN.

- Nội dung:

  - [React CDN link](https://legacy.reactjs.org/docs/cdn-links.html)
  - Khởi tạo root và
    [render](https://vi.legacy.reactjs.org/docs/rendering-elements.html)
    component cơ bản.
  - [JSX cơ bản: cú pháp, biểu thức, attribute, inline style.](https://vi.legacy.reactjs.org/docs/introducing-jsx.html)
  - [Component function & props](https://vi.legacy.reactjs.org/docs/components-and-props.html).
    [State cơ bản với useState](https://vi.legacy.reactjs.org/docs/hooks-state.html).

- 🎯 Mục tiêu:
  [Hiểu cách React hoạt động ở mức gốc, không cần build tool](https://vi.legacy.reactjs.org/docs/add-react-to-a-website.html).

---

### Giai đoạn 2: Dự án với Vite (React chuẩn)

- Công cụ: Vite, module import,
  [JSX](https://vi.legacy.reactjs.org/docs/jsx-in-depth.html).

- Nội dung:

* Tổ chức project chuẩn (src/, public/).

  - [Component + props](https://vi.legacy.reactjs.org/docs/state-and-lifecycle.html) +
    state.
  - [Event handling](https://vi.legacy.reactjs.org/docs/handling-events.html)
    (onClick, onChange…).
  - [List & key](https://vi.legacy.reactjs.org/docs/lists-and-keys.html),
    [conditional rendering](https://vi.legacy.reactjs.org/docs/conditional-rendering.html).

- 🎯 Mục tiêu: Làm quen môi trường React hiện đại, cơ bản nhưng có build tool hỗ
  trợ.

---

### Giai đoạn 3: Hooks & Quản lý state nâng cao

- Công cụ:
  [React Hooks.](https://github.com/chantastic/sites/blob/main/reactpatterns.com/hooks.md#usestate)

- Nội dung:

  - [useState](https://vi.legacy.reactjs.org/docs/hooks-state.html),
    [useEffect](https://vi.legacy.reactjs.org/docs/hooks-effect.html),
    [(lifecycle)](https://vi.legacy.reactjs.org/docs/state-and-lifecycle.html).
  - [useRef](https://react.dev/reference/react/useRef),
    [useMemo](https://react.dev/reference/react/useMemo),
    [useContext](https://react.dev/reference/react/useContext)
    [useCallback](https://react.dev/reference/react/useCallback).
  - [Custom hooks](https://vi.legacy.reactjs.org/docs/hooks-custom.html).

- 🎯 Mục tiêu: Nắm vững cách React quản lý state, side-effect, tối ưu
  performance.

---

### Giai đoạn 4: Routing & SPA:

🚧 _Đang cập nhật..._

---

### Giai đoạn 5: Làm việc với API:

🚧 _Đang cập nhật..._

---

### Giai đoạn 6: Quản lý state toàn cục:

🚧 _Đang cập nhật..._

---

### Giai đoạn 7: Hoàn thiện & Mở rộng:

🚧 _Đang cập nhật..._

## 📂 Cấu trúc thư mục

```bash
ReactJS-Practice-F88/
 ├─ public/            # Bài tập cơ bản (React qua CDN, không build tool)
 │   ├─ assets
 │   ├─ exercises
 │   └─├─ exercise1.html
 │      ├─ exercise2.html
 │      ├─ exercise3.html
 │      └─ ...
 │
 ├─ src/                  # Mã nguồn React chuẩn (Vite + JSX)
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   ├─ ...
 │   ├─ notes          # Hệ thống lý thuyết cơ bản
 │   ├─ projects       # Hệ thống bài tập dạng Mini-projects
 │   ├─ example       # Code mẫu của các phần lý thuyết quan trọng
 │   └─ exercises/    # Các bài tập component nâng cao
 │   └─ ...
 │
 ├─ index.html
 ├─ package.json
 ├─ vite.config.js
 └─ README.md
```

## 🚀 Cách chạy dự án

1. Chạy bằng Vite (React chuẩn)

```bash
# Cài dependencies
npm install

# Chạy môi trường dev
npm run dev

# Build dự án
npm run build

```

2. Truy cập các bài tập HTML cơ bản

Sau khi deploy (hoặc chạy vite preview), bạn có thể vào:

```bash
`/exercise1.html`

`/exercise2.html`

`/exercise3.html`

```

...

Đây là những file HTML gốc sử dụng React CDN + Babel. ...

## 📚 Tài liệu, giáo trình học tập:

- [Trải nghiệm MIỄN PHÍ khóa HTML CSS Pro](https://fullstack.edu.vn/landing/htmlcss/)

- [Làm chủ Javascript, công nghệ ReactJS cùng F8 - Học lập trình để đi làm](https://fullstack.edu.vn/landing/javascript/)

- [JavaScript Guide - Ôn tập và củng cố JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

- [React Official - Tài liệu chính thức của React (React 18+)](https://react.dev/)

- [React DOM API Reference - React gắn kết với DOM](https://react.dev/reference/react-dom)

- [React Tutorial W3schools - Học ReactJS thông qua ví dụ](https://www.w3schools.com/react/default.asp)

- [Babel Official Website](https://babeljs.io/docs/)

- [Introducing JSX – React Docs](https://react.dev/learn/writing-markup-with-jsx)

- [React Patterns](https://reactpatterns.com/)

- [Redux Toolkit](https://redux-toolkit.js.org/)

- [Vite Official - Vite hiểu cách setup, build, deploy.](https://vitejs.dev/guide/)

## 🌱 Tiến trình:

[X] Giai đoạn 1 – ReactJS qua CDN

[ ] Giai đoạn 2 – React chuẩn với Vite

[ ] Giai đoạn 3 – Hooks nâng cao

[ ] Giai đoạn 4 – Routing & SPA

[ ] Giai đoạn 5 – API

[ ] Giai đoạn 6 – State Management

[ ] Giai đoạn 7 – Hoàn thiện & Mở rộng

Cảm ơn bạn đã ghé thăm! Tài liệu đang trong quá trình xây dựng và hoàn thiện.
Nếu bạn có góp ý hoặc muốn cùng học hỏi, hãy để lại phản hồi. Hành trình này sẽ
được cập nhật thường xuyên khi tôi tiến bộ trong việc làm chủ ReactJS.

### ✍️ Tác giả

- ⏰ Bắt đầu: 07:00AM 26/08/2025.
- 👨‍💻 Người tạo:
  [Nguyễn Thanh Hòa](https://www.youtube.com/@xb_mathsonghanhcungcon2126)

```
⭐️ Nếu bạn thấy repo hữu ích, hãy star để ủng hộ nhé!
```
