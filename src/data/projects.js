export const projects = [
  {
    id: "seo-architecture-audit",
    title: "E-Commerce Technical SEO & Core Web Vitals Overhaul",
    category: "SEO",
    summary: "Systematic crawl audit, canonical alignment, and page-speed remediation for an international catalog.",
    image: "./images/projects/project-01.jpg",
    challenge: "The client suffered from severe index bloat, fragmented faceted navigation tags, and failing Core Web Vitals (LCP > 4.2s), limiting non-branded organic reach.",
    solution: "Re-engineered robots indexing parameters, injected JSON-LD schema across 1,200+ product categories, fixed redirect chains, and optimized asset delivery.",
    technologies: ["Google Search Console", "Screaming Frog", "Schema.org", "WordPress", "PageSpeed Insights"],
    results: [
      "Indexed URLs streamlined, eliminating 45% duplicate crawl budget waste",
      "All primary templates achieved Core Web Vitals 'Good' status (LCP < 2.1s)",
      "Zero manual indexing errors in Google Search Console after 30-day monitoring"
    ],
    strategy: "Audit crawling bottlenecks first, fix canonicalization, implement high-intent structured data, then address asset bottlenecks in order of rendering priority.",
    implementation: "Ran headless crawls, corrected noindex directives, consolidated thin faceted URLs, and set up automated weekly Search Console API monitoring scripts.",
    liveUrl: "",
    caseStudyUrl: "#",
    downloads: [
      {
        title: "Technical SEO Audit Framework (Sample)",
        file: "./downloads/seo-audit-sample.pdf",
        type: "PDF"
      }
    ]
  },
  {
    id: "n8n-lead-enrichment-pipeline",
    title: "Automated AI Lead Triage & CRM Dispatch System",
    category: "AI Automation",
    summary: "Event-driven n8n workflow connecting incoming web inquiries to Claude 3.5 Sonnet for scoring and instant CRM sync.",
    image: "./images/projects/project-02.jpg",
    challenge: "Inbound leads sat untouched for up to 14 hours during off-peak periods, resulting in dropped conversion rates and manual data entry errors.",
    solution: "Constructed a multi-node n8n workflow triggered via webhooks that scrapes lead domains, queries LLM evaluation prompts for qualification, and alerts sales via Slack.",
    technologies: ["n8n", "OpenAI / Claude API", "Webhooks", "PostgreSQL", "Slack API"],
    results: [
      "Response lag decreased from hours to under 45 seconds",
      "100% automated lead scoring accuracy based on predefined qualification matrix",
      "Zero missed lead alerts across multi-timezone operations"
    ],
    strategy: "Isolate webhook triggers, sanitize inputs, execute deterministic LLM validation with strict JSON schemas, and pipe validated outputs to CRM endpoints with retry fallbacks.",
    implementation: "Designed self-hosted n8n workflows with fallback error queues and encrypted credential vaults.",
    liveUrl: "",
    caseStudyUrl: "#",
    downloads: []
  },
  {
    id: "meta-capi-performance-funnel",
    title: "Meta CAPI Infrastructure & High-ROAS Scaling Framework",
    category: "Meta Ads",
    summary: "Server-side event tracking, dynamic product catalogs, and systematic creative testing structure.",
    image: "./images/projects/project-03.jpg",
    challenge: "Severe signal loss following browser privacy updates caused under-reporting in Meta Events Manager and inaccurate attribution data.",
    solution: "Deployed Meta Conversions API via server-side GTM, deduplicated pixel events with 9.2+ Event Match Quality, and introduced a structured creative testing matrix.",
    technologies: ["Meta Ads Manager", "Meta CAPI", "Google Tag Manager (Server-Side)", "WooCommerce"],
    results: [
      "Event Match Quality elevated from 5.4 to 9.2 in Meta Events Manager",
      "Full attribution visibility recovered across high-ticket purchase paths",
      "Structured creative iteration framework deployed for monthly testing"
    ],
    strategy: "Establish unified browser/server deduplication, define granular conversion funnels, and test single-variable creative variations iteratively.",
    implementation: "Configured custom headers, hashed user parameters securely per GDPR compliance, and synced real-time transaction webhooks.",
    liveUrl: "",
    caseStudyUrl: "#",
    downloads: []
  }
];
