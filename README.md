# SpiritX_HEK_V_02

# Spirit11 - Fantasy Cricket League

Welcome to **Spirit11**, a thrilling fantasy cricket league where you can unleash your inner team manager! Build your dream team from real university cricket players, dive into detailed statistics, and compete against others to claim the top spot on the leaderboard. Whether you're a cricket enthusiast or a strategy mastermind, Spirit11 brings the excitement of the game right to your fingertips.

---

## ✨Features

- **Dream Team Creation**: Assemble your perfect lineup by selecting from real university cricket players.
- **Player Statistics**: Analyze in-depth stats to make informed decisions and optimize your team.
- **Leaderboard Competition**: Climb the ranks and compete with others for the ultimate bragging rights.
- **Real-Time Updates**: Stay in the game with live leaderboard updates powered by polling or Firestore onSnapshot.
- **User Authentication**: Secure login to manage your team and track your progress.
- **Intuitive UI**: Sleek and responsive design for an enjoyable experience across devices.

---

## 🛠️Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express, Firebase Admin SDK
- **Database**: Firestore (real-time data)
- **Authentication**: Firebase Auth, JWT
- **Notifications**: React Toastify

---

## Getting Started

To get started with theSpirit11 - Fantasy Cricket League, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/EshanRavindu17/SpiritX_HEK_V_02.git
    ```

2. **Install backend dependencies**:
    ```sh
    cd server
    npm install
    ```
3. **Install frontend dependencies**:
    ```sh
    cd client
    npm install
    ```
4. **Start the backend server**:
    ```sh
    cd server
    npm start
        ```
5. **Start the frontend development server**:
    ```sh
    cd client
    npm run dev
    ```
6. **In the server side within the config folder create serviceAccountKey.json file**
    ```sh
   {
    "type": "service_account",
    "project_id": "fir-4f834",
    "private_key_id": "822f03764a928a81c1337ba777aa3b5c20401c39",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCp5mlIPZCvx4KO\nNjLiZZo6BpUK2e1VcYyLcCKIbhDv7FYjJ78vnkz76n/LuD5snQUeQb+ruJugzRU5\ny98GZAcYz8tEHn3DP661rp+dnO++O39u3/hWpYGlxLmtV4hwLFTO+lg2yntu0g3k\nPZODo2KeOVbn1q3WjTY6DLlVRbRhGfRwaUnBn2MUfXENyrDsR3737ISImW5FoHLj\nv7vEyG1dzv1ctLQ0Ma8+//316S0anICrRN7Hn05iN+UN6+dM+5CbWkwqc3eQ3huX\nEldW6Kq0qiKZ3Tlb499DjbcoKqAJTYHYI3hGbknzXaafYI8wcc05hKyyDz3U3Dr2\nF9PNM2LVAgMBAAECggEAQPytUMCb02DRA2yf0hFjCMbzw47QRVqFk+B0lRLkz6Dq\n4c+WRbSbZdCwyU/UMN9u0b/8fMbEYKGReOYOjPc977Or4IZ5PHHjdgMxcqxQ18cS\nW2q4JwxvpuS00SUmPyH13qXLkEmrJRyby63x+uxIEJWGNG/dVq/1CgdL7N4YvPr7\n6Cp7Sl/XmAajjvc70AH20/naWpgN26AOw3hob8fmCPFYZjDhw5POYMCICdZ4gmM1\nPc9TI30JA47NZNw9wcQFsZVeFT3ZIWx7NDnRPyj4OJdvNcKC4d6+5p0uMlbCoPZ9\niu7kyt9yOohh2AvXVESkv5cCHxwapoksXvfZrtEQkQKBgQDqr7jb9RdKk5wU9vOT\nBRu2vF8/CnJhTHCl+QTOHAxkmjmjzA9x1gQCUAlixttWqJVHvd35qkEpuKpKqlr0\nA7cHOOpu7HWlsorwr8waRXr4gKmC1ujO1qzGtEzK5bm4kxLmIPC1weKUGFqTUpn3\nWOqvMYVLZRDdMbxyF0iW9+M5XwKBgQC5VHTBFMLl5JxJ2q6l5Y9NTGpc2pGpYxac\n9xM0KZGIaH8nu+6qSGPSOQiSVhR42hK+3EfMnhSxGEFpAY2S8atmUdyl8mv3DGLO\nag/k/OZURo0lcqDVLEVDO5gggprYmH1e4IhsOhNmLhJuRBk8oA4nQr2jAUcm+PMQ\n95o//gLsSwKBgQDdJZEQ1DeKcuYVa0/DLoEbBQ7LnNCDl0BfZfR9NDkJY7sE+nlj\nT8SfWUQ+7Bwr4NgqrmPJrAGTiwwNJ9JlNkr2Z0+iDvgdl80NWNr/tpFWMgeJ33Gp\n1ukgpS3n0+naX9zjNg8ddwJHg1t2j9O+HO+o/wUYMrhdd0yYRhCFEjnwCQKBgQCk\n9Tx6w5z6fTJzNjdvqFWV6uddQJqYV39ANVcdfcZw0PolBszXOlnHO0aa4g2UyB4Z\nTf6GbUpjmwBVk7FM0tjJ2SF5f76Dhb3IlnURT90/tBBb/ZyUQbRgtIGipj1nfstQ\nkLA9DLBJqcZz6R9BbAFNBsW+ehu336ySNKFSRiiZ4wKBgDl1iZnP4zxVUQhKQrwo\nNB8Kt99E2sBKH8DFxHrK0GU/ydWj7mz6IOZsjurC2LB+HARMzqeMwVjyVnxxG72d\nvPTiJC8Sap+9Iv83rvOTYkMeDB7Ghe6zgBTXAl+EzpqDfTMiJaRQHEEEalyM8U2l\nejv6O3u6FMSRcjP5+Hy4Zxq5\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@fir-4f834.iam.gserviceaccount.com",
    "client_id": "112285910764080634231",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40fir-4f834.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
    }
  
  
  
    ```
## 🎮How to Play

1. **Sign Up/Login**: Create an account or log in to get started.
2. **Build Your Team**: Pick 11 players from a pool of university cricket stars within a budget.
3. **Analyze Stats**: Use player statistics to strategize your selections.
4. **Submit & Compete**: Lock in your team and watch your points climb as real matches unfold.
5. **Leaderboard Glory**: Outscore others to dominate the leaderboard!
6. **Admin panel** : Add,delete,update players details/veiw tournament summary/view player profiles

---

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install Dependencies

Clone the repository and install the required dependencies:

![Screenshot 2025-03-09 191805](https://github.com/user-attachments/assets/05fe9a10-5bab-4c1d-84a7-d4cd21dda121)
![WhatsApp Image 2025-03-09 at 19 19 53_e0d0f06f](https://github.com/user-attachments/assets/bb625f20-b96c-4b4e-a74d-d84beb99fbd4)
```bash

git clone https://github.com/EshanRavindu17/SpiritX_HEK_V_02.git
cd client
npm install
