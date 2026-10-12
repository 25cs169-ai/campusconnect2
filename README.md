# 🎓 CampusConnect: An integrated student management and collabration platform

> **Tagline:** Connect • Collaborate • Grow  
> **Lab Focus:** Product Development Lab / Full-Stack Campus Management Project  
> **Theme:** Modern Clean Light Theme (3D exclusively on Login/Welcome page)

---

## 🌟 Overview

**CampusConnect** is a centralized digital campus platform designed to empower students and faculty. It unites real-time campus announcements, department-classified hackathons and workshops, project collaboration squads, peer-reviewed academic resource sharing, transparent issue resolution tracking, and an **innovative AI-inspired Smart Teammate Matching Engine**.

---

## ✨ Key Modules & Features

### 1. 🏛️ Interactive 3D Login / Welcome Page (Three.js)
* **Exclusive 3D Scene**: 3D college campus rendering with Three.js.
* **Animated Geometries**: University main hall with clock tower and pillars, science & AI glass wing, library hub, floating graduation mortarboards with gold tassels, hovering textbooks, calendars, laptops, polyhedral project nodes, walking student avatars, and campus greenery.
* **Lighting & Atmosphere**: Blue (`#2563eb`, `#3b82f6`) and purple (`#7c3aed`, `#9333ea`) dynamic lighting with 280+ floating glowing sparkles and camera mouse-parallax interaction.
* **Authentication**: Email/Password login, student registration with Department dropdown (`CSE`, `ECE`, `AI & ML`, `IT`, `EEE`, `MECH`, `CIVIL`, `MBA`, `Other`), academic year, and interactive skill tags.
* **⚡ 1-Click Demo Evaluation Buttons**: Instant login for evaluators as Student (`rahul@campus.edu`) or Administrator (`admin@campus.edu`).

### 2. 🏠 Modern Light-Themed Dashboard
* **Welcome Banner**: "Welcome to CampusConnect: Your all-in-one platform for campus life, events, projects, and learning."
* **Statistics Cards**:
  * 👨🎓 **120+** Active Users
  * 🤝 **150+** Projects Posted
  * 📅 **50+** Events Organized
  * 📚 **800+** Resources Shared
* **Quick Access Cards**: Direct navigation to Announcements, Events, Projects, Resources, and Complaints.
* **Live Feeds**: Real-time snapshots of upcoming hackathons, urgent circulars, and featured student projects.

### 3. 📢 Announcements & Hackathons Portal
* **Category Filters**: `All`, `General`, `Academic`, `Examinations`, `Placements`, `Workshops`, `Sports`, `Hackathons`.
* **Important Notice Badges**: Pulsing badge alerts for urgent notifications.
* **Real Hackathon Details & Original Links (No Duplicates)**:
  * **Smart India Hackathon (SIH 2026)**: [https://www.sih.gov.in](https://www.sih.gov.in)
  * **Devfolio Hackathons Season**: [https://devfolio.co/hackathons](https://devfolio.co/hackathons)
  * **Major League Hacking (MLH)**: [https://mlh.io](https://mlh.io)
  * **ETHIndia**: [https://ethindia.co](https://ethindia.co)
  * **HackMIT**: [https://hackmit.org](https://hackmit.org)
  * **Unstop Hackathons League**: [https://unstop.com/hackathons](https://unstop.com/hackathons)
  * **Google Solution Challenge**: [https://developers.google.com/community/gdsc-solution-challenge](https://developers.google.com/community/gdsc-solution-challenge)
  * **Microsoft Imagine Cup**: [https://imaginecup.microsoft.com](https://imaginecup.microsoft.com)
* **Interactive Features**: Instant search, mark as read toggle, and full circular modal view.

### 4. 📅 Department-Wise Classified Events & Calendar
* **Department Classification**:
  * `CSE`: TechNova 2K26, CodeSprint Hackathon, Web Development Bootcamp
  * `ECE`: Robotics Workshop, IoT Innovation Challenge
  * `AI & ML`: AI with Python Workshop, Machine Learning Hackathon
  * `IT`: Cloud Computing Workshop, Cybersecurity Awareness Program
  * `EEE`: Renewable Power Systems Summit
  * `MECH`: CAD & 3D Prototyping Expo
  * `CIVIL`: Smart City Infrastructure Design
  * `MBA`: Campus Venture Pitch 2026
* **Status Filters**: `All Events`, `Upcoming`, `Ongoing`, `Completed`.
* **Combined Filtering**: e.g., `CSE` + `Upcoming` displays only upcoming Computer Science events.
* **Interactive Event Calendar**: Monthly grid view by date with department filters.
* **My Registered Events Tab**: Dedicated personal tab for students to track and unregister with confetti feedback.

### 5. 🤝 Project Collaboration Hub & Smart Teammate Matching
* **Post Project Idea**: Modal form with title, department, required skills, team size limit, and GitHub link.
* **Collaboration Directory**: Project cards with owner info, member roster, required skill tags, progress bar, and 1-click "Join Project".
* **💡 Smart Teammate Matching (Core Innovation Feature)**:
  * Algorithm calculates matching percentage (e.g. Rahul Kumar, CSE, 85% Match).
  * Highlights shared common skills (e.g., Python, React, AI).
  * Prioritizes same department, similar skills, and project interests.
  * Direct "Connect & Invite to Project" action.

### 6. 📚 Study Resources Vault
* **Department & Subject Breakdown**:
  * **CSE**: Data Structures, Algorithms, Operating Systems, DBMS, Web Development
  * **ECE**: Digital Electronics, Microprocessors, Embedded Systems, Communication Systems
  * **AI & ML**: Python, Machine Learning, Deep Learning, Data Science
  * **IT**: Networking, Cloud Computing, Cybersecurity, Database Systems
* **Upload Notes**: Share links to PDF handouts, lecture slides, code repositories, and Google Drive folders.

### 7. 📝 Campus Complaints & Feedback (Visual Timeline)
* **Lodge Issue**: Title, Department, Category (Campus issues, Infrastructure, Technical, General, Feedback), Priority, Description, and **Anonymous Checkbox Option**.
* **Visual Progress Timeline**:
  * 🟢 Step 1: `Submitted`
  * 🟢 Step 2: `Under Review`
  * 🟡 Step 3: `In Progress`
  * 🔵 Step 4: `Resolved`
* **Live Facility Remarks**: Overseer notes visible directly on student ticket cards.

### 8. 👤 Student Profile Management
* Profile picture, student name, email, department, academic year.
* **Dynamic Skills Management**: Add new skills, delete existing skills with instant score update.
* **Engagements List**: Live list of registered events and joined collaboration projects.

### 9. 🛡️ Administrator Control Panel
* **Manage Students**: Search student directory and filter by department.
* **Manage Announcements**: Broadcast new circulars, toggle important badge, delete.
* **Manage Events**: Add events with department, date, time, location, view registration counts.
* **Manage Projects**: Update progress and status (`Open`, `Looking for Members`, `In Progress`, `Completed`).
* **Manage Resources**: Moderate and delete study materials.
* **Manage Complaints**: Advance complaint stages (`Submitted` ➔ `Under Review` ➔ `In Progress` ➔ `Resolved`) with custom admin notes.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend** | React 18, Vite 6, Three.js (3D Canvas), Vanilla CSS Design System, Lucide React, Canvas Confetti |
| **Backend** | Node.js, Express.js REST API, JSON Web Tokens (JWT), Bcrypt.js |
| **Database** | MongoDB Mongoose Schema Models (with built-in In-Memory / File-Synced store fallback for zero-dependency execution) |
| **Styling** | Modern Clean Light Theme, Poppins & Inter Google Typography, Soft Shadows, Rounded Cards |

---

## 🚀 Running the Project Locally

### 1. Prerequisites
* **Node.js** (v18 or higher recommended; v20.18.0 included)
* **npm** (v9 or higher)

### 2. Start the Full-Stack Server
In the root project directory (`pd/`), run:

```bash
# Start backend REST API server and static client
npm start
```

Or for development with automatic live updates:
```bash
# Terminal 1: Backend Server (Port 5000)
node server/server.js

# Terminal 2: Frontend Vite Development Server (Port 3000)
npm run client
```

Open your browser at:
👉 **`http://localhost:5000`** (or `http://localhost:3000` in dev mode)

---

## 🔑 Demo Login Credentials

For quick evaluation during lab viva or project presentations:

| Role | Email | Password | Details |
|---|---|---|---|
| **Student (Rahul Kumar)** | `rahul@campus.edu` | `campus123` | CSE, 3rd Year, AI & React skills |
| **Student (Sneha Patel)** | `sneha@campus.edu` | `campus123` | ECE, 4th Year, IoT & Robotics skills |
| **Administrator** | `admin@campus.edu` | `campus123` | Central Campus Administrator |

*(Or click the 1-Click Demo Buttons on the 3D Login screen!)*

---

## 📡 REST API Documentation

### Authentication
* `POST /api/auth/register` — Register a student account
* `POST /api/auth/login` — Login with email and password
* `GET /api/auth/me` — Get current logged-in profile
* `PUT /api/auth/profile` — Update skills and bio
* `GET /api/auth/users` — Get student list (with department filter)

### Announcements
* `GET /api/announcements` — List announcements (query: `category`, `department`)
* `POST /api/announcements` — Broadcast new announcement
* `PUT /api/announcements/:id` — Update announcement
* `DELETE /api/announcements/:id` — Delete announcement

### Department Events
* `GET /api/events` — List events (query: `department=CSE`, `status=Upcoming`, `search`)
* `POST /api/events` — Create campus event
* `PUT /api/events/:id` — Update event details
* `DELETE /api/events/:id` — Delete event
* `POST /api/events/:id/register` — Toggle student registration

### Project Collaboration
* `GET /api/projects` — List projects (query: `department`, `status`)
* `POST /api/projects` — Create project collaboration idea
* `POST /api/projects/:id/join` — Join a project squad
* `PUT /api/projects/:id` — Update project status
* `DELETE /api/projects/:id` — Delete project

### Smart Teammate Matching
* `GET /api/matches` — AI scoring algorithm returning compatible teammates & project recommendations

### Study Resources
* `GET /api/resources` — List resources (query: `department`, `search`)
* `POST /api/resources` — Upload study resource link
* `DELETE /api/resources/:id` — Remove study resource

### Campus Complaints
* `GET /api/complaints` — List complaints
* `POST /api/complaints` — Lodge complaint ticket (anonymous option)
* `PATCH /api/complaints/:id` — Advance resolution stage (`Submitted`, `Under Review`, `In Progress`, `Resolved`)

---

## 🏆 Project Development Lab Highlights

1. **Strict Design Adherence**: Clean light theme throughout all inner pages; 3D canvas exclusively on the login page.
2. **Real Hackathon Data**: Integrated authentic, verified, non-duplicate external URLs for nationwide hackathons (SIH, Devfolio, MLH, ETHIndia, Unstop, HackMIT).
3. **Department Classification**: Dedicated filtering by CSE, ECE, AI & ML, IT, EEE, MECH, CIVIL, and MBA.
4. **Smart Matching Innovation**: Real algorithmic scoring for compatible students to eliminate friction in hackathon squad formation.
5. **Zero-Configuration Run**: Mongoose schemas and models remain fully supported while automatic fallback ensures immediate execution on any evaluation machine without local database installation crashes.
