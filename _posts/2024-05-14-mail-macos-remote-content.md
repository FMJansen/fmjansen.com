---
layout: post
title: Stop Mail on macOS from loading images
excerpt: .
---

# Stop Mail on macOS from loading images
{:.no_toc}

Published: {{page.date | date_to_long_string}}
{: .date}

<button id="tocgle" class="tocgle" type="button" aria-expanded="true" aria-controls="markdown-toc">
  Show table of contents</button>
* TOC
{:toc .toc}

![A banner in macOS Mail with the message ‘This message contains remote content.’ and a button ‘Load Remote Content’.](/static/img/macos-mail-load-content-banner.png)

## Load remote content
There used to be an option in macOS’s mail called ‘Load remote content in messages’. However, since Monterey (version 12), this feature has disappeared. Instead, there’s a specific privacy tab in the Mail Settings and different options. 

## Protect Mail Activity
The default ‘Protect Mail Activity’ loads all images, but just routes them through servers and obfuscates the moment of loading by pre-loading it when the email arrives in the app. 

## Desired behaviour
That’s not the behaviour I wanted: I want to stop images from loading in messages in my Junk folder (and some in other folders) entirely. This way, spammers (or marketeers) also don’t learn whether the email has arrived or has been opened at all.

## The right configuration
It took me a while to figure out you can still achieve this by unchecking ‘Protect Mail Activity’, and checking ‘Block All Remote Content’. This way, I have to click ‘Load Remote Content’ for emails where I _do_ want to see the images in it, but that’s fine for me.

![The macOS Mail settings with the Privacy tab activated. Protect Mail Activity is unchecked, ‘Hide IP Address’ and ‘Block All Remote Content’ are checked.](/static/img/macos-mail-privacy-settings.png)

Hope this helps anyone looking for the ‘Load remote content’ option to no avail. 