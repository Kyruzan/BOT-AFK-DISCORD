<h1 align="center">🎧 Discord AFK Voice Bot</h1>

<p align="center">
  <b>Keep a specific voice channel always active.</b><br>
  Simple. Silent. Always online.
</p>

<hr/>

<h2>🚀 What is this?</h2>
<p>
This bot automatically joins a <b>specific Discord voice channel</b> and stays there permanently in <b>AFK mode</b>.
It does not speak, does not listen, and does not require commands.
</p>

<p>
Perfect for:
<ul>
  <li>Keeping a voice channel alive</li>
  <li>Preventing auto-close / inactivity</li>
  <li>AFK presence bots</li>
</ul>
</p>

<hr/>

<h2>📦 Requirements</h2>
<ul>
  <li><b>Node.js 18+</b></li>
  <li>A Discord Bot Token</li>
  <li>Bot permission to <b>Connect</b> to the voice channel</li>
</ul>

<hr/>

<h2>⚙️ Installation</h2>

<ol>
  <li>Clone or download this repository</li>
  <li>Install dependencies:</li>
</ol>

<pre><code>npm install</code></pre>

<hr/>

<h2>🔐 Environment Configuration</h2>
<p>Create a <code>.env</code> file in the root directory:</p>

<pre><code>TOKEN=YOUR_BOT_TOKEN
GUILD_ID=YOUR_GUILD_ID
VOICE_CHANNEL_ID=YOUR_VOICE_CHANNEL_ID</code></pre>

<p><b>⚠️ Never share your bot token publicly.</b></p>

<hr/>

<h2>▶️ Run the Bot</h2>

<pre><code>node index.js</code></pre>

<p>If everything is configured correctly, the bot will:</p>
<ul>
  <li>Come online</li>
  <li>Join the selected voice channel</li>
  <li>Stay muted & deafened (AFK mode)</li>
</ul>

<hr/>

<h2>🛡️ Run 24/7 with PM2 (Recommended)</h2>
<p>PM2 keeps the bot alive even if it crashes or the terminal is closed.</p>

<pre><code>npm install -g pm2
pm2 start index.js --name afkbot
pm2 startup
pm2 save</code></pre>

<p>After this setup:</p>
<ul>
  <li>Bot restarts automatically</li>
  <li>Bot starts on system boot</li>
  <li>Voice channel stays active permanently</li>
</ul>

<hr/>

<h2>📌 Notes</h2>
<ul>
  <li>This bot is intentionally minimal</li>
  <li>No commands, no message handling</li>
  <li>Designed for stability and simplicity</li>
</ul>

<hr/>

<h2>📜 License</h2>
<p>Free to use, modify, and improve.</p>

<p align="center">🗿 <i>Set it once, forget it forever.</i></p>
