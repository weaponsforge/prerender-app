## prerender-app

> Basic app to test dynamic rendering using [prerender.io](https://prerender.io/)'s self-hosted [prerender service](https://github.com/weaponsforge/prerender).


### Prerequisites

The following items are *optional* but not required.

1. NodeJS
	- node version 10.16.3
	- npm version 6.9.0
2. Windows OS 64-bit
3. (Optional) Custom [prerender.io](https://github.com/weaponsforge/prerender) service running on localhost
	- this is required if you are to run the app on localhost
	- accessible on localhost development:  
`http://localhost:3000`
	- accessible on live production:  
`https://prerenderservice.herokuapp.com` (or your own hosted prerender service url)


## Usage

1. Clone this repository.  
`git clone https://github.com/weaponsforge/prerender-app.git`

2. Install dependencies.  
`npm install`

3. Create a `.env` file from the `.env.example` file. Update the variables as needed:  
	 - **NODE_ENV:** 
		- set to `development` if you are to run  the project on localhost AND are using a [localhost prerender service](https://github.com/weaponsforge/prerender) (see **#4**).
		- set to `production` if you'd like to use a live prerender service.  `PRERENDER_SERVICE_URL` must be set in the **.env** variable if you are to use this option
	 - **PRERENDER\_SERVICE\_URL:** url of the live prerender service that you'd like to use.
		 - defaults to [ttps://prerenderservice.herokuapp.com](ttps://prerenderservice.herokuapp.com)
		 - you can use your own hosted prerender service by following the set-up instructions on this app's accompanying [**prerender service**](https://github.com/weaponsforge/prerender).

4. (Optional) Use a prerender service from localhost.
	- Be sure to **clone** and **install** the accompanying [**prerender**](https://github.com/weaponsforge/prerender) service on localhost and follow the environment variables instructions setup for using it from **#3**.

5. Load the prerender-app project:  
`http://localhost:3001`


## Referencess

[[1]](https://github.com/weaponsforge/prerender) - custom prerender service  
[[2]](https://trello.com/c/jMABRK56) - trello notes


@weaponsforge  
20200405