[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Hl2JaK93)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19272396)

# Overview and purpose

This project was developed as part of the IDG1293-2025 Oblig 3 assignment at NTNU.
The goal was to create an animated, scrollytelling web experience demonstrating mastery of advanced CSS techniques, JavaScript interactivity, and accessible design.
Our project focuses on Sustainable Development Goal 12: Responsible Consumption and Production, highlighting the impact of plastic waste. Our story centers around a simple but powerful message: how long it takes for a single PET bottle to decompose — a journey lasting hundreds of years.

## Brainstorming
During our initial brainstorming, we focused on creating a story that would be simple enough to implement within our limited time frame, while still being clear and engaging.
 We agreed on designing a concept that relies on minimal imagery to reduce load times and development effort, but still effectively communicates the message.
We also discussed the potential to expand and enhance the project if more time became available, allowing for a more complex narrative and additional features.

## Key points we discussed:
    Scroll direction: Which direction feels the most natural.
    Animation and transitions: What the elements will do to enhance the experience. 
    Accessibility and responsiveness: Ensure good color contrast, readable typography and responsive to pc and phone. <- we struggled a lot to make the design responsive, so we had to focus on at least make the pc version presentable 

## Storyboard Documentation:
One idea we had was to show a seed planted in the ground and showcase how long it takes for a tree to grow. This idea was to showcase how long it takes for a forest to grow back compared to how short it takes to deforest. 
We ended up with the time-traveling bottle, as we liked this idea better and sketched out the section we wanted to implement so we had a clear idea on what to do.

## Instructions for getting started: 
Click or copy the link for Github Pages to see the website.

The scrolly telling function is very simple. The user only needs to scroll down to each section and the animated parts will activate on their own. At the very bottom, there is a button that links to the Sustainable Development Goal 12 that the user can click on if they want to read more.

Link to Github Pages: https://idg1293-2025.github.io/oblig3-6/ 

## Technology stack: 
    Languages & Tools: HTML5, Sass (CSS3), JavaScript
    CSS Architecture: BEM (Block Element Modifier)


## Libraries Used:
    GSAP and IntersectionObserver
    Version control: Git & GitHub

## Animations implemented:
    Using IntersectionObserver so text boxes appear when the user reaches a certain point when scrolling. 
    A command for the keyframe animation to start.
    Keyframes to make a bottle.svg move up and down, looking like it's floating. 
    GSAP Scrolltrigger smooth transition animation and to time/trigger when to start doing the animation.

## GSAP animation
    Sliding animation on gamecube, car and ship
    Opacity change to make items appear and disappear 
    Scale to change sizes of items
    Rotation to make items spin
