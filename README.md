![](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

# Photo app

This web application serves as a platform designed for the purpose of image and photo sharing among users. Its primary use case involves photographers sharing images with their clients. Within this system, there are distinct roles: an administrator, typically the photographer, who possesses the capability to generate new collections, modify collection content by adding or deleting photos, and rename collections. Subsequently, the photographer can share a specific link granting the client access exclusively to the designated collection. Within this access, the client can select their preferred images for further work. The aim of this application is to facilitate clearer and easier collaboration between photographers and their clients.

## Installation
Clone the project.

```bash
git clone 
```
Use the package manager [npm](https://docs.npmjs.com/) to install photo app.

```bash
npm install foobar
```

## Usage

```

# run project locally
npm run dev

```

## Server side 

Server side still in work. 
Run it locally:
```bash
git clone git@github.com:SvitlanaRybakova/jsfs-hackday-server.git

npm install

npm run start
```

The server employs Firebase as the database and Firestore as the storage mechanism.
To initiate the project in Firebase, adhere to these outlined steps: 
[firebase](https://firebase.google.com/docs)

## API endpoints:


API Endpoints:
1. GET /collections:
Returns all collections sorted by collection name.

2. GET /collections/:id:
Retrieves a specific collection.

3. PUT /collections/:oldCollectionName:
Endpoint requiring the oldCollectionName as a parameter and the new collectionName within the request body to rename the collection title.

4. POST /upload/:
Uploads a photo to a particular collection. This endpoint requires the title (string) from the request body and files as an array.

5. DELETE /collection/:id:
Deletes a photo from the collection, necessitating the id (string) as a query parameter.

