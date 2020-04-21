# Tiro: Assistant for The Self Taught Job Seeker

## Motivation
One of the glories of software development is that there are no
requisite _residencies_ or _bar exams_. With practice, patience and
effort anyone can become a developer. Yet therein lies the greatest
deterrent to self-taught developers, the lack of gate-keepers leads to
unstructured learning and the dreaded __tutorial purgatory__--moving
from tutorial to blog post, with no end in sight.

This is where __Tiro__ comes in. This application is a dashboard that
aims to help self-taught developers avoid the motivation draining
affects of mimicking everyone else's code in what seems like an infinite
loop. It accomplishes this goal with a simple understanding:

> All most everybody learning to code on their own is eventually looking
> to become __gainfully employed as a developer__.

Thus what Tiro provides are a collection of dashboards and tools that
help the user organize their learning path with a continued and present
focus on gaining __marketable skills with relevant technologies__. By
relevant I mean to the user. There's no point in prioritizing learning
React if all the companies in your area are looking for C# & jQuery
developers.

## Tech Stack

### Front End (UI/Client side)
- __React__: For its beautiful component model and declarative nature.
- __Ant Design__: Enterprise grade Component Library
- __Apollo Client__: For application state management
- ~~__React Spring__ : Physics based declarative animation library~~

### Data Persistence (Database)
- __MongoDB__: Because, why write SQL when you can keep writing
  JavaScript :sunglasses:
- __Mongoose__: For abstracting the details of connecting with
  application code

### Backend (Application Server)
- __Node__: "I heard you like JavaScript dog... So I put JavaScript in your
  Front end & Back end so you can write JavaScript in your JavaScript"
- __Koa__: Because I like doing things I have no idea how to do.

### Build
- __Webpack__: Because they told me it was zero config, and after 3
  hours of configuring there's no going back. And it's an industry
  standard.
- And all of this without a single unit test...Just kidding, well
  actually Jesting (in case you missed it __Jest__ is the testing
  framework)