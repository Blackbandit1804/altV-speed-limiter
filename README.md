# alt:V speed limiter

[![](http://img.youtube.com/vi/SKfiMtbP5iM/0.jpg)](http://www.youtube.com/watch?v=SKfiMtbP5iM "Preview")

## Setup
Go to your `resources` folder and paste the folder you downloaded. I prefer to clone this repository using git.
```
git clone https://github.com/NicholasSchmitz/altV-speed-limiter.git
```

Edit your `server.cfg` file and paste the name of this resource to the resources array. Like this:
```
resources: [
    ...
    ...
    altV-speed-limiter
]
```

## Usage
`L` > De-/activate speed limit

`+` on NumPad > +5 km/h

`-` on NumPad > -5 km/h

You can change the value for `+` and `-` in client.mjs: `let plusMinusStep = 5;`.

### License
MIT License

Copyright (c) 2020 Nicholas Schmitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
