<a href="https://github.com/natasha-developer/bees-front-end">
  <img alt="BEES" src="https://i.ibb.co/s5VK62v/1610048597408.jpg" width="1100" />
</a>
<h1 align="center">
  BEES Front-End Challenge
</h1>

## 🐝 Quick start

1. Clone this repo into your machine

   ```shell
   git clone https://github.com/natasha-developer/bees-front-end.git
   ```

2. Install dependencies with yarn or npm

   ```shell
   cd bees-front-end
   yarn
   ```

   ```shell
   cd bees-front-end
   npm install
   ```

3. Start local server

   ```shell
   yarn start
   ```

   ```shell
   npm start
   ```

The project is now running at http://localhost:8000!

## 🔧 Tools and Technologies

- [Gatsby](https://www.gatsbyjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [SASS](https://sass-lang.com/)

## 📁 Folder Structure

All code is inside the src folder. It is also divided into subfolders, as described below:

- `src/api`: this folder contains requests to external libraries (aka clients).
  It has the advantage of being able to receive NodeJS code, since it runs server side. It also prevents CORS errors on APIs that don't allow client side requests.

- `src/components`: this holds all react components, divided in:

  - `.../icons`: components used to render svg icons

  - `.../sections`: usually these are more complex components that occupy a whole slice on the webpage

  - `.../utils`: logic files used to treat data

- `src/hooks`: contains React custom hooks

- `src/images`: holds static image files.

- `src/pages`: is responsible for website routing and HTML files creation during build.

- `src/styles`: contains global SASS styling files.

## ⚙ How does it work?

The index page's main component is **InputText**, which is a form containing a text name input that only accepts alphabetic characters, a checkbox input to verify min age and a link button that triggers an API request and redirects to the breweries list page - this button is only enabled if the other two inputs are filled, to achieve this result there is a validation using states that return boolean values to ensure the fields are not empty.

![Desktop index page](https://user-images.githubusercontent.com/69371184/197632368-1643ea98-720c-45a2-9a5e-32690e0fe526.png)

The breweries page has two main components:

- **Header**: containing a 'go back' button and the user's name - that was inserted on the previous page and passed to the current one using a state prop.
  If the user navigates directly to the breweries page, without providing name information on the first screen, the name field will be blank on the header component.

- **BreweryCard**: An info card for each brewery returned by the API's request, that has a 'delete' button and information such as name, address and some tags containing type of brewery, postal code and phone number. If the API returns null data to any field, the information / empty tag will not be rendered.
  These tags are not editable, but there is the option to add more tags to a card by clicking on the 'add more' tag. This action will display a text input for the user to name the new item, and pressing Enter will add the customized tag to the card.
  It is possible to generate as many new tags as you wish.

![Desktop breweries page](https://user-images.githubusercontent.com/69371184/197632544-2472ba47-9924-4f7f-8c24-b852f6e19983.png)

### 📱 Responsivity

Both pages have a responsive layout for mobile and desktop devices, using media queries to offer the best user experience regardless of screen dimension.

<div align="center">
  <img alt="Mobile index page" src="https://user-images.githubusercontent.com/69371184/197633916-e87044c2-c98b-4664-b54b-9385f3ea4cba.png" />
  <img alt="Mobile breweries page" src="https://user-images.githubusercontent.com/69371184/197634032-1c345323-6e20-45a7-bdaa-538ce9cf6cb1.png" />
</div>
