---
layout: post
title: PhD on applications for identity wallets
excerpt: I’ve started my PhD on voting, signing and communication applications for identity wallets.
tags: [phd, academia]
---

# PhD on applications for identity wallets
{:.no_toc}

Published: {{page.date | date_to_long_string: "ordinal"}}
{: .date}

{::options parse_block_html="true" /}
<div class="summary">
I’ve started my PhD on applications for identity wallets. We’ll be working on a voting platform for low to medium-stakes 
elections, first, and then continue with document signing and identity in online communication. 
</div>

<a href="#start" class="tocskip">Skip table of contents</a>
* TOC
{:toc .toc}

Last month, I’ve started my PhD on _designing applications for identity wallets_. I’m doing this at 
[iHub](https://ihub.ru.nl) (at [Radboud University](https://ru.nl/en)) as part of the project [Building on Digital 
Identity](https://www.nwo.nl/projecten/rhkye89439) which is a collaboration with the 
[HAN](https://www.hanuniversity.com/en/), [Yivi](https://yivi.app/en/) and several other organisations. So, I thought
I’d share what I’ll be working on over the coming years.
{: #start}

## Identity wallets

When you need to prove something about yourself in person (your age or name, for example), you can just flash your 
passport or driving license. The checking person can trust the document, confirm you’re old enough, and forget 
everything else (like your exact date of birth). Online, however, ‘showing’ your passport could mean that a copy is 
stored on the servers of the checking party. They get more data about you than necessary and that [data can be leaked,
too](https://www.ign.com/articles/discord-confirms-over-70000-users-affected-by-customer-service-hack-that-has-compromised-images-of-government-issued-id-like-driving-licences-and-passports). 

### Verified attributes
Identity wallets allow you to prove something, without sharing your entire passport. From an app your phone, you 
request a list of your ‘attributes’ (such as your age or name) from a trustworthy organisation, such as your 
government. They provide you with those attributes and a cryptographic proof, so you can share just the necessary 
attributes, and the receiving party can trust them. 

### EU Legislation
[Yivi](https://yivi.app/en/) (formerly known as Irma) is the identity wallet developed at iHub and can already be 
used with a few online tools. Now, as part of [updated european 
legislation](https://www.nldigitalgovernment.nl/overview/identity/id-wallet/), all European countries need a 
working identity wallet by the end of 2026. In The Netherlands, this means the Ministry of the 
Interior and Kingdom Relations (MinBZK) is developing the [NL Wallet](https://github.com/MinBZK/nl-wallet). This 
system of identity wallets will also be used for people to log in (somewhat similar to DigiD or eHerkenning).

### New applications
Identity wallets can be used for age verification or authentication (logging in), but they also unlock more secure and
private ways for other online activities. With more people getting an identity wallet in the near future, it becomes
more relevant to create applications for them and figure out what good design around identity wallets looks like.
That’s the aim of my PhD; I will design, develop and test tools for voting, signing or communication, with a focus 
on the [human-computer interaction](https://www.interaction-design.org/literature/topics/human-computer-interaction) 
(HCI) and accessibility side of it. 

## Voting in low and medium-stakes elections

Governmental elections in The Netherlands happen on paper. That’s a [good 
idea](https://www.youtube.com/watch?v=LkH2r-sNjQs) and we should keep doing that. On the other hand, small-scale 
elections already happen online. For some, that’s fine: election fraud is less likely when the stakes are smaller. 
Elections with higher stakes, however, require more secure and trustworthy voting platforms than a simple survey tool.

That’s because an election only works when the stakeholders trust the outcome. This requires, among other things:
- **confirmed voter eligibility** - we should trust all votes come from a unique person who is allowed to vote, 
- and **ballot secrecy** - voters should not be able to prove to someone what they voted, to prevent them being
  forced to vote a specific way

You could make sure all votes are from eligible voters by letting them write their name on the ballot. However, that 
would violate ballot secrecy. This is where an identity wallet can help. By proving eligibility in one place, a voter
can get an anonymous voting card in their wallet, to then vote in a different place. And depending on the requirements 
for eligibility (for example, living in a certain postal code for a municipal consultation), a voter can use their 
identity wallet to prove this eligibility, without exposing their entire identity. 

Previously, people at iHub have already developed a [voting platform](https://ihub.ru.nl/project/2024-03-13-irma-vote/) 
prototype which used Yivi as a proof of concept. We will build on that work, but expand on the legal, technical and 
design aspects of it. 

Are you organising a (small) election? Please [get in touch](/#other-places)!
{: .take-away}

## Other applications

### Trustworthy signatures
When signing documents online, we often use either images of hand drawn signatures, or we use platforms which only 
require email verification. Identity wallets can be used to sign a document with specific attributes, making sure it’s
clear who placed the signature. This can be based on just a name and date of birth, for example, but also based on 
having the right to sign for a specific organisation. 

### Verified identity
In online communication, it can be important to be sure of the credentials (for example when a medical professional 
makes health claims) or complete identity (for example of a government official in a 
[video call](https://www.engadget.com/netherlands-deepfake-video-chat-navalny-212606049.html)). 
Identity wallets can help prove the necessary attributes to make the message trustworthy.

---

## Get in touch

If you’re interested in digital or online identity, small scale elections, digital signing or identity on social 
media, please do [get in touch](/#other-places). And of course, you can also follow my [RSS feed](/feed.xml) to stay 
up to date.