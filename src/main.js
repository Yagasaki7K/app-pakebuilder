const platformOptions = ['All', 'Windows', 'Linux', 'macOS'];
const state = { apps: [], metadata: [], query: '', platform: 'All' };

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function filteredApps() {
  return state.apps.filter((app) => {
    const haystack = [app.name, app.description, app.sourceUrl].filter(Boolean).join(' ').toLowerCase();
    const matchesQuery = haystack.includes(state.query.toLowerCase());
    const matchesPlatform = state.platform === 'All' || app.platforms.includes(state.platform);
    return matchesQuery && matchesPlatform;
  });
}

function renderCards(apps) {
  if (!apps.length) {
    return `<div class="empty"><h3>No generated installers found yet.</h3><p>Run an application workflow to populate <code>/projects</code>. The SPA will automatically discover new .msi, .deb, .dmg, and .app outputs.</p></div>`;
  }
  return `<div class="cards">${apps.map((app) => `<article class="app-card"><div class="app-top"><div class="icon">${app.icon ? `<img src="${escapeHtml(app.icon)}" alt=""/>` : initials(app.name)}</div><div><h3>${escapeHtml(app.name)}</h3><p>${escapeHtml(app.description)}</p></div></div><div class="badges">${app.platforms.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div><div class="downloads">${app.downloads.map((download) => `<a href="${download.href}" download><span aria-hidden="true">⬇</span>${escapeHtml(download.label)}</a>`).join('')}</div>${app.sourceUrl ? `<a class="source" href="${escapeHtml(app.sourceUrl)}" target="_blank" rel="noreferrer">Open source website</a>` : ''}</article>`).join('')}</div>`;
}

function render() {
  document.querySelector('#root').innerHTML = `<header class="hero" id="home"><nav class="nav" aria-label="Primary navigation"><a href="#home" class="brand"><span>PH</span>Pake Hub</a><div class="nav-links"><a href="#catalog">Catalog</a><a href="#about">About</a><a href="#contribute">Contribute</a></div></nav><section class="hero-grid"><div><p class="eyebrow"><span aria-hidden="true">✦</span> Automated Pake builds</p><h1>Installable desktop wrappers for the web apps you already use.</h1><p class="hero-copy">Pake Application Hub, created and maintained by <strong>Yagasaki7K</strong>, automates Pake builds through GitHub Actions and publishes generated installers for Windows, Linux, and macOS.</p><div class="hero-actions"><a class="button primary" href="#catalog"><span aria-hidden="true">⬇</span> Browse downloads</a><a class="button secondary" href="#contribute"><span aria-hidden="true">◆</span> Request an app</a></div></div><aside class="stat-card" aria-label="Project statistics"><strong>${state.apps.length}</strong><span>applications discovered from /projects</span><strong>${state.apps.reduce((total, app) => total + app.downloads.length, 0)}</strong><span>installer artifacts available</span><strong>${state.metadata.length}</strong><span>workflow-backed applications documented</span></aside></section></header><main><section class="section" id="catalog"><div class="section-heading"><p class="eyebrow"><span aria-hidden="true">⬇</span> Application catalog</p><h2>Available downloads</h2><p>The catalog is generated from files found in <code>/projects</code>. Matching installers such as Discord.msi, Discord.deb, Discord.dmg, and Discord.app are grouped into one application card.</p></div><div class="toolbar"><label class="search"><span aria-hidden="true">⌕</span><input id="search-input" value="${escapeHtml(state.query)}" placeholder="Search applications"/></label><div class="filters">${platformOptions.map((item) => `<button data-platform="${item}" class="${state.platform === item ? 'active' : ''}">${item}</button>`).join('')}</div></div><div id="catalog-results">${renderCards(filteredApps())}</div></section><section class="section split" id="about"><div><p class="eyebrow"><span aria-hidden="true">i</span> Project information</p><h2>What this project is</h2><p>This repository is a Pake Application Hub. It keeps one workflow per application, builds desktop installers on native GitHub-hosted runners, stores temporary files in <code>/artifacts</code>, and publishes final installer outputs from <code>/projects</code>.</p></div><div class="panel"><h3>How it works</h3><ol><li>A workflow wraps a hardcoded public application URL with Pake.</li><li>Windows, Linux, and macOS jobs create platform-specific installers.</li><li>Validation confirms required outputs before release publication.</li><li>The frontend reads generated artifacts and turns them into download cards.</li></ol></div></section><section class="section split" id="contribute"><div><p class="eyebrow"><span aria-hidden="true">☷</span> How to Request a New Application</p><h2>Open a Pull Request</h2><p>Fork the repository, create a new workflow named <code>build-application-name.yaml</code>, hardcode the verified public URL in that workflow, and open a Pull Request explaining the application and validation performed.</p></div><div class="panel"><h3>Examples</h3><ul><li><code>build-discord.yaml</code></li><li><code>build-chatgpt.yaml</code></li><li><code>build-spotify.yaml</code></li></ul><p>Use the same job architecture as the existing application workflows and keep comments in English.</p></div></section></main>`;
  document.querySelector('#search-input').addEventListener('input', (event) => { state.query = event.target.value; render(); });
  document.querySelectorAll('[data-platform]').forEach((button) => button.addEventListener('click', () => { state.platform = button.dataset.platform; render(); }));
}

Promise.all([fetch('/projects-manifest.json').then((r) => r.ok ? r.json() : { apps: [] }).catch(() => ({ apps: [] })), fetch('/applications.json').then((r) => r.json()).catch(() => [])]).then(([manifest, catalog]) => { state.apps = manifest.apps ?? []; state.metadata = catalog ?? []; render(); });
