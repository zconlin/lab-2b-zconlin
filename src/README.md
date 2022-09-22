<style>
h1 {
color: lightblue;
text-align: center;
}
</style>

# Lab 1 Writeup

## Introduction
Zac Conlin - 12 September 2022

## Executive Summary
This lab served to build an unfinished webpage that displayed a simple "To Do" list. There were several directives, namely to build the page through HTML, host it on a server, and then use CSS to make it more pleasing to look at.

## Design Overview
Over the course of the lab there were many opportunities to practice basic HTML and CSS coding. I built a simple HTML webpage displaying a bare bones 'To Do List.' Making use of the AWS infrastructure and Windows Subsystem for Linux (WSL), I was able to not only run my webpage on my local host, but also on a privately hosted HTTP server. The lab was broken into two parts - Part One of the lab focused on the HTML of the page and creating the server on AWS in order to host it. Part Two primarily involved decorating the site with CSS, with a little bit of JavaScript.

The beginning of the lab wasn't particularly difficult, I was provided a set of instructions and an example image detailing the desired product. Following these strict requirements, I used HTML to create the following webpage and run it on my local host:
![Bare HTML (end of part a)](1a.png)
The bare HTML before adding any CSS.

The next step was to set up a server so I don't need to host the page locally. This part actually gave me a lot of difficulties, I haven't really used Linux much before and I've never worked with servers in this manner. I spent a lot of time looking at tutorials and getting help with code syntax, but now at the end of the lab, I am feeling comfortable with the CLI and have successfully run my page multiple times on the server! Here is the final result, with all the CSS added:
![Resulting page (end of part b)](1b.png)
The final product of the lab.

While designing the CSS, there were some conventions and requirements that I needed to follow, but for a lot of it, I was pretty free to design as I wished. In fact, there was even a way to get some extra credit by following a standard framework. I attempted to follow the water.css framework, but was running into some problems with the sliders not showing correctly, and I didn't fully understand the code we were provided, so I changed the look of my project to be how I wanted it to be! Here is the draft before scrapping it and changing the plan:
![An early draft](1bdraft.png)
Early draft of page, scrapped due to being unable to figure out how to fix the sliders at the top.

## Writeup Questions
1a Writeup Questions
- What is the purpose of using Docker containers?

  The containers allow the code to run in the same environment as in a server.  

- Why is it useful to have both a development environment and a live server environment?

    It is helpful because it not only makes a backup, but also allows for editing and testing of the code without worrying about messing things up on the server.

- What is the purpose of using a code versioning tool (i.e. Git)?

    It keeps track of versions and backs up the code, so that if a mistake is made, progress is not totally lost.


1b Writeup Questions
- What is the difference between a CSS rule with an *element* selector (i.e. h1,p,div etc.) and one with a *class* selector (i.e. .task, .task-done etc.)? When would you use each?

    An element selector selects every element under that selector, while one with a class selector can be more specific. Element selectors are for global application of a style rule, while classes are for individual or small group cases.

- What are the advantages of putting your styles in a separate .css stylesheet instead of in the `<style>` element of `<head>`?

    It creates a cleaner working environment and more ease in editing or viewing the CSS or HTML individually

- How do web browsers choose which CSS to use for an HTML element when the CSS rules contradict each other? What is the order of precedence for CSS rules?

    Value defined as Important > Inline > ID nesting > id > class nesting > class > tag nesting > tag.    

- Why should you disable directory access for your server?

    If every user can see and edit your code, it opens up vulnerabilities that they could access information they shouldn't have and/or break your server

## Lessons Learned

Corrupted drivers:
While setting up the workspace, the embedded Ubuntu terminal would not open in VS Code. When run, it returns an error. This is because the VM drivers in the PC were corrupted or outdated. This can be fixed by going to the 'Device Manager' and updating the drivers.

HTTPS not set up:
While opening the site on the AWS server by using the IPv4 address, the page would show up as "Page not found." This is because the browser is defaulting to HTTPS, which has not yet been set up. Fix this by changing HTTPS to HTTP in the URL.

Understanding the `<form>` tag:
One of the final steps requires pasting this  
 `<form class="form-create-task" onsubmit="on_submit(event)">`
 code into the `<form>` part of the index.html file. If pasted within the already existing `<form>` section like this:
 ````````````````````````````````
 <form>
    <form class="form-create-task" onsubmit="on_submit(event)"</form>
</form>
````````````````````````````````
it will fail to show the alert box. The misunderstanding was that there should not be two `<form>` elements there. The class should just be added within the already existing element. 

## Skills Learned
<ul>
<li>HTML and CSS for a webpage</li>
<li>How to use AWS to host a page</li>
<li>How to use the WSL command line</li>
</ul>

## References
Provided a refresher for the HTML needed to build the page to the required specifications: https://developer.mozilla.org/en-US/docs/Web/HTML

Learned the CSS syntax: https://www.w3schools.com/w3css/

Helped with WSL installation problems: https://docs.microsoft.com/en-us/windows/wsl/install



toHTML () {
    let str
}