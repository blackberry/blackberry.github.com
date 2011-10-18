---
title: BlackBerry Open Source
layout: default
---

# Announcing the Native Open Source Components Initiative

(Oct 18th, 2011) Today [Research in Motion](http://rim.com) announced its Native Open Source Components Initiative at DevCon 2011 America.
As part of this initiative, RIM is contributing initial ports
of commonly used Open Source Libraries and Games to the QNX-based BlackBerry&copy; Tablet OS,
to be used in conjuction with the
[BlackBerry Native SDK for Tablet OS](http://blackberry.developer.com/native) (NDK).
Following this release, RIM will collaborate with the existing open source communities to
incorporate these changes into the upstream repositories.

RIM is also releasing under an Open Source license some new convenience libraries and frameworks and some samples that show how
to use all this components to create applications for the BlackBerry&copy; PlayBook.

These components extend an already very comprehensive list of [libraries available with Tablet OS](http://developer.blackberry.com/native/documentation/com.qnx.doc.native_sdk.devguide/com.qnx.doc.native_sdk.devguide/topic/libraries.html).

The initial list of new components added through the initiative include:

**Media Components**

The following compoments are related to multi-media processing:

* [OpenAL](ndk/components.html#OpenAL) (Open Audio Library) - an efficient multichannel 3D positional audio library.
* [ALUT](ndk/components.html#ALUT) (OpenAL Utility Toolkit) - popular companion library to OpenAL.
* [SDL](ndk/components.html#SDL) (Simple DirectMedia Layer) - a simple interface to graphics, sound and input devices.

**Gaming Components**

The following components are Physics Engines, Game Engines or Games:

* [Box2D](ndk/components.html#Box2D) - a 2D rigid body simulation physics library for games.
* [Bullet](ndk/components.html#Bullet) - a professional free 3D game multi-physics library.
* [Cocos2D-X](ndk/components.html#Cocos2D-X) - an open-source, C++ based, mobile 2D game engine.
* [GamePlay](ndk/components.html#GamePlay) - a new open-source, cross-platform 3D native gaming framework.
* [OpenTTD](ndk/components.html#OpenTTD) - a simulation game originally based on Transport Tycoon Deluxe.
* [DosBox](ndk/components.html#DosBox) - a MS-DOS emulator used to play older games and applications meant to run on DOS.
* [Wesnoth](ndk/components.html#Wesnoth) - the Battle for Wesnoth is a turn-based, tactical strategy game. 

**General Libraries**

The following components are general purpose libraries, languages, or frameworks:

* [Qt](ndk/components.html#Qt) - a popular cross-platform application framework.
* [Boost](ndk/components.html#Boost) - a popular set of C++ libraries.
* [Lua](ndk/components.html#Lua) - a powerful, fast, lightweight, embeddable scripting language.
* [PCRE](ndk/components.html#PCRE) - regular expression pattern matching using the same syntax and semantics as Perl 5.
* [Erlang-OTP](ndk/components.html#Erlang-OTP) - Erlang libraries and design principles.
* [SpiderMonkey](ndk/components.html#SpiderMonkey) - Mozilla's JavaScript engine.
* [TouchControlOverlay](ndk/components.html#TouchControlOverlay) - a translation layer from touch inputs to mouse and keyboard events.

**Samples**

The [NDK](http://blackberry.developer.com/native) bundles a small number (4) of samples, but many more are available here, including some showing integration
with the [ScoreLoop SDK](http://developer.blackberry.com/native/documentation/scoreloop.html).

* [NDK-Samples](ndk/samples.html) - a collection of samples (21, and growing!) to use with the NDK.


We hope you will find these components useful and we encourate your participation to improve them.
You can also help us determine which other components to port;
some already announced but not yet delivered are described [here](commingSoon.html).


... Now you can navigate back to our [normal Index page](oldIndex.html).
