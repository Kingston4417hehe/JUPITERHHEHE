const axios = require('axios');
const { MessageEmbed } = require('discord.js');

const { YOUTUBE_API_KEY } = process.env;

module.exports = {
	name: 'youtube',
	category: 'extra',
	run: async (client, message, args) => {
		if (!args[0]) {
			return message.channel.send('Kérlek addj meg egy youtube csatorna nevet');
		}

		const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics%2CcontentDetails%2CbrandingSettings%2Csnippet&id=${args[0]}&key=${YOUTUBE_API_KEY}`;

		let info;

		try {
			const { data } = await axios.get(url);
			[info] = data;
		} catch (e) {
			return message.channel.send('Nincs ilyen csatorna');
		}

		const embed = new MessageEmbed()
			.setTitle(info.brandingSettings.channel.title)
			.setThumbnail(info.snippet.thumbnails.default.url)
			.setColor(info.brandingSettings.channel.profileColor)
			.addFields(
				{
					name: 'Feliratkozó szám: ',
					value: info.statistics.hiddenSubsciberCount ? 'Feliratkozó szám el van rejtve!' : info.statistics.subscriberCount,
				},
				{
					name: 'Összes videó: ',
					value: info.statistics.videoCount,
					inline: true,
				},
				{
					name: 'Csatorna leírás: ',
					value: info.snippet.description,
				},
			);
		return message.channel.send(embed);
	},
};