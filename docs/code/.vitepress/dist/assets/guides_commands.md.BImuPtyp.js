import{_ as e,c as s,a0 as t,o as i}from"./chunks/framework.p2VkXzrt.js";const u=JSON.parse('{"title":"Commands Overview 🚀","description":"","frontmatter":{},"headers":[],"relativePath":"guides/commands.md","filePath":"guides/commands.md"}'),n={name:"guides/commands.md"};function l(o,a,p,r,d,h){return i(),s("div",null,a[0]||(a[0]=[t(`<h1 id="commands-overview-🚀" tabindex="-1">Commands Overview 🚀 <a class="header-anchor" href="#commands-overview-🚀" aria-label="Permalink to &quot;Commands Overview 🚀&quot;">​</a></h1><p>Rustic provides a simple, yet powerful CLI to manage your static site. This guide outlines all available commands to help you get the most out of Rustic.</p><hr><h2 id="_1-init" tabindex="-1"><strong>1. <code>init</code></strong> <a class="header-anchor" href="#_1-init" aria-label="Permalink to &quot;**1. \`init\`**&quot;">​</a></h2><p><strong>Description</strong>: Initializes a new Rustic site in the current directory.</p><h3 id="usage" tabindex="-1">Usage: <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rustic init</span></span></code></pre></div><h3 id="what-it-does" tabindex="-1">What It Does: <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What It Does:&quot;">​</a></h3><ul><li><p>Creates the following site structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>your-site/</span></span>
<span class="line"><span>├── static/</span></span>
<span class="line"><span>├── output/</span></span>
<span class="line"><span>├── themes/</span></span>
<span class="line"><span>│   └── dark.css</span></span>
<span class="line"><span>│   └── light.css</span></span>
<span class="line"><span>├── content/</span></span>
<span class="line"><span>│   └── index.md</span></span>
<span class="line"><span>│   └── meta.yaml</span></span>
<span class="line"><span>├── templates/default/</span></span>
<span class="line"><span>│   └── base.html</span></span>
<span class="line"><span>└── rustic.config.json</span></span></code></pre></div></li><li><p><strong>content/</strong>: Stores your Markdown content and <code>meta.yaml</code>.</p></li><li><p><strong>themes/</strong>: Contains built-in and custom themes.</p></li><li><p><strong>static/</strong>: Holds static assets like images and styles.</p></li><li><p><strong>templates/</strong>: Contains HTML templates for your site.</p></li><li><p><strong>rustic.config.json</strong>: Configuration file for site-wide settings like the title and theme.</p></li></ul><hr><h2 id="_2-build" tabindex="-1"><strong>2. <code>build</code></strong> <a class="header-anchor" href="#_2-build" aria-label="Permalink to &quot;**2. \`build\`**&quot;">​</a></h2><p><strong>Description</strong>: Builds your static site from the content and templates.</p><h3 id="usage-1" tabindex="-1">Usage: <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rustic build</span></span></code></pre></div><h3 id="what-it-does-1" tabindex="-1">What It Does: <a class="header-anchor" href="#what-it-does-1" aria-label="Permalink to &quot;What It Does:&quot;">​</a></h3><ul><li>Reads the Markdown files from the <code>content/</code> directory.</li><li>Converts them into HTML using templates from the <code>templates/</code> directory.</li><li>Outputs the resulting files to the <code>output/</code> directory.</li></ul><h3 id="generated-structure" tabindex="-1">Generated structure: <a class="header-anchor" href="#generated-structure" aria-label="Permalink to &quot;Generated structure:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>output/</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>└── static/</span></span></code></pre></div><hr><h2 id="_3-serve" tabindex="-1"><strong>3. <code>serve</code></strong> <a class="header-anchor" href="#_3-serve" aria-label="Permalink to &quot;**3. \`serve\`**&quot;">​</a></h2><p><strong>Description</strong>: Starts a local development server with live-reload functionality.</p><h3 id="usage-2" tabindex="-1">Usage: <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rustic serve</span></span></code></pre></div><h3 id="what-it-does-2" tabindex="-1">What It Does: <a class="header-anchor" href="#what-it-does-2" aria-label="Permalink to &quot;What It Does:&quot;">​</a></h3><ul><li>Serves the site from the <code>output/</code> directory at <code>http://localhost:8080</code>.</li><li>Watches the <code>content/</code> directory for changes and automatically rebuilds the site.</li><li>Reloads the browser when changes are detected.</li></ul><h3 id="example-output" tabindex="-1">Example Output: <a class="header-anchor" href="#example-output" aria-label="Permalink to &quot;Example Output:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Server running at http://localhost:8080</span></span>
<span class="line"><span>Use Ctrl+C to stop the server</span></span></code></pre></div><hr><h2 id="_4-clean" tabindex="-1"><strong>4. <code>clean</code></strong> <a class="header-anchor" href="#_4-clean" aria-label="Permalink to &quot;**4. \`clean\`**&quot;">​</a></h2><p><strong>Description</strong>: Removes the <code>output/</code> directory.</p><h3 id="usage-3" tabindex="-1">Usage: <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rustic clean</span></span></code></pre></div><h3 id="what-it-does-3" tabindex="-1">What It Does: <a class="header-anchor" href="#what-it-does-3" aria-label="Permalink to &quot;What It Does:&quot;">​</a></h3><ul><li>Deletes the entire <code>output/</code> directory to provide a clean slate for the next build.</li></ul><hr><h2 id="_5-help" tabindex="-1"><strong>5. <code>help</code></strong> <a class="header-anchor" href="#_5-help" aria-label="Permalink to &quot;**5. \`help\`**&quot;">​</a></h2><p><strong>Description</strong>: Displays a list of available commands or detailed information about a specific command.</p><h3 id="usage-4" tabindex="-1">Usage: <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span></code></pre></div><p>Or for specific command help:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>Output:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Usage: rustic build</span></span>
<span class="line"><span>Description: Builds your static site from content and templates.</span></span></code></pre></div><hr><p>Explore Rustic and unleash the power of static site generation! 🚀✨</p>`,47)]))}const g=e(n,[["render",l]]);export{u as __pageData,g as default};
