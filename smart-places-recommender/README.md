# 🚀 Smart Nearby Places Recommender

A location-based web application that recommends nearby places based on user mood using **Google Maps & Places API**.

---

## 📌 Overview

This project allows users to:

- Select a **mood** (Work, Date, Quick Bite, Budget)
- Get **nearby recommendations**
- View results on **Google Map with markers**
- See **distance, rating, and open status**
- Apply **filters (Top Rated, Nearest, Open Now)**

---

## ✨ Features

- 📍 Real-time **user geolocation**
- 🗺 Google Maps integration with markers
- 🔎 Google Places API for nearby search
- 🎯 Mood-based recommendation system
- 📏 Distance calculation (Haversine formula)
- ⭐ Sorting & filtering (rating, distance, open now)
- 🎨 Clean modern UI (Tailwind CDN)
- 📱 Responsive layout

---

## 🧠 Architecture

```text
User Action (Mood Selection)
        ↓
App State (React Hooks)
        ↓
MapView Component
        ↓
Google Places API
        ↓
Places Data
        ↓
Processing (Distance + Filters)
        ↓
UI Rendering (Map + Cards)