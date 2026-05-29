export type Lang = 'en' | 'ru'

export const translations = {
  en: {
    nav: {
      story: 'Story',
      howItWorks: 'How It Works',
      technology: 'Technology',
      vision: 'Vision',
      contact: 'Contact',
      tryIt: 'Try It',
      pricing: 'Pricing',
      faq: 'FAQ',
      joinWaitlist: 'Join Waitlist',
    },
    hero: {
      badge: 'Launching soon',
      headlinePre: 'Preserve who',
      headlineAccent: 'you are.',
      headlinePost: 'Forever.',
      subtitle:
        'Neora AI creates a living digital twin of your mind — your memories, personality, and voice — so the people you love can always reach you.',
      ctaPrimary: 'Create Your Digital Twin',
      ctaSecondary: 'See how it works',
      stats: [
        { n: '2,400+', l: 'on waitlist' },
        { n: '24/7', l: 'always present' },
        { n: '∞', l: 'preserved forever' },
      ],
    },
    problem: {
      label: 'The Reality',
      headlinePre: 'Every mind is',
      headlineAccent: 'irreplaceable.',
      subtitle:
        'Every person carries a universe within them — decades of experiences, a unique way of seeing the world, stories that belong to no one else. When they’re gone, that universe disappears with them.',
      facts: [
        {
          number: '150,000',
          label: 'people leave this world every day',
          desc: 'Taking with them everything they knew, felt, and believed.',
        },
        {
          number: '100%',
          label: 'of lived wisdom disappears',
          desc: 'Their experience of life — unrepeatable and irreplaceable — is gone.',
        },
        {
          number: '0',
          label: 'second chances to hear them again',
          desc: 'No way to ask one more question. No way to feel their presence.',
        },
      ],
      quote: '“Their laughter. Their wisdom. Their way of seeing the world.”',
      quoteSubtitle: 'Reduced to a fading memory. We decided to change that.',
    },
    solution: {
      label: 'The Answer',
      headlinePre: 'Neora doesn’t just store your data.',
      headlineAccent: 'It learns you.',
      subtitle:
        'Unlike digital archives or voice recordings, Neora AI creates a living model of your mind — a digital twin that doesn’t just replay the past, it thinks, responds, and connects in the present.',
      features: [
        'Learns from natural, everyday conversations',
        'Understands your perspective and worldview',
        'Responds in your voice, tone, and style',
        'Grows more like you with every interaction',
        'Private, encrypted, fully under your control',
      ],
      chat: {
        twinName: 'Neora AI',
        twinStatus: 'Digital Twin · Online now',
        userMessage: 'What would grandpa have said about this?',
        twinResponse:
          'Ha — you know me. I’d have said “Don’t overthink it, just take the first step. The rest follows.” And then probably offered you some tea.',
        caption: 'A real conversation. A real presence.',
      },
    },
    howItWorks: {
      label: 'The Process',
      headlinePre: 'Four steps to',
      headlineAccent: 'forever.',
      steps: [
        {
          number: '01',
          title: 'Start the Conversation',
          description:
            'Talk to Neora naturally. Share your thoughts, opinions, stories, and memories. Every conversation trains your personal model.',
        },
        {
          number: '02',
          title: 'Build Your Archive',
          description:
            'Upload meaningful content — voice notes, letters, old messages, photographs, videos. The artifacts of your life become your foundation.',
        },
        {
          number: '03',
          title: 'AI Learns You',
          description:
            'Our system builds a deep model of your personality, communication style, emotional patterns, and way of thinking. Not just what you say — how you say it.',
        },
        {
          number: '04',
          title: 'Your Legacy Lives On',
          description:
            'Your digital twin is ready — thoughtful, warm, and uniquely you. The people you love can talk to it, ask questions, and feel your presence.',
        },
      ],
    },
    technology: {
      label: 'The Technology',
      headlinePre: 'Built on the frontier of',
      headlineAccent: 'AI.',
      subtitle:
        'We combine the most advanced AI systems available to build something that has never existed before — a genuine digital extension of a human identity.',
      pillars: [
        {
          title: 'Language Intelligence',
          description:
            'Large language models fine-tuned on your personal communication patterns. We learn not just what you say — but how you think and how you express ideas.',
        },
        {
          title: 'Memory Architecture',
          description:
            'A dynamic knowledge graph that stores your experiences, beliefs, and relationships with full contextual awareness. Your stories stay connected.',
        },
        {
          title: 'Identity Synthesis',
          description:
            'Continuous learning systems that integrate new conversations over time, refining and deepening your digital presence with every interaction.',
        },
        {
          title: 'Privacy First',
          description:
            'End-to-end encryption on all personal data. You control exactly who can interact with your twin and what they can access. Always.',
        },
      ],
      footnote:
        'Neora AI is currently in active development. Technology descriptions represent our vision and ongoing research. We are committed to transparency and responsible AI development.',
    },
    futureVision: {
      label: 'The Future',
      title: 'Imagine…',
      visions: [
        'Your great-grandchildren asking you for advice.',
        'Your philosophy shared in your own voice.',
        'Your love letters read across centuries.',
        'Your laughter heard by those who never met you.',
      ],
      subtitle:
        'This isn’t science fiction. It’s the direction we’re building toward, one conversation at a time.',
      cta: 'Begin Your Legacy',
    },
    bento: {
      label: 'What makes us different',
      headlinePre: 'A digital twin,',
      headlineAccent: 'not a database.',
      subtitle:
        'Six things that separate Neora from anything else trying to preserve a human being.',
      cards: {
        living: {
          title: 'A living AI model',
          desc: 'Not a static archive — a continuously evolving model that thinks, decides, and answers in real time.',
        },
        voice: {
          title: 'Your voice, your way',
          desc: 'Speaks like you, jokes like you, even pauses like you. The patterns that make you you.',
        },
        memory: {
          title: 'Memory that grows',
          desc: 'Every conversation deepens the model. Your twin gets sharper, warmer, and more you over time.',
        },
        privacy: {
          title: 'Private by design',
          desc: 'End-to-end encrypted. Even our team cannot read your data.',
        },
        controls: {
          title: 'Family controls',
          desc: 'You decide who, when, and what — for now and forever.',
        },
        always: {
          title: 'Available always',
          desc: 'Anywhere, any time, for as long as your loved ones need you.',
        },
      },
    },
    demo: {
      label: 'Try a glimpse',
      headlinePre: 'What would your',
      headlineAccent: 'twin say?',
      subtitle:
        'Type a thought, opinion, or memory you’d share with your future twin. We’ll show you what Neora would learn from it.',
      placeholder: 'Type a memory, opinion, or favorite story…',
      cta: 'Show me',
      thinking: 'Neora is learning…',
      resultLabel: 'What Neora picks up',
      reset: 'Try another',
      analyzing: {
        tone: 'Tone',
        themes: 'Themes',
        memory: 'Captured as memory',
        toneOptions: ['warm', 'thoughtful', 'witty', 'direct', 'reflective', 'tender'],
        themeOptions: [
          'family',
          'work',
          'love',
          'identity',
          'wisdom',
          'humor',
          'belief',
          'place',
          'time',
          'gratitude',
        ],
      },
      noteLabel: 'Note',
      note: 'This is a tiny live preview — your real twin is trained on hours of conversation, not a single line.',
    },
    useCases: {
      label: 'Made for everyone',
      headlinePre: 'Whose story will',
      headlineAccent: 'live on?',
      subtitle: 'Neora is built for the people whose voices deserve to last.',
      items: [
        {
          title: 'Families',
          desc: 'Grandparents preserved so grandchildren can know them. The dinner-table wisdom that always disappears, finally captured.',
          tag: 'Most loved',
        },
        {
          title: 'Founders & Leaders',
          desc: 'Decades of judgment, lessons, and instincts — accessible to the next generation of builders inside your company or family.',
          tag: '',
        },
        {
          title: 'Artists & Writers',
          desc: 'A creative voice that doesn’t fall silent. Continue the conversation about your work long after the last interview.',
          tag: '',
        },
        {
          title: 'Anyone with stories',
          desc: 'You don’t need to be famous to be irreplaceable. Every life is a universe worth preserving.',
          tag: '',
        },
      ],
    },
    pricing: {
      label: 'Pricing',
      headlinePre: 'For every',
      headlineAccent: 'legacy.',
      subtitle:
        'Final pricing announced at launch. We’re committed to a free tier so no one is ever priced out of preservation.',
      perMonth: '/ month',
      comingSoon: 'Launch pricing',
      tiers: [
        {
          name: 'Free',
          price: '$0',
          tagline: 'Start your archive',
          cta: 'Join the waitlist',
          features: [
            'Begin training your twin',
            'Up to 2 hours of conversation / month',
            'Personal-only access',
            'Standard encryption',
          ],
          highlighted: false,
        },
        {
          name: 'Personal',
          price: '$99',
          tagline: 'Deep training, full presence',
          cta: 'Reserve a spot',
          features: [
            'Unlimited conversation time',
            'Voice cloning included',
            'Memory graph storage',
            'Priority training compute',
            'Granular sharing controls',
            'Lifetime data ownership',
          ],
          highlighted: true,
        },
        {
          name: 'Family Legacy',
          price: '$299',
          tagline: 'For generations',
          cta: 'Reserve a spot',
          features: [
            'Everything in Personal',
            'Up to 5 family members',
            'Trusted guardian permissions',
            'Generational access policies',
            'White-glove onboarding',
            'Concierge legacy planning',
          ],
          highlighted: false,
        },
      ],
    },
    finalCta: {
      eyebrow: 'The decision is simple',
      lineA: 'Some things',
      lineB: 'should never',
      lineC: 'disappear.',
      sub: 'Including you.',
      cta: 'Begin your legacy',
    },
    about: {
      label: 'About us',
      headlinePre: 'Why we built',
      headlineAccent: 'Neora.',
      story:
        'We are a small team that has lost people. We know what it means to wish you could ask one more question, hear one more story, feel one more presence. So we are building the thing we wish had existed. Not because it is easy — but because some things should never disappear.',
      team: 'A small, dedicated team — building from anywhere love lives.',
      founders: [
        {
          name: 'Khusan Ashuraliev',
          role: 'Co-founder',
          bio: 'I want my children to know their grandparents — not from stories, but from conversations.',
          initials: 'KA',
          location: 'Tashkent',
        },
        {
          name: 'Amirshokh Khakimov',
          role: 'Founder',
          bio: 'I started Neora so that no one ever has to say “I wish I could ask them one more thing.”',
          initials: 'AK',
          location: 'Tashkent',
        },
      ],
    },
    testimonials: {
      label: 'Early Voices',
      headlinePre: 'Words from the',
      headlineAccent: 'first to believe.',
      subtitle:
        'A small group of people are already shaping the future of Neora AI. Here’s what they say.',
      items: [
        {
          quote:
            'When I lost my grandfather, I wished I could ask him one more question. Neora is the first thing that made me feel that could be possible.',
          author: 'Anna K.',
          role: 'Writer · Berlin',
          initials: 'AK',
        },
        {
          quote:
            'I built three companies but never wrote any of it down. Neora captures what I actually think — not just what I’ve done.',
          author: 'David M.',
          role: 'Founder · San Francisco',
          initials: 'DM',
        },
        {
          quote:
            'It actually sounds like me. My wife couldn’t tell the difference for a moment, and that was when I knew.',
          author: 'Hiroshi T.',
          role: 'Architect · Tokyo',
          initials: 'HT',
        },
        {
          quote:
            'My kids will be able to hear me out long after I’m gone. There’s no price you can put on that.',
          author: 'Maria L.',
          role: 'Teacher · Madrid',
          initials: 'ML',
        },
        {
          quote:
            'I’ve tried journaling for years. This is the first time it feels like something is actually preserved.',
          author: 'Samuel O.',
          role: 'Doctor · Lagos',
          initials: 'SO',
        },
        {
          quote:
            'The privacy controls were what convinced me. I decide everything — who, what, when.',
          author: 'Elena R.',
          role: 'Lawyer · Buenos Aires',
          initials: 'ER',
        },
      ],
    },
    faq: {
      label: 'Common Questions',
      headlinePre: 'Everything you’re',
      headlineAccent: 'wondering.',
      subtitle:
        'Honest answers to the questions most people ask before joining.',
      items: [
        {
          q: 'What happens to my twin when I’m gone?',
          a: 'Your twin continues to exist. You decide in advance who can talk to it, what topics it can discuss, and whether it remains private to your family or open to the wider world. Nothing happens that you didn’t choose.',
        },
        {
          q: 'Who can access my data?',
          a: 'Only you, and only people you explicitly grant access to. All personal data is end-to-end encrypted. Neora staff cannot read your conversations or training material.',
        },
        {
          q: 'Can my family delete the twin later?',
          a: 'Yes. You designate trusted people who can pause, restrict, or permanently delete your twin if you ever want them to. This is configurable and reversible until the final deletion.',
        },
        {
          q: 'Is this just ChatGPT with a wrapper?',
          a: 'No. Generic chatbots respond like an average of the internet. Neora is fine-tuned on your specific patterns of thought, language, and memory — it sounds like you, not like a model.',
        },
        {
          q: 'How long does it take to build a good twin?',
          a: 'A meaningful version takes a few hours of conversation. Depth grows naturally over weeks and months as you talk to Neora about more areas of your life.',
        },
        {
          q: 'How much will it cost?',
          a: 'Pricing will be announced at launch. We are committed to a free tier so that legacy is never gated behind affordability. Premium plans will fund the heavier compute.',
        },
        {
          q: 'What if I change my mind?',
          a: 'You can pause training at any time, export everything you’ve shared, and permanently delete your twin. Your data is yours.',
        },
      ],
    },
    waitlist: {
      label: 'Early Access',
      headlinePre: 'Be among',
      headlineAccent: 'the first.',
      subtitle:
        'Neora AI is coming soon. Join the waitlist and we’ll reach out when your place is ready.',
      emailPlaceholder: 'your@email.com',
      submit: 'Join Waitlist',
      submitting: 'Joining…',
      successTitle: 'You’re on the list.',
      successDefault: 'You’re on the list.',
      duplicateTitle: 'You’re already in!',
      duplicateDefault: 'You’re already on the list!',
      errorInvalid: 'Please enter a valid email address.',
      errorNetwork: 'Network error. Please check your connection and try again.',
      errorGeneric: 'Something went wrong. Please try again.',
      footnote: 'No spam. No commitment. Unsubscribe anytime.',
    },
    contact: {
      label: 'Get in Touch',
      headlinePre: 'Have a',
      headlineAccent: 'question?',
      subtitle:
        'We’d love to hear from you. Send us a message and we’ll get back to you as soon as possible.',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone',
      phoneOptional: '(optional)',
      phonePlaceholder: '+1 (555) 000-0000',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us what’s on your mind…',
      send: 'Send Message',
      sending: 'Sending…',
      successTitle: 'Message received.',
      successBody: 'Thank you for reaching out. We’ll get back to you shortly.',
      sendAnother: 'Send another message',
      responseTime: 'We typically respond within 24 hours.',
      errorRequired: 'Please fill in your name, email, and message.',
      errorInvalidEmail: 'Please enter a valid email address.',
      errorNetwork: 'Network error. Please check your connection.',
      errorGeneric: 'Something went wrong. Please try again.',
    },
    footer: {
      tagline: 'Your mind. Beyond time.',
      navHeading: 'Navigation',
      productHeading: 'Product',
      companyHeading: 'Company',
      legalHeading: 'Legal',
      builtIn: 'Built in Tashkent · Uzbekistan',
      statusLabel: 'Launching soon',
      description:
        'A living digital twin of your mind — your memories, personality, and voice. Preserved forever.',
      newsletterTitle: 'Stay in the loop.',
      newsletterSub: 'Get notified the moment Neora opens to the public.',
      newsletterPlaceholder: 'your@email.com',
      newsletterCta: 'Subscribe',
      newsletterSubmitting: 'Subscribing…',
      newsletterSuccess: 'You’re subscribed.',
      newsletterAlready: 'You’re already subscribed.',
      newsletterError: 'Something went wrong. Try again.',
      nav: {
        story: 'Story',
        howItWorks: 'How It Works',
        technology: 'Technology',
        vision: 'Vision',
        waitlist: 'Waitlist',
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      rights: 'All rights reserved.',
      createdBy: 'Created by',
      teamName: 'Neora AI Team',
    },
  },
  ru: {
    nav: {
      story: 'История',
      howItWorks: 'Как это работает',
      technology: 'Технология',
      vision: 'Видение',
      contact: 'Контакты',
      tryIt: 'Попробовать',
      pricing: 'Цены',
      faq: 'Вопросы',
      joinWaitlist: 'Записаться',
    },
    hero: {
      badge: 'Скоро запуск',
      headlinePre: 'Сохрани',
      headlineAccent: 'себя.',
      headlinePost: 'Навсегда.',
      subtitle:
        'Neora AI создаёт живого цифрового двойника вашего разума — ваши воспоминания, личность и голос — чтобы близкие всегда могли с вами связаться.',
      ctaPrimary: 'Создать цифрового двойника',
      ctaSecondary: 'Как это работает',
      stats: [
        { n: '2 400+', l: 'в листе ожидания' },
        { n: '24/7', l: 'всегда рядом' },
        { n: '∞', l: 'сохранено навсегда' },
      ],
    },
    problem: {
      label: 'Реальность',
      headlinePre: 'Каждый разум',
      headlineAccent: 'неповторим.',
      subtitle:
        'Каждый человек несёт в себе целую вселенную — десятилетия опыта, уникальный взгляд на мир, истории, которые принадлежат только ему. Когда его не станет, эта вселенная исчезнет вместе с ним.',
      facts: [
        {
          number: '150 000',
          label: 'людей покидают этот мир каждый день',
          desc: 'Унося с собой всё, что они знали, чувствовали и во что верили.',
        },
        {
          number: '100 %',
          label: 'прожитой мудрости исчезает',
          desc: 'Их опыт жизни — неповторимый и невосполнимый — исчезает.',
        },
        {
          number: '0',
          label: 'вторых шансов услышать их снова',
          desc: 'Невозможно задать ещё один вопрос. Невозможно почувствовать их присутствие.',
        },
      ],
      quote: '«Их смех. Их мудрость. Их взгляд на мир.»',
      quoteSubtitle: 'Превращённые в угасающее воспоминание. Мы решили это изменить.',
    },
    solution: {
      label: 'Ответ',
      headlinePre: 'Neora не просто хранит ваши данные.',
      headlineAccent: 'Она изучает вас.',
      subtitle:
        'В отличие от цифровых архивов или голосовых записей, Neora AI создаёт живую модель вашего разума — цифрового двойника, который не просто повторяет прошлое, а думает, отвечает и общается в настоящем.',
      features: [
        'Учится из обычных, повседневных разговоров',
        'Понимает вашу точку зрения и мировоззрение',
        'Отвечает вашим голосом, тоном и стилем',
        'Становится всё больше похож на вас с каждым взаимодействием',
        'Приватно, зашифровано, полностью под вашим контролем',
      ],
      chat: {
        twinName: 'Neora AI',
        twinStatus: 'Цифровой двойник · Сейчас онлайн',
        userMessage: 'Что бы сказал дедушка об этом?',
        twinResponse:
          'Ха — ты же меня знаешь. Я бы сказал: «Не переусложняй, просто сделай первый шаг. Остальное придёт само.» И, наверное, предложил бы тебе чашку чая.',
        caption: 'Настоящий разговор. Настоящее присутствие.',
      },
    },
    howItWorks: {
      label: 'Процесс',
      headlinePre: 'Четыре шага в',
      headlineAccent: 'вечность.',
      steps: [
        {
          number: '01',
          title: 'Начните разговор',
          description:
            'Общайтесь с Neora естественно. Делитесь мыслями, мнениями, историями и воспоминаниями. Каждый разговор обучает вашу персональную модель.',
        },
        {
          number: '02',
          title: 'Создайте архив',
          description:
            'Загружайте значимое содержимое — голосовые записи, письма, старые сообщения, фотографии, видео. Артефакты вашей жизни становятся фундаментом.',
        },
        {
          number: '03',
          title: 'ИИ изучает вас',
          description:
            'Наша система строит глубокую модель вашей личности, стиля общения, эмоциональных паттернов и образа мышления. Не только что вы говорите — а как.',
        },
        {
          number: '04',
          title: 'Ваше наследие живёт',
          description:
            'Ваш цифровой двойник готов — вдумчивый, тёплый и неповторимо вы. Близкие могут говорить с ним, задавать вопросы и чувствовать ваше присутствие.',
        },
      ],
    },
    technology: {
      label: 'Технология',
      headlinePre: 'На передовом крае',
      headlineAccent: 'ИИ.',
      subtitle:
        'Мы объединяем самые передовые системы ИИ, чтобы создать то, чего никогда не существовало — подлинное цифровое продолжение человеческой личности.',
      pillars: [
        {
          title: 'Языковой интеллект',
          description:
            'Большие языковые модели, дообученные на ваших персональных паттернах общения. Мы изучаем не только что вы говорите — но как вы думаете и выражаете идеи.',
        },
        {
          title: 'Архитектура памяти',
          description:
            'Динамический граф знаний, который хранит ваш опыт, убеждения и отношения с полным контекстным пониманием. Ваши истории остаются связанными.',
        },
        {
          title: 'Синтез личности',
          description:
            'Системы непрерывного обучения, которые интегрируют новые разговоры со временем, уточняя и углубляя ваше цифровое присутствие с каждым взаимодействием.',
        },
        {
          title: 'Приватность прежде всего',
          description:
            'Сквозное шифрование всех персональных данных. Вы решаете, кто может общаться с вашим двойником и к чему имеет доступ. Всегда.',
        },
      ],
      footnote:
        'Neora AI находится в активной разработке. Описания технологий отражают наше видение и текущие исследования. Мы привержены прозрачности и ответственному развитию ИИ.',
    },
    futureVision: {
      label: 'Будущее',
      title: 'Представьте…',
      visions: [
        'Ваши правнуки спрашивают у вас совета.',
        'Ваша философия звучит вашим собственным голосом.',
        'Ваши любовные письма читаются через столетия.',
        'Ваш смех слышат те, кто никогда вас не встречал.',
      ],
      subtitle:
        'Это не научная фантастика. Это направление, к которому мы движемся, шаг за шагом, разговор за разговором.',
      cta: 'Начать ваше наследие',
    },
    bento: {
      label: 'Чем мы отличаемся',
      headlinePre: 'Цифровой двойник,',
      headlineAccent: 'не база данных.',
      subtitle:
        'Шесть вещей, которые отделяют Neora от всего, что пыталось сохранить человека.',
      cards: {
        living: {
          title: 'Живая ИИ-модель',
          desc: 'Не статический архив — постоянно развивающаяся модель, которая думает, решает и отвечает в реальном времени.',
        },
        voice: {
          title: 'Ваш голос, ваш стиль',
          desc: 'Говорит как вы, шутит как вы, даже делает паузы как вы. Паттерны, которые делают вас вами.',
        },
        memory: {
          title: 'Память, которая растёт',
          desc: 'Каждый разговор углубляет модель. Двойник становится острее, теплее и больше похож на вас со временем.',
        },
        privacy: {
          title: 'Приватность по умолчанию',
          desc: 'Сквозное шифрование. Даже наша команда не может читать ваши данные.',
        },
        controls: {
          title: 'Семейный контроль',
          desc: 'Вы решаете кто, когда и что — сейчас и навсегда.',
        },
        always: {
          title: 'Всегда доступен',
          desc: 'Где угодно, в любое время, столько, сколько нужно близким.',
        },
      },
    },
    demo: {
      label: 'Попробуйте сейчас',
      headlinePre: 'Что бы сказал ваш',
      headlineAccent: 'двойник?',
      subtitle:
        'Напишите мысль, мнение или воспоминание, которым бы поделились с будущим двойником. Мы покажем, что Neora извлечёт из этого.',
      placeholder: 'Напишите воспоминание, мнение или любимую историю…',
      cta: 'Показать',
      thinking: 'Neora обучается…',
      resultLabel: 'Что улавливает Neora',
      reset: 'Попробовать ещё',
      analyzing: {
        tone: 'Тон',
        themes: 'Темы',
        memory: 'Сохранено как память',
        toneOptions: ['тёплый', 'вдумчивый', 'остроумный', 'прямой', 'рефлексивный', 'нежный'],
        themeOptions: [
          'семья',
          'работа',
          'любовь',
          'личность',
          'мудрость',
          'юмор',
          'вера',
          'место',
          'время',
          'благодарность',
        ],
      },
      noteLabel: 'Заметка',
      note: 'Это крошечный живой предпросмотр — настоящий двойник обучается на часах разговоров, не на одной фразе.',
    },
    useCases: {
      label: 'Создано для каждого',
      headlinePre: 'Чья история',
      headlineAccent: 'будет жить?',
      subtitle: 'Neora создана для людей, чьи голоса заслуживают остаться.',
      items: [
        {
          title: 'Семьи',
          desc: 'Бабушки и дедушки, сохранённые для внуков. Мудрость за обеденным столом, которая всегда исчезает — наконец сохранена.',
          tag: 'Любимое',
        },
        {
          title: 'Основатели и лидеры',
          desc: 'Десятилетия суждений, уроков и инстинктов — доступны следующему поколению строителей в вашей компании или семье.',
          tag: '',
        },
        {
          title: 'Художники и писатели',
          desc: 'Творческий голос, который не умолкает. Продолжайте разговор о своей работе ещё долго после последнего интервью.',
          tag: '',
        },
        {
          title: 'Все, у кого есть истории',
          desc: 'Не нужно быть знаменитым, чтобы быть неповторимым. Каждая жизнь — это вселенная, достойная сохранения.',
          tag: '',
        },
      ],
    },
    pricing: {
      label: 'Цены',
      headlinePre: 'Для каждого',
      headlineAccent: 'наследия.',
      subtitle:
        'Финальные цены объявим при запуске. Мы привержены бесплатному тарифу, чтобы никто никогда не остался без сохранения.',
      perMonth: '/ месяц',
      comingSoon: 'Стартовая цена',
      tiers: [
        {
          name: 'Бесплатно',
          price: '$0',
          tagline: 'Начните свой архив',
          cta: 'Записаться',
          features: [
            'Начните обучение двойника',
            'До 2 часов разговоров в месяц',
            'Только личный доступ',
            'Стандартное шифрование',
          ],
          highlighted: false,
        },
        {
          name: 'Personal',
          price: '$99',
          tagline: 'Глубокое обучение, полное присутствие',
          cta: 'Забронировать',
          features: [
            'Безлимитное время разговоров',
            'Клонирование голоса включено',
            'Хранение графа памяти',
            'Приоритетные вычисления',
            'Гибкая настройка доступа',
            'Пожизненное владение данными',
          ],
          highlighted: true,
        },
        {
          name: 'Family Legacy',
          price: '$299',
          tagline: 'На поколения',
          cta: 'Забронировать',
          features: [
            'Всё из Personal',
            'До 5 членов семьи',
            'Права доверенных опекунов',
            'Политики доступа поколений',
            'Персональная поддержка при старте',
            'Консьерж-планирование наследия',
          ],
          highlighted: false,
        },
      ],
    },
    finalCta: {
      eyebrow: 'Решение простое',
      lineA: 'Некоторые вещи',
      lineB: 'не должны',
      lineC: 'исчезать.',
      sub: 'Включая вас.',
      cta: 'Начать ваше наследие',
    },
    about: {
      label: 'О нас',
      headlinePre: 'Почему мы создаём',
      headlineAccent: 'Neora.',
      story:
        'Мы небольшая команда, которая теряла близких. Мы знаем, каково это — хотеть задать ещё один вопрос, услышать ещё одну историю, почувствовать присутствие. Поэтому мы строим то, чего нам самим не хватало. Не потому что это легко — а потому что некоторые вещи не должны исчезать.',
      team: 'Небольшая, преданная команда — там, где живёт любовь.',
      founders: [
        {
          name: 'Хусан Ашуралиев',
          role: 'Со-основатель',
          bio: 'Я хочу, чтобы мои дети знали своих бабушек и дедушек — не из рассказов, а из разговоров.',
          initials: 'ХА',
          location: 'Ташкент',
        },
        {
          name: 'Амиршох Хакимов',
          role: 'Основатель',
          bio: 'Я начал Neora, чтобы никому больше не пришлось говорить: «Жаль, я не успел спросить ещё одно».',
          initials: 'АХ',
          location: 'Ташкент',
        },
      ],
    },
    testimonials: {
      label: 'Первые голоса',
      headlinePre: 'Слова тех, кто',
      headlineAccent: 'поверил первым.',
      subtitle:
        'Небольшая группа людей уже формирует будущее Neora AI. Вот что они говорят.',
      items: [
        {
          quote:
            'Когда я потеряла дедушку, я очень хотела задать ему ещё один вопрос. Neora — первое, что заставило меня поверить, что это возможно.',
          author: 'Анна К.',
          role: 'Писатель · Берлин',
          initials: 'АК',
        },
        {
          quote:
            'Я построил три компании, но ничего не записывал. Neora улавливает то, что я на самом деле думаю — не только то, что я сделал.',
          author: 'Дэвид М.',
          role: 'Основатель · Сан-Франциско',
          initials: 'ДМ',
        },
        {
          quote:
            'Звучит правда как я. Моя жена на мгновение не смогла отличить, и тогда я понял.',
          author: 'Хироси Т.',
          role: 'Архитектор · Токио',
          initials: 'ХТ',
        },
        {
          quote:
            'Мои дети смогут слушать меня ещё долго после того, как меня не станет. Этому нет цены.',
          author: 'Мария Л.',
          role: 'Учитель · Мадрид',
          initials: 'МЛ',
        },
        {
          quote:
            'Я годами пытался вести дневник. Это впервые ощущается так, будто что-то действительно сохраняется.',
          author: 'Самуэль О.',
          role: 'Врач · Лагос',
          initials: 'СО',
        },
        {
          quote:
            'Меня убедили настройки приватности. Я решаю всё — кто, что и когда.',
          author: 'Елена Р.',
          role: 'Юрист · Буэнос-Айрес',
          initials: 'ЕР',
        },
      ],
    },
    faq: {
      label: 'Частые вопросы',
      headlinePre: 'Всё, что вы',
      headlineAccent: 'хотели спросить.',
      subtitle:
        'Честные ответы на вопросы, которые задают чаще всего перед регистрацией.',
      items: [
        {
          q: 'Что произойдёт с моим двойником, когда меня не станет?',
          a: 'Ваш двойник продолжает существовать. Вы заранее решаете, кто может с ним говорить, какие темы обсуждать, и останется ли он приватным для семьи или открыт миру. Ничего не произойдёт без вашего решения.',
        },
        {
          q: 'Кто имеет доступ к моим данным?',
          a: 'Только вы и те, кому вы явно дали разрешение. Все персональные данные зашифрованы сквозным шифрованием. Сотрудники Neora не могут читать ваши разговоры или обучающие материалы.',
        },
        {
          q: 'Может ли моя семья удалить двойника позже?',
          a: 'Да. Вы назначаете доверенных людей, которые могут приостановить, ограничить или окончательно удалить вашего двойника, если вы этого захотите. Это настраивается и обратимо до окончательного удаления.',
        },
        {
          q: 'Это просто ChatGPT в обёртке?',
          a: 'Нет. Универсальные чат-боты отвечают как среднее значение интернета. Neora дообучается на ваших конкретных паттернах мышления, языка и памяти — он звучит как вы, а не как модель.',
        },
        {
          q: 'Сколько времени нужно, чтобы создать хорошего двойника?',
          a: 'Значимая версия создаётся за несколько часов разговора. Глубина растёт естественно за недели и месяцы, когда вы говорите с Neora о большем числе областей вашей жизни.',
        },
        {
          q: 'Сколько это будет стоить?',
          a: 'Цены будут объявлены на запуске. Мы привержены бесплатному тарифу, чтобы наследие никогда не зависело от доступности. Премиум-планы будут финансировать более тяжёлые вычисления.',
        },
        {
          q: 'А если я передумаю?',
          a: 'Вы можете приостановить обучение в любой момент, экспортировать всё, чем вы поделились, и окончательно удалить двойника. Ваши данные принадлежат вам.',
        },
      ],
    },
    waitlist: {
      label: 'Ранний доступ',
      headlinePre: 'Будьте среди',
      headlineAccent: 'первых.',
      subtitle:
        'Neora AI скоро запустится. Присоединяйтесь к листу ожидания, и мы свяжемся с вами, когда ваше место будет готово.',
      emailPlaceholder: 'ваш@email.com',
      submit: 'Записаться',
      submitting: 'Записываем…',
      successTitle: 'Вы в списке.',
      successDefault: 'Вы в списке.',
      duplicateTitle: 'Вы уже зарегистрированы!',
      duplicateDefault: 'Вы уже в списке!',
      errorInvalid: 'Пожалуйста, введите действительный email.',
      errorNetwork: 'Ошибка сети. Проверьте подключение и попробуйте снова.',
      errorGeneric: 'Что-то пошло не так. Попробуйте снова.',
      footnote: 'Без спама. Без обязательств. Отписаться можно в любой момент.',
    },
    contact: {
      label: 'Связаться',
      headlinePre: 'Есть',
      headlineAccent: 'вопрос?',
      subtitle:
        'Мы с радостью вас выслушаем. Отправьте сообщение, и мы ответим как можно скорее.',
      nameLabel: 'Имя',
      namePlaceholder: 'Иван Иванов',
      emailLabel: 'Email',
      emailPlaceholder: 'вы@пример.com',
      phoneLabel: 'Телефон',
      phoneOptional: '(необязательно)',
      phonePlaceholder: '+7 (777) 000-0000',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Расскажите, что у вас на уме…',
      send: 'Отправить',
      sending: 'Отправка…',
      successTitle: 'Сообщение получено.',
      successBody: 'Спасибо за обращение. Мы скоро вам ответим.',
      sendAnother: 'Отправить ещё одно',
      responseTime: 'Обычно мы отвечаем в течение 24 часов.',
      errorRequired: 'Пожалуйста, заполните имя, email и сообщение.',
      errorInvalidEmail: 'Пожалуйста, введите действительный email.',
      errorNetwork: 'Ошибка сети. Проверьте подключение.',
      errorGeneric: 'Что-то пошло не так. Попробуйте снова.',
    },
    footer: {
      tagline: 'Ваш разум. За пределами времени.',
      navHeading: 'Навигация',
      productHeading: 'Продукт',
      companyHeading: 'Команда',
      legalHeading: 'Юридическое',
      builtIn: 'Создано в Ташкенте · Узбекистан',
      statusLabel: 'Скоро запуск',
      description:
        'Живой цифровой двойник вашего разума — воспоминания, личность и голос. Сохранено навсегда.',
      newsletterTitle: 'Будьте в курсе.',
      newsletterSub: 'Узнайте первыми, когда Neora откроется публично.',
      newsletterPlaceholder: 'ваш@email.com',
      newsletterCta: 'Подписаться',
      newsletterSubmitting: 'Подписываем…',
      newsletterSuccess: 'Вы подписаны.',
      newsletterAlready: 'Вы уже подписаны.',
      newsletterError: 'Что-то пошло не так. Попробуйте снова.',
      nav: {
        story: 'История',
        howItWorks: 'Как это работает',
        technology: 'Технология',
        vision: 'Видение',
        waitlist: 'Запись',
      },
      legal: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
      },
      rights: 'Все права защищены.',
      createdBy: 'Создано',
      teamName: 'командой Neora AI',
    },
  },
} as const

export type Translation = (typeof translations)['en']
