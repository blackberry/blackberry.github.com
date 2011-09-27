---
title: Ripple
layout: default
---

# Ripple

<table>
<tr>
	<td><img src="../images/logo_hippo.png"/></td>
	<td valign="top" style="padding-top:15px">
		Ripple is a platform agnostic mobile application development and emulation tool.  It allows a web developer to work in a browser-like testing environment, preserving the typical edit and refresh cycle, while exposing advanced debugging tools such as web inspector on their application content. Combined with the BlackBerry&reg; WebWorks&trade; SDK, the tool also allows application build and deploy for last mile packaging and testing.
	<br/><br/>
	This project is open sourced under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 license</a>.
	</td>
</tr>
</table>

**Roadmap:**

* [Roadmap for Ripple](https://github.com/blackberry/Ripple-UI/issues/milestones)

**Feature Requests:**

* [Feature Requests for Ripple](https://github.com/blackberry/Ripple-UI/issues?sort=created&labels=Request&direction=desc&state=open)

**Forums:**

* [User Forums](http://supportforums.blackberry.com/t5/Web-Development/bd-p/browser_dev)
* [OSS Project Discussion Forums](http://supportforums.blackberry.com/t5/Ripple-Contributions/bd-p/ripple)

**Downloads:**

To get an idea of what Ripple provides, you can take a look at the current [Google Chrome extension version of ripple](http://ripple.tinyhippos.com).  Keep an eye on the roadmap section of GitHub (linked above) to see where we are heading.



## Source Repositories

<table class="outlined">
  <tr>
    <th>Repository</th>
    <th>Description</th>
    <th>Contributors</th>
  </tr>
  <tr>
    <td style="white-space:nowrap;"><a href="https://github.com/blackberry/Ripple-UI" target="_blank">Ripple UI</a></td>
    <td>Contains the source code for the UI layer and API emulation logic of Ripple.</td>
    <td style="text-align:center"><a href="https://github.com/blackberry/Ripple-UI/contributors">See List</a></td>
  </tr>
  <tr>
    <td style="white-space:nowrap;"><a href="https://github.com/blackberry/Ripple-Framework" target="_blank">Ripple Framework</a></td>
    <td>Contains the source code for the browser-like framework component that hosts the Ripple UI tooling and provides services required for emulation, as well as platform-specific rendering capabilities</td>
    <td style="text-align:center"><a href="https://github.com/blackberry/Ripple-Framework/contributors">See List</a></td>
  </tr>

</table>


## Project Details

Ripple is a new approach to mobile web application testing and eumlation.  Building on the typical web developer paradigm of editor of choice combined with rapid refreshes, Ripple allows the developer to quickly see how their application will look on multiple mobile platforms.  Further, it allows for emulation of APIs used in the application, such as advanced HMTL5, BlackBerry WebWorks, and PhoneGap.

**Platform Support**

Ripple allows you to target multiple mobile web application frameworks and test your application.  You can choose from many device profiles for each platform, to get a true layout picture.
* BlackBerry WebWorks
* PhoneGap
* Mobile Web

**Emulation and Debugging**

* Ripple allows you to inject values for application framework events into your emulated application, as well as set values to return for API calls, such as Geolocation and contacts information.
* The emulated set of APIs reflects those avaiable on your current chosen platform, so you will always know how your application will perform against a given platform.
* Ripple includes access to Web Inspector and all of its associated debugging functionality.

**Build/Deploy** (Coming Soon)

* Ripple includes functionality that will allow you to go the last mile with your application.
* Deploy your application to a BlackBerry simulator for your final proofing and debugging.
* Package and sign your application to make distribution and deployment to BlackBerry AppWorld quick and easy.
