# Note-IT
 
Note-IT is a resource hub website built for Pokhara University (PU) students
— mainly<b> BCSIT and BBA</b> — to find notes, syllabus, and past questions for every semester in one place, 
instead of digging through random Facebook groups and Telegram channels.

 
## Homepage Preview
<img width="1912" height="931" alt="image" src="https://github.com/user-attachments/assets/0f699102-5c2c-4233-812b-cd9dede05d68" />



## What it does
 
- **Course pages** for BCSIT and BBA, broken down semester by semester (sem1 to sem8), each with tabs for Notes, Syllabus, and Past Questions.
- **Course Details page** explaining what each program actually covers.
- **College page** with a small gallery/info section for a few affiliated colleges (Apex, PCM, Uniglobe).
- **Scholarship page** with info for students looking for financial aid.
- **Contact page** for reaching out.
- **Login / Signup** so a user gets a personalized session (name + avatar shown in the navbar) instead of it being purely anonymous.

## File Structure
```

Note-IT-Master/
├── index.html              # homepage
├── pages/
│   ├── bcsit.html           # BCSIT overview -> links to bcsit-sems/
│   ├── bcsit-sems/          # sem1 ... sem8, each with its own notes/syllabus/pq
│   ├── bba.html              # BBA overview -> links to bba-sems/
│   ├── bba-sems/             # sem1 ... sem8
│   ├── college.html
│   ├── college_gallery/      # per-college pages
│   ├── scholar.html
│   ├── course_details.html
│   ├── contact.html
│   ├── login.html
│   └── signup.html
├── script/                  # auth.js, courses.js, login.js, signup.js, etc.
├── style/                   # one CSS file per page/section
└── assets/                  # logos, icons (svg), images, and the actual PDF notes/past questions
```

## Why it exists
 
Built as a practical side project alongside coursework — the idea was to have one clean place for PU students (starting with BCSIT/BBA) to grab notes and past papers per semester without hunting around.
