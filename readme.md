# [TODO: FIND A NAME]

🚧 WIP \
React App to manage small/mid Github projects in a friendly environnement 

## Installation

Clone the repo 
```bash
git clone https://github.com/Raumain/ticketing
```

### Start project

#### Frontend : 
Create a .env file with the following variable \
`VITE_API_URL=`

```bash
cd frontend
pnpm install
pnpm dev
```

#### Database :
Create a .env file with the following variables \
`POSTGRES_PASSWORD=` \
`POSTGRES_USER=` \
`POSTGRES_DB=` \
Values can be whatever you want
```bash
cd database
docker compose up
```

#### Backend :
```bash
cd backend
bun install
bun migrate
bun dev
```

> [!IMPORTANT]
> Everytime you update a route from the API, you need to follow few steps to keep your queries clean
> - Go to `VITE_API_URL/swagger/json`
> - Copy the JSON swagger
> - Past/Replace the existing one in `frontend/src/api/swagger.json`
> - In `frontend`, run the following command
> ```bash
>  pnpm kubb
>```
> You're good to go ! ✨

## TODOs
- [ ] Display infos about the linked project/repository/issues on [item]_$id [![frontend](https://img.shields.io/badge/frontend-blue?style=plastic)](https://github.com/Raumain/ticketing/tree/master/frontend) [![backend](https://img.shields.io/badge/backend-yellow?style=plastic)](https://github.com/Raumain/ticketing/tree/master/backend)
- [ ] Implement GithubAPI request to get real infos [![backend](https://img.shields.io/badge/backend-yellow?style=plastic)](https://github.com/Raumain/ticketing/tree/master/backend)
- [ ] Create a friendly UI because my eyes are bleeding rn
- [ ] Update the todos list 

## Things i want to do later
- [ ] Dockerize everything ? Monorepo ?
- [ ] Find a great hosting service
