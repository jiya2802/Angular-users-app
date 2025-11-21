# Angular Users App

This is a simple Angular application built as an assignment to demonstrate core Angular concepts including components, routing, directives, dynamic components, and API integration. The app fetches users from an API, displays them in a clean UI, and opens a dynamic user details modal.

---

## 📌 Features Implemented

### ✔ 1. Users List Page (`/users`)
- Fetches data from JSONPlaceholder API.
- Displays a vertically aligned list of users.
- Each user card shows:
  - Name (bold)
  - Email (light text)
  - “View Details” button on the right.
- Clicking “View Details” opens a **dynamic modal**.

### ✔ 2. Dynamic Modal (User Details)
- The modal is **not** statically added in HTML.
- Loaded using **ViewContainerRef + createComponent()** (as required).
- Shows selected user information: Name, Email, Username, Phone.
- Close button removes the modal.
- Modal route syncs with URL: `/users/:id`.

### ✔ 3. Routing (As required)
- `/users` → Shows list of users.
- `/users/:id` → Shows list + auto-opens modal for that user.
- `/about` → Simple About page.
- `''` → Redirects to `/users`.
- `**` → Redirects to `/users`.

### ✔ 4. API Integration
- Uses Angular **HttpClient**.
- UserService handles all requests.
- Includes loading & error handling.

## 🛠️ Tech Stack

- **Angular 16.2.11** (or your version)
- TypeScript
- HTML + CSS
- JSONPlaceholder API

## 🚀 How to Run the Project

### 1️⃣ Clone the repository
git bash:
git clone <your-repository-url>
cd <project-folder>
### 2️⃣ Install dependencies
npm install
### 3️⃣ Run the development server
ng serve
### 4️⃣ Open in browser
http://localhost:4200

### Assignment Requirements✓
| Requirement                     | Status                            |
| ------------------------------- | --------------------------------- |
| Users list                      | ✔ Completed                       |
| View Details popup              | ✔ Dynamic Component               |
| Routing (/users, /user/:id)     | ✔ Implemented as /users/:id       |
| API calls                       | ✔ Handled                         |
| Directives                      | ✔ Used (*ngFor, *ngIf, [ngStyle]) |
| Clean UI                        | ✔ Done                            |
| README with setup + description | ✔ Provided                        |

### Screenshots
![Screenshot_21-11-2025_173125_localhost](https://github.com/user-attachments/assets/b11c9100-6e0a-44ef-b048-d0a120f456ae)
![Screenshot_21-11-2025_17324_localhost](https://github.com/user-attachments/assets/d26a61e8-9a78-4694-bdbf-b19852f98429)
![Screenshot_21-11-2025_173317_localhost](https://github.com/user-attachments/assets/62c18cfa-77ff-4df8-a155-4d9ef3f49abf)

