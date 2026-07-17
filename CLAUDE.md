# CLAUDE.md — Workout Generator App

## Project Overview

A **Daily Workout Generator** that creates randomized workouts based on a Push/Pull/Legs training split. Built as a simple, static web app with a native macOS version in progress.

## Status: 🔨 In Development

## Versions

| Platform | Status | Location |
|----------|--------|----------|
| Web (HTML/JS) | ✅ Working | This folder |
| macOS Native | 🔨 Building | `/WorkoutApp-macOS/` |
| iOS | ⬜ Future | — |

## Tech Stack

### Web Version
- **Vanilla JavaScript** (ES6+)
- **HTML5** — Semantic markup
- **CSS3** — Custom styling

### macOS Version
- **Swift / SwiftUI**
- **Xcode**

## Project Structure

```
/workout-app
├── CLAUDE.md         # This file
├── index.html        # Main page
├── app.js            # Core logic & exercise database
├── styles.css        # Styling
├── chest-workout.html # Dedicated chest workout page
├── /css/             # Additional styles
├── /js/              # Additional scripts
├── /images/          # Assets
└── /pages/           # Additional pages
```

## Features

### Current
- [x] Push/Pull/Legs workout split
- [x] Randomized exercise selection
- [x] Exercise database with sets/reps
- [x] Training tips per workout type
- [x] Color-coded workout types (push: red, pull: blue, legs: green)
- [x] Chest-specific workout page

### Planned
- [ ] More muscle group pages
- [ ] Workout history/logging
- [ ] Custom exercise additions
- [ ] Timer/rest periods
- [ ] Progress tracking
- [ ] macOS native app completion
- [ ] iOS version

## Development

No build process required. To run locally:
```bash
# Option 1: Open directly
open index.html

# Option 2: Local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## Code Style

- camelCase for JavaScript variables/functions
- Exercise data stored in `exercises` object
- Color scheme per workout type maintained

## Notes

- Keep exercise data modular for easy additions
- Maintain responsive design for mobile use
