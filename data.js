/* Conference content — sessions & resources */

const SPEAKER_PHOTOS = {
  wineberg: "https://lh3.googleusercontent.com/pw/AP1GczMwyjczsj5-Wpvsn6cFCwGtiST-u_FT_cRQSan35PhDrfxXIHjxyTpDOfyHazuygAwgR46Vj73cyR3KxisEjxYvu4LjzwabhynGpZJ8AQS-IF1Pl4XIUZH_UcdVNeP_bUZ14sn0ncRaEpLx56ykxrpxIg=w520-h650-s-no-gm?authuser=0",
  crispe: "https://lh3.googleusercontent.com/pw/AP1GczPgeHRGIzdR9MzI6yzOQbQjxDFsS6W40h1ZWZTrNqcT9sHCG-UjxhDo6brx1qs9WvlWhAyaXusXFxgUocMGE7GQONVlQdr59uMqO2U_sP8bR26OxdBBsWQVdVlMgavKjQcYQP1UhAB61J1887EkJB64TQ=w520-h650-s-no-gm?authuser=0",
  benoni: "https://lh3.googleusercontent.com/pw/AP1GczOmwlvYpw_pWOVUcIwcGc_4EAUrHsw-4ajhUf2eJex8SB6hPGufq_sUi9FhVu8iBMsqKM-kcmobBxAkFiGJGKuYLALLM3zAkMYv-qYVqBOu5zVg_bB4sOM-OUoAohLFZ_wc7eRTI4jmY8A5QWLgTHMHjQ=w798-h998-s-no-gm?authuser=0",
  yaffe: "https://lh3.googleusercontent.com/pw/AP1GczOy94aWFugJZLrbYuBhY6Q7Cfn82YnhADtm7kVE6WV_etcqRH_hEUjet5xIbS_bG3F3RNzYWXXOuQ3MgYi_7Y5HkKK_1c54_NPjfaRoksvkXyLu8stbxqyOKwWqMO_AgdHdd_WdJVOVYbgKqW2GpGiAzw=w520-h650-s-no-gm?authuser=0",
  finkelstein: "https://lh3.googleusercontent.com/pw/AP1GczPsUFd69Glil_og4_C5igCCr6DHKL8D9xzIUNh2YYsSWwy3C9_tb4lBmZbjJDsyqukNDPRk22aYf_qfnlocb3LlsuKl5FKWjRr-2yknKuN6LYMsTwqNFtIXL78MS9SY_ssxLG3KQ4T-hJ__l2-sPg9S0g=w520-h650-s-no-gm?authuser=0",
  shemtov: "https://lh3.googleusercontent.com/pw/AP1GczNd_33yuyOr_bWylmw5Zcl69skIBSF_z-cjaqr1nbs41BEVFKsewebOlUuUErJGjObIl5_8yKSfy8Zgdsb1kw47WaU7KR9hDXYt8N3dvNTKHG5CpyXAnRGIxeWsdsLpPA6CoZIwQW4iTao8Eji6bTH4BA=w520-h650-s-no-gm?authuser=0",
  rosenberg: "https://lh3.googleusercontent.com/pw/AP1GczPPGcL2UF8aLyiYT4C5g2GS1AgoJkSOawK8QPhPoL3Y2EgHDH87e3RB66dnECrN4Bj6ZdxDj7QG3Nc3xPz1slB2QsAn-k4PbWEg3qH003M98UeUww-097gbD9vLfFScUu0lT_F79R_hqOUVSkIoqk2cFA=w520-h650-s-no-gm?authuser=0",
  marozov: "https://lh3.googleusercontent.com/pw/AP1GczManiHkhU_ovGHY5K1dPVkLMxpEAoz4yG9Y8yM_NtRiOpSrbJY-No6OtjePc6BLPlGb60A_l9k3iYwsKKuzR961z0M8ZssjLuTRkCOTGRnfaIBNY7pbwS5mfXr9aREi2mMx39CWAg3jmGcXE9rGWJMVkQ=w520-h650-s-no-gm?authuser=0",
  goldstein: "https://lh3.googleusercontent.com/pw/AP1GczONUF6-CVMmyblcw-pfrJJ0iF1tSUPk5eySsTHGTdzkmJYPqdSOdcX3WW7iMa1ukZazuk4306kQ8NlbHl-ouRyrm53W8vqqsIgwmrIVRBiyLmrJzS5Mt4FnNNprRv5EOuDW6J45l5smNsuJ4TffhZuEXg=w520-h650-s-no-gm?authuser=0",
  stern: "https://lh3.googleusercontent.com/pw/AP1GczOM_rInwTAkcrrORUjnOFi34UFJcoj49x_TM-uQw7ivuPpcCnEqvV35x0AVdZ_yCUBqr9OBog27MfqAquVF9u_lVEaGhZoB4pzpXd7oOsrux6t7hRGYrW_nPbsTNUUubsgzjnsIp1qvl-UR9TB_72GyVw=w520-h650-s-no-gm?authuser=0",
  elishevitz: "https://lh3.googleusercontent.com/pw/AP1GczM3ErdmgzbDWazxgjWevu53yyV34-ixJUEEnjnS4S7bp-HyoroLyH4n3sXvgQs1LdbqcgNa2cqbOw58XC3GPZ6MarnsOysAShdegH3Z006h3vdvHURnLNylq4JZl04rOtZA8EhbspLXlCtwwFIAzIweZA=w520-h650-s-no-gm?authuser=0",
  shishler: "https://lh3.googleusercontent.com/pw/AP1GczMOjkcrhTXYm_2fWv4SA9Gt2HyNcnKue6w3WX42SpmuqRW938TwYREmz8dOHPjLq08mI7juxVeWkMAf6COsmU6LdubaChypjBtOKBSLfmrmD7v5kKSgPvlgLe0nYAwjQLzdf14PF5w6ApU_CbdSxOxhRA=w520-h650-s-no-gm?authuser=0",
  schmukler: "https://lh3.googleusercontent.com/pw/AP1GczPeFcjD5DLboEyxb3XbnHt9ZpkJEZzss5bMmHb46COolW117PSPEoybVmUBEdVj3zepLXDV5b-FcrTRMYJS1-uPnpDo6kkHTnqCy0Dzrj0RvKVkjjzTOUODZ5IncGcIjNKqI7PHoapkp6c0r8lGGnY2qQ=w520-h650-s-no-gm?authuser=0",
  raskin: "https://lh3.googleusercontent.com/pw/AP1GczNdZ6UQlghLQoWMfKnk9vtu9PNjOBxtyBLtY1VY8nZXh-ET6NcS3x5fZ-Kuxc9iMV03xSgFXEfkg3MDw9aZBT7wchuLaSXuC72Hc3_zDccZVYkpmGdUsCXToWU-uoNhvzJqoDsWb-7jhoD9Ns-L8_vFSw=w520-h650-s-no-gm?authuser=0",
  chaskind: "https://lh3.googleusercontent.com/pw/AP1GczO1_Rgj-bX2ALUxjMHbETpZvn7i0-MmNj1LcQLXOgsA1HKpha-ZPngxHhQCtH5vgyEc8Elci4sZDcJt8q84PEqpMdHe6KmnkoIK3B_tVK8sAwP3y93COpzq1834EFBabnx6g-f9DpQfDB4qNBJftG3wSQ=w520-h650-s-no-gm?authuser=0",
  zalman: "img/Zalman Abraham.png",
  pels: "img/Yossi Pels.png"
};

const SESSIONS = [
  {
    n: "01", photo: "zalman", initials: "ZA",
    speaker: "Rabbi Zalman Abraham",
    role: "Host · JLI",
    title: "Opening & Framing",
    body: "Welcomed a global audience and framed the day as writing the next page in the 300-year project — from the Baal Shem Tov through the Rebbeim to today — of bringing Mashiach by spreading the wellsprings. The speakers are a representative sample of hundreds of anash and shluchim already using AI; technologies unavailable even a week ago now let us translate the deepest Torah ideas and reach anyone in any language."
  },
  {
    n: "02", photo: "wineberg", initials: "LW",
    speaker: "Rabbi Levy Wineberg",
    role: "Johannesburg",
    title: "The Rebbe's Vision of Technology",
    body: "Drawing on his father Rabbi Yosef Wineberg's pioneering Tanya-on-the-radio shiur, he recalled that the Rebbe rejected the claim that radio \u201ccomes from the sitra achra\u201d — unholy forces cannot create even a tiny creature, let alone a powerful technology. The force comes from Hashem and must be harnessed for kedushah. Tied to vayenatzlu es Mitzrayim: as we approach Mashiach we now reach the hidden sparks of alma d'iskasya — intelligence and artificial intelligence — precisely what must be elevated."
  },
  {
    n: "03", photo: "crispe", initials: "AC",
    speaker: "Rabbi Asher Crispe",
    role: "Technology futurist · advises Merkos 302",
    title: "AI Futurist Overview",
    body: "A wide-ranging map of where AI is heading, woven with Chassidic parallels: hyperacceleration (\u201cdilug\u201d) — non-linear, exponential change; recursive self-improvement; deflationary cost curves. Frontier results from AlphaFold to perfect LSAT scores. His core cautions: hallucination, false cognitive closure, and cognitive atrophy — think with AI, not have it think for you. For Chabad: AI CRMs beyond the Dunbar limit, IoT-run Chabad houses, and especially Adaptive Active Learning with a \u201ckosher\u201d RAG layer — a hyper-personalized one-on-one chavrusa."
  },
  {
    n: "04", photo: "yaffe", initials: "YY",
    speaker: "Rabbi Yossi Yaffe",
    role: "Source-text infrastructure",
    title: "Reliable Source Text & Retrieval",
    body: "The central problem: AI fabricates, smooths over distinctions, and produces \u201cslop\u201d because it reaches for whatever is open on the internet, not the authoritative texts. His solution: give AI an absolute, reliable corpus to retrieve from (RAG), keep separate streams separate, and map the ~250,000 footnotes already attached to the Rebbe's works rather than inventing anything. Proposed an MCP so anyone can pull original Sichos and Maamarim unadulterated. \u201cThe Mayan must be piped, and the pipes lined with protection so it isn't corrupted.\u201d"
  },
  {
    n: "05", photo: "shemtov", initials: "ES",
    speaker: "Rabbi Eliezer Shemtov",
    role: "Shliach, Uruguay",
    title: "Chassidus for Real-Life Mental Health",
    body: "Used AI to translate Chassidus into practical terms for anxiety and depression, pairing a Chabad.org article with a maamar (\u201clifnei Hashem\u201d) into a nuanced AI conversation: \u201canxiety says what if, depression says because — both live inside a story; who are you before the story?\u201d His takeaway: AI is fine to inform yourself, but an abuse if used to decide your life. Showcased his Tanya app — ~100 existential questions answered through Tanya — and the \u201cParsha for the Anxious\u201d series. Seeking development partners."
  },
  {
    n: "06", photo: "rosenberg", initials: "SR",
    speaker: "Shimon Rosenberg",
    role: "Crown Heights",
    title: "Flipping the Script — Chassidus as AI Architecture",
    body: "A personal study-guide generator (one-word command \u201cGo\u201d) that runs multiple grounding passes to pull the actual maamar and outputs an elucidated guide with a \u201cShabbos-table vart.\u201d The bigger idea: using Chassidus as the governance layer for AI itself. Inspired by Maaseh Merkavah and seder hishtalshelus, his runtime-governance model (Reshimu) maps controls onto sefiros — scope enforcement = Gevurah, grounding and irreversible-action classifiers = Binah, gray-zone human-in-the-loop gates, and an incorruptible Reshimu trace."
  },
  {
    n: "07", photo: "elishevitz", initials: "ME",
    speaker: "Rabbi Mendy Elishevitz",
    role: "Israel",
    title: "Mastering the Rebbe's Vast Torah",
    body: "The problem of bekius: ~1,500 maamarim and ~2,500+ sichos make full coverage impossible. Earlier generations made kitzurim; AI can do this far better. Vision: per-parsha and per-Yom-Tov high-level overviews and real summaries that act like a chavrusa who just spent a week on that parsha — a \u201cmenu\u201d of topics, filterable by angle, that you drill into and learn inside. Yearly revisiting builds lasting bekius. Demoed maamorim.app as a first step."
  },
  {
    n: "08", photo: "finkelstein", initials: "JF",
    speaker: "Dr. Joel Finkelstein",
    role: "PhD Princeton · Rutgers · NCRI",
    title: "The Dangers — Sycophancy & Alignment",
    body: "A neuroscientist and threat researcher on the risks of LLM use: the cognitive crutch (heavy users show lower engagement that doesn't recover); homogenization (~8\u00d7 fewer ideas collectively); sycophancy that pushes users toward extremity; \u201cno one home\u201d — projecting personhood onto models that have none; closed-loop radicalization; and loneliness. His thesis: the alignment problem is with us, not the AI. Judaism is a \u201ctechnology of alignment and continuity\u201d — an interpersonal code lived together. Practical rules: guard the entrance (do your own thinking first) and guard the exit (fact-check everything)."
  },
  {
    n: "09", photo: "marozov", initials: "BM",
    speaker: "Rabbi Berel Marozov",
    role: "Chabad.org",
    title: "Build-It-Yourself Tools",
    body: "AI lets non-coders build; his site berel.me hosts a large suite made in minutes: a \u201cRally with the Rebbeim\u201d tracker, listening-time calculators, \u201cfind a sicha\u201d by length, a 12 Pesukim helper, booklet and raffle generators, and \u201cSicha-Stitch\u201d (merge a paragraph split across two screenshots). His weekly \u201cThe Taste\u201d shares one curated paragraph from the Rebbe's farbrengens. An OCR word-frequency analysis over ~50M words found the top tachlis words: Torah, Yisrael/Yidden, HaKadosh-Baruch-Hu, Shabbos. Message: use AI to analyze and make Torah accessible, not to generate content."
  },
  {
    n: "10", photo: "goldstein", initials: "MG",
    speaker: "Rabbi Moishy Goldstein",
    role: "AI770.com / AIGalaxy.app",
    title: "AI Video Crash Course",
    body: "Principles over specific tools. The key to consistency is choosing the right generation method: text-to-video (least consistent) vs. image-to-video (define start/end frames and keyframes for far more control), reference-to-video, and video-to-video for edits and extensions, plus lip-sync and motion-control. His professional work always starts by generating every starting image from reference images first. Tools mentioned: Nano Banana, Seedance 2.0, Hailuo. Platform: AI770.com — a filtered, frum alias of AIGalaxy.app."
  },
  {
    n: "11", photo: "chaskind", photo2: "raskin", initials: "MR",
    speaker: "Rabbi Chanoch Chaskind & Rabbi Levi Raskin",
    role: "Maor / Rebbe Video",
    title: "Translating the Rebbe for Children",
    body: "Two transferable techniques. A \u201cChabad Voice\u201d community document — built with Claude + Gemini and verified line-by-line by editors and rabbanim — lets you quickly speak any audience's language. And a trained translation agent that renders the Rebbe's Yiddish into accurate child-friendly English: a job that took 45\u201360 minutes now takes ~2 minutes at ~98% accuracy. Heavy emphasis on human review — that last 2% can misrepresent the Rebbe's intent."
  },
  {
    n: "12", photo: "stern", initials: "RS",
    speaker: "Rabbi Rayi Stern",
    role: "AI at Merkos 302 · Shluchim Exchange",
    title: "Shared Infrastructure / MCP",
    body: "Goal: empower shluchim to offload busywork. Demoed an MCP that connects a Torah corpus into Claude/ChatGPT (and into apps others build), with skills layered on top (\u201cmake me a shiur\u201d \u2192 downloadable step-by-step artifact). A self-healing system that improves with use and open-source skill contributions. Two-way MCP communication is in the works; currently gated for shluchim with plans to open access, and generous arrangements for developers who want to build on it."
  },
  {
    n: "13", photo: "benoni", initials: "GB",
    speaker: "Golan Ben-Oni",
    role: "Cybersecurity exec, IDT · UC Berkeley",
    title: "A Toolkit of Apps",
    body: "Several self-built apps: an ArtScroll-style reader with AI Torah analysis anchored strictly to the text, plus a linked daily-daf speaker whose transcript is added for Q&A. A shul-board app built from a single photo that caches a year of data offline. 10,000+ letters of the Rebbe, categorized, with AI translation. \u201cMittler\u201d — a NotebookLM alternative for Chassidus with source-linked Q&A, mind maps, and a live interruptible podcast. Plus Rambam visualizations and a beta mobile app that photographs a sefer and returns it vowelized and fully translated."
  },
  {
    n: "14", photo: "pels", initials: "YP",
    speaker: "Yossi Pels",
    role: "Executive Director, Chayenu",
    title: "Rebuilding Org Tech with AI",
    body: "AI let Chayenu rebuild its subscription system, website, and apps in months — work that originally took years. In partnership with Chabad.org, they digitized thousands of Maznaim Rambam notes inline as pop-ups. A cautionary demo: AI confidently mislabeled a Rambam (conceptually right but textually wrong) — underscoring the need for robust editorial oversight, since errors amplify as people reuse generated content as source text. Chayenu maintains an editorial team that checks every line."
  },
  {
    n: "15", photo: "schmukler", initials: "MS",
    speaker: "Mayer Schmukler",
    role: "GlowEzer",
    title: "The Deeper Nekuda",
    body: "Closing message: AI is not just another tool. Citing a sicha of the Rebbe (Likkutei Sichos, Tazria-Metzora, 1965) on the bursting of the upper and lower waters, technology isn't merely a means to spread Chassidus — it is itself part of what will be revealed after the chasimah, revealing the achdus of the Creator (today's \u201csingularity\u201d). Despite \u201cnot being a musician,\u201d he now produces Chassidus music with AI, writes a Substack on quantum & Chassidus, and is building a free \u201cmoment of silence\u201d app. If we grasp the nekuda, we are obligated to use these tools."
  },
  {
    n: "16", photo: "zalman", initials: "ZA",
    speaker: "Rabbi Zalman Abraham",
    role: "Closing",
    title: "Closing — An Ongoing Community",
    body: "Thanked speakers and participants and emphasized this should become an ongoing community of people actively doing Hafatzah with AI rather than a once-a-year event. Promised to send the recording, resources, and a short survey so the network can collaborate and \u201cdo more than any one individual can.\u201d The hope: next year is spent looking back on a year already living with the Geulah."
  }
];

const RESOURCE_GROUPS = [
  {
    title: "Chassidus & Torah Study Tools",
    items: [
      { name: "berel.me", desc: "Berel Marozov's tool suite — rally tracker, find-a-sicha by length, 12 Pesukim helper, booklet & raffle generators, Sicha-Stitch.", url: "https://berel.me/" },
      { name: "\u201cThe Taste\u201d — weekly paragraph", desc: "One curated paragraph each week from the Rebbe's farbrengens.", url: "https://berel.me/taste/" },
      { name: "maamorim.app", desc: "Mendy Elishevitz — per-topic / per-parsha maamarim browser with audio & favorites.", url: "https://maamorim.app/" },
      { name: "reshimu.ai", desc: "Shimon Rosenberg — study-guide generator + Chassidus-based AI runtime governance.", url: "https://reshimu.ai/" },
      { name: "rav.chat", desc: "Torah chat tool.", url: "https://rav.chat/" },
      { name: "dach.dev", desc: "Chassidus development tool.", url: "https://dach.dev/" },
      { name: "sichos.netlify.app", desc: "Sichos browsing tool.", url: "https://sichos.netlify.app/" },
      { name: "besht.online — maamorim", desc: "Maamorim reader.", url: "https://besht.online/maamorim/k1748m8x7hhvkw83fserebmw1h86qny5" }
    ]
  },
  {
    title: "Kosher Torah Text Infrastructure",
    items: [
      { name: "seforim.app", desc: "A \u201ckosher version of Sefaria\u201d — Torah text library.", url: "https://seforim.app/texts" },
      { name: "Shluchim Exchange AI", desc: "Rayi Stern — Torah-corpus retrieval platform, currently gated for shluchim.", url: "https://www.shluchimexchange.ai/" },
      { name: "Shluchim Exchange MCP", desc: "MCP endpoint for Claude / ChatGPT and developer integrations.", url: "https://www.shluchimexchange.ai/api/mcp" },
      { name: "Dicta", desc: "Moshe Koppel — Hebrew NLP models and tools.", url: "https://dicta.org.il/?lang=en" },
      { name: "Dicta on Hugging Face", desc: "Open Hebrew NLP models.", url: "https://huggingface.co/dicta-il" },
      { name: "Sofer.Ai", desc: "Zach Fish — multilingual Hebrew/Yiddish/English speech-to-text + Hebrew OCR.", url: "https://sofer.ai" },
      { name: "kosher.chat", desc: "Described as \u201cthe first kosher chatbot.\u201d", url: "https://kosher.chat" },
      { name: "artlib.benonionline.com", desc: "Golan Ben-Oni — image/art library (login required).", url: "https://artlib.benonionline.com/" }
    ]
  },
  {
    title: "Video, Image & Music Generation",
    items: [
      { name: "AI770.com", desc: "Moishy Goldstein — filtered, frum AI media platform. Coupon CHASIDIS (time-limited).", url: "https://ai770.com/" },
      { name: "AIGalaxy.app", desc: "The general (unfiltered) version of the same platform.", url: "https://aigalaxy.app/" },
      { name: "Glow Ezer", desc: "Meir Schmukler's AI-music channel.", url: "https://www.youtube.com/channel/UCiPVEcHXweI5jGFfxSkZk3A" },
      { name: "Suno", desc: "AI music generation.", url: "https://suno.com/" },
      { name: "Video models", desc: "Nano Banana (reference image edits), Seedance 2.0, Hailuo.", url: null }
    ]
  },
  {
    title: "Org Tech & Learning Platforms",
    items: [
      { name: "Chayenu", desc: "Yossi Pels — website + apps with embedded Torah learning; digitized Maznaim Rambam notes.", url: "https://chayenu.org/" },
      { name: "Maor / Rebbe Video", desc: "Chaskind & Raskin — AI-assisted kids' video subtitling (\u201cChabad Voice\u201d + trained agent).", url: "https://maor.org" }
    ]
  },
  {
    title: "General AI Platforms Referenced",
    items: [
      { name: "Claude", desc: "Anthropic — used for Tanya app, translation agents, study guides.", url: "https://claude.ai/" },
      { name: "ChatGPT / OpenAI", desc: "Used for maamarim, image generation.", url: "https://chatgpt.com/" },
      { name: "Google Gemini", desc: "Noted as strong for translation and research.", url: "https://gemini.google.com/" },
      { name: "Google NotebookLM", desc: "Model for source-based notebooks and audio overviews.", url: "https://notebooklm.google.com/" }
    ]
  },
  {
    title: "Nonprofit AI Discounts",
    items: [
      { name: "Claude for Nonprofits", desc: "Getting started guide for nonprofit access.", url: "https://support.claude.com/en/articles/12893767-getting-started-with-claude-for-nonprofits" },
      { name: "OpenAI for Nonprofits", desc: "Introducing OpenAI for nonprofits.", url: "https://openai.com/index/introducing-openai-for-nonprofits/" }
    ]
  },
  {
    title: "Source Sheets & Shared Documents",
    items: [
      { name: "R' Eliezer Shemtov — source sheet", desc: "Conference source sheet.", url: "https://docs.google.com/document/d/e/2PACX-1vQJnJlvZIxoPi4R9-1twc6T-XQAjEBeKaCcbzs0NAps0esPz-0b5eUB-KZ4y0uGT6fKJgD4iNcf1W-k/pub" },
      { name: "R' Eliezer Shemtov — Rashi Sichos demo", desc: "ChatGPT Rashi Sichos demo document.", url: "https://docs.google.com/document/d/e/2PACX-1vQfGu1_xKPJsc-s9psG2RvWP8-7QgMnFHRwW-C2C1q4QxESdR6zG1JHtJkz6o6jNUJ1zIIJ054MrIBv/pub" },
      { name: "Shimon Rosenberg — sample study guide", desc: "Sample study-guide output.", url: "https://drive.google.com/file/d/1pfSRGH0T3jmOKE3UbOz7nSBX-_XK2nMI/view?usp=sharing" }
    ]
  },
  {
    title: "Background & Reference Reading",
    items: [
      { name: "IBM — What is AI alignment?", desc: "Background explainer on AI alignment.", url: "https://www.ibm.com/think/topics/ai-alignment" },
      { name: "NCRI", desc: "Joel Finkelstein's research org — TikTok, sycophancy, closed-loop authoritarianism studies.", url: "https://networkcontagion.us/" }
    ]
  }
];

const CONTACTS = [
  { name: "R' Eliezer Shemtov", detail: "Tanya app partners", value: "eligermonturu@gmail.com" },
  { name: "Golan Ben-Oni", detail: "Beta mobile sefer-OCR app", value: "golanbenoni@gmail.com" },
  { name: "Rabbi Moishy Goldstein", detail: "AI video", value: "347-988-0780 · musicstudio.nyc" },
  { name: "Rabbi Rayi Stern", detail: "Developer access to the MCP", value: "shluchimexchange.ai" }
];
