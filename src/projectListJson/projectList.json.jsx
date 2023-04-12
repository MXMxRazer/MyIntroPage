import * as messageImg from '../assets/messageImage.png';
import JWTLogo from '../assets/jwt.jpeg';

const data = [
    {
        "id": 1,
        "projectName": "Real-time Messaging Web App",
        "description": "websockets, scripting languages, programming languages, frameworks, libraries, MUI, other framworks",
        "image": messageImg,
        "details": "This App allows the users to get the experience of real-time chating through the socket pathway.", 
        "URL": 'https://github.com/MXMxRazer/chatProject'
    },
    {
        "id": 2,
        "projectName": "Authenticator",
        "description": "JWT, scripting languages, programming languages, frameworks, libraries, sass, sessions, tokens",
        "image": JWTLogo, 
        "details": "This is a program that authenticates the user based on the passage of JWT tokens between the server and the client computer.", 
        "URL": 'https://github.com/MXMxRazer/Auth-NestJs-'
    },
    {
        "id": 3,
        "projectName": "Working on it",
        "description": "JWT, scripting languages, programming languages, frameworks, libraries, sass, sessions, tokens",
        "image": messageImg, 
        "URL": null
    }
]

export { data }; 