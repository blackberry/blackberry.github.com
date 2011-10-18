---
title: Open Source Components for the Native SDK for BlackBerry&reg; Tablet OS
layout: default
---

# Open Source Components for the Native SDK for BlackBerry&reg; Tablet OS

**Libraries Includes in Tablet OS**

Tablet OS bundles a comprehensive list of
[Proprietary and OSS libraries](http://developer.blackberry.com/native/documentation/com.qnx.doc.native_sdk.devguide/com.qnx.doc.native_sdk.devguide/topic/libraries.html).
As of the time of writing this page, the list of bundled Open Source libraries is:
[bzip](http://bzip.org/), [c-ares](http://c-ares.haxx.se/), [CURL](http://curl.haxx.se/),
[EGL](http://www.khronos.org/egl/), [expat](http://expat.sourceforge.net/), [FreeType](http://www.freetype.org/),
[Fontconfig](http://www.freedesktop.org/wiki/software/fontconfig), [ICU](http://site.icu-project.org/),
[libiconv](http://www.gnu.org/s/libiconv/), [libxml2](http://xmlsoft.org/),
[Ncurses](http://www.gnu.org/software/ncurses/ncurses.html), [OpenAL](http://connect.creativelabs.com/openal/default.aspx),
[OpenGL ES](http://www.khronos.org/opengles/), [OpenKODE](http://www.khronos.org/openkode/),
[OpenSSL](http://www.openssl.org/), [SQLite](http://www.sqlite.org/), [zlib](http://zlib.net/).


The components listed below make additional Open Source libraries available to the developers:
  
  &nbsp;  

<a name="media"/>
**Media Components**  
The following compoments are related to multi-media processing

<a name="OpenAL"/>
**OpenAL**  
OpenAL (Open Audio Library) is a cross-platform 3D audio API appropriate for use with gaming applications and many other types of audio applications.  
The ported code is available at [github.com/blackberry/OpenAL](http://github.com/blackberry/OpenAL).  
Also see the [OpenAL at CreativeLabs](http://connect.creativelabs.com/openal/default.aspx) and
[OpenAL Soft](http://kcat.strangesoft.net/openal.html).
*Note* - the binary is not in the Tablet OS but is pre-bundled with the NDK.  

<a name="ALUT"/>
**ALUT**  
ALUT (OpenAL Utility Toolkit) is a companion toolkit to OpenAL; its often bundled together and that is the case for us.  
The ported code is available at [github.com/blackberry/ALUT](http://github.com/blackberry/ALUT).  
Also see [ALUT at CreativeLabs](http://connect.creativelabs.com/openal/Documentation/The%20OpenAL%20Utility%20Toolkit.htm)

<a name="SDL"/>
**SDL**  
SDL (Simple DirectMedia Layer) is a cross-platform multimedia library designed to provide low level access to audio, keyboard, mouse, joystick, 3D hardware via OpenGL, and 2D video framebuffer.  
The ported code is available at [github.com/blackberry/SDL](http://github.com/blackberry/SDL).  
Also see [LibSDL.org](http://www.libsdl.org/).

  &nbsp;  

<a name="gaming"/>
**Gaming Components - Physics Engines**  
The following components are Physics Engines:

<a name="Box2D"/>
**Box2D**  
Box2D is a feature rich rigid body open source 2D physics engine for games.  
The ported code is available at [github.com/blackberry/Box2D](http://github.com/blackberry/Box2D).  
Also see [Box2D.org](http://box2d.org/)

<a name="Bullet"/>
***Bullet Physics***
Bullet Physics is a is an open source physics engine featuring 3D collision detection, soft body dynamics, and rigid body dynamics.  
The ported code is available at [github.com/blackberry/Bullet](http://github.com/blackberry/Bullet).  
Also see [BulletPhysics.org](http://bulletphysics.org/wordpress/)

  &nbsp;  

**Gaming Components - Game Engines**  
The following components are Game Engines:

<a name="Cocos2D-X"/>
**Cocos2D-X**  
C++ port of cocos2d game engine. Multi-platform, light weight, developer-friendly, free and open source.  
The ported code is available at [github.com/blackberry/Cocos2D-X](http://github.com/blackberry/Cocos2D-X).  
Also see [Cocos2D-X.org](http://www.cocos2d-x.org/)

<a name="GamePlay"/>
**GamePlay**  
GamePlay is a new open-source, cross-platform 3D native gaming framework making it easy
to learn and write mobile and desktop games.  
The code is available at [github.com/blackberry/GamePlay](http://github.com/blackberry/GamePlay).  

  &nbsp;  

**Gaming Components - Games**  
The following components are Games:

<a name="OpenTTD"/>
**OpenTTD**  
OpenTTD is a simulation game based on Transport Tycoon Deluxe.  
The ported code is available at [github.com/blackberry/OpenTTD](http://github.com/blackberry/OpenTTD).  
Also see [OpenTTD.org](http://www.openttd.org/en/)

<a name="DosBox"/>
**DosBox**  
DosBox is an open source DOS emulator for BeOS, Linux, Mac OS X, OS/2, and Windows. Primarily focuses on running DOS Games.  
The ported code is available at [github.com/blackberry/DosBox](http://github.com/blackberry/DosBox).  
Also see [DosBox.com](http://www.dosbox.com/)

<a name="Wesnoth"/>
**The Battle of Wesnoth**
The Battle for Wesnoth is a Free, turn-based tactical strategy game with a high fantasy theme, featuring both single-player, and online/hotseat multiplayer combat.  
The ported code is available at [github.com/blackberry/Wesnoth](http://github.com/blackberry/Wesnoth).  
Also see [Wesnoth.org](http://wesnoth.org/).

  &nbsp;  

<a name="libraries"/>
**Libraries - General Purpose**  
The following components are general purpose libraries and frameworks:

<a name="Qt"/>
**Qt**  
Qt is a cross-platform application and UI framework with APIs for C++ programming and Qt Quick for rapid UI creation.  
The ported code will (soon) be available at [github.com/blackberry/Qt](http://github.com/blackberry/Qt).  
Also see [Qt.Nokia.Com](http://qt.nokia.com/products/)

<a name="Boost"/>
**Boost**  
Boost is a collection of free peer-reviewed portable C++ source libraries.  
The latest release (1.47) runs correctly on Tablet OS; instructions for compiling it will be posted soon.  
Also see [Boost.org](http://boost.org/).

  &nbsp;  

**Libraries - Utilities**  
The following components are utilities:

<a name="PCRE"/>
**PCRE**  
The PCRE (Perl Compatible Regular Expressions) library is a set of functions that implement regular expression pattern matching using the same syntax and semantics as Perl 5.  
The ported code is available at [github.com/blackberry/PCRE](http://github.com/blackberry/PCRE).  
Also see [PCRE.org](http://pcre.org/).

<a name="TouchControlOverlay"/>
**TouchControlOverlay**  
This library takes touchscreen input and converts it into keyboard and mouse events in a predefined way.  
The ported code is available at [github.com/blackberry/TouchControlOverlay](http://github.com/blackberry/TouchControlOverlay).  

  &nbsp;  

**Libraries - Languages**  
The following components are languages:

<a name="Erlang"/>
<a name="Erlang-OTP"/>
**Erlang-OTP**  
Erlang-OTP is Erlang libraries and design principles.  
The ported code is available at [github.com/blackberry/Erlang-OTP](http://github.com/blackberry/Erlang-OTP).  
Also see [Erlang.org](http://erlang.org/).

<a name="Lua"/>
**Lua**  
Lua is a powerful, fast, lightweight, embeddable scripting language. Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics.  
The ported code is available at [github.com/blackberry/Lua](http://github.com/blackberry/Lua).  
Also see [Lua.org](http://lua.org/).

<a name="SpiderMonkey"/>
**SpiderMonkey**  
Mozilla SpiderMonkey is  Mozilla's JavaScript engine.  
The ported code is available at [github.com/blackberry/SpiderMonkey](http://github.com/blackberry/SpiderMonkey).  
Also see [developer.Mozilla.org](https://developer.mozilla.org/en/SpiderMonkey).




