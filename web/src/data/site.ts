const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: 'Eshkere Strategy',
  owner: 'Vadym Sulzhenko',
  lastUpdated: '16 August 2026',
  links: {
    home: `${base}/`,
    strategy: `${base}/strategy/`,
    githubProfile: 'https://github.com/VaigotakuTheScientist',
    githubRepository: 'https://github.com/VaigotakuTheScientist/eshkere-strategy',
  },
} as const;

export const priorities = [
  {
    title: 'Secure mission-aligned runway',
    description: 'Pursue employment, transition funding, and other mechanisms capable of removing the immediate financial bottleneck without derailing the AI-safety trajectory.',
  },
  {
    title: 'Build evidence of execution',
    description: 'Turn projects, operations work, events, field-building, and other activity into visible evidence that I can reliably make useful things happen.',
  },
  {
    title: 'Grow AI-safety career capital',
    description: 'Pursue unusually valuable learning, research, fellowship, networking, and project opportunities when their expected long-term value justifies the time.',
  },
  {
    title: 'Run bounded experiments',
    description: 'Test projects and funding or revenue models cheaply before committing large amounts of time.',
  },
] as const;

export const powerCategories = [
  {
    title: 'Capital',
    description: 'Money, runway, equipment, compute, workspace, mobility, and the ability to fund action.',
  },
  {
    title: 'Capabilities',
    description: 'Knowledge, skills, experience, judgment, credentials, and ability to execute.',
  },
  {
    title: 'Productivity',
    description: 'Usable time, energy, attention, health, tools, systems, and working conditions.',
  },
  {
    title: 'Influence',
    description: 'Relationships, reputation, trust, audience, organizational position, and ability to coordinate people and resources.',
  },
] as const;

export const acquisitionRoutes = [
  {
    title: 'Employment',
    description: 'AI-safety-aligned jobs, contracting, or consulting.',
  },
  {
    title: 'Career Transition Funding',
    description: 'Funding that buys runway for a strategically valuable career transition.',
  },
  {
    title: 'Project Funding',
    description: 'Grants or sponsorship for useful projects.',
  },
  {
    title: 'Fellowships, Internships, Residencies & Support',
    description: 'Programs that combine financial support with capability or career development.',
  },
  {
    title: 'Project Revenue & Donations',
    description: 'Resources generated through independently built projects, products, events, media, prizes, donations, or entrepreneurship.',
  },
] as const;

export const currentWork = [
  {
    title: 'Safe AI Sweden',
    status: 'Active / developing',
    tone: 'active',
    description: 'Building and testing ways to strengthen local capacity around safe and democratically governed AI in Sweden.',
  },
  {
    title: 'AI-safety field-building',
    status: 'Active / exploratory',
    tone: 'active',
    description: 'Community-building, ecosystem mapping, networking, and experiments intended to make AI-safety work easier to enter and coordinate.',
  },
  {
    title: 'Events & convenings',
    status: 'Active / experimental',
    tone: 'active',
    description: 'Exploring how events and structured convenings can connect people, surface bottlenecks, and generate useful collaborations.',
  },
  {
    title: 'AI-safety media',
    status: 'Exploratory',
    tone: 'exploratory',
    description: 'Considering media and content formats that could improve communication, field-building, or resource generation without becoming a large distraction.',
  },
] as const;

export const collaborationAsks = [
  {
    title: 'Mission-aligned roles',
    description: 'Especially generalist, operations, project, community, communications, and similar high-agency work.',
  },
  {
    title: 'Career-transition funding or programs',
    description: 'Opportunities that buy runway while increasing expected future AI-safety contribution.',
  },
  {
    title: 'Project collaborators or funders',
    description: 'Particularly for concrete field-building or coordination experiments.',
  },
  {
    title: 'Useful introductions',
    description: 'People or organizations where there is a specific reason we should talk.',
  },
] as const;

export const operatingLoop = [
  { title: 'Current state', description: 'Describe the resources, commitments, evidence, and constraints that exist now.' },
  { title: 'Bottlenecks', description: 'Identify the constraint whose removal would unlock the most useful progress.' },
  { title: 'Strategies', description: 'Generate plausible ways to remove that constraint and increase long-term capacity.' },
  { title: 'Opportunities', description: 'Translate strategies into concrete roles, programs, projects, and funding routes.' },
  { title: 'Prioritization', description: 'Compare options by impact, tractability, cost, risk, learning, and option value.' },
  { title: 'Next actions', description: 'Choose the smallest specific actions that move the best options forward.' },
] as const;
