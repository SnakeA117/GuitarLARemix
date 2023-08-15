# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

`#About the project`

GuitarLA is a full-stack web application designed to provide guitar enthusiasts with a seamless shopping experience. This project leverages technologies such as React, Remix Run, NodeJS, and PostgreSQL to create a dynamic and user-friendly guitar store with a built-in shopping cart functionality.

Features
Browse and Search: GuitarLA offers a vast collection of guitars, allowing users to easily browse and search for their favorite models.

Product Details: Each guitar product comes with detailed information, including specifications, images, and pricing.

Shopping Cart: Users can add guitars to their shopping cart, review their selections, and adjust quantities before proceeding to checkout.


Technologies Used
React: The front-end of GuitarLA is built using React, providing a dynamic and responsive user interface.

Remix Run: Remix Run is utilized to manage routing and data fetching, optimizing the application's performance.

NodeJS: The back-end of GuitarLA is powered by NodeJS, handling server-side logic and communication with the database.

PostgreSQL: GuitarLA's data is stored in a PostgreSQL database, ensuring efficient and reliable data management.



