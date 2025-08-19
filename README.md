# Exchange Rate React App

A React application for viewing and converting historical exchange rates between different currencies, using Redux, Redux-Saga, and Ant Design UI components.

---

## Table of Contents

- [Project Description](#project-description)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API](#api)
- [License](#license)

---

## Project Description

This project allows users to:

- View mid-market exchange rates between two currencies.
- Convert an amount from one currency to another.
- Select base and target currencies from a searchable dropdown.
- View historical exchange rate data with timestamps.
- Swap base and target currencies instantly.

The application uses **Redux** for state management, **Redux-Saga** for handling async API calls, and **Ant Design** for UI components.

---

## Technologies

- **React** (Functional Components + Hooks)
- **Redux & Redux-Saga** (State management & async API calls)
- **Ant Design** (UI components)
- **Axios / Fetch** (HTTP requests)
- **JavaScript / ES6+**
- **Git & GitHub** (Version control)
- **Vite** (Build tool)

---

## Features

- Fetch supported currency codes.
- Fetch conversion rates from an external API.
- Dynamically update conversion results on input changes.
- Swap base and target currencies with one click.
- Read-only result input for converted amount.
- Handles loading and error states.

---

## Installation

1. Clone the repository:
git clone https://github.com/TrungNguyen1811/rct-exchange-rate.git

2. Navigate to the project folder:
cd exchange-rate-react

3. Install dependencies:
npm install 

4. Start the development server:
npm run dev

The app will run on http://localhost:5173 by default.

## Folder Structure
<img width="757" height="376" alt="image" src="https://github.com/user-attachments/assets/260e2dc9-dbbe-4e26-85bc-dfd95e26f622" />

API
- The app uses ExchangeRate-API (https://www.exchangerate-api.com/) to fetch:
 + Supported currency codes
 + Conversion rates
- The app uses ExchangeRate-API ('https://api.exchangeratesapi.io/v1') to fetch:
 + Historical timestamps
