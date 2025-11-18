import stormee from "@/components/media/stormee.png"
import youtube from "@/components/media/youtube.png"
import connect from "@/components/media/connect.png"
import detective from "@/components/media/detective.png"
import brainos from "@/components/media/brainos.png"

const projects =  [
  {
    "title": "BrainOS",
    "description": "Unify scattered knowledge into interactive clouds with search + AI",
    "webURL": "https://www.linkedin.com/feed/update/urn:li:activity:7363743842027659264/",
    "current": true,
    "logo": brainos,
    "skills": ["Full-Stack Architecture", "RAG Systems", "AI Search", "Knowledge Management", "Next.js + Supabase", "UI/UX"],
    "medias": [
      // {
      //   "name": "Overview Demo",
      //   "url": "https://youtu.be/your-demo-link",
      //   "media": null
      // },
      {
        "name": "Launch post",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7363743842027659264/",
        "media": null
      }
    ]
  },
  {
    title: "Linkeder",
    description: "Search for your perfect connection over 1000 (fake) student profiles.",
    webURL: "https://lnkd.in/dnavHWaN",
    logo: connect,
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Query Classification Engine",
      "Semantic Vector Search",
      "LangChain + OpenAI GPT",
      "ChromaDB",
      "Streamlit UI",
      "CLI Session Memory",
      "Synthetic Data Generation"
    ],
    medias: [
      {
        "name": "Linkedin Post + Demo",
        "url": "https://www.linkedin.com/posts/shashwat-mahalanobis_ai-openai-gpt4-activity-7369080016128618496-J3Wf?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcHZtIBk91LLXHPfVkhqvYGVBAvM8Nu7SE",
        "media": null
      },
      {
        "name": "GitHub",
        "url": "https://lnkd.in/dnavHWaN",
        "media": null
      }
    ]
  },
  {
    title: "Stormee AI",
    description: 'Get validation & competitor insights in minutes',
    webURL: 'https://www.stormee.app/',
    logo: stormee,
    skills: ["AI Workflows", "Prompt Engineering", "UI/UX Design Thinking", "State Management", "DB + Auth"],
    medias: [
      {
        "name": "Launch Video",
        "url": "https://youtu.be/Xvx7qHtPKQM?si: mrImzsRbopEISCqE",
        "media": null
      },
      {
        "name": "ProductHunt",
        "url": "https://www.producthunt.com/posts/stormee-ai?utm_source: other&utm_medium: social",
        "media": null
      }
    ]
  },
  {
    title: "YouTube Books",
    description: 'Never miss a video offline with YouTube Books',
    webURL: 'https://yt2doc.streamlit.app/',
    logo: youtube,
    skills: ["Multi-agent pipelines", "API-powered content processing", "Modular Agentic Architecture", "Memory Optimization", "Performance Optimization", "Educational Value"],
    medias: [
      {
        "name": "GitHub Repo",
        "url": "https://github.com/ShashwatM3/youtube-to-pdf",
        "media": null
      },
    ]
  },  
  {
    "title": "Deep Research Automation",
    "description": "AI agents that scrape, analyze, and write research reports for you",
    "webURL": "https://github.com/ShashwatM3/aira-deep-research",
    "logo": detective,
    "skills": [
      "Multi-Agent Orchestration",
      "OpenAI Agents SDK",
      "SerpAPI Search Integration",
      "Web Scraping & Parsing",
      "Structured IO",
      "Rich CLI",
      "Markdown-to-HTML Export",
      "Async Workflow Execution",
    ],
    "medias": [
      {
        "name": "GitHub",
        "url": "https://github.com/ShashwatM3/aira-deep-research",
        "media": null
      },
      {
        "name": "Linkedin Post + Demo",
        "url": "https://www.linkedin.com/posts/shashwat-mahalanobis_i-reverse-engineered-chatgpts-deep-research-activity-7347885348879831040-Uv9t?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcHZtIBk91LLXHPfVkhqvYGVBAvM8Nu7SE",
        "media": null
      }
    ]
  }
]

export default projects