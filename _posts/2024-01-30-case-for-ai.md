---
layout: default
title: The case for AI
excerpt: Generative artificial intelligence (AI) is quite the hype, but it has serious downsides. I wanted to keep an overview of those downsides, so I collected some links.
---

# The case for AI
{:.no_toc}

Published: {{page.date | date_to_long_string}} (Updated 16 March 2024)
{: .date}

{::options parse_block_html="true" /}

<div class="summary">

## In short
{:.no_toc}

Generative artificial intelligence (AI) is quite the hype, but it has serious downsides. There are advices and frameworks from people who know more than I do. However, I wanted to keep an overview of the [downsides of generative AI](#downsides), so I collected some links.

</div>

## Some context
{:.no_toc}

Recently, the UK government published a framework which includes [ten principles for generative artificial intelligence (AI) usage](https://www.gov.uk/government/publications/generative-ai-framework-for-hmg/generative-ai-framework-for-hmg-html#principles). The second principle requires lawful, ethical and responsible use, pointing towards the privacy, intellectual property, bias, environmental and other concerns. The [Rathenau Instituut](https://en.wikipedia.org/wiki/Rathenau_Institute) published a report warning organisations to [question whether they can use generative AI responsibly](https://www.rathenau.nl/nl/digitalisering/risicos-van-generatieve-ai-vereisen-terughoudendheid-gebruik) and the [Autoriteit Persoonsgegevens](https://en.wikipedia.org/wiki/Dutch_Data_Protection_Authority){: title="Dutch data protection authority"} is concerned about more [disinformation, privacy violations and discrimination](https://autoriteitpersoonsgegevens.nl/en/current/ai-and-algorithm-risks-on-the-rise-amidst-increased-use-master-plan-necessary-to-prepare-the-netherlands-for-a-future-with-ai).

The UK government framework also lists [use cases to avoid](https://www.gov.uk/government/publications/generative-ai-framework-for-hmg/generative-ai-framework-for-hmg-html#use-cases-to-avoid), but I must say I find it harder to find any [use case](https://www.gov.uk/government/publications/generative-ai-framework-for-hmg/generative-ai-framework-for-hmg-html#identifying-use-cases) which remains when you actually take all those concerns into account. Large language models, although called ‘artificial intelligence’, [aren’t actually intelligent](https://buttondown.email/ninelives/archive/language-is-a-poor-heuristic-for-intelligence/), of course. And because of its nature, generative AI _will_ make mistakes and it _will_ perpetuate biases.

You _could_ leave some concerns aside. For example, worker exploitation and environmental destruction are inherent to the capitalist system, and it’s impossible to stop that completely by spending your money otherwise. Some use cases might then indeed be excusable, like summarising content you already know, or could verify easily. Heck, it makes translations and transcriptions available in more situations, which improves the accessibility of information. So there might be some good in its use.

---

## Downsides
{:.no_toc}

So should you use it? That’s hardly up to me. Either way, I think it’s important to know the downsides of the creation and use of generative AI. So here’s my collection of publications I’ve come across.

## Generative AI is...
{:.no_toc}

- TOC
{:toc .toc}

---

### Based on stealing content and privacy infringements

- MidJourney created [near-copies of copyrighted images](https://www.nytimes.com/interactive/2024/01/25/business/ai-image-generators-openai-microsoft-midjourney-copyright.html)
- [Artists](https://news.artnet.com/art-world/federal-judge-sides-with-ai-companies-in-artists-copyright-dispute-2387654), [authors](https://www.theguardian.com/books/2023/sep/20/authors-lawsuit-openai-george-rr-martin-john-grisham) and [The New York Times](https://www.theguardian.com/media/2023/dec/27/new-york-times-openai-microsoft-lawsuit), among others, are claiming it’s copyright infringement
- OpenAI says [copyrighted material is required](https://www.theguardian.com/technology/2024/jan/08/ai-tools-chatgpt-copyrighted-material-openai) to build an LLM
- Adobe retains the right to [train their AI models on your work](https://www.howtogeek.com/858952/adobe-is-using-your-data-to-train-ai-how-to-turn-it-off/) (even if it isn’t published, but only in Adobe’s cloud solutions), unless you opt-out
- [Meta](https://petapixel.com/2024/02/02/zuckerbergs-going-to-use-your-instagram-photos-to-train-his-ai-machines/), [Google, OpenAI](https://www.vox.com/technology/2023/7/27/23808499/ai-openai-google-meta-data-privacy-nope) and [Lensa](https://twitter.com/CatStaggs/status/1599145701954707456) have similar policies (although you might not be able to opt-out)
- Stable Diffusion spat out [exact copies of its training data](https://www.vice.com/en/article/m7gznn/ai-spits-out-exact-copies-of-training-images-real-people-logos-researchers-find)
- As did, ChatGPT, and it spat out [privately identifiable information](https://www.404media.co/google-researchers-attack-convinces-chatgpt-to-reveal-its-training-data/)
- Adobe Firefly was [trained on MidJourney images (~5%)](https://www.creativebloq.com/news/adobe-firefly-trained-on-midjourney) and Adobe Stock images which were generated by AI, including ones trying to [mimick specific artists’ styles](https://www.creativebloq.com/news/adobe-copyright-ai)

### Based on worker exploitation

- [OpenAI underpaid its contractor workers](https://time.com/6247678/openai-chatgpt-kenya-workers/) cleaning up ChatGPT output which included child sexual abuse, bestiality, torture, suicide, etc., but gave little to no mental health support
- Google Assistant contractors [alleged the company of wage theft](https://www.theguardian.com/technology/2019/may/28/a-white-collar-sweatshop-google-assistant-contractors-allege-wage-theft)

### Perpetuating biases

- Stable Diffusion shows (‘worse than reality’) [sexist and racist](https://www.bloomberg.com/graphics/2023-generative-ai-bias/) tendencies
- Lensa, [based on](https://techcrunch.com/2022/12/05/lensa-ai-app-store-magic-avatars-artists/) Stable Diffusion, [‘undressed’ women](https://www.technologyreview.com/2022/12/12/1064751/the-viral-ai-avatar-app-lensa-undressed-me-without-my-consent/) and [children](https://www.wired.com/story/lensa-artificial-intelligence-csem/), while whitening skin of women of color.
- Several LLMs [propagate racist and harmful medicine](https://www.nature.com/articles/s41746-023-00939-z)
- Image generating models are horrible at images of [people doing things left-handedly](https://fosstodon.org/@gabrielesvelto/111930375742973633), this might translate to other marginalised/less visible human traits

### Making it easier to spread misinformation

- [Researchers warn about possible misinformation](https://www.nytimes.com/2023/02/08/technology/ai-chatbots-disinformation.html), but it’s already happening in [political campaigns in the USA](https://www.cnet.com/news/misinformation/ai-misinformation-how-it-works-and-ways-to-spot-it/) and [Israel](https://www.newsguardtech.com/special-reports/ai-generated-site-sparks-viral-hoax-claiming-the-suicide-of-netanyahus-purported-psychiatrist/), for example
- AI models which replicate voices are also used to [imitate politicians and influence voting](https://www.nbcnews.com/politics/2024-election/fake-joe-biden-robocall-tells-new-hampshire-democrats-not-vote-tuesday-rcna134984)

### Causing information pollution

- An entrepreneur generated articles based on the [sitemap of a competitor](https://www.dailydot.com/debug/ai-tech-bro-jake-ward-brags-google-seo-heist/), producing more unreliable content
- Google returned an AI generated image for the [Tiananmen Square “Tank Man”](https://www.404media.co/first-google-search-result-for-tiananmen-square-tank-man-is-ai-generated-selfie/)
- Generating website content with AI is already leading to [worse search results](https://9to5google.com/2023/02/07/google-seo-spam-ai/) in general
- [Sites are ripping off other outlets](https://www.404media.co/google-news-is-boosting-garbage-ai-generated-articles/) (stealing income from those outlets in the process), and they’re promoted by Google
- GitHub [Copilot seemingly leads to lower code quality](https://visualstudiomagazine.com/articles/2024/01/25/copilot-research.aspx), although there is definitely [some nuance to that](https://shively-sanders.com/gitclear-copilot-code-quality.html)
- Lots of [translations of web pages are seemingly machine made](https://arxiv.org/pdf/2401.05749.pdf), with low quality as a result
- Papers are being published with [literal language model output](https://www.sciencedirect.com/science/article/pii/S1930043324001298#:~:text=I%27m%20very%20sorry%2C%20but%20I%20don%27t%20have%20access%20to%20real%2Dtime%20information%20or%20patient%2Dspecific%20data%2C%20as%20I%20am%20an%20AI%20language%20model.%20I%20can%20provide%20general%20information%20about)
- Image generating models are already [trained with models](https://knowingmachines.org/models-all-the-way) trained with models, with arbitrary cut-off points 
- News, videos for kids and books are generated with [low-quality content](https://www.theintrinsicperspective.com/p/here-lies-the-internet-murdered-by)

### Making phishing easier and more sophisticated

- GPT was [better at writing phishing emails than humans](https://www.wired.com/story/ai-phishing-emails/), already in 2021
- [Microsoft](https://www.microsoft.com/en-us/microsoft-365-life-hacks/privacy-and-safety/how-ai-changing-phishing-scams), a major investor in OpenAI, is afraid of ChatGPT based phishing attacks

### Facilitating time wasting

- People submit [fake security vulnerability reports](https://daniel.haxx.se/blog/2024/01/02/the-i-in-llm-stands-for-intelligence/) trying to get a reward, wasting the time of software and [website maintainers](https://dice.camp/@gluesticks/111721320932937265)

### Increasing energy consumption and water consumption

- OpenAI says building ‘AI’ models requires [new methods of generating electricity](https://www.news18.com/tech/openai-ceo-sam-altman-says-future-of-ai-depends-on-nuclear-fusion-breakthrough-8743104.html) because it uses so much energy
- [Making an image with generative AI uses as much energy as charging your phone](https://www.technologyreview.com/2023/12/01/1084189/making-an-image-with-generative-ai-uses-as-much-energy-as-charging-your-phone/)
- [New data centres threaten the water supply in Mexico](https://news.mongabay.com/2024/03/critics-fear-catastrophic-energy-crisis-as-ai-is-outsourced-to-latin-america/)

### Leading to the statistical average

- LLMs “[predict and generate plausible language](https://developers.google.com/machine-learning/resources/intro-llms)”; they are basically doing statistics for the next word
- One result of that is that LLMs are largely [unable to infer _B is A_ from _A is B_](https://garymarcus.substack.com/p/elegant-and-powerful-new-result-that)
- But in general, it means the models are unable to reliably convey the truth, even if for [simple truths](https://notes.aimodels.fyi/researchers-discover-emergent-linear-strucutres-llm-truth/) they ‘point’ more towards the truth

### Telling you lies

- The AI-generated [snippets on Google](https://hachyderm.io/@thomasfuchs/111756297494607526) and [Bing are serving false responses to queries](https://wetdry.world/@keat/111479034674203372), and [asking ChatGPT](https://front-end.social/@heydon/111743110743971774) directly doesn’t fare much better
- Some people call this ‘hallucinations’, but this might [not be the most fitting](https://www.theguardian.com/commentisfree/2023/may/08/ai-machines-hallucinating-naomi-klein)
- When used specifically for the knowledge base of MDN, an LLM still produced [lies and half-truths](https://seirdy.one/posts/2024/04/04/mdn-ai-help-and-lucid-lies/)
- A New York City chatbot, meant to help local businesses, was tellings those businesses to [break the law](https://apnews.com/article/new-york-city-chatbot-misinformation-6ebc71db5b770b9969c906a7ee4fae21) (“Yes, you can still serve the cheese to customers if it has rat bites,”)

### Exposing your private information

- Several ‘chat’ tools [use your input for future training](https://www.washingtonpost.com/technology/2023/04/27/chatgpt-messages-privacy/); which, looking at the already spat out [personal information](#based-on-stealing-content-and-privacy-infringements) and near-exact copies of training data, doesn’t bode well for your own private information or NDA protected content
- Feeding similar private information (known to a malicious party) to a model, led to ChatGPT on GPT-3.5 to outputting unkown [private information](https://www.nytimes.com/interactive/2023/12/22/technology/openai-chatgpt-privacy-exploit.html)

### Doing your work in a worse way

- [UX reviews](https://baymard.com/blog/gpt-ux-audit) with GPT-4 lead to low discovery, high failure rates
- When [answering code questions](https://www.theregister.com/2023/08/07/chatgpt_stack_overflow_ai/), it has wrong answers more than half of the time
- [Writing code for websites](https://nitter.net/AshleeMBoyer/status/1702367107130720534) with many accessibility mistakes or at least the [need for oversight](https://tetralogical.com/blog/2024/02/12/can-generative-ai-help-write-accessible-code/)
- [Infographics](https://social.vivaldi.net/@brucelawson/110661660308637621) are just useless
- [Fake users](https://www.syntheticusers.com/) to design “with confidence” even though research is about the specifics, details and behaviour of real people
- [AI generated promotion social media posts](https://replyguy.com/) are just repackaged spam with unreliable results, which might lead to the next point

### Devaluing your brand

- [DPD AI chatbot swears, calls itself ‘useless’ and criticises delivery firm](https://www.theguardian.com/technology/2024/jan/20/dpd-ai-chatbot-swears-calls-itself-useless-and-criticises-firm)
- AI art quickly developed the same status as [stock images](https://ia.net/topics/ai-art-is-the-new-stock-image)
- [Clock are telling the wrong time](https://arstechnica.com/information-technology/2024/01/rhyming-ai-powered-clock-sometimes-lies-about-the-time-makes-up-words/)

### Used by companies to devalue our work

- Apparently already in 2023, [jobs were eliminated](https://www.cbsnews.com/news/ai-job-losses-artificial-intelligence-challenger-report/)
- [AI threatens wages](https://www.reuters.com/technology/ai-threatens-wages-not-jobs-so-far-ecb-paper-finds-2023-11-28/)
- More people are loosing their jobs or have them de-skilled (lowering skill requirements and thus wages because of technology replacing those workers; from [You Deserve a Tech Union](https://abookapart.com/products/you-deserve-a-tech-union), chapter 5, page 99)
- And it [increase the wealth concentration](https://www.newyorker.com/science/annals-of-artificial-intelligence/will-ai-become-the-new-mckinsey)
