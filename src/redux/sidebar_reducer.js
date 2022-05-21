const initialState = {
  friends: [
    { id: 1, name: "Irina Pchelnikova", job: "2D Artist" },
    { id: 2, name: "Oleg Motyka", job: "Full-Stack Developer" },
    { id: 3, name: "Anatolii Kozina", job: "Back-End Developer" },
  ],
  navLinks: [
    { id: 1, name: "Profile", to: "/profile", alt: "profile-link" },
    { id: 2, name: "Messages", to: "/dialogs", alt: "dialogs-link" },
    { id: 3, name: "News", to: "/news", alt: "news-link" },
    { id: 4, name: "Music", to: "/music", alt: "music-link" },
    { id: 5, name: "Settings", to: "/settings", alt: "settings-link" },
  ],
};

export const sidebarReducer = (state = initialState, action) => {
  return state;
};
