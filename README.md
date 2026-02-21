# profile-website-design

A full-stack personal portfolio inspired by **Art History** and the playful aesthetics of **Pokémon cards** and **draggable UI**.

## Design 
The design is a tribute to retro "web-maker" platforms like *Carrd* and *Strawpage*. 
- **Thematic Palette:** Inspired by the Pokémon 'Tropius' (Nature/Green/Cream).
- **Interactive Elements:** Features a Pokémon-style "Card Reveal" system and a draggable-inspired layout.
- **Goal:** To create a fresh, simple space that prioritizes artistic identity alongside technical implementation.

## Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend** | React (Next.js 14+) |
| **Backend** | Next.js API Routes (REST) |
| **Database** | Supabase (PostgreSQL) |
| **Styling** | Tailwind CSS + Framer Motion |
| **Hosting** | Vercel |

## Structure
- `/app`: Handles the Next.js App Router and API routes (`/api/comments`).
- `/backend/lib`: Centralized database logic and Supabase client initialization.
- `/frontend/components`: Reusable React components (Interactive cards, Comment section).
- `/frontend/styles`: Custom CSS variables and global theme settings.
- `/public/images`: Static assets including the custom card-back illustration.

## Key Features
- **Guestbook (Comments):** A working database connection where visitors can leave messages.
- **Interaction:** Dynamic "likes" system connected to Supabase.
- **Responsiveness:** Optimized for both Desktop and Mobile viewing.
