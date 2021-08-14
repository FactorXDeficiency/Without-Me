const { Plugin } = require('powercord/entities');
window.wome = new Audio('https://v3-fastupload.s3-accelerate.amazonaws.com/1628893125-Eminem%20Without%20Me%20Official%20Music%20Video.mp3?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASQBHBZCRVR4NVFHK%2F20210813%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20210813T221950Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=3253380da9640908c14ddc48a02d632395733458aa44ab6e65bed9c96dfadff6');
const Settings = require('./Settings');

module.exports = class song extends Plugin {
	updateVolume() {
		window.wome.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		window.wome.pause();
		window.wome.loop = true;
		window.wome.volume = this.settings.get('volume', 1);
		window.wome.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Without Me',
			render: Settings,
		});
	}

	pluginWillUnload() {
		window.wome.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};
