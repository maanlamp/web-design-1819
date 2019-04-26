# Web design

## Summary
I made an "accesible" date picker. The erason I quoted accessible is because it was exclusively made for Marijn Meijles. He experiences difficulty in mobility due to a disability. The idea was to make a date picker specially tailor for him, and only him.

## Glossary
- [Web design](#web-design)
  - [Summary](#summary)
  - [Glossary](#glossary)
  - [User scenario](#user-scenario)
  - [Iterations](#iterations)
    - [Iteration one](#iteration-one)
    - [Iteration two](#iteration-two)
      - [Insights](#insights)
    - [Iteration three](#iteration-three)
      - [Insights](#insights-1)
    - [Exclusive design](#exclusive-design)
      - [Study Situation](#study-situation)
      - [Ignore Conventions](#ignore-conventions)
      - [Prioritise Identity](#prioritise-identity)
      - [Add Nonsense](#add-nonsense)

## User scenario
The only user of this product has great difficulty controlling his movements, therefore picking a date through a standard datepicker might prove difficult. The datepicker I design must be usable by pressing as little keys as possible, and be fast in its use.

## Iterations
### Iteration one
The first iteration of the product was made before actually meeting Marijn. We did not get the opportunity to test our products the first week, so we had to create all our functionality from our own assumptions. I made a date parser that accepted relative numbers, i.e. `+1/+1/+1` would signify tomorrow of next month of next year.

### Iteration two
I tested my parser and it broke immediately. Turns out it was not forgiving at all. On the other hand, it did actually work if Marijn stopped trying to break it :P. He could actually type in a range of dates with as little as 5 key presses -- that's a lot less than a minimum of about 12! I had also added buttons at that point, but they weren't big enough to be actually usable.

#### Insights
- Marijn was my intellectual match, he knew exactly how my parser worked without even looking at it, so he could also break it with ease.
- Even a larger button compared to normal sizes is too small for Marijn.
- The feedback of what actual date was selectred was only available in the console because I was still heavily developing it.

### Iteration three
I took the feedback of the previous iteration to heart. I enlarged the buttons, and actually made them grow in size by 100% when focused/hovered over, so that it was less difficult to stay on a button when moused over. I also tried to loosen the strictness of my parser, but that proved a bit difficult. I also made the parsed date show up above the input to have direct feedback. I also added accesskeys to make it even more easy.

#### Insights
- Marijn could now use the buttons, but still insisted on just typing in the date. Maybe the buttons are more useful, but it's more fun to type.
- The parser was still too strict.

Sadly, there was not enough time to rewrite my parser to be less strict in time for the deadline :(.

### Exclusive design
#### Study Situation
With every feedback-session, I looked at how Marijn used his pc to get a better understanding of what were useful features for him. Through this observation I learnt he likes acceskeys, and barely ever uses TAB. These were useful insights.

#### Ignore Conventions
Instead of opening a standard calendar app that you interact with through mase input, I made a text input with a _domain specific language_ with which you can programmatically define dates. That's an unconventional solution if I've ever seen one.

#### Prioritise Identity
Thanks to the fact that I ignored convention, the identity prioritation came naturally. Marijn turned out to really like that way of typing dates I created. He got visibly excited everytime I opend my app next to him -- that was nice. I think this datepicker was really unique in its own right, and also fit really well in the life of Marijn.

#### Add Nonsense
The entire concept was just silly. It really isn't a better way of inputting a date from a utilitarian standpoint, but it sure was fun to make, and to use!