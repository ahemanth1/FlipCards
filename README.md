Project Overview:
The Flip Cards project is a responsive web component where cards flip to reveal hidden content on the back side when a user hovers or clicks. It showcases both visual interactivity and front-end design principles.

How It Works – Step by Step:
HTML Structure:

Each card is created using a div with two child elements:

One for the front of the card (card-front)

One for the back of the card (card-back)

Both are wrapped in a container div with the class card.

CSS Styling & Animation:

The flipping effect is achieved using CSS 3D Transforms:

transform: rotateY(180deg); flips the card on the Y-axis.

transition: transform 0.6s; adds smooth animation.

The .card-inner container is rotated when the card is hovered or clicked.

Both the front and back are absolutely positioned and backface-hidden so only one side is visible at a time

Key Concepts Demonstrated:
CSS 3D transforms and transitions for animation

DOM manipulation if JavaScript is used

Responsive design using flexbox or grid

Clean component-based structure
