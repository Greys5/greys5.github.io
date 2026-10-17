const areas = {
  platform: {
    id: '01 / PLATFORM',
    title: 'Infrastructure should be repeatable.',
    copy: 'Terraform for the foundation. Kubernetes for workloads. Helm and Argo CD to keep delivery declarative. Less clicking around. More knowing what changed.',
    tech: 'AWS / Terraform / Kubernetes / Helm / Argo CD',
  },
  identity: {
    id: '02 / IDENTITY + SECURITY',
    title: 'Access should be explicit.',
    copy: 'Keycloak for identity. IAM for permissions. Least privilege as a starting point. I care about who can do what—and whether we can actually explain why.',
    tech: 'Keycloak / Terraform / IAM / Machine-to-machine access',
  },
  observe: {
    id: '03 / OBSERVABILITY',
    title: 'A green dashboard is not the whole story.',
    copy: 'Logs, metrics, and actual user flows. I want signals that help explain a problem, not alerts that just tell me something exists.',
    tech: 'Datadog / Keycloak events / Kubernetes / YugabyteDB',
  },
  create: {
    id: '04 / CREATIVE + LEARNING',
    title: 'Make the complicated thing tangible.',
    copy: 'Kubi for hands-on Kubernetes learning. Creative coding for visual and audio experiments. Same habit: pull something apart, connect the pieces, see what happens.',
    tech: 'Kubi / Browser simulations / Three.js / Web Audio',
  },
};

const nodes = document.querySelectorAll('[data-area]');
nodes.forEach((node) => {
  node.addEventListener('click', () => {
    const area = areas[node.dataset.area];
    nodes.forEach((item) => item.setAttribute('aria-pressed', String(item === node)));
    document.querySelector('#inspect-id').textContent = area.id;
    document.querySelector('#inspect-title').textContent = area.title;
    document.querySelector('#inspect-copy').textContent = area.copy;
    document.querySelector('#inspect-tech').textContent = area.tech;
  });
});

const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    let visible = 0;
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === filter)));
    projects.forEach((project) => {
      const matches = category === 'all' || project.dataset.categories.split(' ').includes(category);
      project.hidden = !matches;
      if (matches) visible += 1;
    });
    document.querySelector('.filter-count').textContent = `${visible} ${visible === 1 ? 'note' : 'notes'}`;
  });
});
