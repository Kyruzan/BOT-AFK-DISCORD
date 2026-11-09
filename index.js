const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const TOKEN = "";
const GUILD_ID = "1397898275754868786";
const VOICE_CHANNEL_ID = "1397898800781066280";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once("ready", () => {
  console.log(`Bot giriş yaptı: ${client.user.tag}`);

  const guild = client.guilds.cache.get(GUILD_ID);
  if (!guild) return console.log("Couldn't find the server");

  const channel = guild.channels.cache.get(VOICE_CHANNEL_ID);
  if (!channel) return console.log("Couldn't find the voice channel");

  joinVoiceChannel({
    channelId: channel.id,
    guildId: guild.id,
    adapterCreator: guild.voiceAdapterCreator,
    selfMute: true,
    selfDeaf: true
  });

  console.log("Bot is active and logged into voice channel 🗿");
});

client.login(TOKEN);
