[![Maintainability](https://api.codeclimate.com/v1/badges/39d80b95997222ced987/maintainability)](https://codeclimate.com/github/LeusMaximus/project-lvl1-s304/maintainability)
[![Build Status](https://travis-ci.org/LeusMaximus/project-lvl1-s304.svg?branch=master)](https://travis-ci.org/LeusMaximus/project-lvl1-s304)

# Brain Games

Brain Games this is a set of mini-games that are launched from the console. These games are similar to what is commonly called "Brain Games".

## Installation

`npm i -g @leusmaximus/brain-games`

After the installation, commands starting with the `brain-<game name>`  will be available in your console.

## Usage
This module includes such games:

- [Brain Balance](#brain-balance)
- [Brain Calc](#brain-calc)
- [Brain Even](#brain-even)
- [Brain gcd](#brain-gcd)
- [Brain Prime](#brain-prime)
- [Brain Progression](#brain-progression)

### <a name="brain-balance"></a> Brain Balance

The game "Balance the given number". A balanced number is a number in which the smallest digit differs from the largest one by more than one. The user must calculate and enter the balanced number.

Example:

```bash
$ brain-balance

Welcome to the Brain Game!
Balance the given number.

May I have your name? Max
Hello, Max!

Question: 215
Your answer: 233
Correct!
Question: 4181
Your answer: 3344
Correct!
Question: 355
Your answer: 445
Correct!
Congratulations, Max!
```

[Demo](https://asciinema.org/a/F8qod2AKqZ0hG3n08arTyXUrZ?t=0:12)

### <a name="brain-calc"></a> Brain Calc

Game "Calculator". The essence of the game is as follows: the user is shown a random mathematical expression, for example 35 + 16, which you need to calculate and write the correct answer.

Example:

```bash
$ brain-calc

Welcome to the Brain Games!
What is the result of the expression?

May I have your name? Max
Hello, Max!

Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Max!
```

[Demo](https://asciinema.org/a/GsyKMKHCXXqTZiqsiaFFoekmI?t=0:14)

### <a name="brain-even"></a> Brain Even

The game "Check for parity." The essence of the game is as follows: the user is shown a random number. And he needs to answer yes, if the number is even, or no - if odd.

Example:

```bash
$ brain-even

Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".

May I have your name? Max
Hello, Max!

Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Max!
```

[Demo](https://asciinema.org/a/191149?t=0:14)

### <a name="brain-gcd"></a> Brain gcd

The game "the greatest common divisor (GCD)". The essence of the game is as follows: the user is shown two random numbers, for example, 25 50. The user must calculate and enter the greatest common divisor of these numbers.

Example:

```bash
$ brain-gcd

Welcome to the Brain Games!
Find the greatest common divisor of given numbers.

May I have your name? Max
Hello, Max!

Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Max!
```

[Demo](https://asciinema.org/a/FMnw7hP3CpIYg5qb5zspyiCi9?t=0:18)

### <a name="brain-prime"></a> Brain Prime

The game "Is Prime". A prime number is a whole number greater than 1 whose only factors are 1 and itself. The user must to answer yes, if the number is prime, or no - if not.

Example:

```bash
$ brain-prime

Welcome to the Brain Games!
Answer "yes" if number is prime otherwise answer "no".

May I have your name? Max
Hello, Max!

Question: 17
Your answer: yes
Correct!
Question: 21
Your answer: no
Correct!
Question: 113
Your answer: yes
Correct!
Congratulations, Max!
```

[Demo](https://asciinema.org/a/dXSsB0GbHI42GnUUR2i2be2oG?t=0:15)

### <a name="brain-progression"></a> Brain Progression

We show the player a series of numbers, forming an arithmetic progression, replacing any of the numbers with two points. The player must determine this number.

Example:

```bash
$ brain-progression

Welcome to the Brain Games!
What number is missing in this progression?.

May I have your name? Max
Hello, Max!

Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!

...

Congratulations, Max!
```

[Demo](https://asciinema.org/a/gYjSiZDPMZYq8QJK671xOCsbO?t=0:16)
