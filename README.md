# Seen It - A Movie Watchlist App

`Seen It` is an interactive **Single-Page Application (SPA)** built with Angular, designed to help users browse movies and easily manage their personal watchlists. This project represents a comprehensive learning journey in modern UI development, focusing on performance, user experience, and responsive design.


## 🎥 About The Project

The goal of "Seen It" is to provide a simple, fluid, and effective interface for managing movies. As a pure front-end application, it runs entirely in the browser. User data is saved locally using `localStorage`, ensuring a fast and seamless experience without the need for a backend.

## ✨ Key Features

*   **Movie Display:** An attractive interface to display a list of movies with their posters and details.
*   **Dynamic Search:** An efficient, real-time search feature to find movies easily.
*   **Watchlist Management:** Add or remove movies from your personal watchlist with a single click.
*   **Local Data Persistence:** Your watchlist is saved in the browser, so you won't lose your data on page reload.
*   **Fully Responsive:** A seamless user experience across all devices, from large desktops to mobile phones.

## 🚀 Tech Stack

*   **[Angular](https://angular.io/):** The core framework for building the SPA.
*   **[RxJS](https://rxjs.dev/):** For managing asynchronous operations and reactive programming.
*   **[TypeScript](https://www.typescriptlang.org/):** To ensure a clean and robust codebase.
*   **HTML5 & CSS3:** For structuring and styling the application.
*   **LocalStorage API:** For client-side data storage.

## 🛠️ Core Concepts & Implementation

This project was an opportunity to implement and master key web development concepts:

1.  **Single-Page Application (SPA) Architecture:** The entire application is built as an SPA, providing a fluid user experience without page reloads. This architecture leverages core Angular features:
    *   **Routing:** Implemented Angular's Router to manage navigation between different views. The application uses the URL **hash (`#`)** strategy for routing, ensuring compatibility across different hosting environments.
    *   **Lazy Loading:** Feature modules are lazy-loaded to improve the initial application load time. This means code for a specific feature is only downloaded and parsed when the user navigates to it.
    *   **Data Binding:** Utilized Angular's powerful two-way data binding to seamlessly synchronize application data (the model) with the UI (the view), creating a highly interactive experience.

2.  **Reactive Programming with RxJS:** The search functionality was built using RxJS operators like `debounceTime`, `distinctUntilChanged`, and `switchMap`. This prevents excessive API calls on every keystroke, significantly improving performance.

3.  **Reactive Forms:** The search input is managed using Angular's Reactive Forms. This provides a robust and scalable model-driven approach to handling user input, validation, and tracking changes (e.g., logging form value changes to the console for debugging).

4.  **Client-Side State Management:** The user's watchlist is persisted using the browser's **LocalStorage API**. This serves as a simple yet effective state management solution, preserving user data between sessions directly on the client-side.

5.  **Component-Based Architecture:** The UI was broken down into reusable components (e.g., `MovieCard`, `Header`, `SearchInput`), promoting a clean, maintainable, and scalable codebase.



## 🖼️ Screenshots

**Desktop View:**
![Desktop View of the App](https://github.com/ahmed-ziedan/Seen-it/blob/master/src/assets/imgs/seenItDesktop.png)

**Desktop View:**
![Desktop View of the App](https://github.com/ahmed-ziedan/Seen-it/blob/master/src/assets/imgs/aboutDesktop.png)

**Mobile View:**
![Mobile View of the App](https://github.com/ahmed-ziedan/Seen-it/blob/master/src/assets/imgs/SeenItMobile.png)

## Live Demo

https://seen-it-one.vercel.app/



## Links

[![Live Demo for Seen It](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmedziedan/)
