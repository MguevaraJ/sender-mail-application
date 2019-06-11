<h1 align="center">📮 Sender</h1>
<h4 align="center">Simple and practice application to send email and store contacts and history of the mails.</h4> 

![1-rounded](https://user-images.githubusercontent.com/46603674/59240376-3760e200-8bd2-11e9-958f-8420056899b0.png)

## Getting Started

#### 1. Clone the repository.

We are located in the directory where we want to locate the project and clone the repository in this way:

```
$ git clone https://github.com/MguevaraJ/lister-fetch.git
```

------------

#### 2. Configure environment variables:

You can do it by creating the file `.env` in the root of the project:

```
MAIL_SERVICE = "[example: Gmail]"
MAIL_USR = "[from-email-address]"
MAIL_PASS = "[from-email-password]"
DB_HOST = "[your-database-address]"
DB_USR = "[your-database-username]"
DB_PASS = "[your-database-password]"
DB_NAME = "[database-name]"
```
More details in [HERE](https://github.com/motdotla/dotenv).

------------

#### 3. Shoose in whitch enviroment to execute the application.

You can run the application in two states:

- Development
```
$ npm run dev
```
- Production

```
$ npm run start
```

## Pre-requirements

- [Node.js LTS](https://nodejs.org/en/)

## Tools

The used to carry out this project are:

- [Express.js](https://expressjs.com/) - Web application framework
- [Ejs](https://ejs.co/) - HTML Preprocessor
- [Nodemailer](https://nodemailer.com/about/) - Email Sending Module
- [Mysql](https://github.com/mysqljs/mysql) - Database management language
- [Npm](https://www.npmjs.com/) - Package Manager

## Authors

- **Moises Alejandro Guevara Jauregui** - [MguevaraJ](https://github.com/MguevaraJ)

## License

This project is under license **GPL-3.0** - See the file [LICENSE](https://github.com/MguevaraJ/sender-mail-application/blob/master/LICENSE) for more details.

