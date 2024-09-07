# Vue Blog Project

This project is a Vue 3 application that renders a list of fake posts. It also show fake user data with their location on a map. The project uses Mapbox for interactive maps and Vite as the build tool.

## Project Structure

The project includes the following views:

- `HomeView`: Landing page of the blog, with a list of blogs paginated.
- `SinglePostView`: Displays a single blog posts.
- `UsersView`: Contains a form to input user id and redirect to its profile.
- `UserProfileView`: Shows user profile with their location on a map.

## Installation

- To get started with the project, follow these steps:

1. Clone the Repository

```bash
git clone <repository-url>
```

2. Navigate to the Project Directory

```bash
cd <project-directory>
```

3. Install Dependencies

```bash
npm install
```

4. Run the Development Server

```bash
npm run dev
```

This will start the development server and open the application in your default web browser.

## Routes

- `/`: Access the home page to see the latest posts and a banner with starred articles.
- `/post/2`: Navigate to a specific post to view details and the comments related to the post.
- `/users`: Fill out the form to input a user ID from 1 to 10, without decimals.
- `/user/6`: View user profile and his location on a map.

## Development

### Project Setup

The project uses Vue 3 with Vite. Mapbox is integrated for map functionalities. The setup includes:

- Vue 3 for the framework.
- Vite for fast build and development.
- Mapbox for interactive maps.
- General data is fetched from this API REST: https://jsonplaceholder.typicode.com/.
- General images are fetched from https://picsum.photos.
- User images are fetched from https://randomuser.me/api.
- The code uses Typescript. All interfaces are declared on a separete file to provide consistency.
- The styles are code with Sass. There are global variables used around the app.
- Full responsive.

### Components

- `NavBar`: Navigation bar that returns to `home` or redirects to `/users` form.
- `HeroBanner`: Displays a banner with 4 articles only on the home page.
- `UserProfile`: Shows user profile details.
- `PostCard`: Card links shown on the landing page.
- `RandomImage`: Fetch a random image of something or a random user image, depending on props.
- `LoaderSpinner`: Loader component that is shown when data is loading.
- `MapBox`: A component that integrates Mapbox for interactive maps.
