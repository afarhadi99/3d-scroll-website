<a href="">
  <img alt="3d scroll" src="https://github.com/afarhadi99/3d-scroll-website/blob/main/public/screenshot.jpg">
</a>

# 3D Scroll Website

This project is a Next.js-based website featuring a 3D scroll animation with a cloud station model. As users scroll through the page, they experience an immersive 3D environment with text blocks appearing on alternating sides.

## Features

- 3D scene with a cloud station model
- Smooth scroll-based animation
- Responsive design
- Text blocks that appear on alternating sides as you scroll

## Technologies Used

- Next.js
- React
- Three.js
- TypeScript

## Prerequisites

- Node version 18 or higher [https://nodejs.org/en]
- Visual Studio Code [https://code.visualstudio.com/download]
- Vercel if you want to deploy the project online [https://vercel.com/]

## Installation

1. Clone the repository:
    git clone https://github.com/your-username/3d-scroll-website.git
2. Navigate to the project directory:
    cd 3d-scroll-website
3. Install the dependencies:
    npm install

## Running the Application

To run the development server:

  npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Components

- `Scene.tsx`: Manages the 3D scene using Three.js
- `TextBlock.tsx`: Renders text blocks that appear as you scroll
- `Header.tsx`: Displays the fixed header at the top of the page
- `scrollAnimation.ts`: Handles the scroll-based animation logic

## Customization

- To change the 3D model, replace the `cloud_station.glb` file in the `public` folder and update the file path in `Scene.tsx`.
- Modify the text content by updating the `TextBlock` components in `pages/index.tsx`.
- Adjust the animation behavior by editing the `scrollAnimation.ts` file.

