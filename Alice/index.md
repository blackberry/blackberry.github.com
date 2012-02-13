﻿---
title: AliceJS
layout: default
---

# AliceJS

AliceJS - (A Lightweight Independent CSS Engine) is a micro JavaScript library focused on using hardware-accelerated capabilities (in particular CSS3 features) in modern browsers for generating high-quality, high-end visual effects.

**License:**

AliceJS is distributed under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html) and is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.



**Author(s):**

* [Laurent Hasson](https://github.com/ldhasson) ([@ldhasson](http://twitter.com/ldhasson), lhasson at rim dot com)
* [Jim Ing](https://github.com/psiborg) ([@jim_ing](http://twitter.com/jim_ing), jing at rim dot com)


**Roadmap:**

* [Roadmap for AliceJS](https://github.com/blackberry/Alice/issues/milestones)

**Feature Requests:**

* [Feature Requests for AliceJS](https://github.com/blackberry/Alice/issues?sort=created&labels=Request&direction=desc&state=open)

**Forums:**

* [User Forums](http://supportforums.blackberry.com/t5/Web-Development/bd-p/browser_dev)

**Demos:**

<button onclick="location.href='http://blackberry.github.com/Alice/demos/index.html'">View Demos</button>

The [demos](http://blackberry.github.com/Alice/demos/index.html) are separated into two sections: (1) basic demos where you can interactively adjust settings, and (2) more demos that show how AliceJS can be used in more complex use cases. These effects should be usable in an application, but the library is still in early alpha stages.


## Source Repositories

<table class="outlined">
  <tr>
    <th>Repository</th>
    <th>Description</th>
    <th>Contributors</th>
  </tr>
  <tr>
    <td style="white-space:nowrap;"><a href="https://github.com/blackberry/Alice" target="_blank">AliceJS</a></td>
    <td>Contains the source code for the AliceJS project</td>
    <td style="text-align:center"><a href="https://github.com/blackberry/Alice/contributors">See List</a></td>
  </tr>
</table>


**Introduction:**

While working on a simple game written in HTML5, I wanted to use a "flip3D" effect. That effect had become popular since CSS3 was introduced and performed well due to hardware-acceleration in most mobile browsers. I thought there would be a simple library to do the job, but all I found was samples of varying quality with tons of CSS and HTML markup that were not very cross-platform. Even more important, as I researched more options, I was surprised to see that in the many years since CSS3 appeared, we hadn't gone beyond Flip, Fade, Slide and Zoom. When compared to other major development environments where rich visual libraries are the norm, I lamented the apparent lack of progress in the HTML world.

So I decided to explore the ability to package such animations in a very lightweight library that would set up all the CSS and manage my base HTML for me, and keep my page clean of "effects logic". AliceJS was born. I had no idea where this could lead and I literally felt like the real Alice following the white rabbit down a scary hole. Very quickly, it became clear that lots of cool things could be done that would not just be fancy animations, but which could actually make a general UI better, and help with games too. This is an area that Research In Motion (RIM) is particularly interested in, pushing boundaries in graphically rich web applications to create more compelling experiences.

We are experimenting with many UI components, with tying in sensors, adding physics, and even organics. This is perhaps one of the more exciting feature of AliceJS. The human eye is very good at spotting differences in movement. Something so subtle as a millisecond difference can be perceived. Achieving natural/organic randomness is at the heart of most high-end visual effects in Hollywood blockbuster films. The beauty is that we don't need to reach that level of sophistication to give an effect some variability so that during the lifetime of the application, things don't feel repetitive. Varying just slightly the speed, perspective, and over-rotation on a flip effect adds a degree of subtle "freshness" every time it comes up.


**Implementation:**

    <div id="DIV1">HERE IS ONE DIV</div>
    <img id="IMG1" src="/myimg.gif">
    <script src="/alice/alice.core.js"></script>
    <script src="/alice/alice.plugins.cheshire.js"></script>
    <script>
    alice.wobble(["DIV1", "IMG1"], 5, "center",
        "200ms", "linear", "0ms", "infinite", "alternate", "running");
    </script>

In here, we apply the Wobble effect to a DIV and an IMG. AliceJS doesn't touch the contents of the DIVs and respects whatever styling you set — it's up to you to do whatever fits your application goals. The parameters are:

- The target element(s) or node.
- The rotation angle in degrees (here 5).
- The anchor point, which can be "top-left", "top-center", "top-right", "center", etc... as well as explicit coordinates in % of the DIV's entire size, like {x: 200, y: 200}.
- The duration of the effect (here 200ms).
- The easing function as per standard CSS specs (here linear).
- The delay before the animation starts (usually 0ms).
- The number of iterations (here infinite).
- The direction specifies if the animation should be played in reverse (here alternate).
- The playstate is either running or paused (usually running).

**Architecture:**

AliceJS is completely self-contained and doesn't rely on any other libraries. It also focuses exclusively on setting up animations through CSS manipulations. This makes it easy to include along with other libraries without fear of collision as AliceJS doesn't try to do event handling (touch or mouse), nor does it enforce particular logic or layout elements. It's easy for instance to use AliceJS to animate a Dojo Dialog component for example, or a jQuery UI component, just by addressing the underlying DIV.

AliceJS is composed exclusively of JS files in a single folder, without image, CSS or any other dependencies. There is an "alice.core.js" file that contains common code and utilities, and then each effect has its own additional JS file, for example, "alice.plugins.cheshire.js". The goal is to keep each animation separate which makes it easy for a developer to create a minified build with only what is needed and nothing else. AliceJS is lean and right now, the gzipped minified version containing the entire library is about 5K only!

The syntax for AliceJS is also kept minimal and in line with CSS, which we believe to be really simple and easy to grasp. For example:

    alice.wobble("MyDiv", 5, "center", "200ms", "linear", "0ms", "infinite", "alternate", "running");

This can be thought of as:

    #MyDiv {
        animate-wobble: 5 center 200ms linear 0ms infinite alternate running;
    }

Or more detailed:

    #MyDiv {
        animate-wobble-rotation: 5;
        animate-wobble-anchor: center;
        animate-wobble-duration: 200ms;
        animate-wobble-duration-timing-function: linear;
        animate-wobble-iteration: infinite;
        animate-wobble-direction: alternate;
        animate-wobble-playstate: running;
    }

The preceding CSS code is just mock code to illustrate how to think about AliceJS. All effects are modeled around the same approach where a single line of JavaScript is sufficient to set up an effect. Ultimately, we would like CSS to adopt higher-level animation constructs to make it real easy to add more evolved visual special effects to web applications.

Finally, although we focus primarily on hardware-accelerated CSS at this point, we don't want to rule out using other technologies in the future such as Canvas and WebGL. Although the library focuses really on visual effects, we are exploring ways to tie in sensor input to make things more interesting, without interfering with application logic, or bringing in too much baggage.

**Compatibility:**

The library is intended to work at least on Chrome (V13 or higher because of hardware-acceleration requirements), iOS, and BlackBerry platforms. As the library evolves and more people participate, it's our goal to support all major platforms the best way we can.
