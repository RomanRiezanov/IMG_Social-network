const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      name: "Irina Pchelnikova",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Irina Pchelnikova",
      followed: true,
    },
    {
      id: 2,
      name: "Oleg Motyka",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Oleg Motyka",
      followed: true,
    },
    {
      id: 3,
      name: "Vadim Tkachenko",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Vadim Tkachenko",
      followed: true,
    },
    {
      id: 4,
      name: "Anatolii Kozina",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Anatolii Kozina",
      followed: true,
    },
    {
      id: 5,
      name: "Artur Nebotov",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Artur Nebotov",
      followed: true,
    },
    {
      id: 6,
      name: "Vladislav Nazarenko",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Vladislav Nazarenko",
      followed: true,
    },
    {
      id: 7,
      name: "Andrey Tkachenko",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Andrey Tkachenko",
      followed: true,
    },
    {
      id: 8,
      name: "Nikita Tovstiy",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-nikita Tovstiy",
      followed: true,
    },
    {
      id: 9,
      name: "Ivan Dubinkevich",
      status: "online",
      country: "Ukraine",
      city: "Kharkiv",
      alt: "alt-Ivan Dubinkevich",
      followed: true,
    },
    {
      id: 10,
      name: "Artem Panko",
      status: "online",
      country: "Ukraine",
      city: "Kyiv",
      alt: "alt-Artem Panko",
      followed: true,
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
