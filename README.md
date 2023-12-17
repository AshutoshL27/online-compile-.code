<<<<<<< HEAD
# online-compile-.code
=======
# .&Code

- .&Code is an desktop adaptive online compiler which can come handy to developers for some quick operation or tests as well as it can be quite helpful during any interview.
- It uses Monaco editor to power it up as an editor to give the best experience to the programmer while writing codes and it uses Judge0 api service to provide the compilation power to support more than 40 programming languages.


## Operate in local system
  - This react app is created using CRA(Create-React-App).
  - To operate this code in local system, clone this repository to your system and install all dependencies.
  - You can use the command 'npm install' to install all dependencies at once.
  - More over you need to create a profile for the Judge0 API to get the Host and Key for authentication.
  - Create an .env file and define your Host, API key and the Api URL.
  - Your .env file should look like this :-
 
    REACT_APP_RAPID_API_HOST = your host
    REACT_APP_RAPID_API_KEY = your api key
    REACT_APP_RAPID_API_URL = your api url

  - Now you can use the command 'npm start' to start your local server and run this webapp locally.

### Features and Functionalities

- It is a simple webapp that has two modes for developers
1. WEB-DEVELOPMENT
2. DEVELOPMENT

- You can choose any of them as per your requirements either from nav-bar or from home page.

![Screenshot 2023-08-03 160829](https://github.com/Bluetooth-stack/online-compiler/assets/80689111/6551f0ff-b227-4f56-8c3a-b4f2d75b466f)

- WEB-DEVELOPMENT mode enable user to write code in HTML, CSS and JavaScript to develop and develop any web designs.
- There are 3 text editors in top section which are collapsible and takes HTMl, CSS and JS a their input respectively.
- Whatever design user built should be displyed asynchronously in buttom section of the page.

![Screenshot 2023-08-03 160911](https://github.com/Bluetooth-stack/online-compiler/assets/80689111/530c2425-7da9-4c44-aac1-6ab068fa455b)

- DEVELOPMENT mode allows the user to choose between 40+ languages and write code on that language over the editor provided.
- Output should be displayed on the output section in the right side of the page where as user can give custom input in the text box proveded and the status of your code with the details like memory and time should also bo visible just bellow the input box.

![Screenshot 2023-08-03 161437](https://github.com/Bluetooth-stack/online-compiler/assets/80689111/6a3865c8-1b28-47f5-8aa5-4949e0273243)
  
![Screenshot 2023-08-03 161532](https://github.com/Bluetooth-stack/online-compiler/assets/80689111/f40157bc-9f36-4fbd-95d9-bf04cd29597f)

** The code you have written and the language choosen won't be erased or changed untill you change them.
>>>>>>> 8e76651 (complete code)
