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
`https://prerenderservice.herokuapp.com`


## Usage

1. Clone this repository.  
`git clone https://github.com/weaponsforge/prerender-app.git`

2. Install dependencies.  
`npm install`

3. Create a `.env` file from the `.env.example` file. Update the variables as needed:  
	 - **NODE_ENV:** 
	 	- set to `development` if you are to run  the project on localhost AND use a localhost prerender service (see **#4**).
	 	- set to `production` if you'd like to use a live prerender service.
	 - **PRERENDER\_SERVICE\_URL:** url of the live prerender service that you'd like to use.

4. (Optional) Use a prerender service from localhost.
	- Be sure to **clone** and **install** the accompanying [**prerender**](https://github.com/weaponsforge/prerender) service and follow the environment variables instructions setup for using it from **#3**.

5. Load the prerender-app project:  
`http://localhost:3001`

@weaponsforge  
20200405