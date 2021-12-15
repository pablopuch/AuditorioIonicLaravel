## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)
### General Info
***

Musicians can check their projects, events and information inside [OFGC](https://ofgrancanaria.com/es) in an organised way. 

### Screenshot
![Client](https://ofgrancanaria.com/wp-content/uploads/2020/03/Group.png)
## Technologies
***
A list of technologies used within the project:
* [Laravel](https://laravel.com/): Version 8.68.1
* [Angular](https://angular.io/): Version 12.1.4 with [Ionic](https://ionicframework.com/): 
Version 6.18.1, version Ionic Framework: @ionic/angular 5.9.1

## Before instalation
***
Before you start you need:
* Git - https://git-scm.com/downloads.
* MySQL - https://www.mysql.com/downloads/.
* Node.js - https://nodejs.org/es/download/.

## Installation
Clone the repository:

```
git clone https://github.com/IsaiahMartel/AuditorioIonicLaravel
```
####Backend
Switch to the backend

```
cd AuditorioIonicLaravel/backend/
```
Install all the dependencies using composer
```
composer install
```
Copy the example env file and make the required configuration changes in the .env file 
```
cp .env.example .env
```
Generate a new application key
```
php artisan key:generate
```

Run the database migrations (Set the database connection in .env before migrating)

```
php artisan migrate
```

Start the local development server
```
php artisan serve
```

You can now access the server at http://localhost:8000

TL;DR command list

```
git clone https://github.com/pablopuch/OFGC.git
cd OFGC/backend/
composer install
cp .env.example .env
php artisan key:generate
```

####Frontend

Switch to frontend
```
cd OFGC/fronted/
```

Install all the dependencies using npm
```
npm install
```

Start the local development server

```
ionic serve -l
```
(http://localhost:8200/ is often bugged, switch to http://localhost:8100/ open developer tools and use select a mobile resolution in "Toggle device toolbar")

Now the app is running!!


### Aspect



## (3.) Prototype 🔧
***
Basic protoype:

*![Home](https://user-images.githubusercontent.com/91074551/141490949-079630b9-44c8-4268-a3f8-eb722faf5314.png)

![Menu](https://user-images.githubusercontent.com/91074551/141491060-9f9055dd-396e-4da8-8277-c5907a366351.png)

![Login](https://user-images.githubusercontent.com/91074551/141491070-ab433462-8a9f-404c-bee4-20bdc51d3541.png)

![Calendar today](https://user-images.githubusercontent.com/91074551/141491089-71fef5b2-3a68-4c09-9357-ced1a3fba3b0.png)

![Calendar](https://user-images.githubusercontent.com/91074551/141491095-63841cbf-fe83-4ac8-9098-b110788bd808.png)

![Event's modal](https://user-images.githubusercontent.com/91074551/141491113-f68a6cf6-356b-4dd9-94c6-5ebf704b4e20.png)

![Configuration](https://user-images.githubusercontent.com/91074551/141491154-2d2b1dc6-e3cf-4a86-9864-2629efcbadc0.png)



Other features that could be implemented in the future:

![Records](https://user-images.githubusercontent.com/91074551/141491416-9e641c5f-be9e-4be8-87a3-1384ea239be7.png)

![Mates](https://user-images.githubusercontent.com/91074551/141491418-5a55d220-7289-46bc-9af3-8253a9e7711c.png)
***

### Colaboration

